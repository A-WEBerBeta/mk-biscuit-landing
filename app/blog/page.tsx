import { posts } from "@/data/posts";
import Link from "next/link";

export const metadata = {
  title: "Conseils chien | MK Biscuit",
  description: "Conseils simples pour organiser la vie de ton chien.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-biscuit-cream px-6 py-28 md:px-10 lg:px-20 xl:px-32">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-sm font-black uppercase tracking-wide text-biscuit-pink">
          Conseils MK Biscuit
        </p>

        <h1 className="font-display text-5xl font-black leading-tight text-biscuit-dark md:text-7xl">
          Des petits conseils pour des chiens bien dans leurs pattes.
        </h1>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="rounded-4xl bg-white p-7 shadow-[0_20px_60px_rgba(9,11,47,0.08)] transition hover:-translate-y-2 hover:shadow-xl"
            >
              <p className="text-sm font-bold text-biscuit-dark/50">
                {post.readingTime}
              </p>

              <h2 className="mt-4 font-display text-3xl font-black text-biscuit-dark">
                {post.title}
              </h2>

              <p className="mt-4 leading-7 text-biscuit-dark/70">
                {post.excerpt}
              </p>

              <span className="mt-6 inline-block font-bold text-biscuit-pink">
                Lire l’article →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
