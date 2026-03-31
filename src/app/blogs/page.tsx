import type { Metadata } from "next";
import { getAllBlogs } from "@/lib/blogs";
import BlogListClient from "./BlogListClient";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Stories, insights, and the art behind the ink. Eric Le shares his tattoo journey, client experiences, and lessons learned as a tattoo artist in Helsinki.",
  openGraph: {
    title: "Blog | Eric Le Tattoo Helsinki",
    description:
      "Stories, insights, and the art behind the ink from Eric Le Tattoo Helsinki.",
  },
};

export default function BlogsPage() {
  const blogs = getAllBlogs();

  return (
    <main className="min-h-screen pt-32 pb-20 px-5 md:px-10">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-[40px] md:text-[56px] font-bold text-white font-[family-name:var(--font-satoshi)] leading-tight">
            Blog
          </h1>
          <p className="text-[16px] md:text-[18px] text-white/50 mt-4 font-[family-name:var(--font-inter-display)]">
            Stories, insights, and the art behind the ink
          </p>
        </div>

        {/* Grid */}
        <BlogListClient blogs={blogs} />
      </div>
    </main>
  );
}
