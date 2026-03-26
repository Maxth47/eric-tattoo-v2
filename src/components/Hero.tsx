"use client";

/* eslint-disable @next/next/no-img-element */

import { motion } from "@/lib/motion";

const clientLogos = [
  {
    src: "/images/client-logo-1.svg",
    alt: "Tattoo studio partner logo",
    w: 125,
    h: 27,
  },
  {
    src: "/images/client-logo-2.svg",
    alt: "Tattoo industry partner",
    w: 79,
    h: 27,
  },
  {
    src: "/images/client-logo-3.svg",
    alt: "Tattoo supply partner",
    w: 86,
    h: 27,
  },
  {
    src: "/images/client-logo-4.svg",
    alt: "Tattoo convention partner",
    w: 83,
    h: 30,
  },
  {
    src: "/images/client-logo-5.svg",
    alt: "Tattoo brand partner",
    w: 79,
    h: 27,
  },
];

function MouseIcon() {
  return (
    <svg
      width="25"
      height="38"
      viewBox="0 0 256 256"
      fill="white"
      className="flex-shrink-0"
    >
      <g>
        <path
          d="M200,80v96a56,56,0,0,1-56,56H112a56,56,0,0,1-56-56V80a56,56,0,0,1,56-56h32A56,56,0,0,1,200,80Z"
          opacity="0.2"
        />
        <path d="M144,16H112A64.07,64.07,0,0,0,48,80v96a64.07,64.07,0,0,0,64,64h32a64.07,64.07,0,0,0,64-64V80A64.07,64.07,0,0,0,144,16Zm48,160a48.05,48.05,0,0,1-48,48H112a48.05,48.05,0,0,1-48-48V80a48.05,48.05,0,0,1,48-48h32a48.05,48.05,0,0,1,48,48ZM136,64v48a8,8,0,0,1-16,0V64a8,8,0,0,1,16,0Z" />
      </g>
    </svg>
  );
}

function HeroButton({ href, children }: { href: string; children: string }) {
  return (
    <a href={href} className="relative flex flex-col items-center group">
      {/* Container – 1.4px border via padding */}
      <div
        className="relative z-[2] flex flex-col items-center self-stretch w-auto p-[1.4px] overflow-hidden transition-shadow duration-300 group-hover:shadow-[rgba(255,255,255,0.12)_0px_1px_9px_0px]"
        style={{ backgroundColor: "rgb(59,59,59)", borderRadius: "11.5px" }}
      >
        {/* Inner – black fill */}
        <div
          className="relative z-[4] flex items-center justify-center w-full overflow-hidden"
          style={{
            backgroundColor: "rgb(0,0,0)",
            borderRadius: "10px",
            padding: "8px 24px",
          }}
        >
          {/* Inner glow bottom-left */}
          <div
            className="absolute z-[1] w-[77px] h-[41px] overflow-hidden"
            style={{
              top: "calc(118% - 20.5px)",
              left: "calc(9% - 38.5px)",
              background:
                "radial-gradient(50% 50%, rgb(163,163,163) 0%, transparent 100%)",
              filter: "blur(10px)",
              borderRadius: "999px",
              opacity: 0.41,
            }}
          />
          {/* Inner glow top-right */}
          <div
            className="absolute z-[1] w-[92px] h-[40px] overflow-hidden"
            style={{
              top: "calc(0% - 20px)",
              left: "calc(75% - 46px)",
              background:
                "radial-gradient(50% 50%, rgb(115,115,115) 0%, transparent 100%)",
              filter: "blur(10px)",
              borderRadius: "999px",
            }}
          />
          <span className="relative z-[2] text-[18px] leading-[1.6em] text-white font-[family-name:var(--font-inter-display)]">
            {children}
          </span>
        </div>
        {/* White Top glow */}
        <div
          className="absolute z-[1] w-[95px] h-[36px] overflow-hidden"
          style={{
            top: "-19px",
            right: "-17px",
            backgroundColor: "white",
            filter: "blur(8px)",
          }}
        />
        {/* Bottom white glow left */}
        <div
          className="absolute z-[1] w-[54px] h-[46px] overflow-hidden"
          style={{
            bottom: "-18px",
            left: "-22px",
            backgroundColor: "rgb(230,230,230)",
            filter: "blur(8px)",
          }}
        />
        {/* Bottom white glow right */}
        <div
          className="absolute z-[1] w-[40px] h-[34px] overflow-hidden"
          style={{
            bottom: "-17px",
            left: "-22px",
            backgroundColor: "white",
            filter: "blur(8px)",
          }}
        />
      </div>
      {/* External glow left */}
      <div
        className="absolute z-[1] w-[58px] h-[30px] overflow-hidden"
        style={{
          top: "calc(84% - 15px)",
          left: "-11px",
          background:
            "radial-gradient(50% 50%, rgb(171,171,171) 0%, transparent 100%)",
          filter: "blur(10px)",
          borderRadius: "999px",
        }}
      />
      {/* External glow right */}
      <div
        className="absolute z-[1] w-[74px] h-[41px] overflow-hidden"
        style={{
          top: "-7px",
          right: "-12px",
          background:
            "radial-gradient(50% 50% at 50% 50%, rgb(255,255,255) 0%, transparent 100%)",
          filter: "blur(10px)",
          borderRadius: "21px",
          opacity: 0.62,
        }}
      />
    </a>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center gap-6 w-full overflow-hidden px-[18px] md:px-[40px]"
      style={{
        paddingTop: "120px",
        paddingBottom: "260px",
        minHeight: "100vh",
        marginBottom: "-200px",
      }}
    >
      {/* BG video layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        >
          <source src="/hero-web.mp4" type="video/mp4" />
        </video>
        {/* Overlay gradient – darken top and bottom */}
        <div
          className="absolute inset-0 z-[1] w-full h-full"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.3) 60%, rgb(0,0,0) 100%)",
          }}
        />
      </div>

      {/* Header+Main wrapper */}
      <div className="relative z-[1] flex flex-col items-center w-full pb-10">
        {/* Main – max-width 840px */}
        <main
          className="flex flex-col items-center gap-[80px] w-full max-w-[840px]"
          style={{ padding: "40px 0" }}
        >
          {/* Top – badge/heading/subtitle/buttons + scroll indicator */}
          <div className="flex flex-col items-center gap-[60px] w-full">
            {/* H1+Body – gap 24px */}
            <div className="flex flex-col items-center gap-6 w-full text-center">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="relative inline-flex items-center gap-[10px] rounded-[40px] bg-black overflow-visible"
              >
                <div
                  className="relative z-[2] inline-flex items-center gap-[10px] overflow-hidden"
                  style={{
                    backdropFilter: "blur(68px)",
                    backgroundColor: "rgba(10,10,10,0.4)",
                    borderRadius: "26px",
                    padding: "10px 16px",
                  }}
                >
                  <div className="relative w-[7px] h-[7px] flex-shrink-0">
                    <div
                      className="w-[5px] h-[5px] rounded-full bg-white animate-dot-blink"
                      style={{ boxShadow: "rgb(189,189,189) 0px 0px 14px 1px" }}
                    />
                  </div>
                  <span className="text-[15px] leading-[1.5em] tracking-[-0.02em] text-white font-[family-name:var(--font-satoshi)]">
                    Crafting Unique Tattoo Art
                  </span>
                </div>
                {/* Gradient sweep */}
                <div
                  className="absolute z-[1] inset-[-1px] overflow-hidden rounded-[26px]"
                  style={{
                    background:
                      "linear-gradient(105deg, rgb(255,255,255) -19%, rgba(0,0,0,0) 20%)",
                  }}
                />
              </motion.div>

              {/* Heading */}
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2.8, ease: "linear", delay: 0.5 }}
                className="text-[44px] md:text-[74px] lg:text-[92px] font-normal leading-[1em] tracking-[0em] text-white text-center font-[family-name:var(--font-satoshi)]"
              >
                Tattoo Art that you
                <br />
                need Indeed
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2.8, ease: "linear", delay: 0.7 }}
                className="text-[15px] leading-[1.5em] tracking-[-0.02em] text-[#ffffffa6] max-w-[540px] text-center font-[family-name:var(--font-satoshi)]"
              >
                Tattoo Helsinki — elevate your style with custom design tattoo art.
                Fineline tattoo, cover-up &amp; more. Free tattoo consultation available.
              </motion.p>

              {/* CTAs – gap 16px */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.95, ease: "linear", delay: 1.0 }}
                className="flex flex-wrap items-center justify-center gap-4"
              >
                <HeroButton href="https://www.instagram.com/eric.le.tattoo/">
                  Book Now
                </HeroButton>
                <HeroButton href="#projects">See Portfolio</HeroButton>
              </motion.div>
            </div>

            {/* Scroll indicator – max-width 640px, height 38px, gap 16px */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="flex items-center gap-4 w-full max-w-[640px] h-[38px]"
            >
              <span className="flex-shrink-0 text-[15px] leading-[1.5em] tracking-[-0.02em] text-[#ffffffa6] font-[family-name:var(--font-satoshi)]">
                Scroll down
              </span>
              <div className="flex-1 h-[1px] bg-white/10" />
              <MouseIcon />
              <div className="flex-1 h-[1px] bg-white/10" />
              <span className="flex-shrink-0 text-[15px] leading-[1.5em] tracking-[-0.02em] text-[#ffffffa6] font-[family-name:var(--font-satoshi)]">
                to see projects
              </span>
            </motion.div>
          </div>
        </main>
      </div>
    </section>
  );
}
