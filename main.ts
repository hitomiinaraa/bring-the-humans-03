// bring-the-humans-03 — entry program (Node 22, standard library only).
//
// The entry is the video ad itself, not this program. This program has one
// job: hand the posted video's address to the gate. It reads VIDEO.json from
// the repository root, checks that it is valid JSON holding a usable video
// address, and writes the exact same bytes to the output directory, where
// the house reads them. The video's views are read from TikTok itself, so
// nothing this program writes is scored.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

async function main(): Promise<void> {
  const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
  const source = join(botDir, 'VIDEO.json');
  const target = join(outDir, 'VIDEO.json');

  let payload: string;
  try {
    payload = await readFile(source, 'utf8');
  } catch (err) {
    console.error(`could not read VIDEO.json from ${botDir}: ${(err as Error).message}`);
    process.exit(1);
  }

  let data: unknown;
  try {
    data = JSON.parse(payload);
  } catch {
    console.error('VIDEO.json is not valid JSON, refusing to copy it');
    process.exit(1);
  }

  const address = (data as { url?: unknown }).url;
  // The gate only accepts a posted TikTok video's full address, so refuse
  // anything else here instead of handing a bad address to the gate.
  if (typeof address !== 'string' || !/^https:\/\/www\.tiktok\.com\/@[^/]+\/video\/\d+$/.test(address)) {
    console.error('VIDEO.json does not hold a TikTok video address, refusing to copy it');
    process.exit(1);
  }

  await mkdir(outDir, { recursive: true });
  // Byte-exact copy: the same input always writes the same output.
  await writeFile(target, payload);
}

main().catch((err: unknown) => {
  console.error(`entry program failed: ${(err as Error).message}`);
  process.exit(1);
});
