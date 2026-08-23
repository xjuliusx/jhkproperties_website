import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JHK Properties | Tenant Resources & Payments",
  description: "Tenant payment information, maintenance guidance, and rental resources from JHK Properties.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
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
