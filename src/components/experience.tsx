import { SectionShell, SectionHeader } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { experience, education, involvement } from "@/data/content";

export function ExperienceSection() {
  return (
    <SectionShell id="experience" theme="light" className="px-5 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="Professional Experience"
          title="Where work shaped expertise."
          subtitle="Roles across aerial robotics, computer vision, and autonomous systems."
          stat={{ value: String(experience.length), label: "Roles held" }}
        />

        <div className="border-t border-border">
          {experience.map((job, i) => (
            <Reveal key={i}>
              <div className="group grid gap-3 border-b border-border py-8 sm:grid-cols-12 sm:gap-6">
                <div className="flex items-start gap-4 sm:col-span-8">
                  <span className="font-sans text-sm font-bold text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="label text-muted">
                      {job.company}
                      {job.location ? ` · ${job.location}` : ""}
                    </p>
                    <h3 className="mt-2 font-serif text-2xl font-medium uppercase leading-tight tracking-tight sm:text-3xl">
                      {job.role}
                    </h3>
                    <p className="mt-3 max-w-xl text-muted">{job.description}</p>
                    {job.highlights && job.highlights.length > 0 && (
                      <ul className="mt-3 max-w-xl list-disc space-y-1 pl-5 text-sm text-muted">
                        {job.highlights.map((h, j) => (
                          <li key={j}>{h}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
                <div className="font-sans text-sm font-semibold text-muted sm:col-span-4 sm:text-right">
                  {job.period}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {education.length > 0 && (
          <div className="mt-16 grid gap-8 sm:grid-cols-2">
            <Reveal>
              <div>
                <p className="label text-accent">Education</p>
                {education.map((e, i) => (
                  <div key={i} className="mt-4">
                    <h4 className="font-serif text-xl font-medium">{e.degree}</h4>
                    <p className="italic text-muted">{e.school}</p>
                    <p className="text-sm text-muted">{e.period}</p>
                    {e.note && (
                      <p className="mt-1 text-sm text-muted">{e.note}</p>
                    )}
                  </div>
                ))}
              </div>
            </Reveal>

            {involvement.length > 0 && (
              <Reveal delay={100}>
                <div>
                  <p className="label text-accent">Leadership &amp; Service</p>
                  <ul className="mt-4 space-y-2 text-muted">
                    {involvement.map((it, i) => (
                      <li key={i}>
                        <span className="font-medium text-foreground">
                          {it.role}
                        </span>
                        , {it.org}
                        {it.period ? ` · ${it.period}` : ""}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )}
          </div>
        )}
      </div>
    </SectionShell>
  );
}
