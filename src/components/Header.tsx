"use client";

import Image from "next/image";
import { motion } from "@/lib/motion";

function SparkleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 256 256" fill="currentColor" className="opacity-60">
      <path d="M197.58,129.06,146,110l-19-51.62a15.92,15.92,0,0,0-29.88,0L78,110l-51.62,19a15.92,15.92,0,0,0,0,29.88L78,178l19,51.62a15.92,15.92,0,0,0,29.88,0L146,178l51.62-19a15.92,15.92,0,0,0,0-29.88ZM137,164.22a8,8,0,0,0-4.74,4.74L112,223.85,91.78,169A8,8,0,0,0,87,164.22L32.15,144,87,123.78A8,8,0,0,0,91.78,119L112,64.15,132.22,119a8,8,0,0,0,4.74,4.74L191.85,144ZM144,40a8,8,0,0,1,8-8h16V16a8,8,0,0,1,16,0V32h16a8,8,0,0,1,0,16H184V64a8,8,0,0,1-16,0V48H152A8,8,0,0,1,144,40ZM248,88a8,8,0,0,1-8,8h-8v8a8,8,0,0,1-16,0V96h-8a8,8,0,0,1,0-16h8V72a8,8,0,0,1,16,0v8h8A8,8,0,0,1,248,88Z" />
    </svg>
  );
}

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 py-5"
      style={{ backdropFilter: "blur(12px)", backgroundColor: "rgba(0, 0, 0, 0.8)" }}
    >
      <div className="flex items-center justify-between max-w-[1680px] mx-auto px-10">
      {/* Left – Logo */}
      <a href="#hero">
        <Image src="/images/logo-portfolite.svg" alt="Portfolite" width={160} height={28} />
      </a>

      {/* Right – Nav links + Get Template grouped together */}
      <div className="hidden md:flex items-center gap-8">
        <nav className="flex items-center gap-8">
          <a href="#services" className="text-[15px] text-white hover:text-white/65 transition-colors font-[family-name:var(--font-satoshi)]">
            Services
          </a>
          <a href="#projects" className="text-[15px] text-white hover:text-white/65 transition-colors font-[family-name:var(--font-satoshi)]">
            Projects
          </a>
          <a href="#testimonials" className="text-[15px] text-white hover:text-white/65 transition-colors font-[family-name:var(--font-satoshi)]">
            Testimonials
          </a>
          <a href="https://cal.com/rick/get-rick-rolled" className="text-[15px] text-white hover:text-white/65 transition-colors font-[family-name:var(--font-satoshi)]">
            Contact
          </a>
        </nav>

        <a
          href="https://framer.link/Z1h7gsj"
          className="flex items-center gap-2 px-5 py-2.5 rounded-full text-[15px] text-white hover:brightness-110 transition-all font-[family-name:var(--font-satoshi)]"
          style={{
            border: "1px solid rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(5px)",
            background: "linear-gradient(180deg, rgb(13, 13, 13) -74%, rgba(255, 255, 255, 0.1) 183%)",
            boxShadow: "rgba(0, 0, 0, 0.68) 0px -0.48px 0.48px -1.25px inset, rgba(0, 0, 0, 0.6) 0px -1.83px 1.83px -2.5px inset, rgba(0, 0, 0, 0.24) 0px -8px 8px -3.75px inset",
          }}
        >
          <SparkleIcon />
          Get Template
        </a>
      </div>
      </div>
    </motion.header>
  );
}
