"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useBooking } from "@/lib/BookingContext";
import { useRouter } from "next/navigation";
import LoadingScreen from "@/components/LoadingScreen";

export default function BookingPage() {
  const { open, onCloseCallback } = useBooking();
  const router = useRouter();
  const opened = useRef(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (opened.current) return;
    opened.current = true;
    onCloseCallback.current = () => router.push("/");
    open();
  }, [open, onCloseCallback, router]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
      <div className="min-h-screen bg-black" style={{ opacity: isLoading ? 0 : 1, transition: "opacity 0.5s ease-out" }} />
    </>
  );
}
