# Blog Section Design Spec

## Overview

Add a 20-post blog section to the Eric Le Tattoo website for SEO. Blog posts are personal and story-driven, covering client experience, collaboration, skill growth, tattoo stories, and guest artist journeys.

## Content Architecture

### Storage

- MDX files in `content/blogs/` at project root
- Parsed with `next-mdx-remote` + `gray-matter`
- Fully static (generated at build time via `generateStaticParams`)

### Frontmatter Schema

```yaml
---
title: string          # Post title
slug: string           # URL slug
date: string           # ISO date (YYYY-MM-DD)
excerpt: string        # 1-2 sentence summary
image: string          # Path to placeholder image
tags: string[]         # Category tags
author: string         # Always "Eric Le"
readTime: string       # e.g. "7 min read"
---
```

### 20 Blog Posts

**Client Experience (5):**
1. `why-client-experience-is-everything` — Why Client Experience Is Everything in Tattooing
2. `how-i-make-first-time-clients-feel-at-home` — How I Make First-Time Clients Feel at Home
3. `from-consultation-to-aftercare` — From Consultation to Aftercare: The Full Client Journey
4. `why-i-never-rush-a-tattoo-session` — Why I Never Rush a Tattoo Session
5. `building-trust-before-the-needle` — Building Trust Before the Needle Touches Skin

**Collaboration with Clients (4):**
6. `your-tattoo-your-story` — Your Tattoo, Your Story: How We Design Together
7. `when-clients-bring-ideas-that-change-everything` — When Clients Bring Ideas That Change Everything
8. `the-art-of-listening` — The Art of Listening: Understanding What You Really Want
9. `how-a-simple-sketch-becomes-a-masterpiece` — How a Simple Sketch Becomes a Masterpiece on Skin

**Daily Learning & Skill Growth (4):**
10. `why-i-still-practice-drawing-every-day` — Why I Still Practice Drawing Every Single Day
11. `learning-never-stops` — Learning Never Stops: My Journey with New Techniques
12. `from-fine-lines-to-realism` — From Fine Lines to Realism: Expanding My Style Range
13. `what-other-art-forms-teach-me` — What Other Art Forms Teach Me About Tattooing

**Tattoo Stories (4):**
14. `the-tattoo-that-made-a-client-cry` — The Tattoo That Made a Client Cry (Happy Tears)
15. `cover-up-stories` — Cover-Up Stories: Giving Old Tattoos New Life
16. `matching-tattoos-stories-behind-connected-ink` — Matching Tattoos: The Stories Behind Connected Ink
17. `most-meaningful-tattoo-requests` — The Most Meaningful Tattoo Requests I've Received

**Guest Artist Journey (3):**
18. `life-as-a-guest-artist` — Life as a Guest Artist: Helsinki to Amsterdam to Berlin
19. `what-i-learn-from-every-studio` — What I Learn from Every Studio I Visit
20. `how-different-cities-shape-my-style` — How Different Cities Shape My Tattoo Style

### Post Length

Each post: ~1000-1500 words. Written in first person from Eric's perspective. Personal, authentic tone — not generic SEO content.

### Placeholder Images

20 placeholder images using `placehold.co` URLs or styled gradient divs in `/public/images/blogs/`. Dark-themed to match the site aesthetic.

## Technical Architecture

### Dependencies

- `next-mdx-remote` — server-side MDX parsing and rendering
- `gray-matter` — frontmatter extraction

### Utility Layer (`src/lib/blogs.ts`)

```typescript
getAllBlogs(): Promise<BlogMeta[]>
// Reads all MDX files from content/blogs/, parses frontmatter, returns sorted by date (newest first)

getBlogBySlug(slug: string): Promise<{ meta: BlogMeta; content: MDXRemoteSerializeResult }>
// Reads single MDX file, returns frontmatter + compiled MDX content

getAllSlugs(): Promise<string[]>
// Returns all slugs for generateStaticParams
```

### Routes

| Route | File | Purpose |
|-------|------|---------|
| `/blogs` | `src/app/blogs/page.tsx` | Blog listing page |
| `/blogs/[slug]` | `src/app/blogs/[slug]/page.tsx` | Individual blog post |

### SEO Per Post

- Dynamic `generateMetadata` — title, description (from excerpt), OG image
- JSON-LD `BlogPosting` structured data (headline, author, datePublished, image)
- Canonical URL: `https://erictattoo.fi/blogs/[slug]`
- `generateStaticParams` for full static generation at build time

### Navigation

- Add "Blog" link to Header component between existing nav links

### Sitemap

- Update `src/app/sitemap.ts` to include all blog post URLs

## Styling & Components

### Blog Card (`src/components/BlogCard.tsx`)

- Dark card (#0d0d0d) with `card-border` style (1px white at 8% opacity)
- Rounded corners (16px)
- Image: 16:9 aspect ratio, rounded top corners, placeholder
- Title: Satoshi font, bold, white
- Excerpt: Inter Display, muted gray (#a1a1a1), 2-line clamp
- Tags: small pills with glass background
- Date + read time: small text, muted
- Hover: subtle scale (1.02) + brightness lift
- Framer Motion `fadeUp` reveal on scroll

### Blog Listing Page (`/blogs`)

- Page header: "Blog" title (Satoshi, large) + subtitle "Stories, insights, and the art behind the ink"
- Grid: 3 columns (desktop), 2 columns (tablet), 1 column (mobile)
- Gap: 24px
- Padding consistent with other sections
- Staggered Framer Motion reveal

### Blog Post Page (`/blogs/[slug]`)

- Hero area: full-width placeholder image, title overlay, date, read time, author
- Content area: max-width 720px, centered
- MDX prose styling (dark theme):
  - Headings: Satoshi, white
  - Body: Inter Display, #d1d1d1
  - Links: white, underlined, hover brightness
  - Blockquotes: left border accent, italic
  - Lists: styled bullets/numbers
  - Images: full-width, rounded corners
- Back to blogs link at top
- Related posts section at bottom (matching tags, max 3)

### No New Design Patterns

Everything reuses existing styles: glass, card-border, fadeUp/StaggerReveal animations, dark theme palette, existing font stack.
