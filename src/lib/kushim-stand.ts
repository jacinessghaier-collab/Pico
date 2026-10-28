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
      "Tempo, Pausen und Lippen stehen. Die Satzmelodie bleibt ausgesetzt. Ein kürzerer erster Satz ist der nächste Lauf.",
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
    body: "Viseme aa, ih, ou, ee und oh auf dem vorhandenen Mund. Leo über die Frequenzbänder, sonst der Texttakt. Sprechrate, Satzpause und das Einatmen davor folgen der Trainingsstunde. Die Satzmelodie bleibt ausgesetzt. Ein kürzerer erster Satz ist noch offen.",
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
];

/**
 * Steps 1–8 and the lock check (10) are in the live app.
 * Step 9 stays next: melody is deferred, the shorter first sentence is not in yet.
 * statusOf checks NEXT_STEP before the done range, so 9 is not marked done.
 */
export const DONE_STEP = 10;
export const NEXT_STEP = 9;
export const NEXT_RUN_LABEL = "kürzerer erster Satz";

export function statusOf(id: number): "done" | "next" | "open" {
  if (id === NEXT_STEP) return "next";
  if (id <= DONE_STEP) return "done";
  return "open";
}
