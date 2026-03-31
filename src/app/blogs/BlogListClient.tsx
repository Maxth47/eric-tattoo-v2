"use client";

import { StaggerReveal } from "@/lib/motion";
import BlogCard from "@/components/BlogCard";
import type { BlogMeta } from "@/lib/blogs";

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
