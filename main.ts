import { mkdirSync, writeFileSync } from "node:fs";

// A dog explains why it ate the homework.
const excuse = "It was on the floor, and everything on the floor is mine. That's the rule. I didn't make the rule. Okay, I made the rule.";

const chars = [...excuse].length;
if (chars < 1 || chars >= 200) throw new Error(`excuse is ${chars} characters; it must be under 200`);

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(`${dir}/entry.txt`, excuse);
