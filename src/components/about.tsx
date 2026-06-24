import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { about, stats, skills } from "@/data/content";

export function About() {
  return (
    <Section id="about" eyebrow="About" title="A bit about me">
      <div className="grid gap-10 md:grid-cols-5">
        <Reveal className="md:col-span-3">
          <div className="space-y-4 text-base leading-relaxed text-muted">
            {about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {skills.length > 0 && (
            <div className="mt-8 space-y-4">
              {skills.map((group) => (
                <div key={group.category} className="flex flex-wrap items-center gap-2">
                  <span className="mr-1 text-sm font-semibold">{group.category}:</span>
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
          )}
        </Reveal>

        {stats.length > 0 && (
          <Reveal className="md:col-span-2" delay={120}>
            <div className="grid grid-cols-3 gap-4 md:grid-cols-1">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-border bg-card p-5 text-center md:text-left"
                >
                  <div className="text-3xl font-bold text-accent">{s.value}</div>
                  <div className="mt-1 text-sm text-muted">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        )}
      </div>
    </Section>
  );
}
