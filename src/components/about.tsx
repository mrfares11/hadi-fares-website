import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { about, skills } from "@/data/content";

export function About() {
  return (
    <Section id="about" title="About">
      <Reveal>
        <div className="space-y-4 leading-relaxed text-foreground/85">
          {about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </Reveal>

      {skills.length > 0 && (
        <Reveal delay={100}>
          <div className="mt-8 space-y-2 border-t border-border pt-6 text-sm leading-relaxed">
            {skills.map((group) => (
              <p key={group.category}>
                <span className="font-medium">{group.category}: </span>
                <span className="text-muted">{group.items.join(", ")}</span>
              </p>
            ))}
          </div>
        </Reveal>
      )}
    </Section>
  );
}
