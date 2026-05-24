import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Future Living Prototype",
  description: "What would your future life feel like?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preload" href="/images/opening-house.png" as="image" />
      </head>
      <body className="h-full">{children}</body>
    </html>
  );
}
