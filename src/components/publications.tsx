import { SectionShell, SectionHeader } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { publications } from "@/data/content";

export function Publications() {
  if (publications.length === 0) return null;

  return (
    <SectionShell id="publications" theme="light" className="px-5 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="Research"
          title="Published work."
          stat={{ value: String(publications.length), label: "Papers" }}
        />

        <div className="border-t border-border">
          {publications.map((pub, i) => {
            const Tag = pub.link ? "a" : "div";
            return (
              <Reveal key={i}>
                <Tag
                  {...(pub.link
                    ? { href: pub.link, target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group grid gap-3 border-b border-border py-8 sm:grid-cols-12"
                >
                  <span className="font-sans text-sm font-bold text-muted sm:col-span-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="sm:col-span-11">
                    <p className="label text-accent">
                      {pub.venue} · {pub.date}
                    </p>
                    <h3 className="mt-2 max-w-3xl font-serif text-2xl font-medium leading-snug tracking-tight">
                      {pub.title}
                    </h3>
                    {pub.description && (
                      <p className="mt-2 max-w-2xl text-muted">
                        {pub.description}
                      </p>
                    )}
                    {pub.link && (
                      <p className="label mt-3 inline-flex items-center gap-1 text-foreground">
                        Read paper
                        <span className="transition-transform group-hover:translate-x-1">
                          ↗
                        </span>
                      </p>
                    )}
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
