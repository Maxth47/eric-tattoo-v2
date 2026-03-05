"use client";

import Image from "next/image";

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

function ProjectCard({ src, href = "https://www.behance.net/" }: { src: string; href?: string }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl aspect-[494/463]">
      <Image src={src} alt="project img" fill className="object-cover grayscale" sizes="(max-width: 768px) 100vw, 33vw" />
      <a href={href} className="absolute bottom-[10px] left-2 right-2 flex items-center justify-center gap-1 py-3 px-5 bg-[rgba(99,99,99,0.3)] backdrop-blur-sm rounded-full text-xs text-white font-[family-name:var(--font-satoshi)]">
        View Casestudy <ArrowIcon />
      </a>
    </div>
  );
}

export default function ProjectsGrid() {
  return (
    <section id="projects" className="relative px-4 md:px-8 lg:px-10 py-4">
      {/* Staggered 3-column grid: center column wider, align-items:center creates offset */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-2.5 max-w-[1600px] mx-auto">
        {/* Left column */}
        <div className="flex flex-col gap-2.5 w-full md:w-[31%]">
          <ProjectCard src="/images/project-1.png" />
          <ProjectCard src="/images/project-2.png" />
          <ProjectCard src="/images/project-3.png" />
        </div>

        {/* Center column - wider, so images are taller, column is taller, centered alignment creates stagger */}
        <div className="flex flex-col gap-2.5 w-full md:w-[37%]">
          <ProjectCard src="/images/project-4.jpg" />
          <ProjectCard src="/images/project-5.png" />
          <ProjectCard src="/images/project-6.png" />
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-2.5 w-full md:w-[31%]">
          <ProjectCard src="/images/project-7.png" />
          <ProjectCard src="/images/project-8.png" />
          <ProjectCard src="/images/project-9.png" />
        </div>
      </div>

      {/* Bottom links */}
      <div className="flex items-center justify-center gap-4 mt-12">
        <a href="#projects" className="text-sm text-white underline underline-offset-4 font-[family-name:var(--font-satoshi)]">
          All Projects
        </a>
        <a
          href="https://cal.com/rick/get-rick-rolled"
          className="px-6 py-3 bg-transparent border border-white/20 text-white rounded-full text-sm font-medium hover:bg-white/5 transition-colors font-[family-name:var(--font-satoshi)]"
        >
          Book a Free Call
        </a>
      </div>
    </section>
  );
}
