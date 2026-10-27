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
    detail: "Erwachsener Mensch, etwa 7,5 bis 8 Kopflängen. Keine neue Form.",
  },
  {
    id: 2,
    title: "Gelenke, Gewicht, Atmung",
    detail: "Standbein, Gelenke und ein ruhiger Atemzug. Noch nicht gelaufen.",
  },
  {
    id: 3,
    title: "Durchsichtiges Material",
    detail: "Glas mit Transmission, keine milchige Hülle.",
  },
  {
    id: 4,
    title: "Stromflüsse und Helligkeit",
    detail: "Filamente folgen Sprache und Aufmerksamkeit.",
  },
  {
    id: 5,
    title: "Aura",
    detail: "Reagiert beim Sprechen, bleibt im Idle ruhig.",
  },
  {
    id: 6,
    title: "Idle und Mikrogesten",
    detail: "Blinzeln, Blick, Gewichtsverlagerung.",
  },
  {
    id: 7,
    title: "Gesprächsgesten",
    detail: "Nur auf Betonung, nicht auf jede Silbe.",
  },
  {
    id: 8,
    title: "Gesprächsverhalten",
    detail: "Zuhören, kurze Pause oder eine Rückfrage. Nicht mehr Text.",
  },
  {
    id: 9,
    title: "Sprache",
    detail: "Tempo, Pausen, Satzmelodie, kürzerer erster Satz.",
  },
  {
    id: 10,
    title: "Stabilitätscheck",
    detail: "Die schwächste Stelle benennen und nur die reparieren.",
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
    body: "Ein früherer Lauf, der noch unter der alten Sammelanweisung startete, hat danach Stimme und ein Schulter-Nicken nachgereicht. Das ist keine Stufe 2.",
    source: "Überlappender Lauf",
  },
];

export const DONE_STEP = 1;
export const NEXT_STEP = 2;
export const NEXT_RUN_LABEL = "21:00";
