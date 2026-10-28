import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  CHANGES,
  DONE_STEP,
  HOURLY_DONE,
  HOURLY_NEXT,
  NEXT_RUN_HOUR,
  NEXT_RUN_LABEL,
  NEXT_RUN_NOTE,
  NEXT_STEP,
  STEPS,
  statusOf,
} from "./kushim-stand.ts";

describe("kushim stand after the stability hour", () => {
  it("keeps ten steps and marks every one done", () => {
    assert.deepEqual(
      STEPS.map((step) => step.id),
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    );
    assert.equal(DONE_STEP, 10);
    assert.equal(NEXT_STEP, null);
    for (const step of STEPS) assert.equal(statusOf(step.id), "done");
    assert.equal(statusOf(11), "open");
  });

  it("records the short opening on step 9 and leaves melody deferred", () => {
    const speech = STEPS.find((step) => step.id === 9);
    assert.ok(speech);
    assert.match(speech.detail, /höchstens acht Wörter/);
    assert.match(speech.detail, /320 Millisekunden/);
    assert.match(speech.detail, /\[pause\]/);
    assert.match(speech.detail, /Satzmelodie bleibt ausgesetzt/);
    assert.doesNotMatch(speech.detail, /nächste/);

    const landed = CHANGES.find((change) => change.id === "short-first");
    assert.ok(landed);
    assert.equal(landed.step, 9);
    assert.match(landed.body, /acht Wörtern/);
    assert.match(landed.body, /320 Millisekunden/);
    assert.match(landed.body, /\[pause\]/);
    assert.match(landed.body, /Satzmelodie bleibt ausgesetzt/);

    assert.equal(
      CHANGES.some((change) => /melodie/i.test(change.title)),
      false,
    );
  });

  it("does not leave the short sentence open or invent an eleventh step", () => {
    for (const change of CHANGES) {
      assert.doesNotMatch(change.body, /noch offen/);
      assert.doesNotMatch(change.body, /nächste Lauf/);
      assert.doesNotMatch(change.title, /Stufe 11|elfte Stufe/);
    }
    assert.equal(
      STEPS.some((step) => step.id > 10),
      false,
    );
    assert.equal(STEPS.find((step) => step.id === 10)?.title, "Stabilitätscheck");
  });

  it("records mouth against breath as a finished hourly step, not a new stage", () => {
    const landed = CHANGES.find((change) => change.id === "mouth-breath");
    assert.ok(landed);
    assert.equal(landed.step, null);
    assert.equal(landed.time, "06:00");
    assert.match(landed.body, /0,35/);
    assert.match(landed.body, /sechs Prozent/);
    assert.match(landed.body, /Sinus auf aa ist weg/);
    assert.match(landed.body, /Brustskala/);
    assert.match(landed.body, /1,35/);
    assert.match(landed.body, /0,55/);
    assert.match(landed.body, /0,85/);
    assert.match(landed.body, /Sperre und Sperr-Check sind unverändert/);
    assert.match(landed.body, /keine eigene Stufe/);
    assert.match(landed.body, /Satzmelodie bleibt ausgesetzt/);
    assert.doesNotMatch(landed.title, /Stufe 11|elfte Stufe/);
    assert.equal(
      STEPS.some((step) => /Mundöffnung/.test(step.title)),
      false,
    );
  });

  it("records frame time as a finished hourly step, not a new stage", () => {
    const landed = CHANGES.find((change) => change.id === "frame-time");
    assert.ok(landed);
    assert.equal(landed.step, null);
    assert.equal(landed.time, "07:00");
    assert.match(landed.title, /^Bildzeit$/);
    assert.match(landed.body, /60 Frames/);
    assert.match(landed.body, /320 Millisekunden/);
    assert.match(landed.body, /keine eigene Stufe/);
    assert.match(landed.body, /Satzmelodie bleibt ausgesetzt/);
  });

  it("records the idle mouth as a finished hourly step, not a new stage", () => {
    const landed = CHANGES.find((change) => change.id === "mouth-rest");
    assert.ok(landed);
    assert.equal(landed.step, null);
    assert.equal(landed.time, "08:00");
    assert.match(landed.title, /Mund in der Ruhe/);
    assert.match(landed.body, /Sprechbus/);
    assert.match(landed.body, /Skala 1/);
    assert.match(landed.body, /Pause nach dem ersten Satz/);
    assert.match(landed.body, /\[pause\]/);
    assert.match(landed.body, /320 Millisekunden/);
    assert.match(landed.body, /Blick, Sperre und Bildzeit/);
    assert.match(landed.body, /keine eigene Stufe/);
    assert.match(landed.body, /Satzmelodie bleibt ausgesetzt/);
    assert.doesNotMatch(landed.body, /Lock-Check nur lesen|shapeReply/);
    assert.equal(
      STEPS.some((step) => /Mund in der Ruhe/.test(step.title)),
      false,
    );
  });

  it("notes shapeReply as the reply-form path, not a stage or an hour", () => {
    const landed = CHANGES.find((change) => change.id === "shape-reply");
    assert.ok(landed);
    assert.equal(landed.step, null);
    assert.match(landed.title, /Antwortform/);
    assert.match(landed.body, /shapeReply/);
    assert.match(landed.body, /einmal auf dem Rohtext/);
    assert.match(landed.body, /vor Anzeige und Stimme/);
    assert.match(landed.body, /zweiter Durchlauf ändert die Wörter nicht/);
    assert.match(landed.body, /Frage nach dem Namen wird hier nicht gestrichen/);
    assert.match(landed.body, /Aussehen, Sperre und die Pause von 320 Millisekunden/);
    assert.match(landed.body, /keine eigene Stufe/);
    assert.match(landed.body, /Satzmelodie bleibt ausgesetzt/);
    assert.doesNotMatch(landed.body, /Stunde 8|Stunde 9|09:00|Stundenschritt/);
    assert.doesNotMatch(landed.title, /Stufe 11|elfte Stufe/);
    assert.equal(
      STEPS.some((step) => /shapeReply|Antwortform/.test(step.title)),
      false,
    );
  });

  it("records the lock re-read as hour 8, not a new stage", () => {
    const landed = CHANGES.find((change) => change.id === "lock-reread");
    assert.ok(landed);
    assert.equal(landed.step, null);
    assert.equal(landed.time, "08:00");
    assert.match(landed.title, /Lock erneut gelesen/);
    assert.match(landed.body, /Stunde 8/);
    assert.match(landed.body, /Dieselbe Prüfung wirft weiter/);
    assert.match(landed.body, /Shader/);
    assert.match(landed.body, /Geometrie/);
    assert.match(landed.body, /umgehängtes oder ausgeblendetes Teil/);
    assert.match(landed.body, /seitliche oder kopfüber stehende Kamera/);
    assert.match(landed.body, /Void/);
    assert.match(landed.body, /Vergleichstabelle ist eingefroren/);
    assert.match(landed.body, /Figur und lock\.ts sind unverändert/);
    assert.match(landed.body, /320 Millisekunden/);
    assert.match(landed.body, /keine eigene Stufe/);
    assert.match(landed.body, /Satzmelodie bleibt ausgesetzt/);
    assert.doesNotMatch(landed.body, /Stunde 9|09:00|noch nicht/);
    assert.doesNotMatch(landed.title, /Stufe 11|elfte Stufe/);
    assert.equal(
      STEPS.some((step) => step.id > 10 || /erneut gelesen/.test(step.title)),
      false,
    );
  });

  it("records the stability read as hour 9, not a new stage", () => {
    const landed = CHANGES.find((change) => change.id === "stability-read");
    assert.ok(landed);
    assert.equal(landed.step, null);
    assert.equal(landed.time, "09:00");
    assert.equal(landed.title, "Stabilitätscheck");
    assert.match(landed.body, /Stunde 9/);
    assert.match(landed.body, /zwei Sekunden/);
    assert.match(landed.body, /Trainingsstunden 0 bis 8/);
    assert.match(landed.body, /zwanzig Sekunden auf Stunde 8/);
    assert.match(landed.body, /reduzierter Bewegung/);
    assert.match(landed.body, /bleibt grün/);
    assert.match(landed.body, /Kein zweiter Check/);
    assert.match(landed.body, /kein Post-Pass/);
    assert.match(landed.body, /kein visueller Eingriff/);
    assert.match(landed.body, /Figur und lock\.ts sind unverändert/);
    assert.match(landed.body, /320 Millisekunden/);
    assert.match(landed.body, /stehen schon/);
    assert.match(landed.body, /Stundenschritt, keine eigene Stufe/);
    assert.match(landed.body, /Satzmelodie bleibt ausgesetzt/);
    assert.doesNotMatch(landed.body, /Stufe 11|elfte Stufe|Stunde 10|noch nicht/);
    assert.equal(
      STEPS.some((step) => step.id > 10),
      false,
    );
  });

  it("notes the name word-boundary on the reply path already recorded", () => {
    const prior = CHANGES.find((change) => change.id === "shape-reply");
    assert.ok(prior);
    assert.match(prior.body, /shapeReply/);
    const landed = CHANGES.find((change) => change.id === "reply-form-name");
    assert.ok(landed);
    assert.equal(landed.step, null);
    assert.equal(landed.time, "09:10");
    assert.match(landed.title, /Wortgrenze/);
    assert.match(landed.body, /ohne Ersatzsatz/);
    assert.match(landed.body, /ganzes Wort/);
    assert.match(landed.body, /Jacinta/);
    assert.match(landed.body, /Namen nicht erfragen/);
    assert.match(landed.body, /Abbruch an der Historie/);
    assert.match(landed.body, /derselben Funktion/);
    assert.match(landed.body, /shapeReply steht schon/);
    assert.match(landed.body, /320 Millisekunden/);
    assert.match(landed.body, /keine eigene Stufe/);
    assert.match(landed.body, /Satzmelodie bleibt ausgesetzt/);
    assert.doesNotMatch(landed.body, /Stunde 9|Stunde 10|09:00|Stundenschritt|Stufe 11/);
    assert.equal(
      STEPS.some((step) => /Wortgrenze|Jacinta/.test(step.title)),
      false,
    );
  });

  it("records the last viseme at the text clock, not as the idle-mouth hour", () => {
    const idle = CHANGES.find((change) => change.id === "mouth-rest");
    assert.ok(idle);
    assert.match(idle.title, /Mund in der Ruhe/);
    const landed = CHANGES.find((change) => change.id === "viseme-clock");
    assert.ok(landed);
    assert.equal(landed.step, null);
    assert.equal(landed.time, "09:20");
    assert.equal(landed.title, "Visem am Texttakt");
    assert.match(landed.body, /derselben Ruhe/);
    assert.match(landed.body, /onend/);
    assert.match(landed.body, /\baa\b/);
    assert.match(landed.body, /Kein Ausblenden/);
    assert.match(landed.body, /keine zweite Uhr/);
    assert.match(landed.body, /kürzer sein als die Stimme/);
    assert.match(landed.body, /Mund in der Ruhe steht schon/);
    assert.match(landed.body, /320 Millisekunden/);
    assert.match(landed.body, /keine eigene Stufe/);
    assert.match(landed.body, /Satzmelodie bleibt ausgesetzt/);
    assert.doesNotMatch(landed.body, /Stunde 9|Stunde 10|Stundenschritt|Stufe 11/);
    assert.equal(
      STEPS.some((step) => /Texttakt|Visem/.test(step.title)),
      false,
    );
  });

  it("names hour 10 at 10:00 as the next run and leaves it unrun", () => {
    assert.equal(HOURLY_DONE, 9);
    assert.equal(HOURLY_NEXT, 10);
    assert.equal(NEXT_RUN_HOUR, "10:00");
    assert.equal(NEXT_RUN_LABEL, "10:00");
    assert.match(NEXT_RUN_NOTE, /Stabilitätscheck ist in Stunde 9, 09:00, gelaufen/);
    assert.match(NEXT_RUN_NOTE, /zwei Sekunden/);
    assert.match(NEXT_RUN_NOTE, /bleibt grün/);
    assert.match(NEXT_RUN_NOTE, /Kein zweiter Check/);
    assert.match(NEXT_RUN_NOTE, /lock\.ts sind unverändert/);
    assert.match(NEXT_RUN_NOTE, /320 Millisekunden/);
    assert.match(NEXT_RUN_NOTE, /Mund in der Ruhe/);
    assert.match(NEXT_RUN_NOTE, /shapeReply/);
    assert.match(NEXT_RUN_NOTE, /Stunde 8 stehen schon/);
    assert.match(NEXT_RUN_NOTE, /ganzes Wort/);
    assert.match(NEXT_RUN_NOTE, /Texttakt/);
    assert.match(NEXT_RUN_NOTE, /zehn Stufen bleiben erledigt/);
    assert.match(NEXT_RUN_NOTE, /Satzmelodie bleibt ausgesetzt/);
    assert.match(NEXT_RUN_NOTE, /Stunde 10, 10:00, ist der nächste Lauf/);
    assert.match(NEXT_RUN_NOTE, /noch nicht gelaufen/);
    assert.equal(
      CHANGES.some((change) => change.time === "10:00"),
      false,
    );
    assert.equal(
      CHANGES.some((change) => /melodie/i.test(change.title)),
      false,
    );
    assert.equal(
      CHANGES.filter((change) => change.title === "Stabilitätscheck").length,
      1,
    );
  });
});
