"use client";

import Image from "next/image";
import { useState } from "react";
import { Reveal, StaggerReveal, fadeUp, fadeLeft, scaleUp } from "@/lib/motion";

const faqs = [
  {
    question: "What services do you provide?",
    answer: "I specialize in brand identity and package design, with experience in web design, UI/UX, and to create brand experiences.",
  },
  {
    question: "How do I start working with you?",
    answer: "Simply reach out through the contact form or book a free call. We'll discuss your project needs, timeline, and budget to ensure we're a perfect fit.",
  },
  {
    question: "What design tools do you use?",
    answer: "I primarily use Figma for UI/UX design, Adobe Photoshop and Illustrator for brand identity work, and various prototyping tools for interactive designs.",
  },
  {
    question: "How long does a project take?",
    answer: "Project timelines vary based on complexity. A brand identity project typically takes 2-4 weeks, while packaging design can be completed in 1-3 weeks.",
  },
  {
    question: "Do you provide revisions?",
    answer: "Yes, all projects include revision rounds to ensure the final design meets your expectations. The number of revisions depends on the project scope.",
  },
  {
    question: "What industries do you work with?",
    answer: "I work across various industries including tech, food & beverage, fashion, wellness, and sustainability-focused brands.",
  },
  {
    question: "Do you offer development services?",
    answer: "While my focus is on design, I collaborate with trusted developers to bring designs to life. I can recommend development partners for your project.",
  },
  {
    question: "What is your pricing structure?",
    answer: "Pricing is project-based and depends on scope, complexity, and timeline. Contact me for a detailed quote tailored to your specific needs.",
  },
  {
    question: "Can you redesign my existing website?",
    answer: "Absolutely! I offer website redesign services that focus on improving user experience, visual appeal, and brand consistency.",
  },
];

const faqTags = ["Product Design", "Brand Identity Design", "Branding"];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="relative mt-8">
      <div className="max-w-[1800px] mx-auto bg-[#0d0d0d] rounded-[48px] px-6 md:px-14 lg:px-20 py-16 md:py-[100px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left content */}
          <div>
            {/* Badge */}
            <Reveal variants={fadeLeft}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
                <span className="w-2 h-2 rounded-full bg-white" />
                <span className="text-sm text-white/80 font-[family-name:var(--font-satoshi)]">FAQ&apos;S</span>
              </div>
            </Reveal>

            <Reveal variants={fadeUp} delay={0.1}>
              <h2 className="text-5xl md:text-7xl lg:text-[92px] font-normal leading-[1] mb-4 font-[family-name:var(--font-satoshi)]">
                Answers
              </h2>
            </Reveal>

            <Reveal variants={fadeUp} delay={0.15}>
              <p className="text-white/50 text-2xl leading-relaxed mb-8 max-w-lg font-[family-name:var(--font-satoshi)]">
                Find answers to common questions about my design process, services etc…
              </p>
            </Reveal>

            {/* Image */}
            <Reveal variants={scaleUp} delay={0.2}>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] mb-8">
                <Image
                  src="/images/faq-pic.jpg"
                  alt="design pic"
                  fill
                  className="object-cover grayscale"
                  sizes="50vw"
                />
              </div>
            </Reveal>

            {/* Tags */}
            <StaggerReveal className="flex flex-wrap gap-2 mb-8" stagger={0.05} delay={0.3}>
              {faqTags.map((tag) => (
                <Reveal key={tag} variants={fadeUp}>
                  <span className="px-4 py-2 rounded-full border border-white/10 text-sm text-white/70 font-[family-name:var(--font-satoshi)]">
                    {tag}
                  </span>
                </Reveal>
              ))}
            </StaggerReveal>

            <Reveal variants={fadeUp} delay={0.35}>
              <a
                href="https://cal.com/rick/get-rick-rolled"
                className="inline-block px-6 py-3 bg-white text-black rounded-full text-sm font-medium hover:bg-white/90 transition-colors font-[family-name:var(--font-satoshi)]"
              >
                Book a Free Call
              </a>
            </Reveal>
          </div>

          {/* Right - FAQ accordion */}
          <StaggerReveal className="space-y-2" stagger={0.06}>
            {faqs.map((faq, i) => (
              <Reveal key={i} variants={fadeUp}>
                <div className="rounded-xl border border-white/5 overflow-hidden">
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-white/[0.02] transition-colors"
                  >
                    <span className="text-lg font-normal font-[family-name:var(--font-satoshi)]">{faq.question}</span>
                    <span className="text-white/40 text-lg flex-shrink-0 ml-4">
                      {openIndex === i ? "×" : "+"}
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === i ? "max-h-40 pb-5" : "max-h-0"
                    }`}
                  >
                    <p className="px-5 text-white/40 text-sm leading-relaxed font-[family-name:var(--font-satoshi)]">
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
