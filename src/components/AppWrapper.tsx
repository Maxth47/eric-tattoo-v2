"use client";

import { BookingProvider } from "@/lib/BookingContext";

export default function AppWrapper({ children }: { children: React.ReactNode }) {
  return (
    <BookingProvider>
      {children}
    </BookingProvider>
  );
}
