"use client";

import { useBooking } from "@/lib/BookingContext";
import { Reveal, fadeUp } from "@/lib/motion";

function SectionButton({ href, onClick, children }: { href?: string; onClick?: () => void; children: string }) {
  const Tag = onClick ? "button" : "a";
  return (
    <Tag
      {...(onClick ? { onClick } : { href, target: "_blank", rel: "noopener noreferrer" })}
      className="relative flex flex-col items-center group"
    >
      <div
        className="relative z-[2] flex flex-col items-center self-stretch w-auto p-[1.4px] overflow-hidden transition-shadow duration-300 group-hover:shadow-[rgba(255,255,255,0.12)_0px_1px_9px_0px]"
        style={{ backgroundColor: "rgb(59,59,59)", borderRadius: "11.5px" }}
      >
        <div
          className="relative z-[4] flex items-center justify-center w-full overflow-hidden"
          style={{
            backgroundColor: "rgb(0,0,0)",
            borderRadius: "10px",
            padding: "8px 24px",
          }}
        >
          <span className="relative z-[2] text-[18px] leading-[1.6em] text-white font-[family-name:var(--font-inter-display)]">
            {children}
          </span>
        </div>
        <div
          className="absolute z-[1] w-[95px] h-[36px] overflow-hidden"
          style={{
            top: "-19px",
            right: "-17px",
            backgroundColor: "white",
            filter: "blur(8px)",
          }}
        />
      </div>
    </Tag>
  );
}

export default function Footer() {
  const { open: openBooking } = useBooking();
  return (
    <footer className="relative flex flex-col items-center w-full overflow-hidden px-[20px] lg:px-[80px]">
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
          style={{
            background:
              "linear-gradient(180deg, rgb(0,0,0) 0%, rgba(0,0,0,0.4) 30%, rgba(0,0,0,0.4) 70%, rgb(0,0,0) 100%)",
          }}
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
            <div className="relative inline-flex items-center gap-[10px] rounded-[40px] bg-black">
              <div
                className="relative z-[2] inline-flex items-center gap-[10px] overflow-hidden"
                style={{
                  backdropFilter: "blur(68px)",
                  backgroundColor: "rgba(10,10,10,0.4)",
                  borderRadius: "26px",
                  padding: "10px 16px",
                }}
              >
                <div className="relative w-[7px] h-[7px] flex-shrink-0">
                  <div
                    className="w-[5px] h-[5px] rounded-full bg-white animate-dot-blink"
                    style={{
                      borderRadius: "84px",
                      boxShadow: "rgb(189,189,189) 0px 0px 14px 1px",
                    }}
                  />
                </div>
                <span className="text-[15px] leading-[1.5em] tracking-[-0.02em] text-white whitespace-pre font-[family-name:var(--font-satoshi)]">
                  Available For Work
                </span>
              </div>
              {/* Gradient sweep */}
              <div
                className="absolute z-[1] inset-[-1px] overflow-hidden rounded-[26px]"
                style={{
                  background:
                    "linear-gradient(105deg, rgb(255,255,255) -19%, rgba(0,0,0,0) 20%)",
                }}
              />
            </div>
          </Reveal>

          {/* Heading – Satoshi 36px, weight 500, letter-spacing -0.01em */}
          <Reveal delay={0.1}>
            <h2 className="text-[30px] md:text-[34px] lg:text-[36px] font-medium leading-[1.2em] tracking-[-0.01em] text-white text-center font-[family-name:var(--font-satoshi)]">
              Ready to get your next tattoo? Let&apos;s create something
              extraordinary together!
            </h2>
          </Reveal>

          {/* CTA – dark button, gap 40px container */}
          <Reveal delay={0.2}>
            <div className="flex items-center justify-center gap-10">
              <SectionButton onClick={openBooking}>
                Book a Session
              </SectionButton>
            </div>
          </Reveal>
        </div>

        {/* Footer detail – bottom bar, space-between */}
        <div className="w-full">
          <div className="flex flex-col lg:flex-row flex-1 items-center justify-between gap-6">
            <span className="text-[15px] leading-[1.5em] tracking-[-0.02em] text-white/60 font-[family-name:var(--font-satoshi)]">
              erictattoo.fi@gmail.com
            </span>
            <span className="text-[15px] leading-[1.5em] tracking-[-0.02em] text-white/60 font-[family-name:var(--font-satoshi)]">
              Tattoo Art by Eric Le
            </span>
            <span className="text-[15px] leading-[1.5em] tracking-[-0.02em] text-white/60 font-[family-name:var(--font-satoshi)]">
              All rights reserved, ©{new Date().getFullYear()} Eric Le
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
