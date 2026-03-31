"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import type { BlogMeta } from "@/lib/blogs";

export default function BlogCard({ blog }: { blog: BlogMeta }) {
  return (
    <motion.div variants={fadeUp}>
      <Link href={`/blogs/${blog.slug}`} className="block group">
        <article
          className="rounded-2xl overflow-hidden card-border transition-transform duration-300 group-hover:scale-[1.02]"
          style={{ backgroundColor: "#0d0d0d" }}
        >
          {/* Image */}
          <div className="relative aspect-[16/9] overflow-hidden">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          {/* Content */}
          <div className="p-5">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-3">
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-full glass text-white/60 font-[family-name:var(--font-satoshi)]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h3 className="text-[18px] font-bold text-white leading-snug mb-2 font-[family-name:var(--font-satoshi)] group-hover:text-white/80 transition-colors">
              {blog.title}
            </h3>

            {/* Excerpt */}
            <p className="text-[14px] text-white/50 leading-relaxed line-clamp-2 font-[family-name:var(--font-inter-display)]">
              {blog.excerpt}
            </p>

            {/* Meta */}
            <div className="flex items-center gap-3 mt-4 text-[12px] text-white/35 font-[family-name:var(--font-inter-display)]">
              <span>{new Date(blog.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
              <span>·</span>
              <span>{blog.readTime}</span>
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}
