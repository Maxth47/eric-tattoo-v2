"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const locations = ["Helsinki", "Amsterdam", "Berlin", "Other"];
const budgets = [
  "Under €1,000",
  "€1,000 – €2,000",
  "€2,000 – €3,500",
  "€3500 – €5,000",
  "€5,000+",
  "Not sure yet",
];

const inputClass =
  "w-full px-5 py-5 rounded-[15px] bg-[rgb(15,15,15)] text-white text-[18px] leading-[1.6em] placeholder:text-white/30 font-[family-name:var(--font-inter-display)] outline-none";
const inputShadow = (hasError: boolean) => ({
  boxShadow: "rgba(0,0,0,0.4) 5px 18px 10px 8px",
  border: hasError ? "2px solid rgb(239, 68, 68)" : "2px solid transparent",
});

export default function BookingModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [files, setFiles] = useState<File[]>([]);
  const [dragOver, setDragOver] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [locationOpen, setLocationOpen] = useState(false);
  const [selectedBudget, setSelectedBudget] = useState("");
  const [budgetOpen, setBudgetOpen] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const locationRef = useRef<HTMLDivElement>(null);
  const budgetRef = useRef<HTMLDivElement>(null);

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, boolean>>({});

  // Close location dropdown on outside click
  useEffect(() => {
    if (!locationOpen) return;
    const handler = (e: MouseEvent) => {
      if (
        locationRef.current &&
        !locationRef.current.contains(e.target as Node)
      ) {
        setLocationOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [locationOpen]);

  // Close budget dropdown on outside click
  useEffect(() => {
    if (!budgetOpen) return;
    const handler = (e: MouseEvent) => {
      if (budgetRef.current && !budgetRef.current.contains(e.target as Node)) {
        setBudgetOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [budgetOpen]);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const dropped = Array.from(e.dataTransfer.files).filter((f) =>
      f.type.startsWith("image/"),
    );
    setFiles((prev) => [...prev, ...dropped].slice(0, 5));
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selected = Array.from(e.target.files).filter((f) =>
        f.type.startsWith("image/"),
      );
      setFiles((prev) => [...prev, ...selected].slice(0, 5));
    }
  };

  const removeFile = (i: number) =>
    setFiles((prev) => prev.filter((_, idx) => idx !== i));

  const handleClose = () => {
    if (status === "loading") return;
    setStatus("idle");
    setErrorMsg("");
    setFieldErrors({});
    setFiles([]);
    setSelectedLocation("");
    setLocationOpen(false);
    setSelectedBudget("");
    setBudgetOpen(false);
    onClose();
  };

  const validate = (fd: FormData): boolean => {
    const errors: Record<string, boolean> = {};
    const firstName = (fd.get("firstName") as string)?.trim();
    const lastName = (fd.get("lastName") as string)?.trim();
    const phone = (fd.get("phone") as string)?.trim();
    const location = (fd.get("location") as string)?.trim();
    const email = (fd.get("email") as string)?.trim();
    const description = (fd.get("description") as string)?.trim();

    if (!firstName || /\d/.test(firstName)) errors.firstName = true;
    if (!lastName || /\d/.test(lastName)) errors.lastName = true;
    if (!phone || !/^[+\d][\d\s\-()]{6,}$/.test(phone)) errors.phone = true;
    if (!location) errors.location = true;
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errors.email = true;
    if (!description) errors.description = true;

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    // Client-side rate limit check
    const lastSubmit = Number(localStorage.getItem("booking_last") || "0");
    const submitCount = Number(localStorage.getItem("booking_count") || "0");
    const now = Date.now();
    const twelveHours = 12 * 60 * 60 * 1000;

    if (now - lastSubmit < twelveHours && submitCount >= 5) {
      setErrorMsg(
        "You've reached the maximum number of bookings. Please try again later.",
      );
      return;
    }

    const form = formRef.current!;
    const fd = new FormData(form);

    if (!validate(fd)) {
      setErrorMsg("Please fill in all required fields.");
      return;
    }

    // Append images
    files.forEach((file) => fd.append("images", file));

    setStatus("loading");

    try {
      const res = await fetch("/api/booking", { method: "POST", body: fd });
      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong.");
        return;
      }

      setStatus("success");
      setFiles([]);
      form.reset();

      // Track submission count in localStorage
      const prevCount = Number(localStorage.getItem("booking_count") || "0");
      const prevTime = Number(localStorage.getItem("booking_last") || "0");
      const isNewWindow = Date.now() - prevTime > 12 * 60 * 60 * 1000;
      localStorage.setItem(
        "booking_count",
        String(isNewWindow ? 1 : prevCount + 1),
      );
      localStorage.setItem("booking_last", String(Date.now()));
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  };

  const clearFieldError = (field: string) => {
    if (fieldErrors[field]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        if (Object.keys(next).length === 0) setErrorMsg("");
        return next;
      });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] overflow-y-auto"
          onClick={handleClose}
        >
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black" />

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative z-[1] flex flex-col items-center justify-center w-full min-h-screen px-[18px] md:px-[80px] py-[100px]"
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="fixed top-6 right-6 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors"
              aria-label="Close"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </svg>
            </button>

            {/* Success state */}
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center gap-6 text-center max-w-[500px]"
              >
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h2 className="text-[36px] md:text-[48px] font-normal leading-[1.1em] text-white font-[family-name:var(--font-satoshi)]">
                  Booking Sent!
                </h2>
                <p className="text-[18px] leading-[1.6] text-[#ffffffa6] font-[family-name:var(--font-inter-display)]">
                  Thanks for reaching out! I&apos;ll get back to you as soon as
                  possible.
                </p>
                <button
                  onClick={handleClose}
                  className="mt-4 px-8 py-3 rounded-full text-white text-[16px] font-[family-name:var(--font-inter-display)] transition-colors hover:bg-white/10"
                  style={{ border: "1px solid rgba(255,255,255,0.15)" }}
                >
                  Close
                </button>
              </motion.div>
            ) : (
              /* Form layout */
              <div className="flex flex-col xl:flex-row items-start justify-center gap-[44px] w-full max-w-[1400px]">
                {/* Left – Title + Image */}
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex flex-col items-start gap-6 w-full xl:w-[50%] xl:max-w-[680px]"
                >
                  {/* Badge */}
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
                      Booking
                    </span>
                  </div>

                  {/* Heading */}
                  <h2 className="text-[44px] md:text-[74px] lg:text-[92px] font-normal leading-[1em] tracking-[0em] text-white font-[family-name:var(--font-satoshi)]">
                    Book <br />
                    Appointments
                  </h2>

                  {/* Description */}
                  <p className="text-[20px] xl:text-[24px] leading-[1.4] text-[#ffffffa6] opacity-90 max-w-[640px] font-[family-name:var(--font-inter-display)]">
                    Curious about what we can create together? Let&apos;s bring
                    something extraordinary to life!
                  </p>

                  {/* Image – height matches form */}
                  <div
                    className="relative w-full overflow-hidden grayscale h-[300px] xl:h-[400px] hidden xl:block invisible"
                    style={{
                      borderRadius: "17px",
                      boxShadow: "20px 30px 20px 8px rgba(0,0,0,0.4)",
                    }}
                  >
                    <Image
                      src="/images/booking-artist.webp"
                      alt="Eric Le"
                      fill
                      className="object-cover object-top"
                      sizes="50vw"
                    />
                  </div>
                </motion.div>

                {/* Right – Form */}
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="w-full xl:w-[45%] xl:flex-1 min-w-0"
                >
                  <form
                    ref={formRef}
                    className="flex flex-col gap-4"
                    onSubmit={handleSubmit}
                  >
                    {/* Honeypot – hidden from humans */}
                    <input
                      type="text"
                      name="website"
                      autoComplete="off"
                      tabIndex={-1}
                      className="absolute opacity-0 pointer-events-none h-0 w-0"
                    />

                    {/* Error message */}
                    {errorMsg && (
                      <div className="px-4 py-3 rounded-[12px] bg-red-500/10 border border-red-500/20 text-red-400 text-[15px] font-[family-name:var(--font-inter-display)]">
                        {errorMsg}
                      </div>
                    )}

                    {/* Row 1 */}
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.3,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="flex flex-col sm:flex-row gap-4"
                    >
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First name"
                        className={`flex-1 ${inputClass}`}
                        style={inputShadow(!!fieldErrors.firstName)}
                        onChange={() => clearFieldError("firstName")}
                      />
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last name"
                        className={`flex-1 ${inputClass}`}
                        style={inputShadow(!!fieldErrors.lastName)}
                        onChange={() => clearFieldError("lastName")}
                      />
                    </motion.div>

                    {/* Row 2 */}
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.4,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="flex flex-col sm:flex-row gap-4"
                    >
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone number"
                        className={`flex-1 ${inputClass}`}
                        style={inputShadow(!!fieldErrors.phone)}
                        onChange={() => clearFieldError("phone")}
                      />
                      <div className="flex-1 relative" ref={locationRef}>
                        <input
                          type="hidden"
                          name="location"
                          value={selectedLocation}
                        />
                        <button
                          type="button"
                          onClick={() => setLocationOpen((v) => !v)}
                          className={`${inputClass} text-left cursor-pointer flex items-center justify-between`}
                          style={inputShadow(!!fieldErrors.location)}
                        >
                          <span
                            className={
                              selectedLocation ? "text-white" : "text-white/30"
                            }
                          >
                            {selectedLocation || "Location"}
                          </span>
                          <svg
                            width="12"
                            height="8"
                            viewBox="0 0 12 8"
                            fill="none"
                            className={`transition-transform duration-200 ${locationOpen ? "rotate-180" : ""}`}
                          >
                            <path
                              d="M1 1.5L6 6.5L11 1.5"
                              stroke="white"
                              strokeOpacity="0.4"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                        <AnimatePresence>
                          {locationOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: -4, scale: 0.98 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: -4, scale: 0.98 }}
                              transition={{ duration: 0.15 }}
                              className="absolute z-50 top-full left-0 right-0 mt-2 rounded-[12px] overflow-hidden"
                              style={{
                                backgroundColor: "rgb(20,20,20)",
                                border: "1px solid rgba(255,255,255,0.1)",
                                boxShadow: "0 16px 40px rgba(0,0,0,0.6)",
                              }}
                            >
                              {locations.map((loc) => (
                                <button
                                  key={loc}
                                  type="button"
                                  onClick={() => {
                                    setSelectedLocation(loc);
                                    setLocationOpen(false);
                                    clearFieldError("location");
                                  }}
                                  className="w-full flex items-center justify-between px-5 py-3.5 text-[16px] text-white/80 hover:bg-white/5 hover:text-white transition-colors font-[family-name:var(--font-inter-display)]"
                                >
                                  {loc}
                                  {selectedLocation === loc && (
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="white"
                                      strokeWidth="2.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    >
                                      <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                  )}
                                </button>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>

                    {/* Email */}
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.5,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className={`${inputClass}`}
                        style={inputShadow(!!fieldErrors.email)}
                        onChange={() => clearFieldError("email")}
                      />
                    </motion.div>

                    {/* Budget */}
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.6,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <div className="relative" ref={budgetRef}>
                        <input
                          type="hidden"
                          name="budget"
                          value={selectedBudget}
                        />
                        <button
                          type="button"
                          onClick={() => setBudgetOpen((v) => !v)}
                          className={`${inputClass} text-left cursor-pointer flex items-center justify-between`}
                          style={inputShadow(!!fieldErrors.budget)}
                        >
                          <span
                            className={
                              selectedBudget ? "text-white" : "text-white/30"
                            }
                          >
                            {selectedBudget || "Budget"}
                          </span>
                          <svg
                            width="12"
                            height="8"
                            viewBox="0 0 12 8"
                            fill="none"
                            className={`transition-transform duration-200 ${budgetOpen ? "rotate-180" : ""}`}
                          >
                            <path
                              d="M1 1.5L6 6.5L11 1.5"
                              stroke="white"
                              strokeOpacity="0.4"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                        <AnimatePresence>
                          {budgetOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: -4, scale: 0.98 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: -4, scale: 0.98 }}
                              transition={{ duration: 0.15 }}
                              className="absolute z-50 top-full left-0 right-0 mt-2 rounded-[12px] overflow-hidden"
                              style={{
                                backgroundColor: "rgb(20,20,20)",
                                border: "1px solid rgba(255,255,255,0.1)",
                                boxShadow: "0 16px 40px rgba(0,0,0,0.6)",
                              }}
                            >
                              {budgets.map((b) => (
                                <button
                                  key={b}
                                  type="button"
                                  onClick={() => {
                                    setSelectedBudget(b);
                                    setBudgetOpen(false);
                                    clearFieldError("budget");
                                  }}
                                  className="w-full flex items-center justify-between px-5 py-3.5 text-[16px] text-white/80 hover:bg-white/5 hover:text-white transition-colors font-[family-name:var(--font-inter-display)]"
                                >
                                  {b}
                                  {selectedBudget === b && (
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="white"
                                      strokeWidth="2.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    >
                                      <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                  )}
                                </button>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>

                    {/* Description */}
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.7,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <textarea
                        name="description"
                        placeholder="Describe your ideas..."
                        rows={5}
                        className={`${inputClass} resize-none`}
                        style={inputShadow(!!fieldErrors.description)}
                        onChange={() => clearFieldError("description")}
                      />
                    </motion.div>

                    {/* Image upload */}
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <div
                        onDragOver={(e) => {
                          e.preventDefault();
                          setDragOver(true);
                        }}
                        onDragLeave={() => setDragOver(false)}
                        onDrop={handleDrop}
                        onClick={() => fileRef.current?.click()}
                        className={`w-full min-h-[140px] rounded-[15px] bg-[rgb(15,15,15)] flex flex-col items-center justify-center gap-2 cursor-pointer transition-colors ${dragOver ? "ring-1 ring-white/20" : ""}`}
                        style={inputShadow(false)}
                      >
                        <input
                          ref={fileRef}
                          type="file"
                          accept="image/*"
                          multiple
                          hidden
                          onChange={handleFileSelect}
                        />
                        {files.length === 0 ? (
                          <div className="flex flex-col items-center gap-1">
                            <span className="text-[18px] text-white/30 font-[family-name:var(--font-inter-display)]">
                              Drag your images here
                            </span>
                            <span className="text-[14px] text-white/20 font-[family-name:var(--font-inter-display)]">
                              Optional - up to 5 images
                            </span>
                          </div>
                        ) : (
                          <div className="flex flex-wrap gap-2 p-4">
                            {files.map((f, i) => (
                              <div key={i} className="relative group">
                                <img
                                  src={URL.createObjectURL(f)}
                                  alt=""
                                  className="w-14 h-14 object-cover rounded-lg"
                                />
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    removeFile(i);
                                  }}
                                  className="absolute -top-1 -right-1 w-5 h-5 bg-white/20 hover:bg-red-500 rounded-full text-white text-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all"
                                >
                                  ×
                                </button>
                              </div>
                            ))}
                            {files.length < 5 && (
                              <div className="w-14 h-14 rounded-lg border border-dashed border-white/10 flex items-center justify-center text-white/20 text-xl">
                                +
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </motion.div>

                    {/* Submit */}
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.9,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <button
                        type="submit"
                        disabled={status === "loading"}
                        className="w-full cursor-pointer group disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        <div
                          className="relative z-[2] w-full p-[1.4px] overflow-hidden transition-shadow duration-300 group-hover:shadow-[rgba(255,255,255,0.12)_0px_1px_9px_0px]"
                          style={{
                            backgroundColor: "rgb(59,59,59)",
                            borderRadius: "11.5px",
                          }}
                        >
                          <div
                            className="relative z-[4] flex items-center justify-center w-full overflow-hidden"
                            style={{
                              backgroundColor: "rgb(0,0,0)",
                              borderRadius: "10px",
                              padding: "16px 24px",
                            }}
                          >
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
                            <span className="relative z-[2] flex items-center justify-center gap-3 text-[18px] leading-[1.6em] text-white font-[family-name:var(--font-inter-display)]">
                              {status === "loading" && (
                                <svg
                                  className="animate-spin h-5 w-5"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                  />
                                  <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                                  />
                                </svg>
                              )}
                              {status === "loading" ? "Sending..." : "Book Now"}
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
                          <div
                            className="absolute z-[1] w-[54px] h-[46px] overflow-hidden"
                            style={{
                              bottom: "-18px",
                              left: "-22px",
                              backgroundColor: "rgb(230,230,230)",
                              filter: "blur(8px)",
                            }}
                          />
                        </div>
                      </button>
                    </motion.div>
                  </form>
                </motion.div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
