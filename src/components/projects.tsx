"use client";

import Image from "next/image";
import { useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "motion/react";
import { Section } from "@/components/section";
import { Reveal } from "@/components/motion-primitives";
import { projects } from "@/data/content";
import { ArrowUpRightIcon } from "@/components/icons";

const gradients = [
  "from-rose-500 to-orange-400",
  "from-violet-500 to-fuchsia-400",
  "from-sky-500 to-emerald-400",
  "from-amber-500 to-rose-400",
  "from-indigo-500 to-cyan-400",
  "from-teal-500 to-lime-400",
  "from-fuchsia-500 to-pink-400",
  "from-cyan-500 to-blue-500",
];

export function Projects() {
  const [active, setActive] = useState<number | null>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 180, damping: 22, mass: 0.4 });
  const y = useSpring(my, { stiffness: 180, damping: 22, mass: 0.4 });

  return (
    <Section id="projects" index="03" title="Selected Work">
      <div
        className="border-t border-line"
        onMouseMove={(e) => {
          mx.set(e.clientX);
          my.set(e.clientY);
        }}
      >
        {projects.map((p, i) => {
          const Tag = p.link || p.repo ? "a" : "div";
          const href = p.link || p.repo;
          return (
            <Reveal key={p.title} delay={(i % 4) * 0.04}>
              <Tag
                {...(href
                  ? { href, target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                className="group block border-b border-line py-7"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-sm text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <h3
                      className={`font-display text-2xl font-semibold tracking-tight transition-colors sm:text-4xl ${
                        active === i ? "text-accent" : ""
                      }`}
                    >
                      {p.title}
                      {p.featured && (
                        <span className="ml-3 align-middle font-mono text-xs uppercase tracking-wider text-accent">
                          ★ featured
                        </span>
                      )}
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                      {p.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-muted">
                      {p.tags.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>
                  </div>
                  <ArrowUpRightIcon
                    className={`mt-2 h-6 w-6 shrink-0 transition-all duration-300 ${
                      active === i
                        ? "translate-x-1 -translate-y-1 text-accent"
                        : "text-muted"
                    }`}
                  />
                </div>
              </Tag>
            </Reveal>
          );
        })}
      </div>

      {/* Cursor-following preview (desktop only) */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="pointer-events-none fixed left-0 top-0 z-50 hidden h-52 w-80 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl border border-line shadow-2xl md:block"
            style={{ x, y }}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.18 }}
          >
            {projects[active].image ? (
              <Image
                src={projects[active].image!}
                alt={projects[active].title}
                fill
                className="object-cover"
                sizes="320px"
              />
            ) : (
              <div
                className={`flex h-full w-full items-end bg-gradient-to-br ${
                  gradients[active % gradients.length]
                } p-4`}
              >
                <span className="font-display text-lg font-semibold text-white drop-shadow">
                  {projects[active].title}
                </span>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
