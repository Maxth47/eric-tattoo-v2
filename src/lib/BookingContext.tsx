"use client";

import { createContext, useContext, useState, useCallback, useRef } from "react";

const BookingContext = createContext<{
  open: () => void;
  onCloseCallback: React.MutableRefObject<(() => void) | null>;
}>({
  open: () => {},
  onCloseCallback: { current: null },
});

export function useBooking() {
  return useContext(BookingContext);
}

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const onCloseCallback = useRef<(() => void) | null>(null);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    onCloseCallback.current?.();
    onCloseCallback.current = null;
  }, []);

  return (
    <BookingContext.Provider value={{ open: () => setIsOpen(true), onCloseCallback }}>
      {children}
      {isOpen && (
        <DynamicModal isOpen={isOpen} onClose={handleClose} />
      )}
    </BookingContext.Provider>
  );
}

function DynamicModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const BookingModal = require("@/components/BookingModal").default;
  return <BookingModal isOpen={isOpen} onClose={onClose} />;
}
