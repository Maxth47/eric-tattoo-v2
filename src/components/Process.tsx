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

export default function Process() {
  return (
    <section className="relative px-6 md:px-14 lg:px-20 py-16 md:py-[100px]">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left image */}
          <Reveal variants={fadeLeft}>
            <div className="relative rounded-2xl overflow-hidden h-[500px] lg:h-[700px]">
              <Image
                src="/images/process-pic.png"
                alt="process pic"
                fill
                className="object-cover grayscale"
              />
            </div>
          </Reveal>

          {/* Right content */}
          <div>
            {/* Badge */}
            <Reveal variants={fadeRight}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
                <span className="w-2 h-2 rounded-full bg-white" />
                <span className="text-sm text-white/80 font-[family-name:var(--font-satoshi)]">Design process</span>
              </div>
            </Reveal>

            <Reveal variants={fadeUp} delay={0.1}>
              <h2 className="text-5xl md:text-7xl lg:text-[92px] font-normal leading-[1] mb-4 font-[family-name:var(--font-satoshi)]">
                Process
              </h2>
            </Reveal>

            <Reveal variants={fadeUp} delay={0.15}>
              <p className="text-white/50 text-2xl leading-relaxed mb-8 max-w-lg font-[family-name:var(--font-satoshi)]">
                crafting bold visuals that inspire and elevate brands with thought process.
              </p>
            </Reveal>

            {/* CTAs */}
            <Reveal variants={fadeUp} delay={0.2}>
              <div className="flex items-center gap-4 mb-10">
                <a
                  href="https://cal.com/rick/get-rick-rolled"
                  className="px-6 py-3 bg-white text-black rounded-full text-sm font-medium hover:bg-white/90 transition-colors font-[family-name:var(--font-satoshi)]"
                >
                  Book a Free Call
                </a>
                <a
                  href="#projects"
                  className="px-6 py-3 bg-transparent border border-white/20 text-white rounded-full text-sm font-medium hover:bg-white/5 transition-colors font-[family-name:var(--font-satoshi)]"
                >
                  See Projects
                </a>
              </div>
            </Reveal>

            {/* Steps */}
            <StaggerReveal className="space-y-4" stagger={0.12} delay={0.3}>
              {steps.map((step) => (
                <Reveal key={step.number} variants={fadeUp}>
                  <div className="p-6 rounded-2xl bg-[#0d0d0d] border border-white/5">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-white/70">{step.icon}</div>
                      <span className="text-xs text-white/40 bg-white/5 px-2.5 py-1 rounded-full font-[family-name:var(--font-satoshi)]">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="text-4xl font-medium mb-3 font-[family-name:var(--font-satoshi)]">
                      {step.title}
                    </h3>
                    <p className="text-white/40 text-sm leading-relaxed font-[family-name:var(--font-satoshi)]">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </StaggerReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
