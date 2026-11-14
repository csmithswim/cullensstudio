import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cullen's Studio — Independent creative practice",
  description:
    "An independent creative studio shaping identities, digital places, and the details in between.",
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