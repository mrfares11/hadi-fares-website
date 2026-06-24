import { Section } from "@/components/section";
import { Reveal } from "@/components/motion-primitives";
import { publications } from "@/data/content";
import { ArrowUpRightIcon } from "@/components/icons";

export function Publications() {
  if (publications.length === 0) return null;

  return (
    <Section id="publications" index="04" title="Publications">
      <div className="border-t border-line">
        {publications.map((pub, i) => {
          const Tag = pub.link ? "a" : "div";
          return (
            <Reveal key={i} delay={i * 0.05}>
              <Tag
                {...(pub.link
                  ? { href: pub.link, target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group block border-b border-line py-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-xs text-accent">
                      {pub.venue} · {pub.date}
                    </p>
                    <h3 className="mt-2 max-w-3xl font-display text-xl font-semibold tracking-tight transition-colors group-hover:text-accent">
                      {pub.title}
                    </h3>
                    {pub.description && (
                      <p className="mt-2 max-w-2xl text-sm text-muted">
                        {pub.description}
                      </p>
                    )}
                  </div>
                  {pub.link && (
                    <ArrowUpRightIcon className="mt-1 h-5 w-5 shrink-0 text-muted transition-colors group-hover:text-accent" />
                  )}
                </div>
              </Tag>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
