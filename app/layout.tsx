import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Matlaus | Global Marketing Company",
  description:
    "Matlaus is a global marketing company serving ambitious brands across Europe, Asia, the Middle East, and high-opportunity markets.",
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
