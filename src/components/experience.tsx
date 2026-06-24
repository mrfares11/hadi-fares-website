import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { experience, education, involvement } from "@/data/content";

export function ExperienceSection() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've worked">
      <div className="relative border-l border-border pl-6">
        {experience.map((job, i) => (
          <Reveal key={i} delay={i * 80}>
            <div className="relative mb-10 last:mb-0">
              <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-background bg-accent" />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="text-lg font-semibold">
                  {job.role} ·{" "}
                  <span className="text-accent">{job.company}</span>
                </h3>
                <span className="text-sm text-muted">{job.period}</span>
              </div>
              {job.location && (
                <p className="mt-0.5 text-sm text-muted">{job.location}</p>
              )}
              <p className="mt-2 text-muted">{job.description}</p>
              {job.highlights && job.highlights.length > 0 && (
                <ul className="mt-3 space-y-1.5">
                  {job.highlights.map((h, j) => (
                    <li key={j} className="flex gap-2 text-sm text-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {h}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Reveal>
        ))}
      </div>

      {education.length > 0 && (
        <div className="mt-14">
          <h3 className="mb-6 text-xl font-semibold">Education</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {education.map((e, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="rounded-2xl border border-border bg-card p-5">
                  <h4 className="font-semibold">{e.degree}</h4>
                  <p className="mt-1 text-sm text-accent">{e.school}</p>
                  <p className="mt-0.5 text-sm text-muted">{e.period}</p>
                  {e.note && <p className="mt-2 text-sm text-muted">{e.note}</p>}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      )}

      {involvement.length > 0 && (
        <div className="mt-14">
          <h3 className="mb-6 text-xl font-semibold">Leadership & Involvement</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {involvement.map((it, i) => (
              <Reveal key={i} delay={(i % 2) * 60}>
                <div className="flex items-baseline justify-between gap-3 rounded-xl border border-border bg-card px-4 py-3">
                  <div>
                    <span className="font-medium">{it.role}</span>
                    <span className="text-muted"> · {it.org}</span>
                  </div>
                  {it.period && (
                    <span className="shrink-0 text-xs text-muted">{it.period}</span>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      )}
    </Section>
  );
}
