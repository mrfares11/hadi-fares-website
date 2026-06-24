import { Section } from "@/components/section";
import { Reveal } from "@/components/motion-primitives";
import { achievements } from "@/data/content";
import { ArrowUpRightIcon } from "@/components/icons";

export function Achievements() {
  return (
    <Section id="achievements" index="05" title="Honors & Awards">
      <div className="border-t border-line">
        {achievements.map((a, i) => {
          const Tag = a.link ? "a" : "div";
          return (
            <Reveal key={i} delay={(i % 4) * 0.04}>
              <Tag
                {...(a.link
                  ? { href: a.link, target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group grid gap-2 border-b border-line py-6 md:grid-cols-12 md:gap-6"
              >
                <span className="font-mono text-sm text-muted md:col-span-2">
                  {a.year}
                </span>
                <div className="md:col-span-10">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-lg font-semibold tracking-tight transition-colors group-hover:text-accent">
                      {a.title}
                    </h3>
                    {a.link && (
                      <ArrowUpRightIcon className="mt-1 h-4 w-4 shrink-0 text-muted transition-colors group-hover:text-accent" />
                    )}
                  </div>
                  {a.issuer && (
                    <p className="mt-1 text-sm text-accent">{a.issuer}</p>
                  )}
                  {a.description && (
                    <p className="mt-1.5 max-w-2xl text-sm text-muted">
                      {a.description}
                    </p>
                  )}
                </div>
              </Tag>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
