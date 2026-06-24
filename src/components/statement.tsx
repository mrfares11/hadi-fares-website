import { SectionShell } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { stats } from "@/data/content";

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
          <p className="mt-8 max-w-xl text-lg text-muted">
            From GPS-denied navigation and computer vision to eVTOL guidance, I
            turn hard, time-sensitive problems into systems that fly.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div>
                <p className="font-sans text-5xl font-extrabold tracking-tight sm:text-6xl">
                  {s.value}
                </p>
                <p className="label mt-2 text-muted">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
