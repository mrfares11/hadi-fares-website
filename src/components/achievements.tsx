import { SectionShell, SectionHeader } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { achievements } from "@/data/content";

export function Achievements() {
  return (
    <SectionShell id="achievements" theme="dark" grain className="px-5 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="Honors & Awards"
          title="Recognition along the way."
        />

        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
          {achievements.map((a, i) => {
            const Tag = a.link ? "a" : "div";
            return (
              <Reveal key={i}>
                <Tag
                  {...(a.link
                    ? { href: a.link, target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group flex h-full flex-col bg-background p-6 transition-colors hover:bg-card"
                >
                  <p className="label text-accent">{a.year}</p>
                  <h3 className="mt-3 font-serif text-xl font-medium leading-snug">
                    {a.title}
                    {a.link && (
                      <span className="ml-1 inline-block transition-transform group-hover:translate-x-1">
                        ↗
                      </span>
                    )}
                  </h3>
                  {a.issuer && (
                    <p className="mt-1 text-sm italic text-muted">{a.issuer}</p>
                  )}
                  {a.description && (
                    <p className="mt-2 text-sm text-muted">{a.description}</p>
                  )}
                </Tag>
              </Reveal>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}
