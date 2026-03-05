"use client";

import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 lg:px-20 py-5">
      <a href="#hero" className="flex items-center gap-2">
        <Image src="/images/logo-portfolite.svg" alt="Portfolite" width={160} height={28} />
      </a>

      <nav className="hidden md:flex items-center gap-8">
        <a href="#services" className="text-sm text-white/65 hover:text-white transition-colors font-[family-name:var(--font-satoshi)]">
          Services
        </a>
        <a href="#projects" className="text-sm text-white/65 hover:text-white transition-colors font-[family-name:var(--font-satoshi)]">
          Projects
        </a>
        <a href="#testimonials" className="text-sm text-white/65 hover:text-white transition-colors font-[family-name:var(--font-satoshi)]">
          Testimonials
        </a>
        <a href="https://cal.com/rick/get-rick-rolled" className="text-sm text-white/65 hover:text-white transition-colors font-[family-name:var(--font-satoshi)]">
          Contact
        </a>
      </nav>

      <a
        href="https://framer.link/Z1h7gsj"
        className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 text-sm text-white hover:bg-white/10 transition-colors font-[family-name:var(--font-satoshi)]"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
        Get Template
      </a>
    </header>
  );
}
