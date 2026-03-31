"use client";

import { motion, StaggerReveal } from "@/lib/motion";
import BlogCard from "@/components/BlogCard";
import type { BlogMeta } from "@/lib/blogs";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function BlogHeader() {
  return (
    <div className="mb-16 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease }}
        className="text-[40px] md:text-[56px] font-bold text-white font-[family-name:var(--font-satoshi)] leading-tight"
      >
        Blog
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease, delay: 0.1 }}
        className="text-[16px] md:text-[18px] text-white/50 mt-4 font-[family-name:var(--font-inter-display)]"
      >
        Stories, insights, and the art behind the ink
      </motion.p>
    </div>
  );
}

export default function BlogListClient({ blogs }: { blogs: BlogMeta[] }) {
  return (
    <StaggerReveal
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      stagger={0.08}
    >
      {blogs.map((blog) => (
        <BlogCard key={blog.slug} blog={blog} />
      ))}
    </StaggerReveal>
  );
}
