import Image from "next/image";
import { site, socials } from "@/data/content";
import { SocialGlyph, ArrowUpRightIcon } from "@/components/icons";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-5 pt-32 pb-20 sm:pt-40">
      {/* soft background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-accent/15 blur-[120px]"
      />
      <div className="mx-auto flex max-w-5xl flex-col-reverse items-center gap-10 md:flex-row md:items-center md:justify-between">
        <div className="animate-fade-up max-w-xl text-center md:text-left">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted">
            <span className="h-2 w-2 rounded-full bg-foreground" />
            {site.role}
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Hi, I&apos;m {site.name}
          </h1>
          <p className="mt-4 text-lg text-muted">{site.tagline}</p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center gap-1.5 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-ink transition-transform hover:-translate-y-0.5"
            >
              View my work
            </a>
            {site.resume && (
              <a
                href={site.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium transition-colors hover:bg-accent-soft"
              >
                Resume <ArrowUpRightIcon className="h-3.5 w-3.5" />
              </a>
            )}
          </div>

          <div className="mt-7 flex items-center justify-center gap-4 md:justify-start">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-muted transition-colors hover:text-accent"
              >
                <SocialGlyph icon={s.icon} className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="animate-fade-up relative shrink-0">
          <div className="absolute inset-0 -z-10 translate-x-3 translate-y-3 rounded-3xl bg-accent/20" />
          <Image
            src={site.photo}
            alt={site.name}
            width={260}
            height={260}
            priority
            className="h-44 w-44 rounded-3xl border border-border object-cover sm:h-60 sm:w-60"
          />
        </div>
      </div>
    </section>
  );
}
