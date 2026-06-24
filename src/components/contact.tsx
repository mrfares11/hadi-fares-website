import { Reveal } from "@/components/motion-primitives";
import { site, socials } from "@/data/content";
import { SocialGlyph } from "@/components/icons";

export function Contact() {
  return (
    <section id="contact" className="px-5 py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="font-mono text-sm text-accent">／ Get in touch</p>
          <h2 className="mt-5 font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl md:text-8xl">
            Let&apos;s build
            <br />
            <span className="text-outline">something.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <a
            href={`mailto:${site.email}`}
            className="group mt-10 inline-flex items-center gap-3 font-display text-xl font-medium sm:text-3xl"
          >
            <span className="border-b-2 border-accent pb-1 transition-colors group-hover:text-accent">
              {site.email}
            </span>
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 flex items-center gap-6">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted transition-colors hover:text-accent"
              >
                <SocialGlyph icon={s.icon} className="h-5 w-5" />
                <span className="text-sm">{s.label}</span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line px-5 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 font-mono text-xs text-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <p>Beirut · Designed & built from scratch</p>
      </div>
    </footer>
  );
}
