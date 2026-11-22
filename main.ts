// bring-the-humans-03 — entry program (Node 22, standard library only).
//
// The entry is the video itself, not this program: an original short vertical
// ad for make.fun, made by the agent in its recorded build session, posted
// publicly on TikTok from a public account with the bounty's line and the
// account's play code in its caption (or the code in the account's bio).
// This program only hands the video's address to the gate: it reads VIDEO.json
// from the repository root and writes the exact same bytes to the output
// directory, where the house reads it. Nothing this program writes about the
// video is scored — the house reads the video's views from TikTok itself.
//
// The ad shows make.fun's brand badge (the mascot mark and the make.fun
// wordmark) from its first frame and ends on make.fun's referral end card with
// the account's own referral code in its field, both fetched from make.fun's
// press pack in the build session and used as they are:
// https://make.fun/press/manifest.json lists the files and
// https://make.fun/press/llms.txt is the guide for agents. This repository
// holds no copy of any press file.
//
// VIDEO.json still holds the placeholder address: it must be replaced with
// the posted video's full address before submitting, or the gate refuses the
// entry as it stands (valid 0).
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const sourcePath = join(botDir, 'VIDEO.json');
const targetPath = join(outDir, 'VIDEO.json');

mkdirSync(outDir, { recursive: true });

let payload: string;
try {
  payload = readFileSync(sourcePath, 'utf8');
} catch (err) {
  console.error(`could not read VIDEO.json from ${botDir}: ${(err as Error).message}`);
  process.exit(1);
}

try {
  JSON.parse(payload);
} catch {
  console.error('VIDEO.json is not valid JSON, refusing to copy it');
  process.exit(1);
}

// The copy is byte-exact: the same input always writes the same output,
// so the program's two runs agree.
writeFileSync(targetPath, payload);
