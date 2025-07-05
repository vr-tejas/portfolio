import type { Metadata } from "next";
import { Inter, Playfair_Display, Crimson_Text, Cormorant_Garamond, Libre_Baskerville, Merriweather, Fira_Code, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SocialNavbar from "@/components/SocialNavbar";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair-display",
});

const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-crimson-text",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant-garamond",
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-libre-baskerville",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-merriweather",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-fira-code",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "VR Tejas - Portfolio",
  description: "Full Stack Developer & UI/UX Designer",
  keywords: ["VR Tejas", "Portfolio", "Full Stack Developer", "UI/UX Designer", "React", "Next.js"],
  authors: [{ name: "VR Tejas" }],
  creator: "VR Tejas",
  publisher: "VR Tejas",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://vrtejas.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "VR Tejas - Portfolio",
    description: "Full Stack Developer & UI/UX Designer",
    url: "https://vrtejas.vercel.app",
    siteName: "VR Tejas Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VR Tejas - Portfolio",
    description: "Full Stack Developer & UI/UX Designer",
    creator: "@vrtejas",
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
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfairDisplay.variable} ${crimsonText.variable} ${cormorantGaramond.variable} ${libreBaskerville.variable} ${merriweather.variable} ${firaCode.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen bg-background text-foreground">
          <Navbar />
          <main className="relative">
            {children}
          </main>
          <SocialNavbar />
          <Footer />
        </div>
      </body>
    </html>
  );
}
