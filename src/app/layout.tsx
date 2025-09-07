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
  title: "Digital Loyalty Card",
  description: "Sistem loyalitas digital untuk coffee shop Indonesia. Kumpulkan poin setiap pembelian kopi dan dapatkan reward menarik. Mirip StampMe untuk coffee shop lokal.",
  keywords: "coffee loyalty card, digital loyalty, coffee shop, poin kopi, reward kopi, loyalty program, coffee indonesia",
  authors: [{ name: "Muhammad Rizky" }],
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Coffee Loyalty Card - Digital Loyalty untuk Coffee Shop",
    description: "Sistem loyalitas digital untuk coffee shop Indonesia. Kumpulkan poin setiap pembelian kopi dan dapatkan reward menarik.",
    url: "https://digital-loyalty-card.netlify.app",
    siteName: "Coffee Loyalty Card",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Coffee Loyalty Card System",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Coffee Loyalty Card - Digital Loyalty untuk Coffee Shop",
    description: "Sistem loyalitas digital untuk coffee shop Indonesia",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>☕</text></svg>" />
        <meta name="theme-color" content="#D97706" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
