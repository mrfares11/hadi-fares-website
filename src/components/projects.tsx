import Image from "next/image";
import { SectionShell, SectionHeader } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { projects } from "@/data/content";

const grayGradients = [
  "from-neutral-700 to-neutral-900",
  "from-stone-600 to-stone-800",
  "from-zinc-700 to-zinc-900",
  "from-neutral-600 to-neutral-800",
  "from-stone-700 to-stone-950",
  "from-zinc-600 to-zinc-800",
  "from-neutral-800 to-black",
  "from-stone-800 to-zinc-900",
];

export function Projects() {
  return (
    <SectionShell id="projects" theme="dark" grain className="px-5 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="Portfolio Projects"
          title="Real work, delivered with impact."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => {
            const href = p.link || p.repo;
            const Tag = href ? "a" : "div";
            return (
              <Reveal key={p.title} delay={(i % 3) * 80}>
                <Tag
                  {...(href
                    ? { href, target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group relative block aspect-[4/5] overflow-hidden rounded-2xl border border-border"
                >
                  {/* Visual */}
                  {p.image ? (
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div
                      className={`h-full w-full bg-gradient-to-br ${
                        grayGradients[i % grayGradients.length]
                      }`}
                    />
                  )}

                  {/* Legibility overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-between p-5 text-white">
                    <p className="label text-white/70">{p.tags[0]}</p>
                    <div>
                      <h3 className="font-serif text-xl font-medium uppercase leading-tight tracking-tight">
                        {p.title}
                      </h3>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {p.tags.slice(0, 3).map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-white/30 px-2.5 py-0.5 text-[11px] font-medium text-white/80"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      {href && (
                        <p className="label mt-4 inline-flex items-center gap-1 text-accent">
                          View project
                          <span className="transition-transform group-hover:translate-x-1">
                            ↗
                          </span>
                        </p>
                      )}
                    </div>
                  </div>
                </Tag>
              </Reveal>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}
