import type { Metadata } from "next";
import { getAllBlogs } from "@/lib/blogs";
import BlogListClient, { BlogHeader } from "./BlogListClient";

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
        <BlogHeader />

        {/* Grid */}
        <BlogListClient blogs={blogs} />
      </div>
    </main>
  );
}
