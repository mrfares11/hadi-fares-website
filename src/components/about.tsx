import { SectionShell, SectionHeader } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { about, skills } from "@/data/content";

export function About() {
  return (
    <SectionShell id="about" theme="dark" grain className="px-5 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader label="About" title="A researcher who builds." />

        <div className="grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <div className="space-y-5 text-lg leading-relaxed text-foreground/85">
              {about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>

          {skills.length > 0 && (
            <Reveal className="md:col-span-5" delay={120}>
              <div className="space-y-5 md:border-l md:border-border md:pl-10">
                {skills.map((group) => (
                  <div key={group.category}>
                    <p className="label text-accent">{group.category}</p>
                    <p className="mt-1.5 leading-relaxed text-foreground/80">
                      {group.items.join(", ")}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </SectionShell>
  );
}
