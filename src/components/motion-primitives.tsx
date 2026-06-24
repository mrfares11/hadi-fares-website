"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useInView,
  useMotionValue,
  animate,
  type Variants,
} from "motion/react";

/* Thin scroll-progress bar pinned to the top of the page. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.2,
  });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-accent"
    />
  );
}

const easeOut = [0.21, 0.61, 0.35, 1] as const;

/* Fade + rise on scroll into view. */
export function Reveal({
  children,
  className = "",
  delay = 0,
  y = 24,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.7, ease: easeOut, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const child: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
};

/* Staggered container — wrap <Stagger.Item> children. */
export function Stagger({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
export function StaggerItem({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={child} className={className}>
      {children}
    </motion.div>
  );
}

/* Counts up to a target number when scrolled into view. Supports a prefix /
   suffix so "4.0", "8+", "1 of 11" style values still animate sensibly. */
export function Counter({
  value,
  className = "",
}: {
  value: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -20% 0px" });
  const mv = useMotionValue(0);

  // Parse leading number out of the string (e.g. "8+" -> 8, "1 of 11" -> 1).
  const match = value.match(/[\d.]+/);
  const target = match ? parseFloat(match[0]) : 0;
  const decimals = match && match[0].includes(".") ? 1 : 0;

  useEffect(() => {
    if (!inView || !match) return;
    const node = ref.current;
    const controls = animate(mv, target, {
      duration: 1.4,
      ease: easeOut,
      onUpdate: (v) => {
        if (node) {
          node.textContent = value.replace(
            match[0],
            v.toFixed(decimals)
          );
        }
      },
    });
    return () => controls.stop();
  }, [inView, target, value, match, decimals, mv]);

  return (
    <span ref={ref} className={className}>
      {match ? value.replace(match[0], (0).toFixed(decimals)) : value}
    </span>
  );
}
