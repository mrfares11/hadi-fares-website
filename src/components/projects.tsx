import Image from "next/image";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { projects } from "@/data/content";
import { ArrowUpRightIcon, GitHubIcon } from "@/components/icons";

// Neutral greyscale banners used as a placeholder when a project has no image yet.
const gradients = [
  "from-neutral-700 to-neutral-900",
  "from-stone-600 to-stone-800",
  "from-zinc-700 to-zinc-900",
  "from-neutral-600 to-neutral-800",
  "from-stone-700 to-stone-950",
  "from-zinc-600 to-zinc-800",
];

export function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Things I've built">
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 100}>
            <article
              className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-black/5 ${
                p.featured ? "sm:col-span-2" : ""
              }`}
            >
              <div
                className={`relative w-full overflow-hidden ${
                  p.featured ? "aspect-[2.4/1]" : "aspect-[16/10]"
                }`}
              >
                {p.image ? (
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                ) : (
                  <div
                    className={`flex h-full w-full items-end bg-gradient-to-br ${
                      gradients[i % gradients.length]
                    } p-5`}
                  >
                    <span className="text-lg font-semibold text-white/95 drop-shadow-sm">
                      {p.title}
                    </span>
                  </div>
                )}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <div className="flex items-center gap-2 text-muted">
                    {p.repo && (
                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${p.title} source code`}
                        className="transition-colors hover:text-accent"
                      >
                        <GitHubIcon className="h-5 w-5" />
                      </a>
                    )}
                    {p.link && (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${p.title} live`}
                        className="transition-colors hover:text-accent"
                      >
                        <ArrowUpRightIcon className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
