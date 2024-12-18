import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/navigation/Header";

import { Poppins, Inter, DM_Sans } from 'next/font/google'
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/navigation/Footer";


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
})

const open_sans = DM_Sans({
  subsets: ['latin'],
  weight: [ "100" , "200", '300', '400', '500', '600', '700', '800', "900", "1000"],
  variable: '--font-open_sans',
})

const inter = Inter({
  subsets: ["greek", "latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: "VESTION - DIGITAL AND TRADITIONAL FINANCE",
  description: "THE FUTURE OF DIGITAL AND TRADITIONAL FINANCE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${inter.variable} ${open_sans.variable} antialiased bg-secondary text-white`}
      >
        <Header />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
