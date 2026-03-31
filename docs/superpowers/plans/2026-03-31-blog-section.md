# Blog Section Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a 20-post SEO blog section with MDX content, dark-themed listing and post pages matching the existing Eric Le Tattoo site design.

**Architecture:** MDX files in `content/blogs/` parsed by `next-mdx-remote` + `gray-matter` at build time. Blog listing at `/blogs`, individual posts at `/blogs/[slug]`. All server-rendered, statically generated. Reuses existing design system (glass cards, Framer Motion reveals, dark theme).

**Tech Stack:** Next.js 16 App Router, next-mdx-remote, gray-matter, Tailwind CSS v4, Framer Motion

---

## File Structure

| Action | File | Responsibility |
|--------|------|----------------|
| Create | `src/lib/blogs.ts` | MDX parsing utilities (getAllBlogs, getBlogBySlug, getAllSlugs) |
| Create | `src/components/BlogCard.tsx` | Blog card component for listing page |
| Create | `src/app/blogs/page.tsx` | Blog listing page (server component) |
| Create | `src/app/blogs/[slug]/page.tsx` | Individual blog post page (server component) |
| Create | `content/blogs/*.mdx` | 20 MDX blog post files |
| Modify | `src/components/Header.tsx` | Add "Blog" nav link |
| Modify | `src/app/sitemap.ts` | Add blog post URLs |

---

### Task 1: Install Dependencies

**Files:**
- Modify: `package.json`

- [ ] **Step 1: Install next-mdx-remote and gray-matter**

```bash
cd /Users/thanhle/Desktop/playgrounds/eric-web && npm install next-mdx-remote gray-matter
```

- [ ] **Step 2: Verify installation**

```bash
cd /Users/thanhle/Desktop/playgrounds/eric-web && node -e "require('next-mdx-remote'); require('gray-matter'); console.log('OK')"
```

Expected: `OK`

---

### Task 2: Create Blog Utility Library

**Files:**
- Create: `src/lib/blogs.ts`

- [ ] **Step 1: Create `src/lib/blogs.ts`**

```typescript
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
```

- [ ] **Step 2: Verify the file compiles**

```bash
cd /Users/thanhle/Desktop/playgrounds/eric-web && npx tsc --noEmit src/lib/blogs.ts 2>&1 | head -20
```

If there are type errors related to module resolution (common with `gray-matter`), they will be resolved once the content directory and MDX files exist. Proceed.

---

### Task 3: Create BlogCard Component

**Files:**
- Create: `src/components/BlogCard.tsx`

- [ ] **Step 1: Create `src/components/BlogCard.tsx`**

```tsx
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
```

---

### Task 4: Create Blog Listing Page

**Files:**
- Create: `src/app/blogs/page.tsx`

- [ ] **Step 1: Create `src/app/blogs/page.tsx`**

```tsx
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
```

- [ ] **Step 2: Create `src/app/blogs/BlogListClient.tsx`**

This client component wraps the grid with Framer Motion stagger animations.

```tsx
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
```

---

### Task 5: Create Blog Post Page

**Files:**
- Create: `src/app/blogs/[slug]/page.tsx`

- [ ] **Step 1: Create `src/app/blogs/[slug]/page.tsx`**

```tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogBySlug, getAllSlugs, getAllBlogs } from "@/lib/blogs";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const { meta } = await getBlogBySlug(slug);
    return {
      title: meta.title,
      description: meta.excerpt,
      openGraph: {
        title: `${meta.title} | Eric Le Tattoo Helsinki`,
        description: meta.excerpt,
        type: "article",
        publishedTime: meta.date,
        authors: [meta.author],
        images: [{ url: meta.image, width: 1200, height: 630, alt: meta.title }],
      },
      twitter: {
        card: "summary_large_image",
        title: meta.title,
        description: meta.excerpt,
        images: [meta.image],
      },
      alternates: {
        canonical: `https://erictattoo.fi/blogs/${slug}`,
      },
    };
  } catch {
    return {};
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  let blog;
  try {
    blog = await getBlogBySlug(slug);
  } catch {
    notFound();
  }

  const { meta, content } = blog;

  // Related posts: same tags, exclude current
  const allBlogs = getAllBlogs();
  const related = allBlogs
    .filter(
      (b) =>
        b.slug !== slug && b.tags.some((t) => meta.tags.includes(t))
    )
    .slice(0, 3);

  return (
    <main className="min-h-screen pt-32 pb-20 px-5 md:px-10">
      <div className="max-w-[720px] mx-auto">
        {/* Back link */}
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-[14px] text-white/40 hover:text-white/70 transition-colors mb-10 font-[family-name:var(--font-satoshi)]"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5" />
            <path d="M12 19l-7-7 7-7" />
          </svg>
          Back to Blog
        </Link>

        {/* Hero */}
        <header className="mb-12">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {meta.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-full glass text-white/60 font-[family-name:var(--font-satoshi)]"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-[32px] md:text-[44px] font-bold text-white leading-tight font-[family-name:var(--font-satoshi)]">
            {meta.title}
          </h1>

          <div className="flex items-center gap-3 mt-4 text-[14px] text-white/40 font-[family-name:var(--font-inter-display)]">
            <span>{meta.author}</span>
            <span>·</span>
            <span>{new Date(meta.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
            <span>·</span>
            <span>{meta.readTime}</span>
          </div>

          {/* Featured image */}
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mt-8">
            <Image
              src={meta.image}
              alt={meta.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 720px"
            />
          </div>
        </header>

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: meta.title,
              description: meta.excerpt,
              image: `https://erictattoo.fi${meta.image}`,
              author: {
                "@type": "Person",
                name: meta.author,
              },
              publisher: {
                "@type": "Organization",
                name: "Eric Le Tattoo",
                logo: {
                  "@type": "ImageObject",
                  url: "https://erictattoo.fi/images/logo-eric.png",
                },
              },
              datePublished: meta.date,
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": `https://erictattoo.fi/blogs/${slug}`,
              },
            }),
          }}
        />

        {/* Content */}
        <article className="prose prose-invert prose-lg max-w-none
          prose-headings:font-[family-name:var(--font-satoshi)] prose-headings:text-white prose-headings:font-bold
          prose-p:text-[#d1d1d1] prose-p:font-[family-name:var(--font-inter-display)] prose-p:leading-relaxed
          prose-a:text-white prose-a:underline hover:prose-a:brightness-75
          prose-blockquote:border-l-white/20 prose-blockquote:text-white/60 prose-blockquote:italic
          prose-strong:text-white
          prose-li:text-[#d1d1d1]
          prose-img:rounded-2xl
        ">
          {content}
        </article>

        {/* Related Posts */}
        {related.length > 0 && (
          <section className="mt-20 pt-12 border-t border-white/8">
            <h2 className="text-[24px] font-bold text-white mb-8 font-[family-name:var(--font-satoshi)]">
              Related Posts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blogs/${r.slug}`}
                  className="block group rounded-2xl overflow-hidden card-border p-4"
                  style={{ backgroundColor: "#0d0d0d" }}
                >
                  <h3 className="text-[15px] font-bold text-white leading-snug mb-2 font-[family-name:var(--font-satoshi)] group-hover:text-white/80 transition-colors">
                    {r.title}
                  </h3>
                  <p className="text-[13px] text-white/40 line-clamp-2 font-[family-name:var(--font-inter-display)]">
                    {r.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
```

---

### Task 6: Add Tailwind Typography Plugin

The blog post page uses `prose` classes for MDX content styling. Tailwind CSS v4 needs the typography plugin.

**Files:**
- Modify: `package.json`
- Modify: `src/app/globals.css`

- [ ] **Step 1: Install @tailwindcss/typography**

```bash
cd /Users/thanhle/Desktop/playgrounds/eric-web && npm install @tailwindcss/typography
```

- [ ] **Step 2: Add the plugin import to `src/app/globals.css`**

Add this line immediately after the `@import "tailwindcss";` line at the top of `src/app/globals.css`:

```css
@plugin "@tailwindcss/typography";
```

The file's first two lines should now be:

```css
@import "tailwindcss";
@plugin "@tailwindcss/typography";
```

---

### Task 7: Update Header with Blog Link

**Files:**
- Modify: `src/components/Header.tsx:16-21`

- [ ] **Step 1: Add "Blog" to the navLinks array**

In `src/components/Header.tsx`, replace the `navLinks` array:

```typescript
const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Blog", href: "/blogs" },
  { label: "Contact", href: "https://www.instagram.com/eric.le.tattoo/" },
];
```

Note: The Header uses anchor-based `href`s for in-page scrolling and a full URL for Contact. The Blog link uses a path `/blogs` which will navigate to the blog listing page. Since the Header is a client component with `<a>` tags, this will work as a standard navigation.

---

### Task 8: Update Sitemap

**Files:**
- Modify: `src/app/sitemap.ts`

- [ ] **Step 1: Update `src/app/sitemap.ts` to include blog URLs**

Replace the entire file content:

```typescript
import type { MetadataRoute } from "next";
import { getAllBlogs } from "@/lib/blogs";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://erictattoo.fi";

  const blogEntries: MetadataRoute.Sitemap = getAllBlogs().map((blog) => ({
    url: `${baseUrl}/blogs/${blog.slug}`,
    lastModified: new Date(blog.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#projects`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#testimonials`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/#faq`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    ...blogEntries,
  ];
}
```

---

### Task 9: Write Blog Posts — Client Experience (5 posts)

**Files:**
- Create: `content/blogs/why-client-experience-is-everything.mdx`
- Create: `content/blogs/how-i-make-first-time-clients-feel-at-home.mdx`
- Create: `content/blogs/from-consultation-to-aftercare.mdx`
- Create: `content/blogs/why-i-never-rush-a-tattoo-session.mdx`
- Create: `content/blogs/building-trust-before-the-needle.mdx`

Each post must be 1000-1500 words, written in first person from Eric Le's perspective. Personal, authentic tone. Based in Helsinki, Finland. Tattoo artist who also guest-works in Amsterdam and Berlin.

Use placeholder images: `https://placehold.co/1200x630/0d0d0d/ffffff?text=Blog+Title` (URL-encode the title).

- [ ] **Step 1: Create `content/blogs/` directory**

```bash
mkdir -p /Users/thanhle/Desktop/playgrounds/eric-web/content/blogs
```

- [ ] **Step 2: Write `why-client-experience-is-everything.mdx`**

Frontmatter:
```yaml
---
title: "Why Client Experience Is Everything in Tattooing"
slug: "why-client-experience-is-everything"
date: "2025-03-15"
excerpt: "A tattoo is more than ink on skin — it's a deeply personal experience. Here's why I put client experience at the center of everything I do."
image: "https://placehold.co/1200x630/0d0d0d/ffffff?text=Client+Experience"
tags: ["client experience", "philosophy"]
author: "Eric Le"
readTime: "7 min read"
---
```

Content direction (1000-1500 words): Why Eric believes the client experience defines the tattoo. Discuss how the tattoo industry often focuses only on the art, but the experience — from first message to healed tattoo — determines whether someone treasures their piece. Talk about creating a safe, welcoming space. Mention how nervous clients become regulars when treated with care. Share Eric's personal philosophy shaped by working across Helsinki, Amsterdam, and Berlin.

- [ ] **Step 3: Write `how-i-make-first-time-clients-feel-at-home.mdx`**

Frontmatter:
```yaml
---
title: "How I Make First-Time Clients Feel at Home"
slug: "how-i-make-first-time-clients-feel-at-home"
date: "2025-03-01"
excerpt: "Getting your first tattoo can be nerve-wracking. Here's how I turn first-time anxiety into excitement and confidence."
image: "https://placehold.co/1200x630/0d0d0d/ffffff?text=First+Time+Clients"
tags: ["client experience", "first tattoo"]
author: "Eric Le"
readTime: "6 min read"
---
```

Content direction (1000-1500 words): The anxiety first-timers feel. How Eric addresses it — thorough consultation, explaining every step, letting clients see the stencil and adjust, checking in during the session. The studio environment (clean, calm, music). How he explains pain honestly without scaring people. Stories of first-timers who were terrified and left smiling.

- [ ] **Step 4: Write `from-consultation-to-aftercare.mdx`**

Frontmatter:
```yaml
---
title: "From Consultation to Aftercare: The Full Client Journey"
slug: "from-consultation-to-aftercare"
date: "2025-02-15"
excerpt: "What does the complete tattoo experience look like? I walk you through every step of the journey — from our first conversation to your fully healed piece."
image: "https://placehold.co/1200x630/0d0d0d/ffffff?text=Client+Journey"
tags: ["client experience", "process"]
author: "Eric Le"
readTime: "8 min read"
---
```

Content direction (1000-1500 words): Step-by-step walkthrough. Initial inquiry (what Eric asks, what he needs). Consultation (discussing ideas, references, placement, size). Design phase (sketches, revisions, collaboration). Session day (preparation, setup, the actual tattoo, breaks). Aftercare (instructions, follow-ups, touch-ups). Why each step matters for the final result.

- [ ] **Step 5: Write `why-i-never-rush-a-tattoo-session.mdx`**

Frontmatter:
```yaml
---
title: "Why I Never Rush a Tattoo Session"
slug: "why-i-never-rush-a-tattoo-session"
date: "2025-02-01"
excerpt: "In a world that values speed, I choose to take my time. Here's why slowing down makes every tattoo better."
image: "https://placehold.co/1200x630/0d0d0d/ffffff?text=Never+Rush"
tags: ["philosophy", "quality"]
author: "Eric Le"
readTime: "6 min read"
---
```

Content direction (1000-1500 words): The pressure in the industry to book back-to-back. Why Eric allocates generous time per client. The difference it makes — better line work, more comfortable client, no stress. How rushing leads to mistakes and regret. The importance of breaks during long sessions. Quality over quantity philosophy.

- [ ] **Step 6: Write `building-trust-before-the-needle.mdx`**

Frontmatter:
```yaml
---
title: "Building Trust Before the Needle Touches Skin"
slug: "building-trust-before-the-needle"
date: "2025-01-15"
excerpt: "Trust is the foundation of every great tattoo. Here's how I build it — before, during, and after every session."
image: "https://placehold.co/1200x630/0d0d0d/ffffff?text=Building+Trust"
tags: ["client experience", "philosophy"]
author: "Eric Le"
readTime: "7 min read"
---
```

Content direction (1000-1500 words): How trust manifests in tattooing — clients literally putting their body in your hands. The role of clear communication, transparency about pricing and process, honest advice (sometimes saying "this won't work well here"). How trust grows through the design process. The importance of consent and checking in. Why repeat clients are the best measure of trust.

---

### Task 10: Write Blog Posts — Collaboration with Clients (4 posts)

**Files:**
- Create: `content/blogs/your-tattoo-your-story.mdx`
- Create: `content/blogs/when-clients-bring-ideas-that-change-everything.mdx`
- Create: `content/blogs/the-art-of-listening.mdx`
- Create: `content/blogs/how-a-simple-sketch-becomes-a-masterpiece.mdx`

Same writing rules: 1000-1500 words, first person, Eric Le's perspective, authentic tone.

- [ ] **Step 1: Write `your-tattoo-your-story.mdx`**

Frontmatter:
```yaml
---
title: "Your Tattoo, Your Story: How We Design Together"
slug: "your-tattoo-your-story"
date: "2025-01-01"
excerpt: "Every tattoo I create is a collaboration. Here's how your story becomes art on your skin."
image: "https://placehold.co/1200x630/0d0d0d/ffffff?text=Your+Story"
tags: ["collaboration", "design process"]
author: "Eric Le"
readTime: "7 min read"
---
```

Content direction: How Eric approaches custom design as a partnership. The client brings the meaning, Eric brings the artistry. Why he never uses flash tattoos as-is for personal pieces. Examples of how a client's vague idea ("something about my grandmother") becomes a specific, meaningful design. The back-and-forth process.

- [ ] **Step 2: Write `when-clients-bring-ideas-that-change-everything.mdx`**

Frontmatter:
```yaml
---
title: "When Clients Bring Ideas That Change Everything"
slug: "when-clients-bring-ideas-that-change-everything"
date: "2024-12-15"
excerpt: "Some of my best work started with a client's unexpected idea. Here are the moments that pushed my art in new directions."
image: "https://placehold.co/1200x630/0d0d0d/ffffff?text=Client+Ideas"
tags: ["collaboration", "inspiration"]
author: "Eric Le"
readTime: "7 min read"
---
```

Content direction: Times when a client's reference, concept, or challenge forced Eric to grow. How client input can push an artist beyond their comfort zone. The humility of learning from the people you serve. Specific style combinations or techniques that came from client requests.

- [ ] **Step 3: Write `the-art-of-listening.mdx`**

Frontmatter:
```yaml
---
title: "The Art of Listening: Understanding What You Really Want"
slug: "the-art-of-listening"
date: "2024-12-01"
excerpt: "What a client says and what they actually want aren't always the same thing. Here's how I've learned to listen deeper."
image: "https://placehold.co/1200x630/0d0d0d/ffffff?text=Art+of+Listening"
tags: ["collaboration", "client experience"]
author: "Eric Le"
readTime: "6 min read"
---
```

Content direction: The gap between what clients describe and what they envision. How Eric asks the right questions to uncover the real desire. Reading body language during design reviews. When to push back ("I think this would work better"). The skill of translating emotion into visual art.

- [ ] **Step 4: Write `how-a-simple-sketch-becomes-a-masterpiece.mdx`**

Frontmatter:
```yaml
---
title: "How a Simple Sketch Becomes a Masterpiece on Skin"
slug: "how-a-simple-sketch-becomes-a-masterpiece"
date: "2024-11-15"
excerpt: "From pencil on paper to needle on skin — here's the creative process behind turning a rough concept into finished body art."
image: "https://placehold.co/1200x630/0d0d0d/ffffff?text=Sketch+to+Masterpiece"
tags: ["design process", "craft"]
author: "Eric Le"
readTime: "8 min read"
---
```

Content direction: The technical creative process. Starting with rough thumbnails. Refining proportions for the body location. Adapting contrast and detail for skin (vs paper). How the design changes when placed on the body (stencil stage). The live adjustments during tattooing. Why the final piece always evolves from the sketch.

---

### Task 11: Write Blog Posts — Daily Learning & Skill Growth (4 posts)

**Files:**
- Create: `content/blogs/why-i-still-practice-drawing-every-day.mdx`
- Create: `content/blogs/learning-never-stops.mdx`
- Create: `content/blogs/from-fine-lines-to-realism.mdx`
- Create: `content/blogs/what-other-art-forms-teach-me.mdx`

- [ ] **Step 1: Write `why-i-still-practice-drawing-every-day.mdx`**

Frontmatter:
```yaml
---
title: "Why I Still Practice Drawing Every Single Day"
slug: "why-i-still-practice-drawing-every-day"
date: "2024-11-01"
excerpt: "Even after years of tattooing, I pick up a pencil every morning. Here's why daily practice is the foundation of everything I do."
image: "https://placehold.co/1200x630/0d0d0d/ffffff?text=Daily+Practice"
tags: ["skill growth", "craft"]
author: "Eric Le"
readTime: "6 min read"
---
```

Content direction: Eric's daily drawing ritual. What he practices (anatomy, shading, new styles). How it translates to better tattooing. The difference between "good enough" and constantly improving. Inspiration from other artists. The discipline of showing up every day.

- [ ] **Step 2: Write `learning-never-stops.mdx`**

Frontmatter:
```yaml
---
title: "Learning Never Stops: My Journey with New Techniques"
slug: "learning-never-stops"
date: "2024-10-15"
excerpt: "From new needle configurations to digital design tools — here's how I keep evolving as a tattoo artist."
image: "https://placehold.co/1200x630/0d0d0d/ffffff?text=Learning+Never+Stops"
tags: ["skill growth", "techniques"]
author: "Eric Le"
readTime: "7 min read"
---
```

Content direction: Specific techniques Eric has learned over time. New needle types and configurations. Digital tools (iPad, Procreate) alongside traditional drawing. Attending conventions and workshops. Learning from other artists in Amsterdam and Berlin studios. How the industry evolves and staying current.

- [ ] **Step 3: Write `from-fine-lines-to-realism.mdx`**

Frontmatter:
```yaml
---
title: "From Fine Lines to Realism: Expanding My Style Range"
slug: "from-fine-lines-to-realism"
date: "2024-10-01"
excerpt: "Every tattoo style demands different skills. Here's how I've expanded from fine line work to realism and what each style has taught me."
image: "https://placehold.co/1200x630/0d0d0d/ffffff?text=Fine+Lines+to+Realism"
tags: ["skill growth", "styles"]
author: "Eric Le"
readTime: "7 min read"
---
```

Content direction: Eric's style evolution. Starting with fine line work. The technical challenges of moving to realism (shading, depth, skin tones in black and grey). How each style teaches principles that apply to others. Why versatility matters for serving clients better. The styles he's still learning.

- [ ] **Step 4: Write `what-other-art-forms-teach-me.mdx`**

Frontmatter:
```yaml
---
title: "What Other Art Forms Teach Me About Tattooing"
slug: "what-other-art-forms-teach-me"
date: "2024-09-15"
excerpt: "Photography, painting, sculpture — the best lessons about tattooing often come from outside the tattoo world."
image: "https://placehold.co/1200x630/0d0d0d/ffffff?text=Other+Art+Forms"
tags: ["skill growth", "inspiration"]
author: "Eric Le"
readTime: "7 min read"
---
```

Content direction: Cross-pollination from other art forms. Photography (composition, contrast). Painting (color theory, brushwork translating to needle work). Sculpture (understanding 3D form on a body). Architecture (geometric patterns). How visiting museums and galleries in Helsinki, Amsterdam, and Berlin feeds his work.

---

### Task 12: Write Blog Posts — Tattoo Stories (4 posts)

**Files:**
- Create: `content/blogs/the-tattoo-that-made-a-client-cry.mdx`
- Create: `content/blogs/cover-up-stories.mdx`
- Create: `content/blogs/matching-tattoos-stories-behind-connected-ink.mdx`
- Create: `content/blogs/most-meaningful-tattoo-requests.mdx`

- [ ] **Step 1: Write `the-tattoo-that-made-a-client-cry.mdx`**

Frontmatter:
```yaml
---
title: "The Tattoo That Made a Client Cry (Happy Tears)"
slug: "the-tattoo-that-made-a-client-cry"
date: "2024-09-01"
excerpt: "Some tattoos carry so much meaning that seeing the finished piece brings tears. This is one of those stories."
image: "https://placehold.co/1200x630/0d0d0d/ffffff?text=Happy+Tears"
tags: ["tattoo stories", "client experience"]
author: "Eric Le"
readTime: "6 min read"
---
```

Content direction: A deeply emotional tattoo story (fictionalized/composite for privacy). The client's backstory — memorial piece, life milestone, or transformation. The design process and what made it special. The moment the client saw the finished piece. What moments like this mean to Eric as an artist. Why tattooing is more than a job.

- [ ] **Step 2: Write `cover-up-stories.mdx`**

Frontmatter:
```yaml
---
title: "Cover-Up Stories: Giving Old Tattoos New Life"
slug: "cover-up-stories"
date: "2024-08-15"
excerpt: "Behind every cover-up is a story of change. Here are some of the most rewarding transformations I've done."
image: "https://placehold.co/1200x630/0d0d0d/ffffff?text=Cover+Up+Stories"
tags: ["tattoo stories", "cover-ups"]
author: "Eric Le"
readTime: "7 min read"
---
```

Content direction: The art and challenge of cover-ups. Why people want them (bad work, life changes, regret). The technical challenge — working with existing ink, color, and placement. Specific (composite) stories of cover-ups Eric has done. The emotional weight of transforming something someone hated into something they love. Tips on what makes a good cover-up candidate.

- [ ] **Step 3: Write `matching-tattoos-stories-behind-connected-ink.mdx`**

Frontmatter:
```yaml
---
title: "Matching Tattoos: The Stories Behind Connected Ink"
slug: "matching-tattoos-stories-behind-connected-ink"
date: "2024-08-01"
excerpt: "Couples, siblings, best friends — matching tattoos carry unique stories of connection. Here are some of my favorites."
image: "https://placehold.co/1200x630/0d0d0d/ffffff?text=Matching+Tattoos"
tags: ["tattoo stories", "collaboration"]
author: "Eric Le"
readTime: "6 min read"
---
```

Content direction: The unique dynamic of tattooing pairs or groups. Different approaches — identical, complementary, puzzle pieces. Stories of couples, siblings, friends, parent-child matching tattoos. The emotional energy in the room. Designing something that works independently but connects as a pair. Eric's advice for people considering matching tattoos.

- [ ] **Step 4: Write `most-meaningful-tattoo-requests.mdx`**

Frontmatter:
```yaml
---
title: "The Most Meaningful Tattoo Requests I've Received"
slug: "most-meaningful-tattoo-requests"
date: "2024-07-15"
excerpt: "Some requests stay with you forever. These are the tattoo stories that have shaped who I am as an artist."
image: "https://placehold.co/1200x630/0d0d0d/ffffff?text=Meaningful+Requests"
tags: ["tattoo stories", "philosophy"]
author: "Eric Le"
readTime: "8 min read"
---
```

Content direction: A collection of the most impactful requests (composites). Memorial pieces for lost loved ones. Survival tattoos (cancer, addiction recovery). Cultural heritage pieces. First tattoos at 60+. How these requests shape Eric's understanding of what tattooing means. The responsibility of carrying someone's story on their body.

---

### Task 13: Write Blog Posts — Guest Artist Journey (3 posts)

**Files:**
- Create: `content/blogs/life-as-a-guest-artist.mdx`
- Create: `content/blogs/what-i-learn-from-every-studio.mdx`
- Create: `content/blogs/how-different-cities-shape-my-style.mdx`

- [ ] **Step 1: Write `life-as-a-guest-artist.mdx`**

Frontmatter:
```yaml
---
title: "Life as a Guest Artist: Helsinki to Amsterdam to Berlin"
slug: "life-as-a-guest-artist"
date: "2024-07-01"
excerpt: "Traveling between cities as a guest tattoo artist has changed the way I work, create, and connect with people."
image: "https://placehold.co/1200x630/0d0d0d/ffffff?text=Guest+Artist+Life"
tags: ["guest artist", "journey"]
author: "Eric Le"
readTime: "8 min read"
---
```

Content direction: What being a guest artist means in practice. The logistics — booking spots, building a client base in each city, adapting to different studios. The creative benefits of fresh environments. The challenges — being away from home studio, building trust quickly. Why Eric chose Helsinki, Amsterdam, and Berlin specifically. How each city's tattoo culture differs.

- [ ] **Step 2: Write `what-i-learn-from-every-studio.mdx`**

Frontmatter:
```yaml
---
title: "What I Learn from Every Studio I Visit"
slug: "what-i-learn-from-every-studio"
date: "2024-06-15"
excerpt: "Every studio has its own culture, workflow, and wisdom. Here's what I take away from each guest spot."
image: "https://placehold.co/1200x630/0d0d0d/ffffff?text=Every+Studio"
tags: ["guest artist", "skill growth"]
author: "Eric Le"
readTime: "7 min read"
---
```

Content direction: How different studios operate. Variations in setup, workflow, client management. Techniques and approaches Eric has picked up from other artists. The value of seeing different ways of working. How studio culture affects the client experience. Why the tattoo community's openness to sharing knowledge makes everyone better.

- [ ] **Step 3: Write `how-different-cities-shape-my-style.mdx`**

Frontmatter:
```yaml
---
title: "How Different Cities Shape My Tattoo Style"
slug: "how-different-cities-shape-my-style"
date: "2024-06-01"
excerpt: "Helsinki's minimalism, Amsterdam's boldness, Berlin's underground edge — every city leaves its mark on my art."
image: "https://placehold.co/1200x630/0d0d0d/ffffff?text=Cities+Shape+Style"
tags: ["guest artist", "inspiration"]
author: "Eric Le"
readTime: "7 min read"
---
```

Content direction: How each city's culture and aesthetic influences Eric's work. Helsinki — clean, minimal, Nordic design influence. Amsterdam — bold, colorful, progressive art scene. Berlin — raw, underground, experimental. Specific ways these influences show up in his tattoos. How travel makes him a more versatile artist. The clients in each city and what they tend to want.

---

### Task 14: Verify Build

**Files:** None (verification only)

- [ ] **Step 1: Run the development build**

```bash
cd /Users/thanhle/Desktop/playgrounds/eric-web && npm run build
```

Expected: Build succeeds with no errors. All 20 blog pages should be statically generated.

- [ ] **Step 2: Start dev server and verify listing page**

```bash
cd /Users/thanhle/Desktop/playgrounds/eric-web && npm run dev
```

Open `http://localhost:3808/blogs` — verify the listing page shows all 20 posts in a 3-column grid.

- [ ] **Step 3: Verify individual post page**

Open `http://localhost:3808/blogs/why-client-experience-is-everything` — verify the post renders with hero image, title, content, and related posts.

- [ ] **Step 4: Verify Header navigation**

Check that the "Blog" link appears in the navigation header and navigates to `/blogs`.

- [ ] **Step 5: Verify sitemap**

Open `http://localhost:3808/sitemap.xml` — verify blog URLs are included.
