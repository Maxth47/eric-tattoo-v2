"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const locations = ["Melbourne CBD", "Fitzroy", "St Kilda", "Richmond", "Other"];

export default function BookingModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [files, setFiles] = useState<File[]>([]);
  const [dragOver, setDragOver] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

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

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] overflow-y-auto"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/95" />

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative z-[1] w-full min-h-screen px-[18px] py-[80px] md:px-[80px] md:py-[100px]"
          >
            {/* Close button */}
            <button
              onClick={onClose}
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

            {/* Two-column layout like FAQ */}
            <div className="flex flex-col md:flex-row items-start justify-center gap-[44px] w-full max-w-[1400px] mx-auto pt-40">
              {/* Left – Title + Image */}
              <div className="flex flex-col items-start gap-6 w-full md:w-[50%] md:max-w-[680px]">
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
                  Book a Session
                </h2>

                {/* Description */}
                <p className="text-[20px] lg:text-[24px] leading-[1.4] text-[#ffffffa6] opacity-90 max-w-[640px] font-[family-name:var(--font-inter-display)]">
                  Curious about what we can create together? Let&apos;s bring
                  something extraordinary to life!
                </p>

                {/* Image – height matches form */}
                <div
                  className="relative w-full overflow-hidden grayscale h-[250px] md:h-[320px]"
                  style={{
                    borderRadius: "17px",
                    boxShadow: "20px 30px 20px 8px rgba(0,0,0,0.4)",
                  }}
                >
                  <Image
                    src="/images/faq-artist.webp"
                    alt="Eric Le"
                    fill
                    className="object-cover object-top"
                    sizes="50vw"
                  />
                </div>
              </div>

              {/* Right – Form */}
              <div className="w-full md:w-[45%] md:flex-1">
                <form
                  className="flex flex-col gap-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    onClose();
                  }}
                >
                  {/* Row 1 */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="text"
                      placeholder="First name"
                      required
                      className="flex-1 px-5 py-5 rounded-[15px] bg-[rgb(15,15,15)] text-white text-[18px] leading-[1.6em] placeholder:text-white/30 font-[family-name:var(--font-inter-display)] outline-none border-none"
                      style={{ boxShadow: "rgba(0,0,0,0.4) 5px 18px 10px 8px" }}
                    />
                    <input
                      type="text"
                      placeholder="Last name"
                      required
                      className="flex-1 px-5 py-5 rounded-[15px] bg-[rgb(15,15,15)] text-white text-[18px] leading-[1.6em] placeholder:text-white/30 font-[family-name:var(--font-inter-display)] outline-none border-none"
                      style={{ boxShadow: "rgba(0,0,0,0.4) 5px 18px 10px 8px" }}
                    />
                  </div>

                  {/* Row 2 */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="tel"
                      placeholder="Phone number"
                      required
                      className="flex-1 px-5 py-5 rounded-[15px] bg-[rgb(15,15,15)] text-white text-[18px] leading-[1.6em] placeholder:text-white/30 font-[family-name:var(--font-inter-display)] outline-none border-none"
                      style={{ boxShadow: "rgba(0,0,0,0.4) 5px 18px 10px 8px" }}
                    />
                    <div className="flex-1 relative">
                      <select
                        defaultValue=""
                        required
                        className="w-full px-5 py-5 rounded-[15px] bg-[rgb(15,15,15)] text-white/30 text-[18px] leading-[1.6em] font-[family-name:var(--font-inter-display)] outline-none border-none appearance-none cursor-pointer"
                        style={{
                          boxShadow: "rgba(0,0,0,0.4) 5px 18px 10px 8px",
                        }}
                        onChange={(e) => {
                          e.target.style.color = "white";
                        }}
                      >
                        <option value="" disabled>
                          Location
                        </option>
                        {locations.map((loc) => (
                          <option
                            key={loc}
                            value={loc}
                            className="bg-[rgb(15,15,15)] text-white"
                          >
                            {loc}
                          </option>
                        ))}
                      </select>
                      <svg
                        className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none"
                        width="12"
                        height="8"
                        viewBox="0 0 12 8"
                        fill="none"
                      >
                        <path
                          d="M1 1.5L6 6.5L11 1.5"
                          stroke="white"
                          strokeOpacity="0.3"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Email */}
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    className="w-full px-5 py-5 rounded-[15px] bg-[rgb(15,15,15)] text-white text-[18px] leading-[1.6em] placeholder:text-white/30 font-[family-name:var(--font-inter-display)] outline-none border-none"
                    style={{ boxShadow: "rgba(0,0,0,0.4) 5px 18px 10px 8px" }}
                  />

                  {/* Description */}
                  <textarea
                    placeholder="Describe your ideas..."
                    rows={5}
                    className="w-full px-5 py-5 rounded-[15px] bg-[rgb(15,15,15)] text-white text-[18px] leading-[1.6em] placeholder:text-white/30 font-[family-name:var(--font-inter-display)] outline-none border-none resize-none"
                    style={{ boxShadow: "rgba(0,0,0,0.4) 5px 18px 10px 8px" }}
                  />

                  {/* Image upload */}
                  <div
                    onDragOver={(e) => {
                      e.preventDefault();
                      setDragOver(true);
                    }}
                    onDragLeave={() => setDragOver(false)}
                    onDrop={handleDrop}
                    onClick={() => fileRef.current?.click()}
                    className={`w-full min-h-[140px] rounded-[15px] bg-[rgb(15,15,15)] flex flex-col items-center justify-center gap-2 cursor-pointer transition-colors ${dragOver ? "ring-1 ring-white/20" : ""}`}
                    style={{ boxShadow: "rgba(0,0,0,0.4) 5px 18px 10px 8px" }}
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
                      <span className="text-[18px] text-white/30 font-[family-name:var(--font-inter-display)]">
                        Drag your images here
                      </span>
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

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full py-5 rounded-[15px] border border-white/20 bg-transparent text-white text-[18px] font-medium font-[family-name:var(--font-inter-display)] hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
