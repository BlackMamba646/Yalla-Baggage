import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yalla Baggage - Dubai's Premier Luggage Concierge",
  description: "Seamless luggage pickup, storage, and delivery in the UAE. Explore Dubai hands-free from just 29 AED/day.",
  openGraph: {
    title: "Yalla Baggage | Hands-Free Travel in Dubai",
    description: "Your bags handled safely, starting from just AED 29/day. We pick up, store, and deliver your luggage anywhere in the UAE.",
    siteName: "Yalla Baggage",
    images: [
      {
        url: "/yalla-form-image.png",
        width: 1200,
        height: 630,
        alt: "Yalla Baggage Service Illustration",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yalla Baggage",
    description: "Seamless luggage pickup, storage, and delivery in the UAE.",
    images: ["/yalla-form-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
