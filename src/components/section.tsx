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
}: {
  label: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-14 max-w-2xl">
      <Reveal>
        <p className="label text-accent">{label}</p>
        <h2 className="mt-4 font-serif text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl">
          {title}
        </h2>
        {subtitle && <p className="mt-4 text-lg text-muted">{subtitle}</p>}
      </Reveal>
    </div>
  );
}
