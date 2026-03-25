"use client";

import Image from "next/image";
import { useState } from "react";
import { Reveal, StaggerReveal, fadeUp, fadeLeft, scaleUp } from "@/lib/motion";

const faqs = [
  { question: "What services do you provide?", answer: "I specialize in brand identity and package design, with experience in web design, UI/UX, and to create brand experiences." },
  { question: "How do I start working with you?", answer: "Simply reach out through the contact form or book a free call. We'll discuss your project needs, timeline, and budget to ensure we're a perfect fit." },
  { question: "What design tools do you use?", answer: "I primarily use Figma for UI/UX design, Adobe Photoshop and Illustrator for brand identity work, and various prototyping tools for interactive designs." },
  { question: "How long does a project take?", answer: "Project timelines vary based on complexity. A brand identity project typically takes 2-4 weeks, while packaging design can be completed in 1-3 weeks." },
  { question: "Do you provide revisions?", answer: "Yes, all projects include revision rounds to ensure the final design meets your expectations. The number of revisions depends on the project scope." },
  { question: "What industries do you work with?", answer: "I work across various industries including tech, food & beverage, fashion, wellness, and sustainability-focused brands." },
  { question: "Do you offer development services?", answer: "While my focus is on design, I collaborate with trusted developers to bring designs to life. I can recommend development partners for your project." },
  { question: "What is your pricing structure?", answer: "Pricing is project-based and depends on scope, complexity, and timeline. Contact me for a detailed quote tailored to your specific needs." },
  { question: "Can you redesign my existing website?", answer: "Absolutely! I offer website redesign services that focus on improving user experience, visual appeal, and brand consistency." },
];

const faqTags = ["Product Design", "Brand Identity Design", "Branding"];

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

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section
      id="faq"
      className="relative flex items-center justify-center w-full overflow-visible rounded-[48px]"
      style={{ padding: "100px 80px" }}
    >
      {/* Border overlay */}
      <div className="absolute inset-0 rounded-[48px] z-[3] pointer-events-none overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.1)", mask: "linear-gradient(#000 0%, rgba(0,0,0,0.16) 82.8442%)", WebkitMask: "linear-gradient(#000 0%, rgba(0,0,0,0.16) 82.8442%)" }} />

      {/* Container – flex-wrap, max-width 1600px, gap 44px */}
      <div className="flex flex-wrap items-start justify-start gap-[44px] w-full max-w-[1600px]">
        {/* Left column – flex 1, min-width 460px, gap 24px */}
        <div className="flex flex-col items-start gap-6 flex-1 min-w-[460px] max-md:min-w-[260px] max-md:w-full">
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
              <span className="text-[15px] leading-[1.5em] tracking-[-0.02em] text-white font-[family-name:var(--font-satoshi)]">FAQ&apos;S</span>
            </div>
          </Reveal>

          {/* Heading */}
          <Reveal variants={fadeUp} delay={0.1}>
            <h2 className="text-[44px] md:text-[74px] lg:text-[92px] font-normal leading-[1em] tracking-[0em] text-white font-[family-name:var(--font-satoshi)]">
              Answers
            </h2>
          </Reveal>

          {/* Description */}
          <Reveal variants={fadeUp} delay={0.15}>
            <p className="text-[20px] lg:text-[24px] leading-[1.4] text-[#ffffffa6] opacity-90 max-w-[640px] font-[family-name:var(--font-inter-display)]">
              Find answers to common questions about my design process, services etc…
            </p>
          </Reveal>

          {/* Image – grayscale, rounded 17px, height 503px, shadow */}
          <Reveal variants={scaleUp} delay={0.2}>
            <div
              className="relative w-full overflow-hidden grayscale"
              style={{ height: "503px", borderRadius: "17px", boxShadow: "20px 30px 20px 8px rgba(0,0,0,0.4)" }}
            >
              <Image src="/images/faq-pic.jpg" alt="design pic" fill className="object-cover" sizes="50vw" />
            </div>
          </Reveal>

          {/* Tags – bg #0d0d0d, rounded 8px, gap 16px */}
          <StaggerReveal className="flex flex-wrap gap-4" stagger={0.05} delay={0.3}>
            {faqTags.map((tag) => (
              <Reveal key={tag} variants={fadeUp}>
                <span className="py-[10px] px-[12px] rounded-lg bg-[#0d0d0d] text-[15px] leading-[1.5em] tracking-[-0.02em] text-[#ffffffa6] font-[family-name:var(--font-satoshi)]">
                  {tag}
                </span>
              </Reveal>
            ))}
          </StaggerReveal>

          {/* CTA – dark button style */}
          <Reveal variants={fadeUp} delay={0.35}>
            <SectionButton href="https://cal.com/rick/get-rick-rolled">Book a Free Call</SectionButton>
          </Reveal>
        </div>

        {/* Right – Accordion, flex 1, min-width 460px */}
        <div className="flex-1 min-w-[460px] max-md:min-w-[260px] max-md:w-full">
          <StaggerReveal className="flex flex-col gap-2" stagger={0.06}>
            {faqs.map((faq, i) => (
              <Reveal key={i} variants={fadeUp}>
                <div className="rounded-xl border border-white/5 overflow-hidden">
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-white/[0.02] transition-colors"
                  >
                    <span className="text-[18px] leading-[1.6em] font-normal text-white font-[family-name:var(--font-inter-display)]">{faq.question}</span>
                    <span className="text-white/40 text-lg flex-shrink-0 ml-4">
                      {openIndex === i ? "×" : "+"}
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-40 pb-5" : "max-h-0"}`}>
                    <p className="px-5 text-[15px] leading-[1.5em] tracking-[-0.02em] text-[#ffffffa6] font-[family-name:var(--font-satoshi)]">
                      {faq.answer}
                    </p>
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
