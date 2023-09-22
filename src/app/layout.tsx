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
import CookiesMiddleware from "@/components/CookiesMiddleware";
import { useEffect } from "react";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin-ext"],
  preload: true,
});

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
      <body className={`${poppins.className} w-full mx-auto max-w-[2000px]`}>
        <NavbarProvider>
          <Navbar />
          {children}

          {/* Cookies */}
          <CookiesMiddleware />
          <Footer />
        </NavbarProvider>
      </body>
    </html>
  );
}
