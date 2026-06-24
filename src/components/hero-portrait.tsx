"use client";

import Image from "next/image";
import { useState } from "react";

/* Hero portrait that falls back to the placeholder SVG if the real
   photo isn't in /public yet. */
export function HeroPortrait({ src, alt }: { src: string; alt: string }) {
  const [current, setCurrent] = useState(src);

  return (
    <Image
      src={current}
      alt={alt}
      fill
      priority
      onError={() => setCurrent("/profile.svg")}
      className="object-cover object-center opacity-90 grayscale"
      sizes="100vw"
    />
  );
}
