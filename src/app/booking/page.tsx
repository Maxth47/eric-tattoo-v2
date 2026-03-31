"use client";

import { useEffect, useRef } from "react";
import { useBooking } from "@/lib/BookingContext";
import { useRouter } from "next/navigation";

export default function BookingPage() {
  const { open, onCloseCallback } = useBooking();
  const router = useRouter();
  const opened = useRef(false);

  useEffect(() => {
    if (opened.current) return;
    opened.current = true;
    onCloseCallback.current = () => router.push("/");
    open();
  }, [open, onCloseCallback, router]);

  return <div className="min-h-screen bg-black" />;
}
