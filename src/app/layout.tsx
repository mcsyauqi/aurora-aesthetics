import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Aurora Aesthetics | Klinik Kecantikan Premium Jakarta",
  description: "Klinik kecantikan terpercaya dengan dokter berpengalaman. Layanan facial, laser, botox, filler dengan hasil natural. Konsultasi GRATIS!",
  keywords: "klinik kecantikan jakarta, facial treatment, botox jakarta, filler jakarta, laser hair removal",
  authors: [{ name: "Aurora Aesthetics" }],
  creator: "Aurora Aesthetics",
  publisher: "Aurora Aesthetics",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://auroraesthetics.id"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Aurora Aesthetics | Klinik Kecantikan Premium Jakarta",
    description: "Klinik kecantikan terpercaya dengan dokter berpengalaman. Layanan facial, laser, botox, filler dengan hasil natural.",
    url: "https://auroraesthetics.id",
    siteName: "Aurora Aesthetics",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aurora Aesthetics | Klinik Kecantikan Premium Jakarta",
    description: "Klinik kecantikan terpercaya dengan dokter berpengalaman. Layanan facial, laser, botox, filler dengan hasil natural.",
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
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Lato:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="antialiased bg-background text-foreground"
        style={{ fontFamily: "'Lato', sans-serif" }}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
