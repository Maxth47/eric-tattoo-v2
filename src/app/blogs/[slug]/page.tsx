import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogBySlug, getAllSlugs, getAllBlogs } from "@/lib/blogs";
import { BlogHero, BlogContent, BlogRelated, BlogRelatedCard, BlogBackLink } from "@/components/BlogPostAnimations";

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
        images: [
          { url: meta.image, width: 1200, height: 630, alt: meta.title },
        ],
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
    .filter((b) => b.slug !== slug && b.tags.some((t) => meta.tags.includes(t)))
    .slice(0, 3);

  return (
    <main className="min-h-screen pt-32 pb-20 px-5 md:px-10">
      <div className="max-w-[720px] mx-auto">
        {/* Back link */}
        <BlogBackLink>
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-[14px] text-white/40 hover:text-white/70 transition-colors mb-10 font-[family-name:var(--font-satoshi)]"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5" />
              <path d="M12 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
        </BlogBackLink>

        {/* Hero */}
        <BlogHero>
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
            <span>
              {new Date(meta.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span>·</span>
            <span>{meta.readTime}</span>
          </div>

          {/* Featured image */}
          <div className="relative aspect-[1/1] rounded-2xl overflow-hidden mt-8">
            <Image
              src={meta.image}
              alt={meta.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 720px"
            />
          </div>
        </BlogHero>

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
        <BlogContent>
          <article
            className="prose prose-invert prose-lg max-w-none
            prose-headings:font-[family-name:var(--font-satoshi)] prose-headings:text-white prose-headings:font-bold
            prose-p:text-[#d1d1d1] prose-p:font-[family-name:var(--font-inter-display)] prose-p:leading-relaxed
            prose-a:text-white prose-a:underline hover:prose-a:brightness-75
            prose-blockquote:border-l-white/20 prose-blockquote:text-white/60 prose-blockquote:italic
            prose-strong:text-white
            prose-li:text-[#d1d1d1]
            prose-img:rounded-2xl
          "
          >
            {content}
          </article>
        </BlogContent>

        {/* Related Posts */}
        {related.length > 0 && (
          <BlogRelated>
            <h2 className="text-[24px] font-bold text-white mb-8 font-[family-name:var(--font-satoshi)]">
              Related Posts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((r, i) => (
                <BlogRelatedCard key={r.slug} index={i}>
                  <Link
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
                </BlogRelatedCard>
              ))}
            </div>
          </BlogRelated>
        )}
      </div>
    </main>
  );
}
