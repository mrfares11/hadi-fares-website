import Image from "next/image";
import { Nav } from "@/components/nav";
import { ScrollLink } from "@/components/scroll-link";
import { Footer } from "@/components/contact";
import { SectionShell } from "@/components/section";
import { Reveal } from "@/components/reveal";
import type { CommunityRole } from "@/data/content";

export function CommunityPage({ data }: { data: CommunityRole }) {
  return (
    <>
      <Nav />
      <main className="flex-1">
        {/* Hero */}
        <SectionShell
          theme="dark"
          grain
          className="px-5 pb-20 pt-36 sm:pb-24 sm:pt-44"
        >
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <ScrollLink
                target="community"
                className="label text-muted transition-colors hover:text-foreground"
              >
                ← Community &amp; Volunteering
              </ScrollLink>
              <p className="label mt-8 text-accent">
                {data.org} · {data.period}
                {data.location ? ` · ${data.location}` : ""}
              </p>
              <h1 className="mt-4 max-w-4xl font-serif text-4xl font-medium uppercase leading-[1.02] tracking-tight sm:text-6xl">
                {data.role}
              </h1>
              {data.link && (
                <a
                  href={data.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="label mt-6 inline-flex items-center gap-1 text-muted transition-colors hover:text-foreground"
                >
                  {data.link.label} ↗
                </a>
              )}
            </Reveal>
          </div>
        </SectionShell>

        {/* Story + highlights */}
        <SectionShell theme="light" className="px-5 py-24 sm:py-32">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              {data.intro.map((p, i) => (
                <Reveal key={i} delay={i * 80}>
                  <p
                    className={`text-lg leading-relaxed text-muted ${
                      i > 0 ? "mt-6" : ""
                    }`}
                  >
                    {p}
                  </p>
                </Reveal>
              ))}
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={120}>
                <p className="label text-accent">What I do</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
                  {data.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </SectionShell>

        {/* Photo gallery */}
        {data.gallery.length > 0 && (
          <SectionShell theme="dark" grain className="px-5 py-24 sm:py-32">
            <div className="mx-auto max-w-6xl">
              <Reveal>
                <p className="label text-accent">The work</p>
                <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight sm:text-4xl">
                  In photos.
                </h2>
              </Reveal>

              <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {data.gallery.map((shot, i) => (
                  <Reveal key={i} delay={(i % 2) * 80}>
                    <figure className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-card">
                      <Image
                        src={shot.src}
                        alt={shot.alt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, 50vw"
                      />
                      {shot.caption && (
                        <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                          {shot.caption}
                        </figcaption>
                      )}
                    </figure>
                  </Reveal>
                ))}
              </div>

              <Reveal>
                <ScrollLink
                  target="community"
                  className="label mt-12 inline-flex items-center gap-2 text-accent transition-colors hover:text-foreground"
                >
                  ← Back to all community work
                </ScrollLink>
              </Reveal>
            </div>
          </SectionShell>
        )}
      </main>
      <Footer />
    </>
  );
}
