import { Section } from "@/components/section";
import { Reveal } from "@/components/motion-primitives";
import { experience, education, involvement } from "@/data/content";

export function ExperienceSection() {
  return (
    <Section id="experience" index="02" title="Experience">
      <div className="divide-y divide-line border-t border-line">
        {experience.map((job, i) => (
          <Reveal key={i} delay={i * 0.04}>
            <div className="group grid gap-3 py-7 transition-colors md:grid-cols-12 md:gap-6">
              <div className="font-mono text-sm text-muted md:col-span-3">
                {job.period}
                {job.location && (
                  <div className="mt-1 text-xs opacity-70">{job.location}</div>
                )}
              </div>
              <div className="md:col-span-9">
                <h3 className="font-display text-xl font-semibold tracking-tight">
                  {job.role}
                </h3>
                <p className="mt-0.5 text-accent">{job.company}</p>
                <p className="mt-3 max-w-2xl text-muted">{job.description}</p>
                {job.highlights && job.highlights.length > 0 && (
                  <ul className="mt-3 max-w-2xl space-y-1.5">
                    {job.highlights.map((h, j) => (
                      <li key={j} className="flex gap-3 text-sm text-muted">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {education.length > 0 && (
        <div className="mt-16">
          <h3 className="font-mono text-xs uppercase tracking-wider text-accent">
            Education
          </h3>
          <div className="mt-5 divide-y divide-line border-t border-line">
            {education.map((e, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="grid gap-2 py-5 md:grid-cols-12 md:gap-6">
                  <span className="font-mono text-sm text-muted md:col-span-3">
                    {e.period}
                  </span>
                  <div className="md:col-span-9">
                    <h4 className="font-display text-lg font-semibold">
                      {e.degree}
                    </h4>
                    <p className="text-accent">{e.school}</p>
                    {e.note && <p className="mt-1 text-sm text-muted">{e.note}</p>}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      )}

      {involvement.length > 0 && (
        <div className="mt-16">
          <h3 className="font-mono text-xs uppercase tracking-wider text-accent">
            Leadership & Involvement
          </h3>
          <div className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
            {involvement.map((it, i) => (
              <Reveal key={i} delay={(i % 3) * 0.05}>
                <span className="text-foreground/85">
                  <span className="font-medium">{it.role}</span>
                  <span className="text-muted"> · {it.org}</span>
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      )}
    </Section>
  );
}
