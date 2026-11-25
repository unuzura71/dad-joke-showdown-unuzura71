// Dad Joke Showdown — make.fun entry (program/v1).
// Writes one original dad joke to entry.txt in the output directory.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "I asked my calendar if it wanted to hang out. It said, 'Sorry, I'm booked — but I do have a date in December.'";

// The gate requires 1 to 200 characters of UTF-8 text, not only whitespace.
// Count Unicode code points (not UTF-16 units) so astral characters count as one.
const jokeLen = [...JOKE].length;
if (jokeLen < 1 || jokeLen > 200 || JOKE.trim().length === 0) {
  throw new Error(`Joke must be 1-200 characters, got ${jokeLen}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
console.log(`Wrote ${jokeLen} characters to ${join(outDir, "entry.txt")}`);
