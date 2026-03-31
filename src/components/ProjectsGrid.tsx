"use client";

import Image from "next/image";
import { useBooking } from "@/lib/BookingContext";

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 256 256" fill="white">
      <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" />
    </svg>
  );
}

function ProjectCard({ src, href = "https://www.instagram.com/eric.le.tattoo/" }: { src: string; href?: string }) {
  return (
    <div className="w-full">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block w-full overflow-hidden rounded-[4px]"
        style={{ aspectRatio: "1.06706" }}
      >
        <Image src={src} alt="Custom tattoo artwork by Eric Le - Helsinki tattoo artist" fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
        <div
          className="absolute z-[2] bottom-[10px] left-[8px] right-[8px] flex items-center justify-center gap-1 overflow-hidden"
          style={{
            padding: "12px 20px",
            backdropFilter: "blur(6px)",
            backgroundColor: "rgba(99,99,99,0.3)",
            border: "1px solid rgb(214,214,214)",
            borderRadius: "40px",
            boxShadow: "rgba(92,92,92,0.3) 0px 0px 20px 4px",
          }}
        >
          <span className="text-[15px] leading-[1.5em] tracking-[-0.02em] text-white font-[family-name:var(--font-satoshi)]">View Casestudy</span>
          <ArrowIcon />
        </div>
      </a>
    </div>
  );
}

export default function ProjectsGrid() {
  const { open: openBooking } = useBooking();
  return (
    <section
      id="projects"
      className="relative flex flex-col items-center w-full"
      style={{ padding: "10px 5px 100px", gap: "54px" }}
    >
      {/* 3-column grid – center column 20% wider */}
      <div className="flex flex-col lg:flex-row items-center gap-[10px] w-full max-w-[1600px] mx-auto">
        {/* Col 1 */}
        <div className="flex flex-col items-center gap-[10px] flex-1 w-full overflow-hidden">
          <ProjectCard src="/images/projects/project-1.webp" />
          <ProjectCard src="/images/projects/project-2.webp" />
          <ProjectCard src="/images/projects/project-3.webp" />
        </div>

        {/* Col 2 (center) – 20% wider */}
        <div className="w-full" style={{ flex: "1.2 0 0" }}>
          <div className="flex flex-col items-center gap-[10px] w-full overflow-hidden">
            <ProjectCard src="/images/projects/project-4.webp" />
            <ProjectCard src="/images/projects/project-5.webp" />
            <ProjectCard src="/images/projects/project-6.webp" />
          </div>
        </div>

        {/* Col 3 */}
        <div className="flex flex-col items-center gap-[10px] flex-1 w-full overflow-hidden">
          <ProjectCard src="/images/projects/project-7.webp" />
          <ProjectCard src="/images/projects/project-8.webp" />
          <ProjectCard src="/images/projects/project-9.webp" />
        </div>
      </div>

      {/* Bottom CTAs */}
      <div className="flex flex-wrap items-center justify-center gap-4 px-10">
        <a href="https://www.instagram.com/eric.le.tattoo/" target="_blank" rel="noopener noreferrer" className="text-[15px] leading-[1.5em] tracking-[-0.02em] text-white underline underline-offset-4 font-[family-name:var(--font-satoshi)]">
          All Works
        </a>
        <button
          onClick={openBooking}
          className="px-6 py-3 rounded-full text-[15px] leading-[1.5em] tracking-[-0.02em] text-white hover:bg-white/5 transition-colors font-[family-name:var(--font-satoshi)]"
          style={{ border: "1px solid rgba(255,255,255,0.1)" }}
        >
          Book a Session
        </button>
      </div>
    </section>
  );
}
