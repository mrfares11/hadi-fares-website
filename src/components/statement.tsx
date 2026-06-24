import { SectionShell } from "@/components/section";
import { Reveal } from "@/components/reveal";

export function Statement() {
  return (
    <SectionShell id="statement" theme="light" className="px-5 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="max-w-5xl font-sans text-4xl font-extrabold uppercase leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
            I build autonomous drones and the AI that flies them.
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <p className="mt-8 max-w-2xl text-lg text-muted">
            I work across reinforcement learning, AI, computer vision, and aerial
            robotics, designing and building drones from scratch, from mechanics
            and control all the way to full autonomy.
          </p>
        </Reveal>
      </div>
    </SectionShell>
  );
}
