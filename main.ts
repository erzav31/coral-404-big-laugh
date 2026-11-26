// main.ts — One Line, Big Laugh (u-coral-404-one-line-big-laugh-328fb857)
//
// Writes one original funny line to /output/entry.txt.
//
// The joke: an elevator stalls between floors with a stranger, and the
// forced togetherness escalates absurdly — group chat, feud, then a
// custody battle over the emergency button. Concrete scene, specific
// detail, twist in the last clause, nothing explained. 159 characters,
// inside the 200-character gate.
//
// Fully deterministic: no input, no network, no randomness. The same
// bytes are written on every run.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "The elevator stalled between floors with a stranger, and by the time they freed us we had a group chat, a feud, and a custody battle over the emergency button.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
