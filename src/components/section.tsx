import { Reveal } from "@/components/reveal";

export function Section({
  id,
  eyebrow,
  title,
  children,
  className = "",
}: {
  id: string;
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`px-5 py-12 ${className}`}>
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <div className="mb-7 border-b border-border pb-2">
            <h2 className="font-serif text-2xl font-medium tracking-tight">
              {title}
              {eyebrow && (
                <span className="ml-2 align-middle text-sm font-normal italic text-muted">
                  — {eyebrow}
                </span>
              )}
            </h2>
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
