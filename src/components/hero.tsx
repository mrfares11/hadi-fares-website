import Image from "next/image";
import { site } from "@/data/content";

export function Hero() {
  return (
    <section
      id="top"
      className="theme-dark grain relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-background text-foreground"
    >
      {/* Portrait backdrop */}
      <Image
        src={site.photo}
        alt={site.name}
        fill
        priority
        className="object-cover object-center opacity-90 grayscale"
        sizes="100vw"
      />
      {/* Cinematic overlays for legibility */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black via-black/40 to-black/70" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black/70 via-transparent to-black/40" />

      {/* Top meta line */}
      <div className="absolute inset-x-0 top-0 z-[2] flex items-center justify-center px-5 pt-24 sm:pt-7">
        <p className="label hidden text-center text-white/65 sm:block">
          AI Systems · Computer Vision · Autonomous Robotics
        </p>
      </div>

      {/* Name block */}
      <div className="relative z-[2] mx-auto w-full max-w-7xl px-5 pb-12 sm:pb-16">
        <p className="label mb-2 text-white/70 sm:text-right">{site.role}</p>
        <h1 className="font-serif text-[18vw] font-semibold uppercase leading-[0.86] tracking-tight text-white sm:text-[15vw] lg:text-[12rem]">
          {site.name}
        </h1>
        <p className="label mt-4 max-w-xs text-white/70">
          Autonomous aerial robotics &amp; the AI that flies it.
        </p>
      </div>
    </section>
  );
}
