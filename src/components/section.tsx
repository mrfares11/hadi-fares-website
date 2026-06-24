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
    <section id={id} className={`px-5 py-20 ${className}`}>
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="mb-10">
            {eyebrow && (
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent">
                {eyebrow}
              </p>
            )}
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
