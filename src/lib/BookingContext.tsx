"use client";

import { createContext, useContext, useState } from "react";

const BookingContext = createContext<{ open: () => void }>({ open: () => {} });

export function useBooking() {
  return useContext(BookingContext);
}

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <BookingContext.Provider value={{ open: () => setIsOpen(true) }}>
      {children}
      {/* Lazy import to avoid SSR issues */}
      {isOpen && (
        <DynamicModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      )}
    </BookingContext.Provider>
  );
}

function DynamicModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const BookingModal = require("@/components/BookingModal").default;
  return <BookingModal isOpen={isOpen} onClose={onClose} />;
}
