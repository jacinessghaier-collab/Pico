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

describe("kushim stand after the idle mouth", () => {
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

  it("keeps the lock-check read as the next hour", () => {
    assert.equal(HOURLY_DONE, 8);
    assert.equal(HOURLY_NEXT, 9);
    assert.equal(NEXT_RUN_HOUR, "09:00");
    assert.equal(NEXT_RUN_LABEL, "Lock-Check nur lesen");
    assert.match(NEXT_RUN_NOTE, /Stunde 9, 09:00, liest den Lock-Check nur/);
    assert.match(NEXT_RUN_NOTE, /noch nicht gelaufen/);
    assert.match(NEXT_RUN_NOTE, /Satzmelodie bleibt ausgesetzt/);
    assert.doesNotMatch(NEXT_RUN_NOTE, /shapeReply/);
    assert.equal(
      CHANGES.some((change) => change.time === "09:00" || /shapeReply/.test(change.body)),
      false,
    );
  });
});
