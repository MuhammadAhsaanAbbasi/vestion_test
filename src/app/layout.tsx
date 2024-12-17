import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/navigation/Header";

import { Poppins, Inter, Open_Sans } from 'next/font/google'
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/navigation/Footer";


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
})

const open_sans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800',],
  variable: '--font-open_sans',
})

const inter = Inter({
  subsets: ["greek", "latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${inter.variable} ${open_sans.variable} antialiased bg-[#1D1D1D] text-white`}
      >
        <Header />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
