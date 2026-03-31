"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const locations = ["Helsinki", "Amsterdam", "Berlin", "Other"];

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
            className="relative z-[1] flex flex-col items-center justify-center w-full min-h-screen px-[18px] md:px-[80px] py-[100px]"
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
            <div className="flex flex-col lg:flex-row items-start justify-center gap-[44px] w-full max-w-[1400px]">
              {/* Left – Title + Image */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col items-start gap-6 w-full lg:w-[50%] lg:max-w-[680px]"
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
                <p className="text-[20px] lg:text-[24px] leading-[1.4] text-[#ffffffa6] opacity-90 max-w-[640px] font-[family-name:var(--font-inter-display)]">
                  Curious about what we can create together? Let&apos;s bring
                  something extraordinary to life!
                </p>

                {/* Image – height matches form */}
                <div
                  className="relative w-full overflow-hidden grayscale h-[300px] lg:h-[400px] hidden lg:block invisible"
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
                className="w-full lg:w-[45%] lg:flex-1 min-w-0"
              >
                <form
                  className="flex flex-col gap-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    onClose();
                  }}
                >
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
                      placeholder="Email"
                      required
                      className="w-full px-5 py-5 rounded-[15px] bg-[rgb(15,15,15)] text-white text-[18px] leading-[1.6em] placeholder:text-white/30 font-[family-name:var(--font-inter-display)] outline-none border-none"
                      style={{ boxShadow: "rgba(0,0,0,0.4) 5px 18px 10px 8px" }}
                    />
                  </motion.div>

                  {/* Description */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.6,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <textarea
                      placeholder="Describe your ideas..."
                      rows={5}
                      className="w-full px-5 py-5 rounded-[15px] bg-[rgb(15,15,15)] text-white text-[18px] leading-[1.6em] placeholder:text-white/30 font-[family-name:var(--font-inter-display)] outline-none border-none resize-none"
                      style={{ boxShadow: "rgba(0,0,0,0.4) 5px 18px 10px 8px" }}
                    />
                  </motion.div>

                  {/* Image upload */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.7,
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
                  </motion.div>

                  {/* Submit – same style as hero/section buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.8,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <button
                      type="submit"
                      className="w-full cursor-pointer group"
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
                          <span className="relative z-[2] text-[18px] leading-[1.6em] text-white font-[family-name:var(--font-inter-display)]">
                            Book Now
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
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
