"use client";

import Image from "next/image";
import { Reveal, StaggerReveal, fadeUp, fadeLeft, fadeRight } from "@/lib/motion";

const skills = [
  "Product Design",
  "Brand Identity Design",
  "UX Design",
  "Branding",
  "Packaging Design",
  "Figma",
  "Photoshop",
];

const experience = [
  { role: "Freelance", company: "GreenLeaf Co", period: "Currently" },
  { role: "Brand Designer", company: "UrbanFit Studio", period: "2023-24" },
  { role: "Package Designer", company: "GreenK Studio", period: "2020-22" },
];

export default function AboutMe() {
  return (
    <section id="about-me" className="relative mt-8">
      <div className="bg-[#0d0d0d] rounded-[48px] max-w-[1800px] mx-auto px-6 md:px-14 lg:px-20 py-16 md:py-[100px]">
       <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-11">
          {/* Left content */}
          <div className="flex flex-col gap-8 pr-0 lg:pr-5">
            <Reveal variants={fadeLeft}>
              <h2 className="text-5xl md:text-7xl lg:text-[92px] font-normal leading-[1] font-[family-name:var(--font-satoshi)]">
                Meet Meily
              </h2>
            </Reveal>

            <Reveal variants={fadeUp} delay={0.1}>
              <p className="text-white/50 text-lg leading-relaxed font-[family-name:var(--font-satoshi)]">
                I&apos;m Meily, a passionate Brand Identity &amp; Package Designer based in tokyo. I specialize in crafting bold visual identities and packaging that captivate and inspire, blending creativity with strategy to elevate brands.
              </p>
            </Reveal>

            {/* Divider */}
            <div className="border-t border-white/10" />

            {/* Skills */}
            <StaggerReveal className="flex flex-wrap gap-4" stagger={0.05} delay={0.2}>
              {skills.map((skill) => (
                <Reveal key={skill} variants={fadeUp}>
                  <span className="px-3 py-2.5 rounded-lg border border-white/10 text-[15px] text-white/70 font-[family-name:var(--font-satoshi)]">
                    {skill}
                  </span>
                </Reveal>
              ))}
            </StaggerReveal>

            {/* Divider */}
            <div className="border-t border-white/10" />

            {/* Experience */}
            <StaggerReveal className="space-y-6" stagger={0.1} delay={0.3}>
              {experience.map((exp) => (
                <Reveal key={exp.role + exp.company} variants={fadeUp}>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-[15px] italic font-[family-name:var(--font-satoshi)] w-1/3">{exp.role}</span>
                    <span className="text-white/60 text-[15px] font-[family-name:var(--font-satoshi)] w-1/3">{exp.company}</span>
                    <span className="text-white/60 text-[15px] font-[family-name:var(--font-satoshi)] w-1/3 text-right">{exp.period}</span>
                  </div>
                </Reveal>
              ))}
            </StaggerReveal>
          </div>

          {/* Right image - woman portrait */}
          <Reveal variants={fadeRight} delay={0.2}>
            <div className="relative rounded-2xl overflow-hidden min-h-[400px] lg:min-h-[570px]">
              <Image
                src="/images/project-4.jpg"
                alt="profile pic"
                fill
                className="object-cover grayscale"
                sizes="50vw"
              />
            </div>
          </Reveal>
        </div>

        {/* Recent Works label */}
        <Reveal delay={0.2}>
          <div className="flex items-center gap-3 mt-14 mb-2">
            <h3 className="text-2xl font-normal font-[family-name:var(--font-satoshi)]">Recent Works</h3>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/60">
              <circle cx="12" cy="12" r="10" />
              <path d="M8 12l4 4 4-4" />
            </svg>
          </div>
        </Reveal>
       </div>
      </div>
    </section>
  );
}
