export type Step = {
  id: number;
  title: string;
  detail: string;
};

export type Change = {
  id: string;
  time: string;
  step: number | null;
  title: string;
  body: string;
  source: string;
};

export const STEPS: Step[] = [
  {
    id: 1,
    title: "Proportionen und Silhouette",
    detail: "Erwachsener Mensch, acht Kopflängen. Die Form liegt in der Sperre.",
  },
  {
    id: 2,
    title: "Gelenke, Gewicht, Atmung",
    detail: "Stand mittig, Gelenke gedämpft, Atem im Brustkorb. Kein Gang.",
  },
  {
    id: 3,
    title: "Durchsichtiges Material",
    detail: "Klares Fresnel-Glas. Schwarz scheint durch, keine milchige Hülle.",
  },
  {
    id: 4,
    title: "Stromflüsse und Helligkeit",
    detail: "Filamente folgen den Gliedern. Die Dichte steigt mit der Trainingsstunde.",
  },
  {
    id: 5,
    title: "Aura",
    detail: "Die Fresnel-Hülle ist die Aura. Keine zweite Schale über der Silhouette.",
  },
  {
    id: 6,
    title: "Idle und Mikrogesten",
    detail: "Beide Augen blinzeln gemeinsam. Der Blick folgt leicht. Das Gewicht bleibt mittig.",
  },
  {
    id: 7,
    title: "Gesprächsgesten",
    detail: "Idle, zuhören, denken, sprechen, erklären, nicken, mitfühlen. Nicht auf jede Silbe.",
  },
  {
    id: 8,
    title: "Gesprächsverhalten",
    detail: "Name einmal, Abbruch, Rückfrage nur bei offenem Satz, Reparatur ohne Entschuldigung.",
  },
  {
    id: 9,
    title: "Sprache",
    detail:
      "Tempo, Pausen und Lippen stehen. Der erste Satz hat höchstens acht Wörter und ist kürzer als der zweite, danach 320 Millisekunden, bei Leo einmal [pause]. Die Satzmelodie bleibt ausgesetzt.",
  },
  {
    id: 10,
    title: "Stabilitätscheck",
    detail:
      "Die Sperre ist geprüft und bleibt unverändert. Ein Bruch an Form, Farbe oder Kamera wird laut. Keine Reparatur an der Erscheinung.",
  },
];

export const CHANGES: Change[] = [
  {
    id: "proportions",
    time: "20:19",
    step: 1,
    title: "Proportionen festgelegt",
    body: "Die Silhouette ist auf einen erwachsenen Menschen gelegt. Material, Ströme, Aura, Gesten und Sprache wurden in diesem Lauf nicht angefasst.",
    source: "Training Kushim",
  },
  {
    id: "voice-nod",
    time: "20:22",
    step: null,
    title: "Grok-Stimme und Schulter-Nicken",
    body: "Ein früherer Lauf hat Stimme und ein Schulter-Nicken nachgereicht. Das war noch keine Stufe 2. Beides liegt inzwischen in den späteren Stufen.",
    source: "Überlappender Lauf",
  },
  {
    id: "stance",
    time: "27.10.",
    step: 2,
    title: "Atem und Gelenke",
    body: "Schulter, Ellbogen, Handgelenk und Finger sind gedämpft. Der Atem sitzt im Brustkorb, das Gewicht mittig. Er geht nicht.",
    source: "Laufende App",
  },
  {
    id: "glass",
    time: "27.10.",
    step: 3,
    title: "Klares Glas",
    body: "Die Hülle ist ein Fresnel-Glas. Schwarz scheint durch. Keine milchige zweite Haut.",
    source: "Laufende App",
  },
  {
    id: "filaments",
    time: "27.10.",
    step: 4,
    title: "Ströme und Schulter",
    body: "Filamente laufen vom Brustkern in Kopf, Rumpf, Arme und Beine. Die Dichte folgt der Trainingsstunde. Das rote Signal sitzt nur an der rechten Schulter und wird heller, wenn sie Thema ist.",
    source: "Laufende App",
  },
  {
    id: "aura",
    time: "27.10.",
    step: 5,
    title: "Aura ist die Hülle",
    body: "Die Fresnel-Hülle bleibt die Aura und schwingt im Idle nicht mit. Eine zweite Schale über der Silhouette gibt es nicht.",
    source: "Laufende App",
  },
  {
    id: "gestures",
    time: "27.10.",
    step: 7,
    title: "Gesten in der Szene",
    body: "Idle, zuhören, denken, sprechen, erklären, nicken und mitfühlen liegen in der laufenden Szene. emphasis aus dem Modell wird als Erklären gelesen. Nicht eine Geste pro Silbe.",
    source: "Laufende App",
  },
  {
    id: "idle",
    time: "03:13",
    step: 6,
    title: "Blinzeln und Blick",
    body: "Beide Augen blinzeln gemeinsam, Abstand 3,6 bis 6,4 Sekunden, Schließdauer 0,12 Sekunden, ohne Kopplung an die Silbe. Der Blick folgt leicht. Das Gewicht bleibt mittig.",
    source: "Laufende App",
  },
  {
    id: "talk",
    time: "03:13",
    step: 8,
    title: "Gesprächsregeln",
    body: "Der Name fällt höchstens einmal und wird nie abgefragt. Eine Unterbrechung bricht den gesprochenen Satz ab, die nächste Antwort gilt dem neuen Thema. Eine Rückfrage nur bei einem offenen Satz. Bei Nicht-Verstanden derselbe Inhalt in einem Satz, ohne Entschuldigung.",
    source: "Laufende App",
  },
  {
    id: "lipsync",
    time: "03:13",
    step: 9,
    title: "Lippen, Tempo, Pausen",
    body: "Viseme aa, ih, ou, ee und oh auf dem vorhandenen Mund. Leo über die Frequenzbänder, sonst der Texttakt. Sprechrate, Satzpause und das Einatmen davor folgen der Trainingsstunde. Die Satzmelodie bleibt ausgesetzt.",
    source: "Laufende App",
  },
  {
    id: "memory",
    time: "04:44",
    step: null,
    title: "Gedächtnis über die letzten Züge",
    body: "Neben dem Namen bleiben Wohnort, Herkunft, Arbeit, Sprache, was jemand mag oder nicht mag, eine Bezugsperson und ein ausdrückliches „Merk dir“. Züge außerhalb des Fensters werden zu einem Thema und höchstens fünf ältere Zeilen. Das kommt einmal in den Systemtext, höchstens 420 Zeichen, ohne Aufzählung und ohne etwas dazuzuerfinden. Das war der Stundenschritt, keine eigene Stufe.",
    source: "Laufende App",
  },
  {
    id: "lock-check",
    time: "04:48",
    step: 10,
    title: "Sperre geprüft",
    body: "Farben und Proportionen sind eingefroren, eine Zuweisung wirft. Beim Bau und etwa alle zwei Sekunden prüft der Check die Figur: eine rote Stelle nur an der rechten Schulter, Knochenlängen aus der Sperre, Filament nur zwischen 0,86 und 1, Atem und Schulterpuls im bisherigen Rahmen, der Raum deckend ohne Tone-Mapping, Kamera frontal mit Blickfeld 26. Ein Bruch wirft, die Ansicht zeigt den Text. Gesten, Gespräch und Gedächtnis bleiben unangetastet.",
    source: "Laufende App",
  },
  {
    id: "short-first",
    time: "05:32",
    step: 9,
    title: "Kürzerer erster Satz",
    body: "Der erste Satz bleibt innerhalb von acht Wörtern und ist kürzer als der zweite. Wörter rücken nach vorn, nichts wird gestrichen. Eine Antwort aus einem Satz bleibt ein Satz. Danach genau eine Pause: im Browser 320 Millisekunden, bei Leo einmal [pause]. Im Chat steht kein Pausen-Zeichen. Die Satzmelodie bleibt ausgesetzt. Figur und Sperre sind unverändert.",
    source: "Laufende App",
  },
  {
    id: "mouth-breath",
    time: "06:00",
    step: null,
    title: "Mundöffnung gegen den Atem",
    body: "Die Lautstärke setzt die Viseme-Stärke, von der Schwelle 0,35 bis 1. Das Einatmen nimmt sechs Prozent weg, das Ausatmen bleibt bei der Lautstärke. Der eigene Sinus auf aa ist weg. Geteilt wird die Öffnung durch die Brustskala, die ruhende Lippe bleibt bei 1. Die Skala kommt aus dem Atem der Sperre. Brusttempo bleibt 1,35 beim Sprechen, 0,55 beim Mitfühlen und 0,85 in der Ruhe. Sperre und Sperr-Check sind unverändert. Das war der Stundenschritt, keine eigene Stufe. Die Satzmelodie bleibt ausgesetzt.",
    source: "Laufende App",
  },
];

/**
 * Steps 1–10 stay done. The shorter first sentence is in. Mouth opening against
 * the breath is the finished hourly step, not an eleventh stage: loudness sets
 * viseme strength, the inhale eases it by 6%, there is no aa sine, and the
 * opening is divided by the chest scale from the lock's breath. lock.ts and
 * lock-check.ts are untouched. Sentence melody stays deferred.
 * NEXT_STEP is null. The next run is frame time of the live scene, and this
 * page does not mark that done. FIRST_PAUSE_MS moves only if that one pause
 * is wrong — optional, and not the primary next.
 * statusOf checks NEXT_STEP first, so a later open number is not marked done.
 */
export const DONE_STEP = 10;
export const NEXT_STEP: number | null = null;
export const NEXT_RUN_LABEL = "Bildzeit der laufenden Szene";
export const NEXT_RUN_NOTE =
  "Mundöffnung gegen den Atem steht: die Lautstärke setzt die Viseme-Stärke, das Einatmen nimmt sechs Prozent weg, der Sinus auf aa ist weg, die Öffnung ist durch die Brustskala aus der Sperre geteilt. Sperre und Sperr-Check sind unverändert. Die Satzmelodie bleibt ausgesetzt. Der nächste Lauf ist die Bildzeit der laufenden Szene. Die eine Pause bleibt bei 320 Millisekunden und wird nur geändert, wenn sie falsch liegt.";

export function statusOf(id: number): "done" | "next" | "open" {
  if (NEXT_STEP !== null && id === NEXT_STEP) return "next";
  if (id <= DONE_STEP) return "done";
  return "open";
}
