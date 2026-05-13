import { posts } from "@/data/posts";
import Link from "next/link";
import { notFound } from "next/navigation";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = posts.find((post) => post.slug === slug);

  if (!post) {
    return {
      title: "Article introuvable | MK Biscuit",
    };
  }

  return {
    title: `${post.title} | MK Biscuit`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = posts.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-biscuit-cream px-6 py-28 md:px-10 lg:px-20 xl:px-32">
      <article className="mx-auto max-w-3xl">
        <Link
          href="/blog"
          className="font-bold text-biscuit-pink transition hover:text-biscuit-purple"
        >
          ← Retour aux conseils
        </Link>

        <p className="mt-10 text-sm font-black uppercase tracking-wide text-biscuit-pink">
          {post.readingTime}
        </p>

        <h1 className="mt-4 font-display text-5xl font-black leading-tight text-biscuit-dark md:text-7xl">
          {post.title}
        </h1>

        <p className="mt-8 text-xl leading-9 text-biscuit-dark/70">
          {post.excerpt}
        </p>

        <div className="mt-12 space-y-10 rounded-4xl bg-white p-8 text-lg leading-8 text-biscuit-dark/75 shadow-[0_20px_60px_rgba(9,11,47,0.08)]">
          {post.content.map((section) => (
            <section key={section.title}>
              <h2 className="font-display text-3xl font-black text-biscuit-dark">
                {section.title}
              </h2>

              <div className="mt-4 space-y-5">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
