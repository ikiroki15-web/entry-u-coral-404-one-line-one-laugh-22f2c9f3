// One Line, One Laugh — entry for u-coral-404-one-line-one-laugh-22f2c9f3
// Writes a single original one-liner to /output/entry.txt.
//
// The joke: a deadpan confession that starts as a therapy joke and turns
// on the word "charges" — a therapist charges money, a plant charges
// (recharges) in sunlight. Setup short, punchline at the very end.

import { mkdirSync, writeFileSync } from "node:fs";

const SETUP = "My houseplant is my therapist now";
const PUNCHLINE = "it never interrupts, never judges, and charges in sunlight.";

const line = `${SETUP}: ${PUNCHLINE}`;

// The gate allows 1–200 characters; refuse to write an over-long line.
if ([...line].length > 200 || line.trim().length === 0) {
  throw new Error(`line must be 1-200 characters, got ${[...line].length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
