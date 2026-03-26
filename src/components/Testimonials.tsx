"use client";

import Image from "next/image";
import { Reveal, StaggerReveal, fadeUp, fadeLeft, fadeRight, scaleUp } from "@/lib/motion";

const reviews = [
  {
    avatar: "/images/review-avatar-1.png",
    name: "Richards Johnson",
    role: "First Tattoo Client",
    quote: "\"Getting my first tattoo with Eric was an incredible experience. He made me feel completely at ease, explained every step, and the result exceeded all my expectations. Absolutely stunning work!\"",
    rating: "5.0",
  },
  {
    avatar: "/images/review-avatar-2.png",
    name: "June Lee",
    role: "Sleeve Collector",
    quote: "\"Eric's work on my full sleeve was phenomenal. His attention to detail and ability to create a cohesive design across multiple sessions is unmatched. Every element flows perfectly together.\"",
    rating: "5.0",
  },
  {
    avatar: "/images/review-avatar-3.png",
    name: "Jona Carter",
    role: "Regular Client",
    quote: "\"Eric's realism work is absolutely mind-blowing. The portrait he did for me looks like a photograph on my skin. His talent for capturing lifelike detail is truly remarkable.\"",
    rating: "5.0",
  },
  {
    avatar: "/images/review-avatar-4.png",
    name: "Sofia Toms",
    role: "Cover-up Client",
    quote: "\"I came to Eric with a tattoo I'd regretted for years, and he transformed it into something I'm genuinely proud of. His cover-up skills are exceptional — you'd never know there was anything underneath.\"",
    rating: "5.0",
  },
];

const stats = [
  { value: "500+", label: "tattoos completed." },
  { value: "96%", label: "Client satisfaction rate." },
  { value: "5+", label: "Years of experience" },
];

function StarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#f5c518" stroke="#f5c518" strokeWidth="1">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

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

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative flex items-center justify-center w-full overflow-hidden rounded-[48px]"
      style={{ padding: "100px 80px" }}
    >
      {/* Border overlay */}
      <div className="absolute inset-0 rounded-[48px] z-[3] pointer-events-none overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.1)", mask: "linear-gradient(#000 0%, rgba(0,0,0,0.16) 82.8442%)", WebkitMask: "linear-gradient(#000 0%, rgba(0,0,0,0.16) 82.8442%)" }} />

      {/* Container */}
      <div className="flex flex-col items-center gap-[44px] w-full max-w-[1600px]">
        {/* Top – image + text side by side */}
        <div className="flex flex-wrap items-center justify-center gap-[44px] w-full overflow-hidden">
          {/* Left image */}
          <Reveal variants={fadeLeft} className="flex-1 min-w-[460px] max-md:min-w-[240px] max-md:w-full">
            <div className="relative w-full overflow-hidden grayscale" style={{ height: "503px", borderRadius: "8px" }}>
              <Image src="/images/client-pic.png" alt="client pic" fill className="object-cover" />
            </div>
          </Reveal>

          {/* Right text content */}
          <div className="flex flex-col items-start gap-6 flex-1 min-w-[460px] max-md:min-w-[240px] max-md:w-full">
            {/* Badge – dark card style */}
            <Reveal variants={fadeRight}>
              <div
                className="inline-flex items-center gap-1.5"
                style={{ backgroundColor: "#0d0d0d", borderRadius: "20px", padding: "6px 16px", boxShadow: "rgba(0,0,0,0.4) 16px 24px 20px 8px, rgba(184,180,180,0.08) 0px 2px 0px 0px inset" }}
              >
                <div className="w-[11px] h-[11px] flex items-center justify-center rounded-[10px] bg-white">
                  <div className="w-[8px] h-[9px] flex items-center justify-center rounded-[10px] bg-[#0d0d0d]">
                    <div className="w-[5px] h-[5px] rounded-[10px] bg-white" />
                  </div>
                </div>
                <span className="text-[15px] leading-[1.5em] tracking-[-0.02em] text-white font-[family-name:var(--font-satoshi)]">Reviews</span>
              </div>
            </Reveal>

            <Reveal variants={fadeUp} delay={0.1}>
              <h2 className="text-[44px] md:text-[74px] lg:text-[92px] font-normal leading-[1em] tracking-[0em] text-white font-[family-name:var(--font-satoshi)]">
                Client Reviews
              </h2>
            </Reveal>

            <Reveal variants={fadeUp} delay={0.15}>
              <p className="text-[20px] lg:text-[24px] leading-[1.4] text-[#ffffffa6] opacity-90 max-w-[640px] font-[family-name:var(--font-inter-display)]">
                Real feedback from clients who trusted my tattoo artistry to bring their vision to life.
              </p>
            </Reveal>

            <Reveal variants={fadeUp} delay={0.2}>
              <div className="flex flex-wrap items-center gap-6">
                <SectionButton href="https://www.instagram.com/eric.le.tattoo/">Book a Session</SectionButton>
                <SectionButton href="#services">See Styles</SectionButton>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Bottom – carousel + stats */}
        <div className="flex flex-col items-center gap-6 w-full overflow-hidden">
          {/* Review carousel – height 500px, mask fade */}
          <Reveal className="w-full">
            <div
              className="relative w-full overflow-hidden"
              style={{ height: "500px", maskImage: "linear-gradient(to right, transparent 0%, black 12.5%, black 87.5%, transparent 100%)" }}
            >
              <div className="flex gap-6 animate-marquee-slow h-full p-2.5">
                {[...reviews, ...reviews, ...reviews, ...reviews].map((review, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 w-[500px] flex flex-col gap-[30px] overflow-hidden"
                    style={{
                      padding: "40px 40px 80px",
                      backdropFilter: "blur(50px)",
                      background: "linear-gradient(180deg, #0d0d0d 25%, rgba(0,0,0,0) 100%)",
                      borderRadius: "10px",
                    }}
                  >
                    <div className="flex flex-col gap-4 w-full">
                      <div className="relative w-[84px] h-[84px] rounded-full overflow-hidden flex-shrink-0" style={{ borderRadius: "42px" }}>
                        <Image src={review.avatar} alt="client pic" fill className="object-cover" />
                      </div>
                      <div className="flex flex-col gap-[5px]">
                        <h4 className="text-[24px] lg:text-[32px] font-medium font-[family-name:var(--font-satoshi)]">{review.name}</h4>
                        <p className="text-[15px] leading-[1.5em] tracking-[-0.02em] text-[#ffffffa6] font-[family-name:var(--font-satoshi)]">{review.role}</p>
                      </div>
                    </div>
                    <p className="text-[18px] leading-[1.6em] text-white font-[family-name:var(--font-inter-display)]">
                      {review.quote}
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="text-[15px] font-medium text-white">{review.rating}</span>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, j) => (
                          <StarIcon key={j} />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Stats – bg #0d0d0d, rounded 18px, padding 48px 40px, max-width 1200px */}
          <StaggerReveal
            className="flex flex-wrap items-center justify-center gap-6 w-full max-w-[1200px] overflow-hidden"
            stagger={0.15}
            style={{ backgroundColor: "#0d0d0d", borderRadius: "18px", padding: "48px 40px" }}
          >
            {stats.map((stat) => (
              <Reveal key={stat.value} variants={scaleUp} className="flex-1 min-w-[280px]">
                <div className="text-center">
                  <h3 className="text-[32px] lg:text-[40px] font-medium mb-2 font-[family-name:var(--font-satoshi)]">
                    {stat.value}
                  </h3>
                  <p className="text-[20px] lg:text-[24px] leading-[1.4] text-[#ffffffa6] font-[family-name:var(--font-inter-display)]">
                    {stat.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </StaggerReveal>
        </div>
      </div>
    </section>
  );
}
