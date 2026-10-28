import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { CHANGES, DONE_STEP, NEXT_RUN_LABEL, NEXT_STEP, STEPS, statusOf } from "./kushim-stand.ts";

describe("kushim stand after the shorter first sentence", () => {
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
    assert.match(NEXT_RUN_LABEL, /Mundöffnung gegen den Atem/);
    assert.equal(STEPS.find((step) => step.id === 10)?.title, "Stabilitätscheck");
  });
});
