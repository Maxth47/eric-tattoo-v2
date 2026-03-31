import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";

const blogsDir = path.join(process.cwd(), "content/blogs");

export interface BlogMeta {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  image: string;
  tags: string[];
  author: string;
  readTime: string;
}

export function getAllBlogs(): BlogMeta[] {
  const files = fs.readdirSync(blogsDir).filter((f) => f.endsWith(".mdx"));

  const blogs = files.map((filename) => {
    const filePath = path.join(blogsDir, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);
    return data as BlogMeta;
  });

  return blogs.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getBlogBySlug(slug: string) {
  const filePath = path.join(blogsDir, `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const { content: mdxContent } = await compileMDX({
    source: content,
    options: { parseFrontmatter: false },
  });

  return {
    meta: data as BlogMeta,
    content: mdxContent,
  };
}

export function getAllSlugs(): string[] {
  return fs
    .readdirSync(blogsDir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}
