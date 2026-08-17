import Image from "next/image";
import Link from "next/link";
import { SectionShell, SectionHeader } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { community } from "@/data/content";

export function Community() {
  return (
    <SectionShell id="community" theme="light" className="px-5 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="Community & Volunteering"
          title="Giving back, hands on."
          subtitle="Beyond the lab — running AUB's student makerspace and guiding hikes across Lebanon."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {community.map((c, i) => (
            <Reveal key={c.slug} delay={i * 100} className="h-full">
              <Link
                href={`/community/${c.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  {/* Decorative: the card's h3 already names the link. */}
                  <Image
                    src={c.image}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="label text-muted">
                    {c.org} · {c.period}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl font-medium uppercase leading-tight tracking-tight">
                    {c.role}
                  </h3>
                  <p className="mt-3 text-muted">{c.card}</p>
                  <p className="label mt-auto inline-flex items-center gap-1 pt-5 text-accent">
                    See the work
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
