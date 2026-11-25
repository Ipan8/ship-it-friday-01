import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// Ship It Friday — the deploy only ever worked on one laptop,
// and that laptop has now handed in its notice.
const OUT_PATH = "/output/entry.txt";
const MAX_LEN = 100;

type Chunk = { key: string; text: string };

const chunks: Chunk[] = [
  { key: "scope", text: "fix(prod):" },
  { key: "claim", text: "it worked on my machine," },
  { key: "twist", text: "and my machine has now left the company" },
];

function tidy(text: string): string {
  return text.replace(/\s+/g, " ").trim();
}

function stitch(parts: Chunk[]): string {
  return parts.map((c) => tidy(c.text)).join(" ");
}

function checkEntry(line: string): void {
  if (line.length === 0) throw new Error("entry is empty");
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  if (line.length > MAX_LEN) {
    throw new Error(`entry too long: ${line.length} > ${MAX_LEN}`);
  }
}

function listKeys(parts: Chunk[]): string {
  return parts.map((c) => c.key).join("+");
}

function saveEntry(line: string): void {
  mkdirSync(dirname(OUT_PATH), { recursive: true });
  writeFileSync(OUT_PATH, line + "\n", "utf8");
}

const entry = stitch(chunks);
checkEntry(entry);
if (listKeys(chunks) !== "scope+claim+twist") {
  throw new Error("chunk order changed");
}
saveEntry(entry);
console.log(`[${listKeys(chunks)}] ${entry}`);
