import { SectionShell } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { site, socials } from "@/data/content";

export function Contact() {
  return (
    <SectionShell id="contact" theme="dark" grain className="px-5 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="label text-accent">Get in touch</p>
          <h2 className="mt-5 font-serif text-5xl font-medium uppercase leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
            Let&apos;s build
            <br />
            something.
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <a
            href={`mailto:${site.email}`}
            className="group mt-10 inline-flex items-center gap-3 font-sans text-xl font-semibold sm:text-3xl"
          >
            <span className="border-b-2 border-accent pb-1">{site.email}</span>
            <span className="text-accent transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </Reveal>

        <Reveal delay={150}>
          <div className="label mt-10 flex flex-wrap gap-x-6 gap-y-2 text-muted">
            {socials
              .filter((s) => s.icon !== "email")
              .map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-foreground"
                >
                  {s.label} ↗
                </a>
              ))}
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}

export function Footer() {
  return (
    <footer className="theme-dark bg-background px-5 py-8 text-foreground">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 border-t border-border pt-6 text-sm text-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <p className="label">Beirut · Lebanon</p>
      </div>
    </footer>
  );
}
