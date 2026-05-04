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
  title: "CIT Learning | Karachi, Pakistan",
  description: "Certificate in Information Technology - free learning platform for students in karachi, pakistan",
  icons: {icon: "/favicon.ico"},
  keywords: ["CIT", "Karachi", "IT Course", "Free Learning", "MS Office", "Web Development"],
  authors: [{ name: "Zayyan Sheikh"}],
  openGraph: {
    title: "CIT Learning | Karachi",
    description: "Master IT Skills from basic to advanced",
    images: [{url: "/og-image.jpg"}],
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
