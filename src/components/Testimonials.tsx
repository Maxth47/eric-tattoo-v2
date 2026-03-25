"use client";

import Image from "next/image";
import { Reveal, StaggerReveal, fadeUp, fadeLeft, fadeRight, scaleUp } from "@/lib/motion";

const reviews = [
  {
    avatar: "/images/review-avatar-1.png",
    name: "Richards Johnson",
    role: "Creative Director & Lead Designer",
    quote: "\"Working with Meily was a seamless experience. Her ability to merge creativity with functionality resulted in designs that not only looked stunning but also drove meaningful engagement. Highly recommended!\"",
    rating: "5.0",
  },
  {
    avatar: "/images/review-avatar-2.png",
    name: "June Lee",
    role: "CEO of GreenRoots",
    quote: "\"Meily's strategic approach to design brought our brand vision to life. The packaging and brand elements she developed elevated our aesthetic and aligned perfectly with our sustainability values.\"",
    rating: "5.0",
  },
  {
    avatar: "/images/review-avatar-3.png",
    name: "Jona Carter",
    role: "Founder of EcoLux",
    quote: "\"Every project Meily touches turns into a perfect blend of design and purpose. She crafted packaging that reflected our eco-friendly mission while making our products stand out on the shelves.\"",
    rating: "5.0",
  },
  {
    avatar: "/images/review-avatar-4.png",
    name: "Sofia Toms",
    role: "Founder at GreenK Studios",
    quote: "\"Meily's designs speak for themselves — bold, strategic, and impactful. She took the time to understand our brand and delivered results that exceeded every expectation.\"",
    rating: "5.0",
  },
];

const stats = [
  { value: "180+", label: "design projects completed." },
  { value: "96%", label: "Client satisfaction rate." },
  { value: "15+", label: "Years of experience" },
];

function StarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#f5c518" stroke="#f5c518" strokeWidth="1">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative mt-8">
      <div className="relative max-w-[1800px] mx-auto bg-[#0d0d0d] rounded-[48px] px-6 md:px-14 lg:px-20 py-16 md:py-[100px] overflow-hidden">
        {/* Border overlay */}
        <div className="absolute inset-0 rounded-[48px] z-[3] pointer-events-none overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.1)", mask: "linear-gradient(#000 0%, rgba(0,0,0,0.16) 82.8442%)", WebkitMask: "linear-gradient(#000 0%, rgba(0,0,0,0.16) 82.8442%)" }} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Left image */}
          <Reveal variants={fadeLeft}>
            <div className="relative rounded-2xl overflow-hidden h-[300px] lg:h-[400px]">
              <Image
                src="/images/client-pic.png"
                alt="client pic"
                fill
                className="object-cover grayscale"
              />
            </div>
          </Reveal>

          {/* Right content */}
          <div>
            {/* Badge */}
            <Reveal variants={fadeRight}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
                <span className="w-2 h-2 rounded-full bg-white" />
                <span className="text-sm text-white/80 font-[family-name:var(--font-satoshi)]">Reviews</span>
              </div>
            </Reveal>

            <Reveal variants={fadeUp} delay={0.1}>
              <h2 className="text-5xl md:text-7xl lg:text-[92px] font-normal leading-[1] mb-4 font-[family-name:var(--font-satoshi)]">
                Client Reviews
              </h2>
            </Reveal>

            <Reveal variants={fadeUp} delay={0.15}>
              <p className="text-white/50 text-2xl leading-relaxed mb-8 max-w-lg font-[family-name:var(--font-satoshi)]">
                Real feedback from clients who trusted my design expertise to elevate their brands successfully.
              </p>
            </Reveal>

            {/* CTAs */}
            <Reveal variants={fadeUp} delay={0.2}>
              <div className="flex items-center gap-4">
                <a
                  href="https://cal.com/rick/get-rick-rolled"
                  className="px-6 py-3 bg-white text-black rounded-full text-sm font-medium hover:bg-white/90 transition-colors font-[family-name:var(--font-satoshi)]"
                >
                  Book a Free Call
                </a>
                <a
                  href="#services"
                  className="px-6 py-3 bg-transparent border border-white/20 text-white rounded-full text-sm font-medium hover:bg-white/5 transition-colors font-[family-name:var(--font-satoshi)]"
                >
                  See Services
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Reviews carousel - auto scrolling */}
        <Reveal>
          <div className="relative overflow-hidden mb-12">
            <div className="flex animate-marquee-slow">
              {[...reviews, ...reviews, ...reviews, ...reviews].map((review, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-[500px] px-10 pt-10 pb-20 mx-2 rounded-[10px] border border-white/5 bg-black/30 flex flex-col gap-[30px]"
                >
                  <div className="relative w-[84px] h-[84px] rounded-full overflow-hidden flex-shrink-0">
                    <Image src={review.avatar} alt="client pic" fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="text-4xl font-medium font-[family-name:var(--font-satoshi)]">{review.name}</h4>
                    <p className="text-[15px] text-white/65 mt-1 font-[family-name:var(--font-satoshi)]">{review.role}</p>
                  </div>
                  <p className="text-white text-lg leading-relaxed font-[family-name:var(--font-satoshi)]">
                    {review.quote}
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">{review.rating}</span>
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

        {/* Stats */}
        <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 rounded-2xl border border-white/5 bg-black/30 overflow-hidden" stagger={0.15}>
          {stats.map((stat, i) => (
            <Reveal key={stat.value} variants={scaleUp}>
              <div className={`p-8 text-center ${i < stats.length - 1 ? "md:border-r border-white/5" : ""}`}>
                <h3 className="text-4xl font-medium mb-2 font-[family-name:var(--font-satoshi)]">
                  {stat.value}
                </h3>
                <p className="text-white/65 text-2xl font-[family-name:var(--font-satoshi)]">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
