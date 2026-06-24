import { Section } from "@/components/section";
import { Reveal, Stagger, StaggerItem, Counter } from "@/components/motion-primitives";
import { about, stats, skills } from "@/data/content";

export function About() {
  return (
    <Section id="about" index="01" title="About">
      <div className="grid gap-14 md:grid-cols-12">
        <div className="md:col-span-7">
          <div className="space-y-6 text-lg leading-relaxed text-foreground/90">
            {about.map((p, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>
        </div>

        {stats.length > 0 && (
          <div className="md:col-span-5">
            <Stagger className="grid grid-cols-2 gap-x-6 gap-y-10">
              {stats.map((s) => (
                <StaggerItem key={s.label}>
                  <Counter
                    value={s.value}
                    className="font-display text-4xl font-bold tracking-tight text-accent sm:text-5xl"
                  />
                  <div className="mt-2 text-sm text-muted">{s.label}</div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        )}
      </div>

      {skills.length > 0 && (
        <Reveal className="mt-16 border-t border-line pt-10">
          <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((group) => (
              <div key={group.category}>
                <h3 className="font-mono text-xs uppercase tracking-wider text-accent">
                  {group.category}
                </h3>
                <p className="mt-2 leading-relaxed text-foreground/85">
                  {group.items.join(", ")}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      )}
    </Section>
  );
}
