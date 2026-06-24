import { Reveal } from "@/components/reveal";

export function SectionShell({
  id,
  theme = "dark",
  grain = false,
  children,
  className = "",
}: {
  id?: string;
  theme?: "dark" | "light";
  grain?: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`theme-${theme} relative bg-background text-foreground ${
        grain ? "grain" : ""
      } ${className}`}
    >
      <div className="relative z-[1]">{children}</div>
    </section>
  );
}

export function SectionHeader({
  label,
  title,
  subtitle,
  stat,
}: {
  label: string;
  title: string;
  subtitle?: string;
  stat?: { value: string; label: string };
}) {
  return (
    <div className="mb-14 flex flex-col justify-between gap-8 sm:flex-row sm:items-start">
      <Reveal className="max-w-2xl">
        <p className="label text-accent">{label}</p>
        <h2 className="mt-4 font-serif text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl">
          {title}
        </h2>
        {subtitle && <p className="mt-4 text-lg text-muted">{subtitle}</p>}
      </Reveal>

      {stat && (
        <Reveal delay={120}>
          <div className="min-w-[180px] rounded-2xl border border-border p-6">
            <p className="label text-muted">{stat.label}</p>
            <p className="mt-2 font-sans text-5xl font-extrabold tracking-tight">
              {stat.value}
            </p>
          </div>
        </Reveal>
      )}
    </div>
  );
}
