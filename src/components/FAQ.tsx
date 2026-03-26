"use client";

import Image from "next/image";
import { useState } from "react";
import { Reveal, StaggerReveal, fadeUp, fadeLeft, scaleUp } from "@/lib/motion";

const faqs = [
  { question: "What tattoo styles do you specialize in?", answer: "I specialize in black & grey, fine line, realism, geometric, and custom designs. Each piece is tailored to your vision and style." },
  { question: "How do I book a tattoo session?", answer: "Simply reach out through Instagram DM or book a consultation. We'll discuss your design idea, placement, size, and schedule your session." },
  { question: "How much does a tattoo cost?", answer: "Pricing varies based on size, detail, and placement. Small pieces start from $150, while larger custom work is quoted individually. Contact me for a detailed quote." },
  { question: "How long does a tattoo session take?", answer: "Session length varies based on the design. Small tattoos take 1-2 hours, while larger pieces may require multiple sessions of 4-6 hours each." },
  { question: "Do you do cover-up tattoos?", answer: "Yes! I specialize in cover-up work. We'll assess your existing tattoo and create a design that effectively covers it while looking amazing." },
  { question: "How should I prepare for my tattoo session?", answer: "Get a good night's sleep, eat a proper meal beforehand, stay hydrated, and avoid alcohol 24 hours before your session. Wear comfortable clothing that allows easy access to the tattoo area." },
  { question: "What is the aftercare process?", answer: "I provide detailed aftercare instructions after each session. Generally, keep the tattoo clean, moisturized, avoid sun exposure, and don't submerge it in water for 2-3 weeks." },
  { question: "Do you require a deposit?", answer: "Yes, a non-refundable deposit is required to secure your booking. This goes toward the final cost of your tattoo and ensures commitment from both sides." },
  { question: "Can I bring my own design?", answer: "Absolutely! I welcome reference images and your own designs. I'll work with you to refine and adapt it to work beautifully as a tattoo." },
];

const faqTags = ["Custom Tattoos", "Black & Grey", "Fine Line"];

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

function PlusIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 256 256" fill="currentColor">
      <path d="M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z" />
    </svg>
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

      {/* Blur overlay at bottom */}
      <div
        className="absolute z-[1] inset-0 overflow-hidden pointer-events-none"
        style={{
          top: "-115px", bottom: "-76px",
          backdropFilter: "blur(8px)",
          filter: "blur(40px)",
          background: "linear-gradient(180deg, transparent 10%, rgb(0,0,0) 20%)",
          mask: "linear-gradient(transparent 0%, black 5%)",
          WebkitMask: "linear-gradient(transparent 0%, black 5%)",
        }}
      />

      {/* Container – flex-wrap, max-width 1600px, gap 44px */}
      <div className="relative z-[2] flex flex-wrap items-start justify-start gap-[44px] w-full max-w-[1600px]">
        {/* Left column */}
        <div className="flex flex-col items-start gap-6 flex-1 min-w-[460px] max-md:min-w-[260px] max-md:w-full">
          {/* Badge */}
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

          {/* Image */}
          <Reveal variants={scaleUp} delay={0.2} className="w-full">
            <div
              className="relative w-full overflow-hidden grayscale"
              style={{ height: "503px", borderRadius: "17px", boxShadow: "20px 30px 20px 8px rgba(0,0,0,0.4)" }}
            >
              <Image src="/images/faq-pic.jpg" alt="design pic" fill className="object-cover" sizes="50vw" />
            </div>
          </Reveal>

          {/* Tags */}
          <StaggerReveal className="flex flex-wrap gap-4" stagger={0.05} delay={0.3}>
            {faqTags.map((tag) => (
              <Reveal key={tag} variants={fadeUp}>
                <span className="py-[10px] px-[12px] rounded-lg bg-[#0d0d0d] text-[15px] leading-[1.5em] tracking-[-0.02em] text-[#ffffffa6] font-[family-name:var(--font-satoshi)]">
                  {tag}
                </span>
              </Reveal>
            ))}
          </StaggerReveal>

          {/* Divider line */}
          <div className="w-full h-[1px] bg-white/10" />

          {/* CTA */}
          <Reveal variants={fadeUp} delay={0.35}>
            <SectionButton href="https://www.instagram.com/eric.le.tattoo/">Book a Session</SectionButton>
          </Reveal>
        </div>

        {/* Right – Accordion */}
        <div className="flex-1 min-w-[460px] max-md:min-w-[260px] max-md:w-full">
          <div className="flex flex-col gap-4 w-full">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    backgroundColor: "rgb(15,15,15)",
                    borderRadius: "15px",
                    boxShadow: "rgba(0,0,0,0.4) 5px 18px 10px 8px",
                    padding: isOpen ? "0 20px 20px 10px" : "0 20px 0 10px",
                  }}
                >
                  {/* Question row */}
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    className="w-full flex items-center justify-start gap-[25px] cursor-pointer select-none"
                    style={{ padding: isOpen ? "20px 20px 15px" : "20px" }}
                  >
                    <span className="flex-1 text-left text-[18px] leading-[1.6em] text-white font-[family-name:var(--font-inter-display)]">
                      {faq.question}
                    </span>
                    <div
                      className="flex-shrink-0 w-[15px] h-[15px] text-white/60 transition-transform duration-300"
                      style={{ transform: isOpen ? "rotate(45deg)" : "none" }}
                    >
                      <PlusIcon />
                    </div>
                  </button>

                  {/* Answer */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"}`}
                  >
                    <div className="px-5 pb-1">
                      <p className="text-[15px] leading-[1.5em] tracking-[-0.02em] text-[#ffffff99] text-left font-[family-name:var(--font-satoshi)]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
