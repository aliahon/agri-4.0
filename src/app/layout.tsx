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
import { useEffect, useState } from "react";
import CookiesMiddleware from "@/components/CookiesMiddleware";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
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

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <html lang="en">
      <body className={`${poppins.className} w-full mx-auto max-w-[2000px]`}>
        <NavbarProvider>
          <Navbar />
          {children}
          <button
            className="fixed z-50 flex items-center justify-center w-12 h-12 text-white transition-all duration-300 ease-in-out border-2 rounded-full shadow-lg border-white/40 bottom-4 right-4 bg-primary hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-opacity-75 hover:scale-110 "
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{ opacity: visible ? "1" : "0" }}
          >
            <span className="sr-only">Scroll to top</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              ></path>
            </svg>
          </button>
          {/* Cookies */}
          <CookiesMiddleware />
          <Footer />
        </NavbarProvider>
      </body>
    </html>
  );
}
