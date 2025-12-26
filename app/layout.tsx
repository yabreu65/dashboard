import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Analytics Pro - Dashboard SaaS",
  description: "Professional analytics dashboard built with Next.js, Tailwind CSS and Framer Motion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
