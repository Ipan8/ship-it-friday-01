import { writeFileSync, mkdirSync } from "node:fs";

// Ship It Friday — one-line commit message for a Friday deploy.
// The entry is a single line, written verbatim to /output/entry.txt.
// Kept as one line on purpose: the bounty wants exactly one line.
const ENTRY =
  "fix(prod): it worked on my machine, and my machine has now left the company";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n");
console.log(ENTRY);
