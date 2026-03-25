"use client";

/* eslint-disable @next/next/no-img-element */

import { motion } from "@/lib/motion";

const clientLogos = [
  { src: "/images/client-logo-1.svg", alt: "Client 1" },
  { src: "/images/client-logo-2.svg", alt: "Client 2" },
  { src: "/images/client-logo-3.svg", alt: "Client 3" },
  { src: "/images/client-logo-4.svg", alt: "Client 4" },
  { src: "/images/client-logo-5.svg", alt: "Client 5" },
];

function MouseIcon() {
  return (
    <svg width="25" height="38" viewBox="0 0 256 256" fill="white" className="flex-shrink-0">
      <g>
        <path d="M200,80v96a56,56,0,0,1-56,56H112a56,56,0,0,1-56-56V80a56,56,0,0,1,56-56h32A56,56,0,0,1,200,80Z" opacity="0.2" />
        <path d="M144,16H112A64.07,64.07,0,0,0,48,80v96a64.07,64.07,0,0,0,64,64h32a64.07,64.07,0,0,0,64-64V80A64.07,64.07,0,0,0,144,16Zm48,160a48.05,48.05,0,0,1-48,48H112a48.05,48.05,0,0,1-48-48V80a48.05,48.05,0,0,1,48-48h32a48.05,48.05,0,0,1,48,48ZM136,64v48a8,8,0,0,1-16,0V64a8,8,0,0,1,16,0Z" />
      </g>
    </svg>
  );
}

function HeroButton({ href, children }: { href: string; children: string }) {
  return (
    <a href={href} className="relative block group">
      <div
        className="relative rounded-[10px] px-6 py-2 border border-white/[0.15] bg-black transition-shadow duration-300 group-hover:shadow-[rgba(255,255,255,0.08)_0px_1px_9px_0px] overflow-hidden"
      >
        {/* Top edge highlight */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[1px] bg-white/40" />
        {/* Subtle bottom inner glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40%] h-[6px] rounded-full opacity-30" style={{ background: "radial-gradient(50% 50%, rgb(180,180,180) 0%, transparent 100%)", filter: "blur(4px)" }} />
        <span className="relative z-10 text-[17px] text-white font-[family-name:var(--font-satoshi)]">{children}</span>
      </div>
    </a>
  );
}

const ease = [0.22, 1, 0.36, 1];

export default function Hero() {
  return (
    <section id="hero" className="relative h-[82vh] flex flex-col overflow-hidden">
      {/* Background effect layer - separate from content like reference */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0">
          <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] rounded-full bg-white/[0.04] blur-[100px]" />
          <div className="absolute top-[20%] right-[15%] w-[600px] h-[600px] rounded-full bg-white/[0.06] blur-[120px]" />
          <div className="absolute bottom-[10%] left-[30%] w-[400px] h-[400px] rounded-full bg-white/[0.03] blur-[80px]" />
          <div className="absolute bottom-[20%] right-[25%] w-[300px] h-[300px] rounded-full bg-white/[0.05] blur-[90px]" />
        </div>
        {/* Noise texture overlay like reference */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")", backgroundSize: "128px" }} />
        {/* Glowing vertical line */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-[45%] bg-gradient-to-t from-white/40 via-white/20 to-transparent" />
      </div>

      {/* Main content area - flex-1 to center in space above logos */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center">
        {/* Top content group */}
        <div className="flex flex-col items-center gap-6 text-center px-4 max-w-4xl mx-auto">
          {/* Badge - with glow dot and gradient sweep like reference */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="relative inline-flex items-center gap-2 px-4 py-2.5 rounded-[26px] bg-[rgba(10,10,10,0.4)] backdrop-blur-[68px] overflow-hidden"
          >
            {/* Gradient sweep overlay */}
            <div className="absolute inset-0 rounded-[26px]" style={{ background: "linear-gradient(105deg, rgba(255,255,255,0.08) -19%, transparent 20%)" }} />
            <span className="relative w-2 h-2 rounded-full bg-white" style={{ boxShadow: "rgb(189, 189, 189) 0px 0px 14px 1px" }} />
            <span className="relative text-[15px] text-white font-[family-name:var(--font-satoshi)]">Crafting Unique Brand Identities</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2.8, ease: "linear", delay: 0.5 }}
            className="text-5xl md:text-7xl lg:text-[92px] font-light leading-[1] tracking-[-0.02em] font-[family-name:var(--font-satoshi)]"
          >
            Branding that you
            <br />
            need Indeed
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2.8, ease: "linear", delay: 0.7 }}
            className="text-white/65 text-[15px] max-w-xl mx-auto leading-[1.5] tracking-[-0.3px] font-[family-name:var(--font-satoshi)]"
          >
            Elevate your brand with custom identity and package design. Showcase your story through bold visuals and strategic design solutions.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.95, ease: "linear", delay: 1.0 }}
            className="flex items-center justify-center gap-4"
          >
            <HeroButton href="https://framer.link/Z1h7gsj">Get Started Now</HeroButton>
            <HeroButton href="#projects">See Projects</HeroButton>
          </motion.div>
        </div>

        {/* Scroll indicator - separate from top content like reference */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex items-center gap-4 justify-center text-[15px] text-white/65 font-[family-name:var(--font-satoshi)] mt-[50px]"
        >
          <span>Scroll down</span>
          <div className="w-[185px] h-[1px] bg-white" />
          <MouseIcon />
          <div className="w-[185px] h-[1px] bg-white" />
          <span>to see projects</span>
        </motion.div>
      </main>

      {/* Client logos marquee - pinned to bottom of hero */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="relative z-10 w-full overflow-hidden py-2.5"
        style={{ maskImage: "linear-gradient(to right, transparent 0%, black 12.5%, black 87.5%, transparent 100%)" }}
      >
        <div className="flex animate-marquee-slow whitespace-nowrap gap-[100px]">
          {[...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos].map((logo, i) => (
            <div key={i} className="flex-shrink-0 flex items-center">
              <img src={logo.src} alt={logo.alt} className="h-5 w-auto" style={{ filter: "brightness(0) invert(1)" }} />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
