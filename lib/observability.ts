type LogLevel = "info" | "warn" | "error";
type AlertSeverity = "warning" | "critical";

type LogEvent = {
  level: LogLevel;
  event: string;
  message: string;
  context?: Record<string, unknown>;
};

function getTimestamp() {
  return new Date().toISOString();
}

function stringifyError(error: unknown) {
  if (error instanceof Error) {
    return {
      name: error.name,
      message: error.message,
      stack: error.stack,
    };
  }

  return {
    message: typeof error === "string" ? error : JSON.stringify(error),
  };
}

export function logEvent(input: LogEvent) {
  const payload = {
    timestamp: getTimestamp(),
    app: "news-feed-agent",
    env: process.env.NODE_ENV || "development",
    ...input,
  };

  const line = JSON.stringify(payload);

  if (input.level === "error") {
    console.error(line);
    return;
  }

  if (input.level === "warn") {
    console.warn(line);
    return;
  }

  console.log(line);
}

export function logError(event: string, message: string, error: unknown, context?: Record<string, unknown>) {
  logEvent({
    level: "error",
    event,
    message,
    context: {
      ...context,
      error: stringifyError(error),
    },
  });
}

function getAlertProvider() {
  const configured = process.env.OPS_ALERT_PROVIDER?.trim().toLowerCase();
  if (configured === "slack" || configured === "generic") {
    return configured;
  }

  const webhookUrl = process.env.OPS_ALERT_WEBHOOK_URL?.trim().toLowerCase() ?? "";
  if (webhookUrl.includes("hooks.slack.com")) {
    return "slack";
  }

  return "generic";
}

function buildSlackPayload(input: {
  event: string;
  severity: AlertSeverity;
  summary: string;
  context?: Record<string, unknown>;
}) {
  const color = input.severity === "critical" ? "#b91c1c" : "#d97706";
  const fields = Object.entries(input.context ?? {}).slice(0, 8).map(([key, value]) => ({
    type: "mrkdwn",
    text: `*${key}*\n${String(value)}`,
  }));

  return {
    text: `[${input.severity.toUpperCase()}] ${input.summary}`,
    attachments: [
      {
        color,
        blocks: [
          {
            type: "header",
            text: {
              type: "plain_text",
              text: `news-feed-agent ${input.severity}`,
            },
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: `*${input.summary}*\nEvent: \`${input.event}\``,
            },
          },
          ...(fields.length > 0
            ? [
                {
                  type: "section",
                  fields,
                },
              ]
            : []),
        ],
      },
    ],
  };
}

function buildGenericPayload(input: {
  event: string;
  severity: AlertSeverity;
  summary: string;
  context?: Record<string, unknown>;
}) {
  return {
    app: "news-feed-agent",
    environment: process.env.NODE_ENV || "development",
    timestamp: getTimestamp(),
    ...input,
  };
}

export async function notifyOpsAlert(input: {
  event: string;
  severity: AlertSeverity;
  summary: string;
  context?: Record<string, unknown>;
}) {
  const webhookUrl = process.env.OPS_ALERT_WEBHOOK_URL?.trim();

  if (!webhookUrl) {
    return false;
  }

  try {
    const provider = getAlertProvider();
    const body =
      provider === "slack"
        ? buildSlackPayload(input)
        : buildGenericPayload(input);

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      logEvent({
        level: "warn",
        event: "ops.alert.delivery_failed",
        message: "Ops alert webhook returned a non-success status",
        context: {
          status: response.status,
          statusText: response.statusText,
          alertEvent: input.event,
          provider,
        },
      });
      return false;
    }

    return true;
  } catch (error) {
    logError("ops.alert.delivery_error", "Ops alert webhook request failed", error, {
      alertEvent: input.event,
    });
    return false;
  }
}
