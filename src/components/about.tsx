import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { about, skills } from "@/data/content";

export function About() {
  return (
    <Section id="about" eyebrow="About" title="A bit about me">
      <Reveal>
        <div className="grid gap-4 text-base leading-relaxed text-muted md:grid-cols-2 md:gap-x-10">
          {about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </Reveal>

      {skills.length > 0 && (
        <Reveal delay={120}>
          <div className="mt-10 space-y-4 border-t border-border pt-8">
            {skills.map((group) => (
              <div
                key={group.category}
                className="flex flex-wrap items-center gap-2"
              >
                <span className="mr-1 text-sm font-semibold">
                  {group.category}:
                </span>
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-card px-3 py-1 text-xs text-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </Reveal>
      )}
    </Section>
  );
}
