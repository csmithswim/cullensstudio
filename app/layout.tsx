import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cullen's Studio — Independent creative practice",
  description:
    "An independent creative studio shaping identities, digital places, and the details in between.",
  openGraph: {
    title: "Cullen's Studio — Independent creative practice",
    description:
      "An independent creative studio shaping identities, digital places, and the details in between.",
    images: [
      {
        url: "https://csmithswim.github.io/cullensstudio/pizza.jpg",
        alt: "A rectangular pizza cooling on a wire rack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://csmithswim.github.io/cullensstudio/pizza.jpg"],
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