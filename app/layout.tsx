import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JHK Properties | Property Management & Resident Support",
  description: "Dependable property management for owners, with leasing, property oversight, resident care, payment guidance, and maintenance support.",
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
      <body>
        {children}
        <script
          data-goatcounter="https://jhkproperties.goatcounter.com/count"
          async
          src="https://gc.zgo.at/count.js"
        />
      </body>
    </html>
  );
}
