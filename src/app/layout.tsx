import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tomasz Szewczyk | Visit WWW",
  description: "Tomasz Szewczyk - Full-stack IT services, web development, business card websites and web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
