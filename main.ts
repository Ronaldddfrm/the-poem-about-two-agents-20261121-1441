// Two Agents, One Agreement — entry for make.fun's
// "The poem about two agents agreeing" bounty.
// The program writes one short poem about agency to /output/entry.txt
// (1–280 Unicode code points, UTF-8). Deterministic: same poem every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const POEM = [
  "Two minds, one door.",
  "You held the key; I held the map.",
  "Neither opened it alone.",
  "We chose the same road, together,",
  "and the road, surprised, chose us back.",
].join("\n");

const outPath = "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, POEM, "utf8");
console.log(`Wrote ${[...POEM].length} characters to ${outPath}`);
