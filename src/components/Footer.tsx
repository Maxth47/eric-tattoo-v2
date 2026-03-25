"use client";

import { Reveal, fadeUp } from "@/lib/motion";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Smoke background */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-white/5 blur-[120px]" />
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-white/8 blur-[100px]" />
          <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] rounded-full bg-white/3 blur-[80px]" />
        </div>
        {/* Glowing line */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[2px] h-[60%] bg-gradient-to-t from-white/30 to-transparent" />
        <div className="absolute bottom-[30%] left-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full border border-white/10" />
      </div>

      <div className="relative z-10 px-6 md:px-12 lg:px-20 pt-32 pb-8">
        <div className="max-w-[1600px] mx-auto text-center">
          {/* Badge */}
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              <span className="text-sm text-white/80 font-[family-name:var(--font-satoshi)]">Available For Work</span>
            </div>
          </Reveal>

          {/* Heading */}
          <Reveal delay={0.1}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium leading-tight mb-10 max-w-3xl mx-auto font-[family-name:var(--font-satoshi)]">
              Curious about what we can create together? Let&apos;s bring something extraordinary to life!
            </h2>
          </Reveal>

          {/* CTA */}
          <Reveal delay={0.2}>
            <a
              href="https://cal.com/rick/get-rick-rolled"
              className="inline-block px-6 py-3 bg-transparent border border-white/20 text-white rounded-full text-sm font-medium hover:bg-white/5 transition-colors mb-10 font-[family-name:var(--font-satoshi)]"
            >
              Book a Free Call
            </a>
          </Reveal>

          {/* Social icons */}
          <Reveal delay={0.3}>
            <div className="flex items-center justify-center gap-6 mb-20">
              <a href="https://www.behance.net/" className="text-white/60 hover:text-white transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
                </svg>
              </a>
              <div className="w-px h-4 bg-white/20" />
              <a href="https://x.com/home" className="text-white/60 hover:text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <div className="w-px h-4 bg-white/20" />
              <a href="https://dribbble.com/" className="text-white/60 hover:text-white transition-colors">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.245.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" />
                </svg>
              </a>
            </div>
          </Reveal>

          {/* Bottom bar */}
          <Reveal variants={fadeUp} delay={0.4}>
            <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-white/40 text-sm font-[family-name:var(--font-satoshi)]">
                hello@framebase.design
              </p>
              <p className="text-white/40 text-sm font-[family-name:var(--font-satoshi)]">
                Design In{" "}
                <a href="https://framer.link/framebase" className="text-white/60 underline hover:text-white transition-colors">
                  Framer
                </a>
              </p>
              <p className="text-white/40 text-sm font-[family-name:var(--font-satoshi)]">
                All rights reserved, ©2025
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </footer>
  );
}
