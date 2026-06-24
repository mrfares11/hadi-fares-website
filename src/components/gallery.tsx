import Image from "next/image";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { gallery } from "@/data/content";

export function Gallery() {
  if (gallery.length === 0) return null;

  return (
    <Section id="gallery" eyebrow="For fun" title="Drone photography">
      <Reveal>
        <p className="mb-8 leading-relaxed text-foreground/80">
          When I&apos;m not building robots, I fly drones and shoot nature from
          above. Not research — just shots I like, free to use as wallpapers.
        </p>
      </Reveal>

      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
        {gallery.map((shot, i) => (
          <Reveal key={i} delay={(i % 3) * 80}>
            <figure className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-card">
              {shot.src ? (
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-muted">
                  <MountainIcon />
                </div>
              )}
              {shot.caption && (
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                  {shot.caption}
                </figcaption>
              )}
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function MountainIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className="h-8 w-8 opacity-40"
      aria-hidden
    >
      <circle cx="8" cy="8" r="1.6" />
      <path d="M3 19l5-6 4 4 3-4 6 6z" />
      <rect x="2.5" y="3.5" width="19" height="17" rx="2" />
    </svg>
  );
}
