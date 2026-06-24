import Image from "next/image";
import { site, socials } from "@/data/content";

export function Hero() {
  return (
    <section id="top" className="px-5 pt-28 pb-6 sm:pt-32">
      <div className="animate-fade-up mx-auto max-w-3xl">
        <div className="flex flex-col-reverse items-start gap-6 sm:flex-row sm:justify-between">
          <div>
            <h1 className="font-serif text-4xl font-medium tracking-tight sm:text-5xl">
              {site.name}
            </h1>
            <p className="mt-2 text-lg text-foreground/80">{site.role}</p>
            <p className="mt-1 text-sm text-muted">
              Mechanical Engineering · American University of Beirut
              <br />
              {site.location}
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
              <a
                href={`mailto:${site.email}`}
                className="underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
              >
                Email
              </a>
              {site.resume && (
                <a
                  href={site.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
                >
                  CV
                </a>
              )}
              {socials
                .filter((s) => s.icon !== "email")
                .map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
                  >
                    {s.label}
                  </a>
                ))}
            </div>
          </div>

          <Image
            src={site.photo}
            alt={site.name}
            width={150}
            height={150}
            priority
            className="h-28 w-28 shrink-0 rounded-full border border-border object-cover grayscale sm:h-32 sm:w-32"
          />
        </div>

        <p className="mt-8 leading-relaxed text-foreground/85">{site.tagline}</p>
      </div>
    </section>
  );
}
