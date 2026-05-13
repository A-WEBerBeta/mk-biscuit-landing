export default function Loading() {
  return (
    <main className="min-h-screen bg-biscuit-cream px-6 py-28">
      <div className="mx-auto max-w-6xl animate-pulse">
        <div className="h-4 w-32 rounded-full bg-biscuit-pink/20" />

        <div className="mt-6 h-16 w-2/3 rounded-3xl bg-biscuit-dark/10" />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="rounded-4xl bg-white p-7 shadow-[0_20px_60px_rgba(9,11,47,0.05)]"
            >
              <div className="h-4 w-20 rounded-full bg-biscuit-dark/10" />

              <div className="mt-6 h-10 rounded-2xl bg-biscuit-dark/10" />

              <div className="mt-6 space-y-3">
                <div className="h-4 rounded-full bg-biscuit-dark/10" />
                <div className="h-4 w-5/6 rounded-full bg-biscuit-dark/10" />
                <div className="h-4 w-2/3 rounded-full bg-biscuit-dark/10" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
