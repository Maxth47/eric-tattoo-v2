"use client";

import Image from "next/image";
import {
  Reveal,
  StaggerReveal,
  fadeUp,
  fadeLeft,
  fadeRight,
  scaleUp,
} from "@/lib/motion";

const tags = [
  "Consultation",
  "Custom Design",
  "Tattoo Session",
  "Touch-ups",
  "Aftercare",
];

const services = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 256 256" fill="white">
        <path
          d="M232,128A104,104,0,1,1,128,24,104.13,104.13,0,0,1,232,128Z"
          opacity="0.2"
        />
        <path d="M140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180ZM128,72c-22.06,0-40,16.15-40,36v4a8,8,0,0,0,16,0v-4c0-11,10.77-20,24-20s24,9,24,20-10.77,20-24,20a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-.72c18.24-3.35,32-17.9,32-35.28C168,88.15,150.06,72,128,72Zm104,56A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z" />
      </svg>
    ),
    title: "Consultation",
    description:
      "A free initial consultation to discuss your tattoo ideas, placement, and sizing. We'll explore references, talk through your vision, and plan every detail before committing to a design.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 256 256" fill="white">
        <path
          d="M224,76.68,179.32,32a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L224,99.31A16,16,0,0,0,224,76.68Z"
          opacity="0.2"
        />
        <path d="M227.32,73.37,182.63,28.69a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.32,96a16,16,0,0,0,0-22.63ZM92.69,208H48V163.31l88-88L180.69,120Z" />
      </svg>
    ),
    title: "Custom Design",
    description:
      "I create a fully custom design based on your brief. We'll go through revisions together until the artwork is exactly what you envisioned — ready to become permanent art on your skin.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 256 256" fill="white">
        <path
          d="M215.46,40.54a88,88,0,0,0-124.92,0L56,75.06a4,4,0,0,0,0,5.66L180.28,205a4,4,0,0,0,5.66,0l29.52-29.54A88,88,0,0,0,215.46,40.54Z"
          opacity="0.2"
        />
        <path d="M232,92c0,23.64-9.22,45.84-25.95,62.52L183.14,177.4a16,16,0,0,1-22.63,0L89.37,106.26l2.83-2.83-36.69-36.68a8,8,0,0,1,11.32-11.32L98.86,87.46l11.31-11.32L78.14,44.11a8,8,0,0,1,11.32-11.32L121.49,64.8l11.31-11.31L100.77,21.46A8,8,0,0,1,112.09,10.14l42,41.95a8,8,0,0,1,0,11.32l-36.7,36.69,60.69,60.69,22.88-22.87C215.38,123.55,224,108.18,224,92a52,52,0,0,0-88.74-36.76,8,8,0,0,1-11.32-11.32A68,68,0,0,1,232,92ZM88,216a8,8,0,0,1-5.66-2.34l-40-40a8,8,0,0,1,11.32-11.32l40,40A8,8,0,0,1,88,216Zm-8-56a8,8,0,0,1-5.66-2.34l-24-24A8,8,0,0,1,61.66,122.34l24,24A8,8,0,0,1,80,160Zm96,24a8,8,0,0,1-5.66-2.34l-24-24a8,8,0,0,1,11.32-11.32l24,24A8,8,0,0,1,176,184Z" />
      </svg>
    ),
    title: "Tattoo Session",
    description:
      "The main event — your tattoo comes to life. I work with precision and care in a clean, comfortable studio environment. Sessions are paced for your comfort with breaks as needed.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 256 256" fill="white">
        <path
          d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z"
          opacity="0.2"
        />
        <path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z" />
      </svg>
    ),
    title: "Touch-up & Aftercare",
    description:
      "Every tattoo includes a complimentary touch-up session after healing. I also provide detailed aftercare guidance to ensure your tattoo heals perfectly and stays vibrant for years.",
  },
];

function MIcon({ d }: { d: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 256 256"
      fill="currentColor"
      className="flex-shrink-0"
    >
      <path d={d} />
    </svg>
  );
}

const marqueeRow1 = [
  {
    icon: (
      <MIcon d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200ZM184,96a8,8,0,0,1-8,8H80a8,8,0,0,1,0-16h96A8,8,0,0,1,184,96Z" />
    ),
    text: "Sleeve Tattoos",
  },
  {
    icon: (
      <MIcon d="M224,76.68,179.32,32a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L224,99.31A16,16,0,0,0,224,76.68ZM92.69,208H48V163.31l88-88L180.69,120Z" />
    ),
    text: "Portraits",
  },
  {
    icon: (
      <MIcon d="M200,136a8,8,0,0,1-8,8H136v56a8,8,0,0,1-16,0V144H64a8,8,0,0,1,0-16h56V72a8,8,0,0,1,16,0v56h56A8,8,0,0,1,200,136ZM208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,176H48V48H208V208Z" />
    ),
    text: "Geometric Art",
  },
  {
    icon: (
      <MIcon d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40A16,16,0,0,0,24,64V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V64A16,16,0,0,0,216,48ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm120,24V200H40V64Z" />
    ),
    text: "Japanese Style",
  },
  {
    icon: (
      <MIcon d="M223.68,66.15,135.68,18a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32l80.34,44L128,120,47.66,76ZM40,90l80,43.78v85.79L40,175.82Zm96,129.57V133.82L216,90v85.78Z" />
    ),
    text: "Cover-ups",
  },
  {
    icon: (
      <MIcon d="M178.16,143.63,128,120,178.16,96.37a8,8,0,0,0-4.32-14.74L128,93.09,82.16,81.63a8,8,0,0,0-4.32,14.74L128,120,77.84,143.63a8,8,0,0,0,4.32,14.74L128,146.91l45.84,11.46a8,8,0,0,0,4.32-14.74ZM128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Z" />
    ),
    text: "Fine Line",
  },
];

const marqueeRow2 = [
  {
    icon: (
      <MIcon d="M213.66,82.34l-56-56a8,8,0,0,0-11.32,0l-56,56a8,8,0,0,0,11.32,11.32L136,59.31V168a8,8,0,0,0,16,0V59.31l34.34,34.35a8,8,0,0,0,11.32-11.32ZM200,216a8,8,0,0,1-8,8H64a8,8,0,0,1,0-16H192A8,8,0,0,1,200,216Z" />
    ),
    text: "Watercolor",
  },
  {
    icon: (
      <MIcon d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm-8-120a8,8,0,0,0-8,8v56a8,8,0,0,0,16,0V104A8,8,0,0,0,120,96Zm36,0a8,8,0,0,0-8,8v56a8,8,0,0,0,16,0V104A8,8,0,0,0,156,96Z" />
    ),
    text: "Minimalist",
  },
  {
    icon: (
      <MIcon d="M164.44,105.34l-48-32A8,8,0,0,0,104,80v64a8,8,0,0,0,12.44,6.66l48-32a8,8,0,0,0,0-13.32ZM120,129.05V95l25.58,17ZM216,40H40A16,16,0,0,0,24,56V168a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,128H40V56H216V168Zm16,40a8,8,0,0,1-8,8H32a8,8,0,0,1,0-16H224A8,8,0,0,1,232,208Z" />
    ),
    text: "Tribal",
  },
  {
    icon: (
      <MIcon d="M197.58,129.06,146,110l-19-51.62a15.92,15.92,0,0,0-29.88,0L78,110l-51.62,19a15.92,15.92,0,0,0,0,29.88L78,178l19,51.62a15.92,15.92,0,0,0,29.88,0L146,178l51.62-19a15.92,15.92,0,0,0,0-29.88ZM137,164.22a8,8,0,0,0-4.74,4.74L112,223.85,91.78,169A8,8,0,0,0,87,164.22L32.15,144,87,123.78A8,8,0,0,0,91.78,119L112,64.15,132.22,119a8,8,0,0,0,4.74,4.74L191.85,144Z" />
    ),
    text: "Script & Lettering",
  },
  {
    icon: (
      <MIcon d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
    ),
    text: "Dotwork",
  },
  {
    icon: (
      <MIcon d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,176H48V48H208V208Zm-48-72a8,8,0,0,1-8,8H136v16a8,8,0,0,1-16,0V144H104a8,8,0,0,1,0-16h16V112a8,8,0,0,1,16,0v16h16A8,8,0,0,1,160,136Z" />
    ),
    text: "Blackwork",
  },
];

function SectionButton({ href, children }: { href: string; children: string }) {
  return (
    <a href={href} className="relative flex flex-col items-center group">
      <div
        className="relative z-[2] flex flex-col items-center self-stretch w-auto p-[1.4px] overflow-hidden transition-shadow duration-300 group-hover:shadow-[rgba(255,255,255,0.12)_0px_1px_9px_0px]"
        style={{ backgroundColor: "rgb(59,59,59)", borderRadius: "11.5px" }}
      >
        <div
          className="relative z-[4] flex items-center justify-center w-full overflow-hidden"
          style={{
            backgroundColor: "rgb(0,0,0)",
            borderRadius: "10px",
            padding: "8px 24px",
          }}
        >
          <span className="relative z-[2] text-[18px] leading-[1.6em] text-white font-[family-name:var(--font-inter-display)]">
            {children}
          </span>
        </div>
        <div
          className="absolute z-[1] w-[95px] h-[36px] overflow-hidden"
          style={{
            top: "-19px",
            right: "-17px",
            backgroundColor: "white",
            filter: "blur(8px)",
          }}
        />
      </div>
    </a>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      className="relative flex items-center justify-center w-full overflow-hidden rounded-[48px] px-[18px] py-[80px] md:px-[80px] md:py-[100px]"
    >
      {/* Border overlay */}
      <div
        className="absolute inset-0 rounded-[48px] z-[3] pointer-events-none overflow-hidden"
        style={{
          border: "1px solid rgba(255,255,255,0.1)",
          mask: "linear-gradient(#000 0%, rgba(0,0,0,0.16) 82.8442%)",
          WebkitMask: "linear-gradient(#000 0%, rgba(0,0,0,0.16) 82.8442%)",
        }}
      />

      {/* Container – flex column, max-width 1600px, gap 44px */}
      <div className="flex flex-col items-center gap-[44px] w-full max-w-[1600px]">
        {/* Top container – flex wrap, gap 44px */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-[44px] w-full">
          {/* Left content – flex 1, min-width 460px, gap 24px, pr 40px */}
          <div className="flex flex-col items-start gap-6 flex-1 min-w-0 md:min-w-[460px] w-full md:w-auto pr-10 max-md:pr-0">
            {/* Badge – dark card style */}
            <Reveal variants={fadeLeft}>
              <div
                className="inline-flex items-center gap-1.5"
                style={{
                  backgroundColor: "#0d0d0d",
                  borderRadius: "20px",
                  padding: "6px 16px",
                  boxShadow:
                    "rgba(0,0,0,0.4) 16px 24px 20px 8px, rgba(184,180,180,0.08) 0px 2px 0px 0px inset",
                }}
              >
                <div className="w-[11px] h-[11px] flex items-center justify-center rounded-[10px] bg-white">
                  <div className="w-[8px] h-[9px] flex items-center justify-center rounded-[10px] bg-[#0d0d0d]">
                    <div className="w-[5px] h-[5px] rounded-[10px] bg-white" />
                  </div>
                </div>
                <span className="text-[15px] leading-[1.5em] tracking-[-0.02em] text-white font-[family-name:var(--font-satoshi)]">
                  What I offer
                </span>
              </div>
            </Reveal>

            <Reveal variants={fadeUp} delay={0.1}>
              <h2 className="text-[44px] md:text-[74px] lg:text-[92px] font-normal leading-[1em] tracking-[0em] text-white font-[family-name:var(--font-satoshi)]">
                Services
              </h2>
            </Reveal>

            {/* Description – Inter Display, 24px, opacity 0.9 */}
            <Reveal variants={fadeUp} delay={0.15}>
              <p className="text-[20px] lg:text-[24px] leading-[1.4] text-[#ffffffa6] opacity-90 font-[family-name:var(--font-inter-display)]">
                From your first consultation to the final touch-up, I provide a
                seamless tattoo experience from start to finish.
              </p>
            </Reveal>

            {/* Tags – gap 16px, bg #0d0d0d, rounded 8px */}
            <StaggerReveal
              className="flex flex-wrap gap-3 justify-start"
              stagger={0.05}
              delay={0.2}
            >
              {tags.map((tag) => (
                <Reveal key={tag} variants={fadeUp}>
                  <span className="py-2 px-3 rounded-lg bg-[#0d0d0d] text-[13px] md:text-[15px] leading-[1.5em] tracking-[-0.02em] text-[#ffffffa6] whitespace-nowrap font-[family-name:var(--font-satoshi)]">
                    {tag}
                  </span>
                </Reveal>
              ))}
            </StaggerReveal>

            {/* CTAs – gap 24px, dark buttons */}
            <Reveal variants={fadeUp} delay={0.3}>
              <div className="flex flex-wrap items-center gap-6">
                <SectionButton href="https://www.instagram.com/eric.le.tattoo/">
                  Book a Session
                </SectionButton>
                <SectionButton href="#projects">See Portfolio</SectionButton>
              </div>
            </Reveal>
          </div>

          {/* Right image – flex 1, min-width 460px, height 503px, rounded 17px, shadow */}
          <Reveal
            variants={fadeRight}
            delay={0.2}
            className="flex-1 min-w-0 md:min-w-[460px] w-full md:w-auto"
          >
            <div
              className="relative w-full h-[300px] md:h-[503px] overflow-hidden grayscale"
              style={{
                height: undefined,
                borderRadius: "17px",
                boxShadow: "20px 30px 20px 8px rgba(0,0,0,0.4)",
              }}
            >
              <Image
                src="/images/services-pic.jpg"
                alt="design pic"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
          </Reveal>
        </div>

        {/* Service cards – flex wrap, gap 24px */}
        <StaggerReveal className="flex flex-col md:flex-row gap-6 w-full" stagger={0.1}>
          {/* Two columns */}
          <div className="flex flex-col gap-6 flex-1 w-full md:min-w-[460px]">
            {services.slice(0, 2).map((service) => (
              <Reveal key={service.title} variants={scaleUp}>
                <div
                  className="p-8 rounded-[20px] bg-[#0d0d0d]"
                  style={{ boxShadow: "rgba(0,0,0,0.4) 16px 24px 20px 8px" }}
                >
                  <div className="flex items-center gap-3 mb-5">
                    {service.icon}
                    <h3 className="text-2xl font-semibold font-[family-name:var(--font-inter-display)]">
                      {service.title}
                    </h3>
                  </div>
                  <div className="w-full h-[1px] bg-white/10 mb-5" />
                  <p className="text-[15px] leading-[1.5em] tracking-[-0.02em] text-[#ffffffa6] font-[family-name:var(--font-satoshi)]">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="flex flex-col gap-6 flex-1 w-full md:min-w-[460px]">
            {services.slice(2, 4).map((service) => (
              <Reveal key={service.title} variants={scaleUp}>
                <div
                  className="p-8 rounded-[20px] bg-[#0d0d0d]"
                  style={{ boxShadow: "rgba(0,0,0,0.4) 16px 24px 20px 8px" }}
                >
                  <div className="flex items-center gap-3 mb-5">
                    {service.icon}
                    <h3 className="text-2xl font-semibold font-[family-name:var(--font-inter-display)]">
                      {service.title}
                    </h3>
                  </div>
                  <div className="w-full h-[1px] bg-white/10 mb-5" />
                  <p className="text-[15px] leading-[1.5em] tracking-[-0.02em] text-[#ffffffa6] font-[family-name:var(--font-satoshi)]">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </StaggerReveal>

        {/* Marquee – max-width 1400px, gap 0 between rows */}
        <Reveal className="w-full max-w-[1400px]">
          <div className="flex flex-col overflow-hidden">
            {/* Row 1 */}
            <div
              className="relative h-[79px] overflow-hidden"
              style={{
                maskImage:
                  "linear-gradient(to right, transparent 0%, black 12.5%, black 87.5%, transparent 100%)",
              }}
            >
              <div className="flex items-center gap-6 animate-marquee whitespace-nowrap h-full p-2.5">
                {[...marqueeRow1, ...marqueeRow1].map((item, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 flex items-center gap-[10px] bg-[#0d0d0d] rounded-[78px] text-[15px] leading-[1.5em] tracking-[-0.02em] text-[#ffffffa6] font-[family-name:var(--font-satoshi)]"
                    style={{ padding: "14px 16px" }}
                  >
                    <div className="w-[20px] h-[20px] flex-shrink-0">
                      {item.icon}
                    </div>
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
            {/* Row 2 – reverse */}
            <div
              className="relative h-[79px] overflow-hidden"
              style={{
                maskImage:
                  "linear-gradient(to right, transparent 0%, black 12.5%, black 87.5%, transparent 100%)",
              }}
            >
              <div className="flex items-center gap-6 animate-marquee-reverse whitespace-nowrap h-full p-2.5">
                {[...marqueeRow2, ...marqueeRow2].map((item, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 flex items-center gap-[10px] bg-[#0d0d0d] rounded-[78px] text-[15px] leading-[1.5em] tracking-[-0.02em] text-[#ffffffa6] font-[family-name:var(--font-satoshi)]"
                    style={{ padding: "14px 16px" }}
                  >
                    <div className="w-[20px] h-[20px] flex-shrink-0">
                      {item.icon}
                    </div>
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
