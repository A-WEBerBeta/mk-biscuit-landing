import { PawPrint } from "lucide-react";
import Image from "next/image";

const qrPattern = [
  1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0,
];

export default function FinalCta() {
  return (
    <section id="download" className="relative w-full bg-biscuit-yellow">
      {/* Wave */}
      <div className="absolute -top-20 left-0 w-full">
        <svg
          viewBox="0 0 1440 80"
          className="block h-25.25 w-full"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 43.9999C106.667 43.9999 213.333 7.99994 320 7.99994C426.667 7.99994 533.333 43.9999 640 43.9999C746.667 43.9999 853.333 7.99994 960 7.99994C1066.67 7.99994 1173.33 43.9999 1280 43.9999C1386.67 43.9999 1440 19.0266 1440 9.01329V100H0V43.9999Z"
            className="fill-biscuit-yellow"
          />
        </svg>
      </div>

      <div className="relative z-10 grid w-full items-center gap-8 px-6 pb-12 pt-6 md:px-10 lg:grid-cols-[0.75fr_1.15fr] lg:px-20 xl:grid-cols-[0.85fr_1.1fr_1fr] xl:px-32">
        {/* LEFT IMAGE */}
        <div className="order-2 flex justify-center lg:order-1">
          <Image
            src="/images/cta-visual.png"
            alt="Mockup MK Biscuit"
            width={900}
            height={700}
            className="w-full max-w-75 object-contain md:max-w-95 lg:max-w-107.5 xl:max-w-120"
          />
        </div>

        {/* MID TEXT */}
        <div className="order-1 text-center lg:order-2 lg:text-left">
          <p className="mb-5 inline-flex items-center rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-wide text-biscuit-pink shadow-sm md:text-sm">
            Rejoins MK Biscuit 🐾
          </p>

          <h2 className="font-display text-4xl font-black leading-[0.95] tracking-tight text-biscuit-dark md:text-5xl xl:text-6xl">
            Encore plus de{" "}
            <span className="text-biscuit-pink">beaux moments</span> avec ton
            chien.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-biscuit-dark/70 md:text-lg md:leading-8 lg:mx-0">
            Balades, santé, souvenirs et rappels importants. Tout au même
            endroit. Télécharge MK Biscuit gratuitement et rejoins les parents
            de chiens heureux.
          </p>
        </div>

        {/* RIGHT CARD */}
        <div className="order-3 flex justify-center lg:col-span-2 xl:col-span-1 xl:justify-end">
          <div className="flex w-full max-w-160 flex-col items-center gap-5 rounded-4xl bg-white p-6 shadow-[0_20px_50px_rgba(0,0,0,0.12)] sm:flex-row sm:justify-around md:p-8">
            {/* QR */}
            <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-2xl border border-black/10 bg-white">
              <div className="grid grid-cols-5 gap-0.75">
                {qrPattern.map((cell, i) => (
                  <div
                    key={i}
                    className={`h-4 w-4 rounded-xs ${
                      cell ? "bg-black" : "bg-white"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* CONTENT */}
            <div className="flex flex-col items-center sm:items-start">
              <div className="mb-4 flex items-center gap-3">
                <PawPrint
                  className="h-6 w-6 fill-biscuit-pink text-biscuit-pink"
                  strokeWidth={1.8}
                />

                <p className="text-center text-lg font-black text-biscuit-pink md:text-xl sm:text-left">
                  Scanne pour télécharger
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-3 sm:justify-start">
                <button className="rounded-xl bg-black px-5 py-3 text-left text-white shadow-lg transition hover:-translate-y-0.5">
                  <div className="text-[11px] leading-none opacity-80 md:text-[12px]">
                    Télécharger sur
                  </div>
                  <div className="text-base font-bold md:text-lg">
                    App Store
                  </div>
                </button>

                <button className="rounded-xl bg-black px-5 py-3 text-left text-white shadow-lg transition hover:-translate-y-0.5">
                  <div className="text-[11px] leading-none opacity-80 md:text-[12px]">
                    Disponible sur
                  </div>
                  <div className="text-base font-bold md:text-lg">
                    Google Play
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
