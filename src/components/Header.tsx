"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useBooking } from "@/lib/BookingContext";

function SparkleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 256 256" fill="currentColor" className="opacity-60">
      <path d="M197.58,129.06,146,110l-19-51.62a15.92,15.92,0,0,0-29.88,0L78,110l-51.62,19a15.92,15.92,0,0,0,0,29.88L78,178l19,51.62a15.92,15.92,0,0,0,29.88,0L146,178l51.62-19a15.92,15.92,0,0,0,0-29.88ZM137,164.22a8,8,0,0,0-4.74,4.74L112,223.85,91.78,169A8,8,0,0,0,87,164.22L32.15,144,87,123.78A8,8,0,0,0,91.78,119L112,64.15,132.22,119a8,8,0,0,0,4.74,4.74L191.85,144ZM144,40a8,8,0,0,1,8-8h16V16a8,8,0,0,1,16,0V32h16a8,8,0,0,1,0,16H184V64a8,8,0,0,1-16,0V48H152A8,8,0,0,1,144,40ZM248,88a8,8,0,0,1-8,8h-8v8a8,8,0,0,1-16,0V96h-8a8,8,0,0,1,0-16h8V72a8,8,0,0,1,16,0v8h8A8,8,0,0,1,248,88Z" />
    </svg>
  );
}

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "https://www.instagram.com/eric.le.tattoo/" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { open: openBooking } = useBooking();

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        className="fixed top-0 left-0 right-0 z-50 py-5"
        style={{ backdropFilter: "blur(12px)", backgroundColor: "rgba(0, 0, 0, 0.8)" }}
      >
        <div className="flex items-center justify-between max-w-[1680px] mx-auto px-5 md:px-10">
          {/* Logo */}
          <a href="#hero">
            <Image src="/images/logo-eric.png" alt="Eric Le Tattoo" width={48} height={40} />
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-8">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} className="text-[15px] text-white hover:text-white/65 transition-colors font-[family-name:var(--font-satoshi)]">
                  {link.label}
                </a>
              ))}
            </nav>
            <button
              onClick={openBooking}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-[15px] text-white hover:brightness-110 transition-all font-[family-name:var(--font-satoshi)] cursor-pointer"
              style={{
                border: "1px solid rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(5px)",
                background: "linear-gradient(180deg, rgb(13, 13, 13) -74%, rgba(255, 255, 255, 0.1) 183%)",
                boxShadow: "rgba(0, 0, 0, 0.68) 0px -0.48px 0.48px -1.25px inset, rgba(0, 0, 0, 0.6) 0px -1.83px 1.83px -2.5px inset, rgba(0, 0, 0, 0.24) 0px -8px 8px -3.75px inset",
              }}
            >
              <SparkleIcon />
              Book Now
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex md:hidden items-center justify-center w-[48px] h-[48px] rounded-[12px]"
            style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
            aria-label="Menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
              <line x1="4" y1="7" x2="20" y2="7" />
              <line x1="4" y1="17" x2="20" y2="17" />
            </svg>
          </button>
        </div>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-black flex flex-col md:hidden"
          >
            {/* Top bar */}
            <div className="flex items-center justify-between px-5 py-5">
              <a href="#hero" onClick={() => setMenuOpen(false)}>
                <Image src="/images/logo-eric.png" alt="Eric Le Tattoo" width={48} height={40} />
              </a>
              <button
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center w-[48px] h-[48px] rounded-[12px]"
                style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
                aria-label="Close menu"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="18" y1="6" x2="6" y2="18" />
                </svg>
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex flex-col gap-2 px-5 pt-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="text-[24px] text-white py-6 border-b border-white/5 font-[family-name:var(--font-satoshi)]"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            {/* Book Now button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.25 }}
              className="px-5 pt-8"
            >
              <button
                onClick={() => { setMenuOpen(false); openBooking(); }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-[15px] text-white font-[family-name:var(--font-satoshi)] cursor-pointer"
                style={{
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  background: "linear-gradient(180deg, rgb(13, 13, 13) -74%, rgba(255, 255, 255, 0.1) 183%)",
                  boxShadow: "rgba(0, 0, 0, 0.68) 0px -0.48px 0.48px -1.25px inset, rgba(0, 0, 0, 0.6) 0px -1.83px 1.83px -2.5px inset, rgba(0, 0, 0, 0.24) 0px -8px 8px -3.75px inset",
                }}
              >
                <SparkleIcon />
                Book Now
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
