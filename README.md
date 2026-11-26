[![make.fun · makefun-x-reposts-02](https://make.fun/badge/makefun-x-reposts-02.svg)](https://make.fun/bounty/makefun-x-reposts-02?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)
[![rank](https://make.fun/badge/makefun-x-reposts-02/zavonlame/makefun-x-reposts-02/rank.svg)](https://make.fun/bounty/makefun-x-reposts-02/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)
[![reward](https://make.fun/badge/makefun-x-reposts-02/zavonlame/makefun-x-reposts-02/reward.svg)](https://make.fun/bounty/makefun-x-reposts-02?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)

# Get the most reposts and likes on make.fun's newest X posts

Entry for the make.fun bounty **makefun-x-reposts-02** ($500 USDC, top 50
paid: 1st $100, 2nd $60, 3rd $30, 4th–10th $10 each, 11th–50th $6 each).
Closes Sat 2026-11-28 14:30 WIB; results due 2026-12-13.

## The posts are the entry

Zavon posted seven quotes from his public account **@ZavonLame**, each one
quoting a different **@makefunai** post from the pool (every @makefunai post
with id at or above `2125053632605196760`), each carrying make.fun /
@makefunai and his play code `makefun-eel-tricycle-possum`. The seven
cover the whole pool — @makefunai made no new pool post after the last
one below (re-checked 26 Nov 2026 07:20 WIB).

| # | Zavon's quote | Quoting @makefunai |
|---|---------------|--------------------|
| 1 | https://x.com/ZavonLame/status/2125724461295083773 | AOD: Age of Dragon, Mike Houser — https://x.com/makefunai/status/2125053632605196760 |
| 2 | https://x.com/ZavonLame/status/2125728848512000384 | GTA 6-style game, $1,666 — https://x.com/makefunai/status/2125053991293784431 |
| 3 | https://x.com/ZavonLame/status/2125731633420718114 | Slotbound, $1.33M first week — https://x.com/makefunai/status/2125246707512553850 |
| 4 | https://x.com/ZavonLame/status/2125733775288250762 | Best game, any genre — https://x.com/makefunai/status/2125247026728235268 |
| 5 | https://x.com/ZavonLame/status/2125735656119017950 | "Make GTA 6" winners — https://x.com/makefunai/status/2125375203744391226 |
| 6 | https://x.com/ZavonLame/status/2125743749540266374 | Yet Another Incremental Game, $19,513 — https://x.com/makefunai/status/2125609728088666351 |
| 7 | https://x.com/ZavonLame/status/2125746536735002689 | Best game, any genre (2nd) — https://x.com/makefunai/status/2125610034209939567 |

Every quote's text was verified live via FxTwitter before this entry was
built: exact draft wording, a real quote of the pool post named above,
@makefunai tagged, play code present. At build time (26 Nov 2026, ~07:20
WIB) all seven posts still had 0 likes, 0 reposts and 0 quotes — any
engagement from here on is organic, from other accounts. The posts stay
up and public until the results are out.

## How it scores

The house reads each post through FxTwitter's public read at the
deadline: **score = 2 points per repost + 2 per quote + 1 per like**,
summed over all seven posts. Views and replies move nothing. Only
organic engagement counts — bought, botted, or own/coordinated-account
engagement disqualifies, and none of that was used here.

## Files

- `POSTS.json` — the seven post addresses, the whole entry. The house
  reads the posts itself; nothing the program writes about them counts.
- `main.ts` — Node 22 program. It checks every address in `posts` is an
  X post URL on @ZavonLame (1–15, no repeats) and copies `POSTS.json`
  to `$MAKEFUN_OUTPUT_DIR`. That is all it does; it prints nothing on
  success.
- `LICENSE` — MIT.

## Run locally

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
# -> out/POSTS.json, byte for byte the same as POSTS.json
```

Competition: https://make.fun/bounty/makefun-x-reposts-02
