import { skills } from "@/data/content";

// One flat list of every skill, shown as an infinite horizontal ticker.
const items = skills.flatMap((g) => g.items);

export function Marquee() {
  // Duplicated once so the -50% translate loops seamlessly.
  const row = [...items, ...items];
  return (
    <div className="marquee-mask overflow-hidden border-y border-line py-5">
      <div className="flex w-max animate-marquee gap-8 pr-8">
        {row.map((item, i) => (
          <div key={i} className="flex shrink-0 items-center gap-8">
            <span className="font-display text-lg font-medium tracking-tight text-foreground/80">
              {item}
            </span>
            <span className="text-accent">✳</span>
          </div>
        ))}
      </div>
    </div>
  );
}
