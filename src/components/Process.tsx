"use client";

import Image from "next/image";
import { Reveal, StaggerReveal, fadeUp, fadeLeft, fadeRight } from "@/lib/motion";

const steps = [
  {
    number: "1",
    icon: (
      <svg width="30" height="29" viewBox="0 0 256 256" fill="white" strokeWidth="0">
        <path d="M176,232a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h80A8,8,0,0,1,176,232Zm40-128a87.55,87.55,0,0,1-33.64,69.21A16.24,16.24,0,0,0,176,186v6a16,16,0,0,1-16,16H96a16,16,0,0,1-16-16v-6a16,16,0,0,0-6.23-12.66A87.59,87.59,0,0,1,40,104.49C39.74,56.83,78.26,17.14,125.88,16A88,88,0,0,1,216,104Zm-16,0a72,72,0,0,0-73.74-72c-39,.92-70.47,33.39-70.26,72.39a71.65,71.65,0,0,0,27.64,56.3A32,32,0,0,1,96,186v6h24V147.31L90.34,117.66a8,8,0,0,1,11.32-11.32L128,132.69l26.34-26.35a8,8,0,0,1,11.32,11.32L136,147.31V192h24v-6a32.12,32.12,0,0,1,12.47-25.35A71.65,71.65,0,0,0,200,104Z" opacity="0.2" />
        <path d="M176,232a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h80A8,8,0,0,1,176,232Zm40-128a87.55,87.55,0,0,1-33.64,69.21A16.24,16.24,0,0,0,176,186v6a16,16,0,0,1-16,16H96a16,16,0,0,1-16-16v-6a16,16,0,0,0-6.23-12.66A87.59,87.59,0,0,1,40,104.49C39.74,56.83,78.26,17.14,125.88,16A88,88,0,0,1,216,104Z" />
      </svg>
    ),
    title: "Define Your Vision",
    description: "Share your tattoo idea, placement, and size. We'll discuss your vision and create a concept that perfectly captures what you want.",
  },
  {
    number: "2",
    icon: (
      <svg width="30" height="29" viewBox="0 0 256 256" fill="white" strokeWidth="0">
        <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16ZM28,64A12,12,0,1,0,16,52,12,12,0,0,0,28,64Zm0,76A12,12,0,1,0,16,128,12,12,0,0,0,28,140Zm0,76a12,12,0,1,0-12-12A12,12,0,0,0,28,216Z" opacity="0.2" />
        <path d="M224,128a8,8,0,0,1-8,8H104a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM104,72H216a8,8,0,0,0,0-16H104a8,8,0,0,0,0,16ZM216,184H104a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16ZM43.58,55.16,48,48.69V104a8,8,0,0,1-16,0V68.69L26.34,75.51a8,8,0,0,1-8.68-13.44Z" />
      </svg>
    ),
    title: "Design & Refine",
    description: "I'll create a custom design based on your brief. We'll refine it together until it's exactly what you envisioned.",
  },
  {
    number: "3",
    icon: (
      <svg width="30" height="29" viewBox="0 0 256 256" fill="white" strokeWidth="0">
        <path d="M208,192H48a8,8,0,0,1-6.88-12C47.71,168.6,56,139.81,56,104a72,72,0,0,1,144,0c0,35.82,8.3,64.6,14.88,76A8,8,0,0,1,208,192Z" opacity="0.2" />
        <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z" />
      </svg>
    ),
    title: "Tattoo Session",
    description: "Once the design is approved, we'll schedule your session. I ensure every tattoo is executed with precision, care, and attention to detail.",
  },
];

function ProcessButton({ href, children }: { href: string; children: string }) {
  return (
    <a href={href} className="relative flex flex-col items-center group">
      <div
        className="relative z-[2] flex flex-col items-center self-stretch w-auto p-[1.4px] overflow-hidden transition-shadow duration-300 group-hover:shadow-[rgba(255,255,255,0.12)_0px_1px_9px_0px]"
        style={{ backgroundColor: "rgb(59,59,59)", borderRadius: "11.5px" }}
      >
        <div
          className="relative z-[4] flex items-center justify-center w-full overflow-hidden"
          style={{ backgroundColor: "rgb(0,0,0)", borderRadius: "10px", padding: "8px 24px" }}
        >
          <span className="relative z-[2] text-[18px] leading-[1.6em] text-white font-[family-name:var(--font-inter-display)]">{children}</span>
        </div>
        <div className="absolute z-[1] w-[95px] h-[36px] overflow-hidden" style={{ top: "-19px", right: "-17px", backgroundColor: "white", filter: "blur(8px)" }} />
      </div>
    </a>
  );
}

export default function Process() {
  return (
    <section
      className="relative flex items-center justify-center w-full overflow-hidden rounded-[48px] px-[18px] py-[80px] md:px-[80px] md:py-[100px]"
    >
      {/* Border overlay – fades toward bottom */}
      <div
        className="absolute inset-0 rounded-[48px] z-[3] pointer-events-none overflow-hidden"
        style={{
          border: "1px solid rgba(255, 255, 255, 0.1)",
          mask: "linear-gradient(#000 0%, rgba(0,0,0,0.16) 82.8442%)",
          WebkitMask: "linear-gradient(#000 0%, rgba(0,0,0,0.16) 82.8442%)",
        }}
      />

      {/* Container – flex-wrap, max-width 1600px, gap 44px */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-[44px] w-full max-w-[1600px]">
        {/* Left image – flex: 1, min-width 460px, self-stretch, rounded 17px, shadow */}
        <Reveal variants={fadeLeft} className="flex-1 min-w-0 md:min-w-[460px] w-full md:w-auto self-stretch">
          <div
            className="relative w-full h-full min-h-[260px] md:min-h-[360px] overflow-hidden grayscale"
            style={{
              borderRadius: "17px",
              boxShadow: "20px 30px 20px 8px rgba(0,0,0,0.4)",
            }}
          >
            <Image
              src="/images/process-pic.png"
              alt="process pic"
              fill
              className="object-cover"
            />
          </div>
        </Reveal>

        {/* Right content – flex: 1, min-width 460px, gap 24px */}
        <div className="flex flex-col items-start justify-start gap-6 flex-1 min-w-0 md:min-w-[460px] w-full md:w-auto">
          {/* Badge – dark card style with dot icon */}
          <Reveal variants={fadeRight}>
            <div
              className="inline-flex items-center gap-1.5"
              style={{
                backgroundColor: "#0d0d0d",
                borderRadius: "20px",
                padding: "6px 16px",
                boxShadow: "rgba(0,0,0,0.4) 16px 24px 20px 8px, rgba(184,180,180,0.08) 0px 2px 0px 0px inset",
              }}
            >
              <div className="w-[11px] h-[11px] flex items-center justify-center rounded-[10px] bg-white">
                <div className="w-[8px] h-[9px] flex items-center justify-center rounded-[10px] bg-[#0d0d0d]">
                  <div className="w-[5px] h-[5px] rounded-[10px] bg-white" />
                </div>
              </div>
              <span className="text-[15px] leading-[1.5em] tracking-[-0.02em] text-white font-[family-name:var(--font-satoshi)]">Booking process</span>
            </div>
          </Reveal>

          {/* Heading */}
          <Reveal variants={fadeUp} delay={0.1}>
            <h2 className="text-[44px] md:text-[74px] lg:text-[92px] font-normal leading-[1em] tracking-[0em] text-white font-[family-name:var(--font-satoshi)]">
              Process
            </h2>
          </Reveal>

          {/* Description – Inter Display, 24px, #ffffffa6, opacity 0.9, max-w 640px */}
          <Reveal variants={fadeUp} delay={0.15}>
            <p className="text-[20px] lg:text-[24px] leading-[1.4] text-[#ffffffa6] opacity-90 max-w-[640px] font-[family-name:var(--font-inter-display)]">
              crafting meaningful tattoos from concept to completion with a seamless process.
            </p>
          </Reveal>

          {/* CTAs – gap 24px, dark button style */}
          <Reveal variants={fadeUp} delay={0.2}>
            <div className="flex flex-wrap items-center gap-6">
              <ProcessButton href="https://www.instagram.com/eric.le.tattoo/">Book a Session</ProcessButton>
              <ProcessButton href="#projects">See Portfolio</ProcessButton>
            </div>
          </Reveal>

          {/* Steps */}
          <StaggerReveal className="flex flex-col gap-4 w-full" stagger={0.12} delay={0.3}>
            {steps.map((step) => (
              <Reveal key={step.number} variants={fadeUp}>
                <div
                  className="relative flex flex-col items-start gap-6 overflow-hidden"
                  style={{
                    backgroundColor: "#0d0d0d",
                    borderRadius: "30px",
                    padding: "44px 32px 32px",
                    boxShadow: "rgba(0,0,0,0.4) 16px 24px 20px 8px",
                  }}
                >
                  {/* Icon */}
                  <div className="w-[30px] h-[29px]">{step.icon}</div>
                  {/* Heading */}
                  <h3 className="text-[30px] md:text-[34px] lg:text-[36px] font-medium leading-[1.2em] tracking-[-0.01em] text-white font-[family-name:var(--font-satoshi)]">
                    {step.title}
                  </h3>
                  {/* Divider */}
                  <div className="w-full h-[1px] bg-white/10" />
                  {/* Description */}
                  <p className="text-[15px] leading-[1.5em] tracking-[-0.02em] text-[#ffffffa6] text-left font-[family-name:var(--font-satoshi)]">
                    {step.description}
                  </p>
                  {/* Step badge – absolute top-right */}
                  <div
                    className="absolute z-[1] flex items-center justify-center overflow-hidden"
                    style={{
                      top: "10px",
                      right: "13px",
                      width: "34px",
                      height: "34px",
                      backgroundColor: "#0d0d0d",
                      borderRadius: "100px",
                      boxShadow: "rgba(184,180,180,0.14) 0px 2px 0px 0px inset",
                    }}
                  >
                    <span className="text-[15px] leading-[1.5em] tracking-[-0.02em] text-[#ffffffa6] font-[family-name:var(--font-satoshi)]">
                      {step.number}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </StaggerReveal>
        </div>
      </div>
    </section>
  );
}
