"use client";

import Navbar from "@/components/Navbar";
import "../styles/globals.css";
import { Poppins } from "next/font/google";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";
// Import styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavbarProvider } from "@/contexts/navbarContext";
// aos
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const poppins = Poppins({
  weight: ["400", "600", "700", "800"],
  subsets: ["latin-ext"],
  preload: true,
});

export const metadata = {
  title: "agri4.0 | We innovate for agriculture",
  description: "We innovate for agriculture",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <html lang="en">
      <body className={`${poppins.className} container max-w-3xl`}>
        <NavbarProvider>
          <Navbar />
          {children}
          <Footer />
        </NavbarProvider>
      </body>
    </html>
  );
}
