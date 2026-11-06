import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { siteContent } from "@/data/content";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: siteContent.meta.title,
    template: "%s | Ticketchai B2B Travel Portal",
  },
  description: siteContent.meta.description,
  keywords: siteContent.meta.keywords,
  authors: [{ name: "Ticketchai Technologies" }],
  creator: "Ticketchai",
  publisher: "Ticketchai Technologies Ltd.",
  metadataBase: new URL("https://ticketchai.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ticketchai.com",
    title: siteContent.meta.title,
    description: siteContent.meta.description,
    siteName: siteContent.meta.siteName,
  },
  twitter: {
    card: "summary_large_image",
    title: siteContent.meta.title,
    description: siteContent.meta.description,
    creator: "@ticketchai",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#F4F8F6] text-[#13131B] font-sans antialiased flex flex-col selection:bg-[#DCEDE3] selection:text-[#0F3E2C]">
        {children}
      </body>
    </html>
  );
}
