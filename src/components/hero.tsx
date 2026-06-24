"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { site, socials } from "@/data/content";
import { SocialGlyph } from "@/components/icons";

const easeOut = [0.21, 0.61, 0.35, 1] as const;
const rise = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
};

export function Hero() {
  return (
    <section id="top" className="px-5 pt-36 pb-16 sm:pt-44">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.12 }}
        >
          <motion.p
            variants={rise}
            className="flex items-center gap-3 font-mono text-sm text-muted"
          >
            <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            Available for research & collaborations · {site.location}
          </motion.p>

          <div className="mt-8 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
            <div>
              <motion.h1
                variants={rise}
                className="font-display text-[15vw] font-bold leading-[0.92] tracking-tight sm:text-7xl md:text-8xl"
              >
                Hadi
                <br />
                <span className="text-accent">Fares</span>
              </motion.h1>
              <motion.p
                variants={rise}
                className="mt-7 max-w-xl text-lg leading-relaxed text-muted"
              >
                {site.tagline}
              </motion.p>

              <motion.div
                variants={rise}
                className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3"
              >
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2 font-medium"
                >
                  <span className="border-b-2 border-accent pb-0.5">
                    See my work
                  </span>
                  <span className="transition-transform group-hover:translate-x-1">
                    ↓
                  </span>
                </a>
                <div className="flex items-center gap-4">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target={s.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="text-muted transition-colors hover:text-accent"
                    >
                      <SocialGlyph icon={s.icon} className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div
              variants={rise}
              className="relative shrink-0 self-start md:self-end"
            >
              <div className="absolute -inset-2 -z-10 rounded-full border border-line" />
              <Image
                src={site.photo}
                alt={site.name}
                width={200}
                height={200}
                priority
                className="h-32 w-32 rounded-full border border-line object-cover grayscale transition-all duration-500 hover:grayscale-0 sm:h-44 sm:w-44"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
