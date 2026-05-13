import { Dog, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Enfin une app qui simplifie vraiment ma vie avec Oslo. Tout est bien organisé.",
    name: "Sophie & Oslo",
    dog: "Berger Australien",
    bg: "bg-biscuit-purple/20",
  },
  {
    quote: "Les rappels santé me sauvent la vie. Plus rien n'est oublié.",
    name: "Thomas & Nala",
    dog: "Labrador",
    bg: "bg-biscuit-yellow/30",
  },
  {
    quote:
      "J'adore suivre ses promenades et voir ses progrès semaine après semaine.",
    name: "Julie & Simba",
    dog: "Spitz",
    bg: "bg-biscuit-mint/20",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative w-full bg-linear-to-b from-[#f4f6fa] to-biscuit-cream px-6 pb-32 pt-24 md:px-10 lg:px-20 xl:px-28"
    >
      <div className="mx-auto max-w-5xl text-center">
        <p className="mb-3 text-sm font-black uppercase tracking-wide text-biscuit-pink md:text-lg">
          Ils ont adopté MK Biscuit
        </p>

        <h2 className="font-display text-4xl font-black leading-tight text-biscuit-dark md:text-6xl">
          Des parents de chiens un peu plus sereins.
        </h2>
      </div>

      <div className="mx-auto mt-14 grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-3">
        {testimonials.map((testimonial) => (
          <article
            key={testimonial.name}
            className="rounded-4xl bg-white p-7 shadow-[0_20px_60px_rgba(9,11,47,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_28px_80px_rgba(9,11,47,0.12)] md:p-8"
          >
            <div className="mb-5 flex gap-1 text-biscuit-yellow">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-5 w-5 fill-current stroke-0" />
              ))}
            </div>

            <p className="text-base leading-7 text-biscuit-dark/75 md:text-lg md:leading-8">
              “{testimonial.quote}”
            </p>

            <div className="mt-8 flex items-center gap-4">
              <div
                className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-biscuit-dark ${testimonial.bg}`}
              >
                <Dog className="h-6 w-6" />
              </div>

              <div>
                <h3 className="font-display text-xl font-black text-biscuit-dark">
                  {testimonial.name}
                </h3>
                <p className="text-sm font-semibold text-biscuit-dark/55">
                  {testimonial.dog}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
