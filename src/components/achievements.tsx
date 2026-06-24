import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { achievements } from "@/data/content";

export function Achievements() {
  return (
    <Section id="achievements" title="Honors & Awards">
      <div className="space-y-4">
        {achievements.map((a, i) => (
          <Reveal key={i} delay={(i % 3) * 50}>
            <div className="grid gap-1 sm:grid-cols-12 sm:gap-5">
              <div className="font-mono text-sm text-muted sm:col-span-3">
                {a.year}
              </div>
              <div className="sm:col-span-9">
                <h3 className="font-medium">
                  {a.link ? (
                    <a
                      href={a.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
                    >
                      {a.title} ↗
                    </a>
                  ) : (
                    a.title
                  )}
                </h3>
                {a.issuer && (
                  <p className="text-sm italic text-foreground/75">{a.issuer}</p>
                )}
                {a.description && (
                  <p className="mt-0.5 text-sm text-muted">{a.description}</p>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
