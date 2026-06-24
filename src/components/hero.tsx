import { site } from "@/data/content";
import { HeroPortrait } from "@/components/hero-portrait";

export function Hero() {
  return (
    <section
      id="top"
      className="theme-dark grain relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-background text-foreground"
    >
      {/* Portrait backdrop */}
      <HeroPortrait src={site.photo} alt={site.name} />
      {/* Cinematic overlays for legibility */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black via-black/40 to-black/70" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black/70 via-transparent to-black/40" />

      {/* Name block */}
      <div className="relative z-[2] mx-auto w-full max-w-7xl px-5 pb-12 sm:pb-16">
        <p className="label mb-2 text-white/70 sm:text-right">{site.role}</p>
        <h1 className="font-serif text-[18vw] font-semibold uppercase leading-[0.86] tracking-tight text-white sm:text-[15vw] lg:text-[12rem]">
          {site.name}
        </h1>
      </div>
    </section>
  );
}
