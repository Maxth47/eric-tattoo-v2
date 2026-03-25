"use client";

import Image from "next/image";
import { Reveal, StaggerReveal, fadeUp, fadeLeft, fadeRight, scaleUp } from "@/lib/motion";

const tags = ["Product Design", "Brand Identity Design", "Branding", "Packaging Design", "Mochup Design"];

const services = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/70">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    title: "Brand Identity",
    description: "Crafting unique, memorable brand identities that resonate with your audience — from logos to visual systems — ensuring every touchpoint reflects your brand's essence.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/70">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <path d="M8 12h8M12 8v8" />
      </svg>
    ),
    title: "Brand Design",
    description: "Designing sleek, impactful packaging that not only looks stunning but also connects with your ideal customers — turning first impressions into lasting brand loyalty.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/70">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      </svg>
    ),
    title: "Package Design",
    description: "Bringing your brand to life through high-fidelity product mockups, giving you a clear, realistic preview of how your packaging and visuals will stand out in the real world.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/70">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <rect x="7" y="7" width="10" height="10" rx="1" />
      </svg>
    ),
    title: "Mochup Design",
    description: "Tailored design mockups that align perfectly with your brand's aesthetic — because every detail matters when showcasing your product's true potential.",
  },
];

const marqueeRow1 = [
  { icon: "🖥", text: "Slide Decks" },
  { icon: "✏️", text: "Copywriting" },
  { icon: "🎨", text: "Brand Graphics" },
  { icon: "🔄", text: "Brand Migration" },
  { icon: "📦", text: "Package Design" },
  { icon: "💎", text: "Branding" },
];

const marqueeRow2 = [
  { icon: "⚡", text: "Optimization" },
  { icon: "🌐", text: "Brand Landing Pages" },
  { icon: "📱", text: "Social Media" },
  { icon: "✨", text: "Icons" },
  { icon: "👁", text: "Brand Visibility" },
  { icon: "🔗", text: "Brand Integrations" },
];

function SectionButton({ href, children }: { href: string; children: string }) {
  return (
    <a href={href} className="relative flex flex-col items-center group">
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

export default function Services() {
  return (
    <section
      id="services"
      className="relative flex items-center justify-center w-full overflow-hidden rounded-[48px] bg-[#0d0d0d]"
      style={{ padding: "100px 80px" }}
    >
      {/* Border overlay */}
      <div
        className="absolute inset-0 rounded-[48px] z-[3] pointer-events-none overflow-hidden"
        style={{ border: "1px solid rgba(255,255,255,0.1)", mask: "linear-gradient(#000 0%, rgba(0,0,0,0.16) 82.8442%)", WebkitMask: "linear-gradient(#000 0%, rgba(0,0,0,0.16) 82.8442%)" }}
      />

      {/* Container – flex column, max-width 1600px, gap 44px */}
      <div className="flex flex-col items-center gap-[44px] w-full max-w-[1600px]">
        {/* Top container – flex wrap, gap 44px */}
        <div className="flex flex-wrap items-center justify-center gap-[44px] w-full">
          {/* Left content – flex 1, min-width 460px, gap 24px, pr 40px */}
          <div className="flex flex-col items-start gap-6 flex-1 min-w-[460px] max-md:min-w-[240px] max-md:w-full pr-10 max-md:pr-0">
            {/* Badge – dark card style */}
            <Reveal variants={fadeLeft}>
              <div
                className="inline-flex items-center gap-1.5"
                style={{ backgroundColor: "#0d0d0d", borderRadius: "20px", padding: "6px 16px", boxShadow: "rgba(0,0,0,0.4) 16px 24px 20px 8px, rgba(184,180,180,0.08) 0px 2px 0px 0px inset" }}
              >
                <div className="w-[11px] h-[11px] flex items-center justify-center rounded-[10px] bg-white">
                  <div className="w-[8px] h-[9px] flex items-center justify-center rounded-[10px] bg-[#0d0d0d]">
                    <div className="w-[5px] h-[5px] rounded-[10px] bg-white" />
                  </div>
                </div>
                <span className="text-[15px] leading-[1.5em] tracking-[-0.02em] text-white font-[family-name:var(--font-satoshi)]">Design services</span>
              </div>
            </Reveal>

            <Reveal variants={fadeUp} delay={0.1}>
              <h2 className="text-[44px] md:text-[74px] lg:text-[92px] font-normal leading-[1em] tracking-[0em] text-white font-[family-name:var(--font-satoshi)]">
                Services
              </h2>
            </Reveal>

            {/* Description – Inter Display, 24px, opacity 0.9 */}
            <Reveal variants={fadeUp} delay={0.15}>
              <p className="text-[20px] lg:text-[24px] leading-[1.4] text-[#ffffffa6] opacity-90 font-[family-name:var(--font-inter-display)]">
                Helping businesses standout with brand identity packaging that captivates and converts effectively.
              </p>
            </Reveal>

            {/* Tags – gap 16px, bg #0d0d0d, rounded 8px */}
            <StaggerReveal className="flex flex-wrap gap-4" stagger={0.05} delay={0.2}>
              {tags.map((tag) => (
                <Reveal key={tag} variants={fadeUp}>
                  <span className="py-[10px] px-[12px] rounded-lg bg-[#0d0d0d] text-[15px] leading-[1.5em] tracking-[-0.02em] text-[#ffffffa6] font-[family-name:var(--font-satoshi)]">
                    {tag}
                  </span>
                </Reveal>
              ))}
            </StaggerReveal>

            {/* CTAs – gap 24px, dark buttons */}
            <Reveal variants={fadeUp} delay={0.3}>
              <div className="flex flex-wrap items-center gap-6">
                <SectionButton href="https://cal.com/rick/get-rick-rolled">Book a Free Call</SectionButton>
                <SectionButton href="#projects">See Projects</SectionButton>
              </div>
            </Reveal>
          </div>

          {/* Right image – flex 1, min-width 460px, height 503px, rounded 17px, shadow */}
          <Reveal variants={fadeRight} delay={0.2} className="flex-1 min-w-[460px] max-md:min-w-[240px] max-md:w-full">
            <div
              className="relative w-full overflow-hidden grayscale"
              style={{ height: "503px", borderRadius: "17px", boxShadow: "20px 30px 20px 8px rgba(0,0,0,0.4)" }}
            >
              <Image src="/images/services-pic.jpg" alt="design pic" fill className="object-cover" sizes="50vw" />
            </div>
          </Reveal>
        </div>

        {/* Service cards – flex wrap, gap 24px */}
        <StaggerReveal className="flex flex-wrap gap-6 w-full" stagger={0.1}>
          {/* Two columns */}
          <div className="flex flex-col gap-6 flex-1 min-w-[460px] max-md:min-w-[260px]">
            {services.slice(0, 2).map((service) => (
              <Reveal key={service.title} variants={scaleUp}>
                <div className="p-8 rounded-[20px] bg-black border border-white/[0.06]">
                  <div className="flex items-center gap-3 mb-5">
                    {service.icon}
                    <h3 className="text-2xl font-semibold font-[family-name:var(--font-inter-display)]">{service.title}</h3>
                  </div>
                  <div className="w-full h-[1px] bg-white/10 mb-5" />
                  <p className="text-[15px] leading-[1.5em] tracking-[-0.02em] text-[#ffffffa6] font-[family-name:var(--font-satoshi)]">{service.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="flex flex-col gap-6 flex-1 min-w-[460px] max-md:min-w-[260px]">
            {services.slice(2, 4).map((service) => (
              <Reveal key={service.title} variants={scaleUp}>
                <div className="p-8 rounded-[20px] bg-black border border-white/[0.06]">
                  <div className="flex items-center gap-3 mb-5">
                    {service.icon}
                    <h3 className="text-2xl font-semibold font-[family-name:var(--font-inter-display)]">{service.title}</h3>
                  </div>
                  <div className="w-full h-[1px] bg-white/10 mb-5" />
                  <p className="text-[15px] leading-[1.5em] tracking-[-0.02em] text-[#ffffffa6] font-[family-name:var(--font-satoshi)]">{service.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </StaggerReveal>

        {/* Marquee – max-width 1400px */}
        <Reveal className="w-full max-w-[1400px]">
          <div className="flex flex-col overflow-hidden">
            <div className="relative overflow-hidden">
              <div className="flex animate-marquee">
                {[...marqueeRow1, ...marqueeRow1, ...marqueeRow1, ...marqueeRow1, ...marqueeRow1].map((item, i) => (
                  <div key={i} className="flex-shrink-0 flex items-center gap-2 px-5 py-2.5 mx-2 rounded-full border border-white/10 text-[15px] leading-[1.5em] tracking-[-0.02em] text-[#ffffffa6] font-[family-name:var(--font-satoshi)]">
                    <span className="text-base">{item.icon}</span>
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative overflow-hidden mt-2">
              <div className="flex animate-marquee-reverse">
                {[...marqueeRow2, ...marqueeRow2, ...marqueeRow2, ...marqueeRow2, ...marqueeRow2].map((item, i) => (
                  <div key={i} className="flex-shrink-0 flex items-center gap-2 px-5 py-2.5 mx-2 rounded-full border border-white/10 text-[15px] leading-[1.5em] tracking-[-0.02em] text-[#ffffffa6] font-[family-name:var(--font-satoshi)]">
                    <span className="text-base">{item.icon}</span>
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
