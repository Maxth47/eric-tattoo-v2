"use client";

import Image from "next/image";
import { Reveal, StaggerReveal, fadeUp, fadeLeft, fadeRight } from "@/lib/motion";

const steps = [
  {
    number: "1",
    icon: (
      /* Lightbulb – from reference #1179440402 */
      <svg width="30" height="29" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M 7.378 15.656 C 5.572 14.245 4.511 12.085 4.5 9.792 C 4.478 5.727 7.755 2.344 11.819 2.25 C 15.049 2.172 17.967 4.171 19.059 7.212 C 20.152 10.253 19.174 13.652 16.632 15.647 C 16.078 16.077 15.753 16.737 15.75 17.438 L 15.75 18 C 15.75 18.414 15.414 18.75 15 18.75 L 9 18.75 C 8.586 18.75 8.25 18.414 8.25 18 L 8.25 17.438 C 8.249 16.741 7.928 16.084 7.378 15.656 Z" fill="white" fillOpacity="0.2" />
        <path d="M 7.378 15.656 C 5.572 14.245 4.511 12.085 4.5 9.792 C 4.478 5.727 7.755 2.344 11.819 2.25 C 15.049 2.172 17.967 4.171 19.059 7.212 C 20.152 10.253 19.174 13.652 16.632 15.647 C 16.078 16.077 15.753 16.737 15.75 17.438 L 15.75 18 C 15.75 18.414 15.414 18.75 15 18.75 L 9 18.75 C 8.586 18.75 8.25 18.414 8.25 18 L 8.25 17.438 C 8.249 16.741 7.928 16.084 7.378 15.656 Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 8.25 21.75 L 15.75 21.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 9.75 15.75 C 11.625 16.066 13.182 17.625 13.5 19.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Define Your Vision",
    description: "Share your tattoo idea, placement, and size. We'll discuss your vision and create a concept that perfectly captures what you want.",
  },
  {
    number: "2",
    icon: (
      /* Checklist – from reference #3553010246 */
      <svg width="30" height="29" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="12" y="6" width="8.25" height="12" fill="white" fillOpacity="0.2" />
        <path d="M 12 12 L 20.25 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 12 6 L 20.25 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 12 18 L 20.25 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 3.75 6 L 5.25 7.5 L 8.25 4.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 3.75 12 L 5.25 13.5 L 8.25 10.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 3.75 18 L 5.25 19.5 L 8.25 16.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Design & Refine",
    description: "I'll create a custom design based on your brief. We'll refine it together until it's exactly what you envisioned.",
  },
  {
    number: "3",
    icon: (
      /* Rocket – from reference #3380339736 */
      <svg width="30" height="29" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M 3.924 13.804 C 3.775 13.983 3.717 14.22 3.768 14.447 L 4.927 19.662 C 4.983 19.915 5.166 20.121 5.41 20.207 C 5.654 20.293 5.926 20.247 6.128 20.085 L 8.889 18 C 7.191 15.134 6.656 12.586 6.765 10.398 Z" fill="white" fillOpacity="0.2" />
        <path d="M 20.076 13.804 C 20.225 13.983 20.283 14.22 20.232 14.447 L 19.073 19.662 C 19.017 19.915 18.834 20.121 18.59 20.207 C 18.346 20.293 18.074 20.247 17.872 20.085 L 15.111 18 C 16.809 15.134 17.344 12.586 17.235 10.398 Z" fill="white" fillOpacity="0.2" />
        <path d="M 15 15.75 C 15 15.75 16.678 10.057 13.811 4.317 C 13.294 3.273 12.718 2.28 12.075 1.345 L 12 1.243 L 11.925 1.345 C 11.282 2.28 10.706 3.273 10.189 4.317 C 7.322 10.057 9 15.75 9 15.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 9 15.75 L 6.765 10.398 L 3.924 13.804 C 3.775 13.983 3.717 14.22 3.768 14.447 L 4.927 19.662 C 4.983 19.915 5.166 20.121 5.41 20.207 C 5.654 20.293 5.926 20.247 6.128 20.085 L 8.889 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 15 15.75 L 17.235 10.398 L 20.076 13.804 C 20.225 13.983 20.283 14.22 20.232 14.447 L 19.073 19.662 C 19.017 19.915 18.834 20.121 18.59 20.207 C 18.346 20.293 18.074 20.247 17.872 20.085 L 15.111 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="9.75" r="2.25" stroke="white" strokeWidth="1.5" />
        <path d="M 9 15.75 L 15 15.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M 8.889 18 L 15.111 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M 9.5 20.25 L 14.5 20.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
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
              src="/images/process-pic.webp"
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
