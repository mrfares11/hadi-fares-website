import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { projects } from "@/data/content";

export function Projects() {
  return (
    <Section id="projects" title="Research & Projects">
      <div className="space-y-8">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 3) * 60}>
            <div className="grid gap-1 sm:grid-cols-12 sm:gap-5">
              <div className="sm:col-span-12">
                <h3 className="font-serif text-lg font-medium">
                  {p.title}
                  {p.featured && (
                    <span className="ml-2 align-middle text-xs italic text-muted">
                      (featured)
                    </span>
                  )}
                </h3>
                <p className="mt-1 leading-relaxed text-foreground/80">
                  {p.description}
                </p>
                <p className="mt-2 text-sm text-muted">{p.tags.join(" · ")}</p>
                {(p.link || p.repo) && (
                  <p className="mt-1.5 flex flex-wrap gap-x-4 text-sm">
                    {p.link && (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
                      >
                        Project page ↗
                      </a>
                    )}
                    {p.repo && (
                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
                      >
                        Code ↗
                      </a>
                    )}
                  </p>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
