import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { QuickContactFloat } from "@/components/whatsapp-float";

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
    default: "Henry Solutions | Low-Voltage Systems & Security Contractor Nairobi Kenya",
    template: "%s | Henry Solutions",
  },
  description:
    "Professional low-voltage contractor in Nairobi, Kenya. Expert DSTV installation, satellite TV, CCTV surveillance, electric fencing, smart home integration, equipment procurement, and 24/7 fault inspection across all 47 Kenyan counties and East Africa.",
  keywords: [
    "Henry Solutions",
    "low voltage technician Nairobi",
    "DSTV installation Kenya",
    "CCTV installers Nairobi",
    "electric fence installation Kenya",
    "satellite TV technician Nairobi",
    "smart home automation Kenya",
    "low voltage contractor Kenya",
    "DStv repair Nairobi",
    "fault inspection security systems",
  ],
  authors: [{ name: "Henry Solutions" }],
  creator: "Henry Solutions",
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://henrysolutions.co.ke",
    title: "Henry Solutions | Low-Voltage Systems & Security Contractor Nairobi Kenya",
    description:
      "Reliable low-voltage electrical contractor in Nairobi. DSTV, CCTV, electric fencing, satellite TV, smart home integration, and equipment procurement across Kenya and East Africa.",
    siteName: "Henry Solutions",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-sky-500/20 selection:text-sky-900 dark:selection:text-sky-200">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
        <QuickContactFloat />
      </body>
    </html>
  );
}
