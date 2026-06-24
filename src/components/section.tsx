import { Reveal } from "@/components/motion-primitives";

export function Section({
  id,
  index,
  title,
  children,
  className = "",
}: {
  id: string;
  index: string; // e.g. "01"
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`px-5 py-24 sm:py-28 ${className}`}>
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="mb-12 flex items-end justify-between gap-4 border-b border-line pb-5">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-5xl">
              {title}
            </h2>
            <span className="font-mono text-sm text-accent">／ {index}</span>
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
