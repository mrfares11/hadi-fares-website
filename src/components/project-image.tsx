"use client";

import Image from "next/image";
import { useState } from "react";

/* Renders the project image, falling back to a gradient if the file is
   missing (so cards never look broken before images are added). */
export function ProjectImage({
  src,
  alt,
  gradient,
}: {
  src?: string;
  alt: string;
  gradient: string;
}) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return <div className={`h-full w-full bg-gradient-to-br ${gradient}`} />;
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      onError={() => setFailed(true)}
      className="object-cover transition-transform duration-700 group-hover:scale-105"
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
    />
  );
}
