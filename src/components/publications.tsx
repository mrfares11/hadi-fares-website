import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { publications } from "@/data/content";
import { ArrowUpRightIcon } from "@/components/icons";

export function Publications() {
  if (publications.length === 0) return null;

  return (
    <Section id="publications" eyebrow="Research" title="Publications">
      <div className="space-y-4">
        {publications.map((pub, i) => {
          const Wrapper = pub.link ? "a" : "div";
          return (
            <Reveal key={i} delay={i * 80}>
              <Wrapper
                {...(pub.link
                  ? { href: pub.link, target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className={`group block rounded-2xl border border-border bg-card p-6 ${
                  pub.link ? "transition-colors hover:border-accent" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-semibold leading-snug">{pub.title}</h3>
                  {pub.link && (
                    <ArrowUpRightIcon className="h-4 w-4 shrink-0 text-muted transition-colors group-hover:text-accent" />
                  )}
                </div>
                <p className="mt-1.5 text-sm font-medium text-accent">
                  {pub.venue} · {pub.date}
                </p>
                {pub.description && (
                  <p className="mt-2 text-sm text-muted">{pub.description}</p>
                )}
              </Wrapper>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
