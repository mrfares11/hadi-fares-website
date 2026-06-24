import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { achievements } from "@/data/content";
import { ArrowUpRightIcon } from "@/components/icons";

export function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="Achievements"
      title="Honors, awards & certifications"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {achievements.map((a, i) => {
          const Wrapper = a.link ? "a" : "div";
          return (
            <Reveal key={i} delay={(i % 2) * 100}>
              <Wrapper
                {...(a.link
                  ? {
                      href: a.link,
                      target: "_blank",
                      rel: "noopener noreferrer",
                    }
                  : {})}
                className={`group flex h-full items-start gap-4 rounded-2xl border border-border bg-card p-5 ${
                  a.link ? "transition-colors hover:border-accent" : ""
                }`}
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent">
                  <TrophyIcon />
                </span>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-semibold leading-snug">{a.title}</h3>
                    {a.link && (
                      <ArrowUpRightIcon className="h-4 w-4 shrink-0 text-muted transition-colors group-hover:text-accent" />
                    )}
                  </div>
                  <p className="mt-1 text-sm text-muted">
                    {[a.issuer, a.year].filter(Boolean).join(" · ")}
                  </p>
                  {a.description && (
                    <p className="mt-2 text-sm text-muted">{a.description}</p>
                  )}
                </div>
              </Wrapper>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

function TrophyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-5 w-5" aria-hidden>
      <path d="M8 4h8v5a4 4 0 0 1-8 0V4z" />
      <path d="M8 5H5v2a3 3 0 0 0 3 3M16 5h3v2a3 3 0 0 1-3 3M12 13v4M9 21h6M10 17h4l1 4H9l1-4z" />
    </svg>
  );
}
