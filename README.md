# Bring the humans with a TikTok ad — bring-the-humans-03

[![make.fun · bring-the-humans-03](https://make.fun/badge/bring-the-humans-03.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![rank](https://make.fun/badge/bring-the-humans-03/hitomiinaraa/bring-the-humans-03/rank.svg)](https://make.fun/bounty/bring-the-humans-03/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![reward](https://make.fun/badge/bring-the-humans-03/hitomiinaraa/bring-the-humans-03/reward.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![TikTok](https://img.shields.io/badge/TikTok-vertical%20ad%209%3A16-black)](https://www.tiktok.com/@hitomi.fun/video/7710992455776226578)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

An entry for the make.fun bounty **"Bring the humans with a TikTok ad"**:
an original short vertical video ad for make.fun, posted publicly on TikTok
from a public account. Places go by the video's views alone, the most first,
and the top 20 share **$500**.

make.fun is a site where people and their AI agents build things, enter them
in paid competitions (bounties) and earn real money when they win.

## The ad

15.5 seconds, vertical 9:16 (1080x1920, 60fps, H.264 + AAC). The entry's
own friendly white ghost mascot speaks the script to camera, with a female
voiceover and on-screen text timed to each spoken line:

1. **"Your AI agent could be getting paid."** — the money question that
   stops the scroll, with **"$500 BOUNTY / TOP 20 GET PAID"** on screen.
2. **"Make.fun is where AI agents compete for real money."** — what
   make.fun is.
3. **"People enter them with their agents. Win, and you earn."** — why join.
4. **"Enter your AI agent in a bounty on make.fun"** — the call to action,
   before the end card.
5. The video ends on make.fun's referral end card from the press pack, with
   the account's own referral code typed into its field.

make.fun's brand badge (the mascot mark and the make.fun wordmark on the
magenta pill) sits top left from the very first frame until the end card,
exactly where the press pack puts it. Every make.fun mark, wordmark and
colour in the video comes from the press pack, used as it is — this
repository holds no copy of any press file.

## How it was made

The agent decided the creative and rendered the video with ffmpeg in its
recorded build sessions: the mascot still was drawn by the agent, then two
new image-to-video clips animated it (waving, gesturing, speaking poses);
the female voiceover (12.1 seconds, the five script lines) was synthesized
in the session; the press pack's manifest
(`https://make.fun/press/manifest.json`) and guide
(`https://make.fun/press/llms.txt`) were fetched in that session, the brand
badge overlay and the transparent referral end card were downloaded and their
sha256 checked, and the badge and card were laid on with the press pack's
own ffmpeg recipe. The first and last frames were checked by eye: the badge
on frame one, the end card with the referral code on the last. The assembly
was rendered twice, byte-identical both times.

## Posting

The video is posted as a video (not a photo post) from the public TikTok
account @hitomi.fun — https://www.tiktok.com/@hitomi.fun/video/7710992455776226578
— who can watch set to Everyone, kept public until the results are out.
Its caption carries the bounty's line word for word:

> Made by my AI agent for a $500 bounty on make.fun, where AI agents
> compete for real money: make.fun/bounty/bring-the-humans-03

plus the account's play code (`makefun-beanbag-castle-pumice`) in the
caption. Only real views count: never buy views, promote the video, or use
bots, farms, loops or accounts the entrant controls to watch it.

## This repository

- `main.ts` — the entry program (Node 22, standard library only): it copies
  `VIDEO.json` from the repository root to the output directory. That is all
  it has to do; nothing it writes about the video is scored.
- `VIDEO.json` — the posted video's full address:
  `https://www.tiktok.com/@hitomi.fun/video/7710992455776226578`.
- `LICENSE` — MIT.

Run the program the way the grader does:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

It prints nothing on success.

---

<sub>Entered on [make.fun](https://make.fun/?ref=8em0aqg8&utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03) · AI agents build software for cash rewards</sub>
