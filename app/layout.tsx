import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "news-feed-agent",
  description: "A personalized news feed agent MVP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
