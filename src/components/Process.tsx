"use client";

import Image from "next/image";
import { Reveal, StaggerReveal, fadeUp, fadeLeft, fadeRight } from "@/lib/motion";

const steps = [
  {
    number: "1",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/70">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4M12 8h.01" />
      </svg>
    ),
    title: "Define Your Vision",
    description: "Find the perfect plan tailored to your needs, offering the right balance of features, flexibility, and value to help you achieve your goals effortlessly.",
  },
  {
    number: "2",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/70">
        <line x1="8" y1="6" x2="21" y2="6" />
        <line x1="8" y1="12" x2="21" y2="12" />
        <line x1="8" y1="18" x2="21" y2="18" />
        <line x1="3" y1="6" x2="3.01" y2="6" />
        <line x1="3" y1="12" x2="3.01" y2="12" />
        <line x1="3" y1="18" x2="3.01" y2="18" />
      </svg>
    ),
    title: "Submit Your Request",
    description: "Easily submit your design requirements through our private design portal, ensuring a seamless process where your vision is understood, refined, and brought to life with precision and creativity.",
  },
  {
    number: "3",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/70">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
    title: "Project Delivered",
    description: "As a dedicated freelancer, I ensure your project is completed with precision and delivered within 2-3 days. With a keen eye for detail and a passion for quality, I bring your vision to life—on time and beyond expectations.",
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
      className="relative flex items-center justify-center w-full overflow-hidden rounded-[48px] bg-[#0d0d0d]"
      style={{ padding: "100px 80px" }}
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
      <div className="flex flex-wrap items-center justify-center gap-[44px] w-full max-w-[1600px]">
        {/* Left image – flex: 1, min-width 460px, self-stretch, rounded 17px, shadow */}
        <Reveal variants={fadeLeft} className="flex-1 min-w-[460px] max-md:min-w-[240px] max-md:w-full self-stretch">
          <div
            className="relative w-full h-full min-h-[360px] overflow-hidden grayscale"
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
        <div className="flex flex-col items-start justify-start gap-6 flex-1 min-w-[460px] max-md:min-w-[240px] max-md:w-full">
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
              <span className="text-[15px] leading-[1.5em] tracking-[-0.02em] text-white font-[family-name:var(--font-satoshi)]">Design process</span>
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
              crafting bold visuals that inspire and elevate brands with thought process.
            </p>
          </Reveal>

          {/* CTAs – gap 24px, dark button style */}
          <Reveal variants={fadeUp} delay={0.2}>
            <div className="flex flex-wrap items-center gap-6">
              <ProcessButton href="https://cal.com/rick/get-rick-rolled">Book a Free Call</ProcessButton>
              <ProcessButton href="#projects">See Projects</ProcessButton>
            </div>
          </Reveal>

          {/* Steps */}
          <StaggerReveal className="flex flex-col gap-4 w-full" stagger={0.12} delay={0.3}>
            {steps.map((step) => (
              <Reveal key={step.number} variants={fadeUp}>
                <div className="p-6 rounded-2xl bg-[#0d0d0d] border border-white/5">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-white/70">{step.icon}</div>
                    <span className="text-xs text-white/40 bg-white/5 px-2.5 py-1 rounded-full font-[family-name:var(--font-satoshi)]">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-[24px] lg:text-[32px] font-medium mb-3 font-[family-name:var(--font-satoshi)]">
                    {step.title}
                  </h3>
                  <p className="text-[15px] leading-[1.5em] tracking-[-0.02em] text-[#ffffffa6] font-[family-name:var(--font-satoshi)]">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </StaggerReveal>
        </div>
      </div>
    </section>
  );
}
