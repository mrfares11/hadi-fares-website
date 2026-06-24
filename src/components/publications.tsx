import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { publications } from "@/data/content";

export function Publications() {
  if (publications.length === 0) return null;

  return (
    <Section id="publications" title="Publications">
      <ol className="space-y-6">
        {publications.map((pub, i) => (
          <Reveal key={i} delay={i * 60}>
            <li className="flex gap-4">
              <span className="font-serif text-muted">[{i + 1}]</span>
              <div>
                <span className="font-medium">{pub.title}.</span>{" "}
                <span className="italic text-foreground/80">{pub.venue}</span>,{" "}
                <span className="text-muted">{pub.date}.</span>
                {pub.description && (
                  <p className="mt-1 text-sm text-muted">{pub.description}</p>
                )}
                {pub.link && (
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block text-sm underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
                  >
                    PDF ↗
                  </a>
                )}
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
