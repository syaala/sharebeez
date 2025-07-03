import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#5eead4' },
    { media: '(prefers-color-scheme: dark)', color: '#5eead4' },
  ],
};

export const metadata: Metadata = {
  title: {
    default: "Sharebeez - Buy Together. Save Together. Share Smarter.",
    template: "%s | Sharebeez"
  },
  description: "Empowering communities to lower costs by buying, selling, and sharing products and services — all in one place. Join thousands saving money through group purchases and resource sharing.",
  keywords: [
    "group buying",
    "community sharing",
    "bulk purchasing",
    "save money",
    "neighborhood",
    "resource sharing",
    "local community",
    "sustainable shopping",
    "collective buying",
    "community commerce"
  ],
  authors: [{ name: "Sharebeez Team" }],
  creator: "Sharebeez",
  publisher: "Sharebeez",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://sharebeez.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sharebeez.com',
    title: 'Sharebeez - Buy Together. Save Together. Share Smarter.',
    description: 'Empowering communities to lower costs by buying, selling, and sharing products and services — all in one place.',
    siteName: 'Sharebeez',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sharebeez - Community-powered commerce platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sharebeez - Buy Together. Save Together. Share Smarter.',
    description: 'Empowering communities to lower costs by buying, selling, and sharing products and services — all in one place.',
    images: ['/twitter-image.jpg'],
    creator: '@sharebeez',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
