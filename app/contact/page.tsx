import { Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { submitContactForm } from "./actions";

export const metadata = {
  title: "Contact | MK Biscuit",
  description: "Contactez l’équipe MK Biscuit.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-biscuit-cream px-6 py-28 md:px-10 lg:px-20 xl:px-32">
      <section className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="mb-4 text-sm font-black uppercase tracking-wide text-biscuit-pink">
            Contact
          </p>

          <h1 className="font-display text-5xl font-black leading-tight text-biscuit-dark md:text-7xl">
            Une question, une idée, un biscuit à partager ?
          </h1>

          <p className="mt-6 max-w-2xl text-xl leading-9 text-biscuit-dark/70">
            Écris-nous et on te répondra avec plaisir. MK aboie rarement sur les
            messages entrants.
          </p>

          <div className="mt-10 space-y-5">
            <ContactInfo icon={Mail} title="Email" text="hello@mkbiscuit.app" />
            <ContactInfo
              icon={MessageCircle}
              title="Support"
              text="Réponse sous 24 à 48h"
            />
            <ContactInfo
              icon={MapPin}
              title="Localisation"
              text="Disponible partout, surtout sur le canapé"
            />
          </div>
        </div>

        <form
          action={submitContactForm}
          className="rounded-4xl bg-white p-6 shadow-[0_20px_60px_rgba(9,11,47,0.08)] md:p-8"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Prénom" name="firstname" placeholder="MK" />
            <Field label="Email" name="email" placeholder="toi@email.com" />
          </div>

          <div className="mt-5">
            <Field
              label="Sujet"
              name="subject"
              placeholder="Une question sur MK Biscuit"
            />
          </div>

          <div className="mt-5">
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-black text-biscuit-dark"
            >
              Message
            </label>

            <textarea
              id="message"
              name="message"
              rows={6}
              placeholder="Dis-nous tout..."
              className="w-full resize-none rounded-3xl border border-biscuit-dark/10 bg-biscuit-cream px-5 py-4 font-semibold text-biscuit-dark outline-none transition placeholder:text-biscuit-dark/35 focus:border-biscuit-pink"
            />
          </div>

          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-biscuit-pink px-8 py-4 font-black text-white shadow-xl shadow-biscuit-pink/25 transition hover:-translate-y-1 md:w-auto"
          >
            Envoyer le message
            <Send className="h-5 w-5" />
          </button>
        </form>
      </section>
    </main>
  );
}

function Field({
  label,
  name,
  placeholder,
}: {
  label: string;
  name: string;
  placeholder: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-black text-biscuit-dark"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        placeholder={placeholder}
        className="w-full rounded-full border border-biscuit-dark/10 bg-biscuit-cream px-5 py-4 font-semibold text-biscuit-dark outline-none transition placeholder:text-biscuit-dark/35 focus:border-biscuit-pink"
      />
    </div>
  );
}

function ContactInfo({
  icon: Icon,
  title,
  text,
}: {
  icon: React.ElementType;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-biscuit-pink shadow-md">
        <Icon className="h-6 w-6" />
      </div>

      <div>
        <p className="font-display text-xl font-black text-biscuit-dark">
          {title}
        </p>
        <p className="font-semibold text-biscuit-dark/60">{text}</p>
      </div>
    </div>
  );
}
