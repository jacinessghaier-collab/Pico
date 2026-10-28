import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check, Link2, Radio } from "lucide-react";
import {
  CHANGES,
  DONE_STEP,
  NEXT_RUN_LABEL,
  NEXT_STEP,
  STEPS,
  statusOf,
} from "@/lib/kushim-stand";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const [selected, setSelected] = useState(DONE_STEP);
  const step = STEPS.find((item) => item.id === selected) ?? STEPS[0];
  const related = CHANGES.filter((change) => change.step === selected);

  return (
    <main className="min-h-screen bg-ink text-bone lg:grid lg:grid-cols-[minmax(0,1fr)_24rem]">
      <section className="flex flex-col gap-6 px-5 py-6 sm:px-8 sm:py-8">
        <header className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-medium tracking-widest text-aura uppercase">
              Assistentenseite
            </p>
            <h1 className="font-display text-4xl leading-none font-medium sm:text-5xl">
              Kushim
            </h1>
          </div>
          <p className="max-w-56 text-right text-sm text-bone/70">
            Stufe {DONE_STEP} von 10 steht. Nächster Lauf {NEXT_RUN_LABEL}.
          </p>
        </header>

        <figure className="relative mx-auto w-full max-w-md">
          <div
            className="aura-ring pointer-events-none absolute inset-x-8 top-8 bottom-16 rounded-full bg-aura/25 blur-3xl"
            aria-hidden="true"
          />
          <img
            src="/kushim-figure.jpg"
            alt="Kushim als durchsichtiger Mensch mit leuchtenden Stromflüssen und ruhiger Aura"
            className="relative mx-auto max-h-screen w-auto rounded-card"
          />
          <figcaption className="relative mt-4 flex items-start justify-between gap-4 text-sm">
            <span className="font-display text-xl leading-tight">{step.title}</span>
            <span className="shrink-0 text-bone/70">
              {statusOf(selected) === "done"
                ? "Erledigt"
                : statusOf(selected) === "next"
                  ? "Als Nächstes"
                  : "Offen"}
            </span>
          </figcaption>
          <p className="mt-2 text-sm leading-relaxed text-bone/75">{step.detail}</p>
          {related.length > 0 ? (
            <ul className="mt-3 space-y-2">
              {related.map((change) => (
                <li key={change.id} className="text-sm leading-relaxed text-bone/85">
                  <span className="text-filament">{change.time}</span> {change.body}
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-3 text-sm text-bone/60">
              Für diese Stufe gibt es noch keine abgeschlossene Änderung.
            </p>
          )}
        </figure>
      </section>

      <aside className="border-bone/15 bg-panel flex flex-col gap-5 border-t px-5 py-6 lg:max-h-dvh lg:overflow-y-auto lg:border-t-0 lg:border-l">
        <div>
          <p className="text-xs font-medium tracking-widest text-filament uppercase">
            Rechtes Panel
          </p>
          <h2 className="font-display mt-1 text-2xl leading-tight">Verknüpfung</h2>
        </div>

        <ul className="space-y-2">
          <LinkRow name="Kushim" note="KI-Assistent" live />
          <LinkRow name="Trainingsprogramm" note="Zehn Stufen, stündlich eine" live />
          <LinkRow name="Diese Seite" note="Zeigt Stand und Änderungen" live />
        </ul>

        <div className="bg-ink/70 rounded-card px-4 py-3">
          <div className="flex items-center gap-2 text-sm">
            <Radio className="text-filament size-4" aria-hidden="true" />
            <span>
              Jetzt bei Stufe {DONE_STEP}. Als Nächstes Stufe {NEXT_STEP}.
            </span>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-bone/70">
            Der Stand springt nicht von allein weiter. Stufe {NEXT_STEP} wartet auf
            die Satzmelodie und einen kürzeren ersten Satz. Lippen, Tempo und Pausen
            stehen schon. Der nächste Stundenschritt ist das Gedächtnis über die
            letzten Züge hinaus. Stufe 10 prüft danach die Sperre.
          </p>
        </div>

        <ol className="space-y-1">
          {STEPS.map((item) => {
            const state = statusOf(item.id);
            const active = item.id === selected;
            return (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => setSelected(item.id)}
                  className={
                    "flex min-h-11 w-full items-center gap-3 rounded-xl px-3 text-left " +
                    (active ? "bg-bone/10" : "hover:bg-bone/5")
                  }
                  aria-current={active ? "step" : undefined}
                >
                  <span
                    className={
                      "grid size-6 shrink-0 place-items-center rounded-full text-xs " +
                      (state === "done"
                        ? "bg-filament text-ink"
                        : state === "next"
                          ? "text-filament ring-filament ring-1"
                          : "text-bone/50 ring-1 ring-bone/25")
                    }
                  >
                    {state === "done" ? (
                      <Check className="size-3.5" aria-hidden="true" />
                    ) : (
                      item.id
                    )}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm">{item.title}</span>
                  </span>
                  <span className="text-xs text-bone/55">
                    {state === "done" ? "fertig" : state === "next" ? "nächste" : "offen"}
                  </span>
                </button>
              </li>
            );
          })}
        </ol>

        <div>
          <h3 className="text-xs font-medium tracking-widest text-bone/55 uppercase">
            Änderungen
          </h3>
          <ul className="mt-3 space-y-3">
            {CHANGES.map((change) => (
              <li key={change.id} className="border-bone/15 border-t pt-3">
                <p className="text-sm">
                  <span className="text-filament">{change.time}</span>{" "}
                  <span className="font-medium">{change.title}</span>
                </p>
                <p className="mt-1 text-sm leading-relaxed text-bone/70">{change.body}</p>
                <p className="mt-1 text-xs text-aura">{change.source}</p>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </main>
  );
}

function LinkRow({ name, note, live }: { name: string; note: string; live: boolean }) {
  return (
    <li className="border-bone/15 flex items-center gap-3 rounded-xl border px-3 py-2">
      <Link2 className="text-aura size-4 shrink-0" aria-hidden="true" />
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-medium">{name}</span>
        <span className="block truncate text-xs text-bone/60">{note}</span>
      </span>
      <span className="text-filament text-xs">{live ? "aktiv" : "aus"}</span>
    </li>
  );
}
