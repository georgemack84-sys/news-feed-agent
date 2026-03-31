type ClusterState = {
  id: string;
  fingerprint: string;
};

export function detectChangeStatus(previous: Record<string, string>, current: ClusterState[]) {
  return current.map((cluster) => {
    const priorFingerprint = previous[cluster.id];
    if (!priorFingerprint) {
      return { id: cluster.id, status: "new" as const };
    }

    if (priorFingerprint !== cluster.fingerprint) {
      return { id: cluster.id, status: "updated" as const };
    }

    return { id: cluster.id, status: "unchanged" as const };
  });
}
