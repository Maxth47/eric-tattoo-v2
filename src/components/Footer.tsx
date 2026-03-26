"use client";

import { Reveal, fadeUp } from "@/lib/motion";

function SectionButton({ href, children }: { href: string; children: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="relative flex flex-col items-center group">
      <div
        className="relative z-[2] flex flex-col items-center self-stretch w-auto p-[1.4px] overflow-hidden transition-shadow duration-300 group-hover:shadow-[rgba(255,255,255,0.12)_0px_1px_9px_0px]"
        style={{ backgroundColor: "rgb(59,59,59)", borderRadius: "11.5px" }}
      >
        <div className="relative z-[4] flex items-center justify-center w-full overflow-hidden" style={{ backgroundColor: "rgb(0,0,0)", borderRadius: "10px", padding: "8px 24px" }}>
          <span className="relative z-[2] text-[18px] leading-[1.6em] text-white font-[family-name:var(--font-inter-display)]">{children}</span>
        </div>
        <div className="absolute z-[1] w-[95px] h-[36px] overflow-hidden" style={{ top: "-19px", right: "-17px", backgroundColor: "white", filter: "blur(8px)" }} />
      </div>
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="relative flex flex-col items-center w-full overflow-hidden" style={{ padding: "0 80px" }}>
      {/* BG video layer – B&W */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        >
          <source src="/footer-web.mp4" type="video/mp4" />
        </video>
        {/* Overlay gradient – darken edges */}
        <div
          className="absolute inset-0 z-[1] w-full h-full"
          style={{ background: "linear-gradient(180deg, rgb(0,0,0) 0%, rgba(0,0,0,0.4) 30%, rgba(0,0,0,0.4) 70%, rgb(0,0,0) 100%)" }}
        />
      </div>

      {/* Main content – 100vh, space-between, max-width 1600px */}
      <div
        className="relative z-[1] flex flex-col items-center justify-between w-full max-w-[1600px]"
        style={{ height: "100vh", padding: "60px 0" }}
      >
        {/* Spacer top — for the marquee-like top element */}
        <div className="w-full h-[43px]" />

        {/* Center content – max-width 840px, gap 32px */}
        <div className="flex flex-col items-center gap-8 w-full max-w-[840px] text-center">
          {/* Badge – same style as hero */}
          <Reveal>
            <div className="relative inline-flex items-center gap-[10px] rounded-[40px] bg-black overflow-visible">
              <div
                className="relative z-[2] inline-flex items-center gap-[10px] overflow-hidden"
                style={{ backdropFilter: "blur(68px)", backgroundColor: "rgba(10,10,10,0.4)", borderRadius: "26px", padding: "10px 16px" }}
              >
                <div className="relative w-[7px] h-[7px] flex-shrink-0">
                  <div className="w-[5px] h-[5px] rounded-full bg-green-400" style={{ boxShadow: "rgb(74,222,128) 0px 0px 14px 1px" }} />
                </div>
                <span className="text-[15px] leading-[1.5em] tracking-[-0.02em] text-white font-[family-name:var(--font-satoshi)]">Available For Work</span>
              </div>
              <div className="absolute z-[1] inset-[-1px] overflow-hidden rounded-[26px]" style={{ background: "linear-gradient(105deg, rgb(255,255,255) -19%, rgba(0,0,0,0) 20%)" }} />
            </div>
          </Reveal>

          {/* Heading – Satoshi 36px, weight 500, letter-spacing -0.01em */}
          <Reveal delay={0.1}>
            <h2 className="text-[30px] md:text-[34px] lg:text-[36px] font-medium leading-[1.2em] tracking-[-0.01em] text-white text-center font-[family-name:var(--font-satoshi)]">
              Ready to get your next tattoo? Let&apos;s create something extraordinary together!
            </h2>
          </Reveal>

          {/* CTA – dark button, gap 40px container */}
          <Reveal delay={0.2}>
            <div className="flex items-center justify-center gap-10">
              <SectionButton href="https://www.instagram.com/eric.le.tattoo/">Book a Session</SectionButton>
            </div>
          </Reveal>

          {/* Social icons – gap 24px */}
          <Reveal delay={0.3}>
            <div className="flex items-center justify-center gap-6">
              <a href="https://www.instagram.com/eric.le.tattoo/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors rounded-full">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
                </svg>
              </a>
              <div className="w-[2px] h-6 bg-white/20" />
              <a href="https://x.com/home" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors rounded-full">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <div className="w-[2px] h-6 bg-white/20" />
              <a href="https://dribbble.com/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors rounded-full">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.245.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" />
                </svg>
              </a>
            </div>
          </Reveal>
        </div>

        {/* Footer detail – bottom bar, space-between */}
        <Reveal variants={fadeUp} delay={0.4} className="w-full">
          <div className="flex flex-row items-end justify-between w-full">
            <div className="flex flex-row flex-1 items-center justify-between">
              <span className="text-[15px] leading-[1.5em] tracking-[-0.02em] text-white font-[family-name:var(--font-satoshi)]">
                eric.le.tattoo@gmail.com
              </span>
              <span className="text-[15px] leading-[1.5em] tracking-[-0.02em] text-white font-[family-name:var(--font-satoshi)]">
                Tattoo Art by Eric Le
              </span>
              <span className="text-[15px] leading-[1.5em] tracking-[-0.02em] text-white font-[family-name:var(--font-satoshi)]">
                All rights reserved, ©2025 Eric Le
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
