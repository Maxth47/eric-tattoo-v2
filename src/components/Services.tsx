"use client";

import Image from "next/image";

const tags = ["Product Design", "Brand Identity Design", "Branding", "Packaging Design", "Mochup Design"];

const services = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/70">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    title: "Brand Identity",
    description: "Crafting unique, memorable brand identities that resonate with your audience — from logos to visual systems — ensuring every touchpoint reflects your brand's essence.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/70">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <path d="M8 12h8M12 8v8" />
      </svg>
    ),
    title: "Brand Design",
    description: "Designing sleek, impactful packaging that not only looks stunning but also connects with your ideal customers — turning first impressions into lasting brand loyalty.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/70">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      </svg>
    ),
    title: "Package Design",
    description: "Bringing your brand to life through high-fidelity product mockups, giving you a clear, realistic preview of how your packaging and visuals will stand out in the real world.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/70">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <rect x="7" y="7" width="10" height="10" rx="1" />
      </svg>
    ),
    title: "Mochup Design",
    description: "Tailored design mockups that align perfectly with your brand's aesthetic — because every detail matters when showcasing your product's true potential.",
  },
];

const marqueeRow1 = [
  { icon: "🖥", text: "Slide Decks" },
  { icon: "✏️", text: "Copywriting" },
  { icon: "🎨", text: "Brand Graphics" },
  { icon: "🔄", text: "Brand Migration" },
  { icon: "📦", text: "Package Design" },
  { icon: "💎", text: "Branding" },
];

const marqueeRow2 = [
  { icon: "⚡", text: "Optimization" },
  { icon: "🌐", text: "Brand Landing Pages" },
  { icon: "📱", text: "Social Media" },
  { icon: "✨", text: "Icons" },
  { icon: "👁", text: "Brand Visibility" },
  { icon: "🔗", text: "Brand Integrations" },
];

export default function Services() {
  return (
    <section id="services" className="relative mt-8">
      <div className="max-w-[1800px] mx-auto bg-[#0d0d0d] rounded-[48px] px-6 md:px-14 lg:px-20 py-16 md:py-[100px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Left content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-white" />
              <span className="text-sm text-white/80 font-[family-name:var(--font-satoshi)]">Design services</span>
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-medium mb-4 font-[family-name:var(--font-inter-display)]">
              Services
            </h2>

            <p className="text-white/50 text-base leading-relaxed mb-8 max-w-lg font-[family-name:var(--font-satoshi)]">
              Helping businesses standout with brand identity packaging that captivates and converts effectively.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full border border-white/10 text-sm text-white/70 font-[family-name:var(--font-satoshi)]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex items-center gap-4">
              <a
                href="https://cal.com/rick/get-rick-rolled"
                className="px-6 py-3 bg-white text-black rounded-full text-sm font-medium hover:bg-white/90 transition-colors font-[family-name:var(--font-satoshi)]"
              >
                Book a Free Call
              </a>
              <a
                href="#projects"
                className="px-6 py-3 bg-transparent border border-white/20 text-white rounded-full text-sm font-medium hover:bg-white/5 transition-colors font-[family-name:var(--font-satoshi)]"
              >
                See Projects
              </a>
            </div>
          </div>

          {/* Right image */}
          <div className="relative rounded-2xl overflow-hidden h-[400px] lg:h-[500px]">
            <Image
              src="/images/services-pic.jpg"
              alt="design pic"
              fill
              className="object-cover grayscale"
              sizes="50vw"
            />
          </div>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-6 rounded-2xl bg-black/40 border border-white/5"
            >
              <div className="flex items-center gap-3 mb-4">
                {service.icon}
                <h3 className="text-lg font-semibold font-[family-name:var(--font-inter-display)]">
                  {service.title}
                </h3>
              </div>
              <p className="text-white/40 text-sm leading-relaxed font-[family-name:var(--font-satoshi)]">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Marquee rows */}
        <div className="space-y-4 overflow-hidden">
          {/* Row 1 */}
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...marqueeRow1, ...marqueeRow1, ...marqueeRow1, ...marqueeRow1, ...marqueeRow1].map((item, i) => (
                <div key={i} className="flex-shrink-0 flex items-center gap-2 px-5 py-2.5 mx-2 rounded-full border border-white/10 text-sm text-white/60 font-[family-name:var(--font-satoshi)]">
                  <span className="text-base">{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - reverse direction */}
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee-reverse">
              {[...marqueeRow2, ...marqueeRow2, ...marqueeRow2, ...marqueeRow2, ...marqueeRow2].map((item, i) => (
                <div key={i} className="flex-shrink-0 flex items-center gap-2 px-5 py-2.5 mx-2 rounded-full border border-white/10 text-sm text-white/60 font-[family-name:var(--font-satoshi)]">
                  <span className="text-base">{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
