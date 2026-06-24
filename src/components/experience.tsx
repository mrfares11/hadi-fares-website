import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { experience, education, involvement } from "@/data/content";

export function ExperienceSection() {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-7">
        {experience.map((job, i) => (
          <Reveal key={i} delay={(i % 3) * 50}>
            <div className="grid gap-1 sm:grid-cols-12 sm:gap-5">
              <div className="font-mono text-sm text-muted sm:col-span-3">
                {job.period}
              </div>
              <div className="sm:col-span-9">
                <h3 className="font-medium">
                  {job.role},{" "}
                  <span className="italic text-foreground/80">
                    {job.company}
                  </span>
                </h3>
                {job.location && (
                  <p className="text-sm text-muted">{job.location}</p>
                )}
                <p className="mt-1.5 leading-relaxed text-foreground/80">
                  {job.description}
                </p>
                {job.highlights && job.highlights.length > 0 && (
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted">
                    {job.highlights.map((h, j) => (
                      <li key={j}>{h}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {education.length > 0 && (
        <div className="mt-10">
          <h3 className="font-serif text-lg font-medium">Education</h3>
          <div className="mt-3 space-y-4">
            {education.map((e, i) => (
              <Reveal key={i} delay={i * 50}>
                <div className="grid gap-1 sm:grid-cols-12 sm:gap-5">
                  <div className="font-mono text-sm text-muted sm:col-span-3">
                    {e.period}
                  </div>
                  <div className="sm:col-span-9">
                    <h4 className="font-medium">{e.degree}</h4>
                    <p className="italic text-foreground/80">{e.school}</p>
                    {e.note && <p className="text-sm text-muted">{e.note}</p>}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      )}

      {involvement.length > 0 && (
        <div className="mt-10">
          <h3 className="font-serif text-lg font-medium">
            Leadership & Service
          </h3>
          <ul className="mt-3 space-y-1.5 text-sm text-foreground/80">
            {involvement.map((it, i) => (
              <Reveal key={i} delay={(i % 3) * 40}>
                <li>
                  <span className="font-medium">{it.role}</span>, {it.org}
                  {it.period && (
                    <span className="text-muted"> · {it.period}</span>
                  )}
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      )}
    </Section>
  );
}
