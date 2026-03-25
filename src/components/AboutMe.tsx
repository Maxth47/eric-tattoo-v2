"use client";

import Image from "next/image";
import { useRef } from "react";
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

const works = [
  { src: "/images/projects/project-6.webp", alt: "project img" },
  { src: "/images/projects/project-8.webp", alt: "project img" },
  { src: "/images/projects/project-9.webp", alt: "project img" },
  { src: "/images/projects/project-7.webp", alt: "project img" },
  { src: "/images/projects/project-5.webp", alt: "project img" },
];

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 256 256" fill="currentColor">
      <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" />
    </svg>
  );
}

export default function AboutMe() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.25;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="about-me" className="relative flex flex-col items-center gap-[44px] w-full py-[100px] px-[80px] max-md:px-[18px] max-md:py-[80px] overflow-hidden rounded-[48px] bg-[#0d0d0d]">
      {/* Border overlay – fades toward bottom */}
      <div
        className="absolute inset-0 rounded-[48px] z-[3] pointer-events-none overflow-hidden"
        style={{
          border: "1px solid rgba(255, 255, 255, 0.1)",
          mask: "linear-gradient(#000 0%, rgba(0,0,0,0.16) 82.8442%)",
          WebkitMask: "linear-gradient(#000 0%, rgba(0,0,0,0.16) 82.8442%)",
        }}
      />

      {/* Container – max-width 1600px, flex-wrap */}
      <div className="flex flex-wrap justify-center items-center gap-[44px] w-full max-w-[1600px]">
        {/* Left column – more info */}
        <div className="flex flex-col gap-8 flex-1 min-w-[460px] max-md:min-w-[240px] max-md:w-full pr-5 max-md:pr-0">
          <Reveal variants={fadeLeft}>
            <h2 className="text-[44px] md:text-[64px] lg:text-[92px] font-normal leading-[1em] tracking-[0em] text-white font-[family-name:var(--font-satoshi)]">
              Meet Meily
            </h2>
          </Reveal>

          <Reveal variants={fadeUp} delay={0.1}>
            <p className="text-white opacity-70 text-[18px] leading-[1.6em] max-w-[640px] font-[family-name:var(--font-inter-display)]">
              I&apos;m Meily, a passionate Brand Identity &amp; Package Designer based in tokyo. I specialize in crafting bold visual identities and packaging that captivate and inspire, blending creativity with strategy to elevate brands.
            </p>
          </Reveal>

          {/* Divider */}
          <div className="w-full h-[1px] bg-white/10" />

          {/* Skills – gap 16px */}
          <StaggerReveal className="flex flex-wrap gap-4" stagger={0.05} delay={0.2}>
            {skills.map((skill) => (
              <Reveal key={skill} variants={fadeUp}>
                <span className="py-[10px] px-[12px] rounded-lg bg-[#0d0d0d] text-[15px] leading-[1.5em] tracking-[-0.02em] text-[#ffffffa6] font-[family-name:var(--font-satoshi)]">
                  {skill}
                </span>
              </Reveal>
            ))}
          </StaggerReveal>

          {/* Divider */}
          <div className="w-full h-[1px] bg-white/10" />

          {/* Experience – gap 20px */}
          <StaggerReveal className="flex flex-col gap-5" stagger={0.1} delay={0.3}>
            {experience.map((exp) => (
              <Reveal key={exp.role + exp.company} variants={fadeUp}>
                <div
                  className="flex flex-wrap items-center gap-12 p-4 rounded-[10px] bg-black w-full"
                  style={{ boxShadow: "rgba(0, 0, 0, 0.4) 16px 24px 20px 8px" }}
                >
                  <span className="text-[15px] leading-[1.5em] tracking-[-0.02em] text-[#ffffffa6] italic font-[family-name:var(--font-satoshi)] flex-1 text-left">{exp.role}</span>
                  <span className="text-[15px] leading-[1.5em] tracking-[-0.02em] text-[#ffffffa6] font-[family-name:var(--font-satoshi)] flex-1 text-left">{exp.company}</span>
                  <span className="text-[15px] leading-[1.5em] tracking-[-0.02em] text-[#ffffffa6] font-[family-name:var(--font-satoshi)] flex-1 text-right">{exp.period}</span>
                </div>
              </Reveal>
            ))}
          </StaggerReveal>
        </div>

        {/* Right image – aspect-ratio 1.067, border-radius 4px */}
        <Reveal variants={fadeRight} delay={0.2} className="flex-1 min-w-[460px] max-md:min-w-[240px] max-md:w-full">
          <div className="relative rounded-[4px] overflow-hidden w-full" style={{ aspectRatio: "1.067" }}>
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
      <Reveal>
        <div className="flex items-center gap-2 w-full max-w-[1600px]">
          <h3 className="text-[24px] md:text-[20px] lg:text-[24px] font-normal leading-[1.4] text-[#ffffffa6] font-[family-name:var(--font-inter-display)]">Recent Works</h3>
          <svg width="24" height="24" viewBox="0 0 256 256" fill="currentColor" className="text-white">
            <path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z" opacity="0.2" />
            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm37.66-85.66a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32,0l-32-32a8,8,0,0,1,11.32-11.32L120,148.69V88a8,8,0,0,1,16,0v60.69l18.34-18.35A8,8,0,0,1,165.66,130.34Z" />
          </svg>
        </div>
      </Reveal>

      {/* Divider */}
      <div className="w-full max-w-[1600px] h-[1px] bg-white/10" />

      {/* Carousel – height 355px, inside section */}
      <Reveal className="w-full max-w-[1600px]">
        <div className="relative h-[355px]">
          <div
            ref={scrollRef}
            className="flex gap-2.5 overflow-x-auto no-scrollbar h-full p-2.5"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {works.map((work, i) => (
              <a
                key={i}
                href="https://www.behance.net/"
                className="relative flex-shrink-0 h-full rounded-[4px] overflow-hidden grayscale hover:grayscale-0 transition-all duration-500"
                style={{ scrollSnapAlign: "center", width: "calc(25% - 7.5px)" }}
              >
                <Image src={work.src} alt={work.alt} fill className="object-cover" sizes="25vw" />
                <div
                  className="absolute bottom-4 left-4 right-4 flex items-center justify-center gap-2 py-3 rounded-full text-[15px] text-white"
                  style={{
                    backdropFilter: "blur(6px)",
                    backgroundColor: "rgba(99, 99, 99, 0.3)",
                    border: "1px solid rgb(214, 214, 214)",
                    boxShadow: "rgba(92, 92, 92, 0.3) 0px 0px 20px 4px",
                  }}
                >
                  <span className="font-[family-name:var(--font-satoshi)] tracking-[-0.02em] leading-[1.5em]">View Casestudy</span>
                  <ArrowIcon />
                </div>
              </a>
            ))}
          </div>

          {/* Prev / Next overlay controls */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/20 flex items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity"
            aria-label="Previous"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/20 flex items-center justify-center text-white transition-opacity"
            aria-label="Next"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </Reveal>
    </section>
  );
}
