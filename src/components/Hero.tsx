"use client";

/* eslint-disable @next/next/no-img-element */

const clientLogos = [
  { src: "/images/client-logo-1.svg", alt: "Client 1" },
  { src: "/images/client-logo-2.svg", alt: "Client 2" },
  { src: "/images/client-logo-3.svg", alt: "Client 3" },
  { src: "/images/client-logo-4.svg", alt: "Client 4" },
  { src: "/images/client-logo-5.svg", alt: "Client 5" },
];

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Smoke background effect */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0">
          <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] rounded-full bg-white/[0.04] blur-[100px]" />
          <div className="absolute top-[20%] right-[15%] w-[600px] h-[600px] rounded-full bg-white/[0.06] blur-[120px]" />
          <div className="absolute bottom-[10%] left-[30%] w-[400px] h-[400px] rounded-full bg-white/[0.03] blur-[80px]" />
          <div className="absolute bottom-[20%] right-[25%] w-[300px] h-[300px] rounded-full bg-white/[0.05] blur-[90px]" />
        </div>
        {/* Glowing vertical line */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-[45%] bg-gradient-to-t from-white/40 via-white/20 to-transparent" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-white" />
          <span className="text-sm text-white/80 font-[family-name:var(--font-satoshi)]">Crafting Unique Brand Identities</span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-[84px] font-medium leading-[1.05] tracking-tight mb-6 font-[family-name:var(--font-inter-display)]">
          <span className="text-white">Branding</span>{" "}
          <span className="text-white/60">that you</span>
          <br />
          <span className="text-white/60">need</span>{" "}
          <span className="text-white">Indeed</span>
        </h1>

        {/* Subtitle */}
        <p className="text-white/45 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed font-[family-name:var(--font-satoshi)]">
          Elevate your brand with custom identity and package design. Showcase your story through bold visuals and strategic design solutions.
        </p>

        {/* CTAs */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <a
            href="https://framer.link/Z1h7gsj"
            className="px-7 py-3.5 bg-white text-black rounded-full text-sm font-medium hover:bg-white/90 transition-colors font-[family-name:var(--font-satoshi)]"
          >
            Get Started Now
          </a>
          <a
            href="#projects"
            className="px-7 py-3.5 bg-transparent border border-white/20 text-white rounded-full text-sm font-medium hover:bg-white/5 transition-colors font-[family-name:var(--font-satoshi)]"
          >
            See Projects
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="flex items-center gap-6 justify-center text-white/35 text-sm font-[family-name:var(--font-satoshi)]">
          <span>Scroll down</span>
          <div className="w-5 h-8 border border-white/25 rounded-full flex items-start justify-center p-1">
            <div className="w-1 h-1 bg-white/50 rounded-full animate-bounce" />
          </div>
          <span>to see projects</span>
        </div>
      </div>

      {/* Client logos marquee */}
      <div className="relative z-10 w-full overflow-hidden py-6">
        <div className="flex animate-marquee-slow whitespace-nowrap">
          {[...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos].map((logo, i) => (
            <div key={i} className="flex-shrink-0 mx-10 opacity-40 hover:opacity-70 transition-opacity flex items-center">
              <img src={logo.src} alt={logo.alt} className="h-4 w-auto" style={{ filter: "brightness(0) invert(1)" }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
