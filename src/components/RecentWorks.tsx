"use client";

import Image from "next/image";
import { useRef } from "react";
import { Reveal, fadeUp } from "@/lib/motion";

const works = [
  { src: "/images/projects/project-6.webp", alt: "project img" },
  { src: "/images/projects/project-8.webp", alt: "project img" },
  { src: "/images/projects/project-9.webp", alt: "project img" },
  { src: "/images/projects/project-7.webp", alt: "project img" },
  { src: "/images/projects/project-5.webp", alt: "project img" },
];

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

export default function RecentWorks() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative px-4 md:px-8 lg:px-10 -mt-8">
      <div className="max-w-[1600px] mx-auto">
        {/* Divider line */}
        <div className="border-t border-white/10 mb-8" />

        {/* Carousel */}
        <Reveal variants={fadeUp}>
          <div className="relative">
            <div
              ref={scrollRef}
              className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth pb-4"
            >
              {works.map((work, i) => (
                <div
                  key={i}
                  className="group relative flex-shrink-0 w-[280px] md:w-[300px] aspect-[3/4] rounded-2xl overflow-hidden"
                >
                  <Image src={work.src} alt={work.alt} fill className="object-cover grayscale" />
                  <a
                    href="https://www.behance.net/"
                    className="absolute bottom-4 left-4 right-4 flex items-center justify-center gap-2 py-3 bg-white/10 backdrop-blur-md rounded-full text-sm text-white opacity-0 group-hover:opacity-100 transition-all"
                  >
                    View Casestudy <ArrowIcon />
                  </a>
                </div>
              ))}
            </div>

            {/* Carousel controls */}
            <div className="flex items-center justify-center gap-3 mt-6">
              <button
                onClick={() => scroll("left")}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-colors"
                aria-label="Previous"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-colors"
                aria-label="Next"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
