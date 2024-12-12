"use client";

import { Footer } from "@/components/footer";
import { Head } from "@/components/header";
import localFont from "next/font/local";
import { usePathname } from "next/navigation";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname(); // Mengambil path saat ini

  // Path yang tidak membutuhkan footer
  const noFooterPaths = [
    "/dashboard",
    "/user",
    "/setor",
    "/tarik",
    "/konten",
    "/laporan",
  ];

  // Menentukan apakah footer perlu ditampilkan
  const showFooter = !noFooterPaths.includes(pathname);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Head />
        {children}
        {showFooter && <Footer />}
      </body>
    </html>
  );
}
