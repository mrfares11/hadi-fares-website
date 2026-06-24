import { Reveal } from "@/components/reveal";
import { site, socials } from "@/data/content";
import { SocialGlyph } from "@/components/icons";

export function Contact() {
  return (
    <section id="contact" className="px-5 py-24">
      <Reveal>
        <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl border border-border bg-card px-6 py-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            Contact
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Let&apos;s work together
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted">
            Have an opportunity, project, or just want to say hello? My inbox is
            always open.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
          >
            {site.email}
          </a>
          <div className="mt-8 flex items-center justify-center gap-5">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-muted transition-colors hover:text-accent"
              >
                <SocialGlyph icon={s.icon} className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border px-5 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 text-sm text-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
        <p>Built with Next.js · Deployed on Vercel</p>
      </div>
    </footer>
  );
}
