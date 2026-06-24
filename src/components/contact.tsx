import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { site, socials } from "@/data/content";

export function Contact() {
  return (
    <Section id="contact" title="Contact">
      <Reveal>
        <p className="leading-relaxed text-foreground/85">
          I&apos;m always happy to discuss research, collaborations, or
          opportunities in aerial robotics and autonomous systems. The best way
          to reach me is by email.
        </p>
        <p className="mt-4">
          <a
            href={`mailto:${site.email}`}
            className="underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
          >
            {site.email}
          </a>
        </p>
        <div className="mt-3 flex flex-wrap gap-x-4 text-sm">
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
      </Reveal>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="px-5 py-10">
      <div className="mx-auto max-w-3xl border-t border-border pt-6 text-sm text-muted">
        © {new Date().getFullYear()} {site.name} · Beirut, Lebanon
      </div>
    </footer>
  );
}
