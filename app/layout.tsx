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
  title: {
    default: "Rek Comfort Systems – Komfort & Megbízható Megoldások",
    template: "%s | Rek Comfort Systems",
  },
  description: "Minőségi komfort rendszerek — Rek Comfort Systems. Megbízható megoldások otthonok és vállalkozások számára.",
  keywords: [
    "komfort rendszer",
    "rek comfort",
    "otthoni komfort",
    "klíma",
    "fűtés",
    "légtechnika",
    "hálózatépítés",
    "hőszivattyú", 
    "klímaszerelés", 
    "villanyszerelés", 
    "karbantartás"
  ],
  metadataBase: new URL("https://rek-comfort-system.vercel.app"),
  openGraph: {
    title: "Rek Comfort Systems – Komfort & Megbízható Megoldások",
    description: "Minőségi komfort rendszerek — Rek Comfort Systems. Megbízható megoldások otthonok és vállalkozások számára.",
    url: "https://rek-comfort-system.vercel.app",
    siteName: "Rek Comfort Systems",
    images: [
      {
        url: "https://rek-comfort-system.vercel.app/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "hu_HU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rek Comfort Systems – Komfort & Megbízható Megoldások",
    description: "Minőségi komfort rendszerek — Rek Comfort System. Megbízható megoldások otthonok és vállalkozások számára.",
    images: ["https://rek-comfort-system.vercel.app/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://rek-comfort-system.vercel.app",
  },
};

export default function RootLayout({ children, }: Readonly<{children: React.ReactNode;}>) {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Rek Comfort Systems",
    "image": "https://rek-comfort-system.vercel.app/og-image.png",
    "telephone": "+36203338912",
    "email": "rekcomfort@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Add your street here",
      "addressLocality": "Budapest",
      "postalCode": "1234",
      "addressCountry": "HU"
    },
    "url": "https://rek-comfort-system.vercel.app",
    "openingHours": "Mo-Fr 08:00-17:00, Sa 09:00-16:00, Su 24/7"
  };

  return (
    <html lang="en">
       <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
