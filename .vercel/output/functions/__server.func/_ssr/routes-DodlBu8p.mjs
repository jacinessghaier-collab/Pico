import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Check, n as Radio, r as Link2 } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DodlBu8p.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var STEPS = [
	{
		id: 1,
		title: "Proportionen und Silhouette",
		detail: "Erwachsener Mensch, etwa 7,5 bis 8 Kopflängen. Keine neue Form."
	},
	{
		id: 2,
		title: "Gelenke, Gewicht, Atmung",
		detail: "Standbein, Gelenke und ein ruhiger Atemzug. Noch nicht gelaufen."
	},
	{
		id: 3,
		title: "Durchsichtiges Material",
		detail: "Glas mit Transmission, keine milchige Hülle."
	},
	{
		id: 4,
		title: "Stromflüsse und Helligkeit",
		detail: "Filamente folgen Sprache und Aufmerksamkeit."
	},
	{
		id: 5,
		title: "Aura",
		detail: "Reagiert beim Sprechen, bleibt im Idle ruhig."
	},
	{
		id: 6,
		title: "Idle und Mikrogesten",
		detail: "Blinzeln, Blick, Gewichtsverlagerung."
	},
	{
		id: 7,
		title: "Gesprächsgesten",
		detail: "Nur auf Betonung, nicht auf jede Silbe."
	},
	{
		id: 8,
		title: "Gesprächsverhalten",
		detail: "Zuhören, kurze Pause oder eine Rückfrage. Nicht mehr Text."
	},
	{
		id: 9,
		title: "Sprache",
		detail: "Tempo, Pausen, Satzmelodie, kürzerer erster Satz."
	},
	{
		id: 10,
		title: "Stabilitätscheck",
		detail: "Die schwächste Stelle benennen und nur die reparieren."
	}
];
var CHANGES = [{
	id: "proportions",
	time: "20:19",
	step: 1,
	title: "Proportionen festgelegt",
	body: "Die Silhouette ist auf einen erwachsenen Menschen gelegt. Material, Ströme, Aura, Gesten und Sprache wurden in diesem Lauf nicht angefasst.",
	source: "Training Kushim"
}, {
	id: "voice-nod",
	time: "20:22",
	step: null,
	title: "Grok-Stimme und Schulter-Nicken",
	body: "Ein früherer Lauf, der noch unter der alten Sammelanweisung startete, hat danach Stimme und ein Schulter-Nicken nachgereicht. Das ist keine Stufe 2.",
	source: "Überlappender Lauf"
}];
var NEXT_RUN_LABEL = "21:00";
function Home() {
	const [selected, setSelected] = (0, import_react.useState)(1);
	const step = STEPS.find((item) => item.id === selected) ?? STEPS[0];
	const related = CHANGES.filter((change) => change.step === selected);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen bg-ink text-bone lg:grid lg:grid-cols-[minmax(0,1fr)_24rem]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "flex flex-col gap-6 px-5 py-6 sm:px-8 sm:py-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-widest text-aura uppercase",
					children: "Assistentenseite"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-4xl leading-none font-medium sm:text-5xl",
					children: "Kushim"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "max-w-44 text-right text-sm text-bone/70",
					children: [
						"Stufe ",
						1,
						" von 10 steht. Nächster Lauf ",
						NEXT_RUN_LABEL,
						"."
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
				className: "relative mx-auto w-full max-w-md",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "aura-ring pointer-events-none absolute inset-x-8 top-8 bottom-16 rounded-full bg-aura/25 blur-3xl",
						"aria-hidden": "true"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/kushim-figure.jpg",
						alt: "Kushim als durchsichtiger Mensch mit leuchtenden Stromflüssen und ruhiger Aura",
						className: "relative mx-auto max-h-screen w-auto rounded-card"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
						className: "relative mt-4 flex items-start justify-between gap-4 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-xl leading-tight",
							children: step.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "shrink-0 text-bone/70",
							children: selected === 1 ? "Erledigt" : selected === 2 ? "Als Nächstes" : "Offen"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-bone/75",
						children: step.detail
					}),
					related.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 space-y-2",
						children: related.map((change) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "text-sm leading-relaxed text-bone/85",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-filament",
									children: change.time
								}),
								" ",
								change.body
							]
						}, change.id))
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-bone/60",
						children: "Für diese Stufe gibt es noch keine abgeschlossene Änderung."
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "border-bone/15 bg-panel flex flex-col gap-5 border-t px-5 py-6 lg:border-t-0 lg:border-l",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-widest text-filament uppercase",
					children: "Rechtes Panel"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display mt-1 text-2xl leading-tight",
					children: "Verknüpfung"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "space-y-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkRow, {
							name: "Kushim",
							note: "KI-Assistent",
							live: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkRow, {
							name: "Trainingsprogramm",
							note: "Zehn Stufen, stündlich eine",
							live: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkRow, {
							name: "Diese Seite",
							note: "Zeigt Stand und Änderungen",
							live: true
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-ink/70 rounded-card px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Radio, {
							className: "text-filament size-4",
							"aria-hidden": "true"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							"Jetzt bei Stufe ",
							1,
							". Als Nächstes Stufe ",
							2,
							"."
						] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm leading-relaxed text-bone/70",
						children: [
							"Der Stand springt nicht von allein weiter. Stufe 2 erscheint hier erst, wenn der Lauf um ",
							NEXT_RUN_LABEL,
							" sie wirklich abgeschlossen hat."
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "space-y-1",
					children: STEPS.map((item) => {
						const state = item.id < 2 ? "done" : item.id === 2 ? "next" : "wait";
						const active = item.id === selected;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setSelected(item.id),
							className: "flex min-h-11 w-full items-center gap-3 rounded-xl px-3 text-left " + (active ? "bg-bone/10" : "hover:bg-bone/5"),
							"aria-current": active ? "step" : void 0,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid size-6 shrink-0 place-items-center rounded-full text-xs " + (state === "done" ? "bg-filament text-ink" : state === "next" ? "text-filament ring-filament ring-1" : "text-bone/50 ring-1 ring-bone/25"),
									children: state === "done" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
										className: "size-3.5",
										"aria-hidden": "true"
									}) : item.id
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "min-w-0 flex-1",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block truncate text-sm",
										children: item.title
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-bone/55",
									children: state === "done" ? "fertig" : state === "next" ? "nächste" : "offen"
								})
							]
						}) }, item.id);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-xs font-medium tracking-widest text-bone/55 uppercase",
					children: "Änderungen"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 space-y-3",
					children: CHANGES.map((change) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "border-bone/15 border-t pt-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-filament",
										children: change.time
									}),
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-medium",
										children: change.title
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm leading-relaxed text-bone/70",
								children: change.body
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-aura",
								children: change.source
							})
						]
					}, change.id))
				})] })
			]
		})]
	});
}
function LinkRow({ name, note, live }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: "border-bone/15 flex items-center gap-3 rounded-xl border px-3 py-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link2, {
				className: "text-aura size-4 shrink-0",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block text-sm font-medium",
					children: name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block truncate text-xs text-bone/60",
					children: note
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-filament text-xs",
				children: live ? "aktiv" : "aus"
			})
		]
	});
}
//#endregion
export { Home as component };
