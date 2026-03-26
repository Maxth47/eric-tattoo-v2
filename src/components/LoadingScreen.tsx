"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef, useCallback } from "react";

const words = ["Your Story.", "Our Craft.", "One Masterpiece."];
const DURATION = 2700;
const WORD_INTERVAL = 900;
const COMPLETE_DELAY = 400;
const ease: [number, number, number, number] = [0.4, 0, 0.2, 1];

export default function LoadingScreen({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [progress, setProgress] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  // Word cycling
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      if (i >= words.length - 1) {
        setWordIndex(words.length - 1);
        clearInterval(interval);
      } else {
        setWordIndex(i);
      }
    }, WORD_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  // Progress counter
  useEffect(() => {
    const start = performance.now();
    let raf: number;
    let done = false;

    const tick = (now: number) => {
      const elapsed = now - start;
      const p = Math.min((elapsed / DURATION) * 100, 100);
      setProgress(p);

      if (p >= 100 && !done) {
        done = true;
        setTimeout(() => onCompleteRef.current(), COMPLETE_DELAY);
        return;
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{ backgroundColor: "#0a0a0a" }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease }}
    >
      {/* Portfolio label – top left */}
      <motion.div
        className="absolute top-8 left-8 md:top-12 md:left-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease }}
      >
        <span
          className="text-xs md:text-sm uppercase tracking-[0.3em]"
          style={{ color: "#888888" }}
        >
          Eric Tattoo
        </span>
      </motion.div>

      {/* Rotating words – center */}
      <div className="absolute inset-0 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.span
            key={wordIndex}
            className="text-4xl md:text-6xl lg:text-7xl italic"
            style={{
              color: "rgba(245,245,245,0.8)",
              fontFamily: "'Instrument Serif', serif",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease }}
          >
            {words[wordIndex]}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Counter – bottom right */}
      <motion.div
        className="absolute bottom-8 right-8 md:bottom-12 md:right-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease }}
      >
        <span
          className="text-6xl md:text-8xl lg:text-9xl tabular-nums"
          style={{ color: "#f5f5f5", fontFamily: "'Instrument Serif', serif" }}
        >
          {Math.round(progress).toString().padStart(3, "0")}
        </span>
      </motion.div>

      {/* Progress bar – bottom edge */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[3px]"
        style={{ backgroundColor: "rgba(31,31,31,0.5)" }}
      >
        <motion.div
          className="h-full origin-left"
          style={{
            background: "linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)",
            boxShadow: "0 0 8px rgba(137, 170, 204, 0.35)",
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: progress / 100 }}
          transition={{ duration: 0.1, ease: "linear" }}
        />
      </div>
    </motion.div>
  );
}
