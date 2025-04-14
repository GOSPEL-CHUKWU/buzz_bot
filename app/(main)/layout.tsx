import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Buzz Bot | Crypto At Your Fingertips",
  description: "Welcome to Buzz Bot, your AI-powered guide to the latest in cryptocurrency, blockchain technology, and Web3 innovations. Ask questions, get analysis, and stay informed with real-time insights delivered through conversational AI.",
  openGraph: {
    title: "Buzz Bot",
    description:
      "Welcome to Buzz Bot, your AI-powered guide to the latest in cryptocurrency, blockchain technology, and Web3 innovations. Ask questions, get analysis, and stay informed with real-time insights delivered through conversational AI.",
    type: "website",
    url: "https://buzzbot.ai",
    images: [
      {
        url: "https://buzzbot.ai/assets/logo.svg",
        width: 1200,
        height: 630,
        alt: "Buzz Bot",
      },
    ],
  },
  applicationName: "Buzz Bot | Crypto At Your Fingertips",
  twitter: {
    card: "summary_large_image",
    site: "@buzzbot",
    title: "Buzz Bot",
    description:
      "Welcome to Buzz Bot, your AI-powered guide to the latest in cryptocurrency, blockchain technology, and Web3 innovations. Ask questions, get analysis, and stay informed with real-time insights delivered through conversational AI.",
    images: [
      {
        url: "https://buzzbot.ai/assets/logo.svg",
        width: 1200,
        height: 630,
        alt: "buzzbot.ai",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
