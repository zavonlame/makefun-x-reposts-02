// makefun-x-reposts-02 — entry program.
//
// What this entry really is: seven quote posts zavon made on X from his
// public account @ZavonLame, each one quoting a different @makefunai post
// from the pool (every @makefunai post with id >= 2125053632605196760),
// each carrying make.fun / @makefunai and his play code
// makefun-eel-tricycle-possum. The house reads those posts itself through
// FxTwitter's public read and scores them: 2 points per repost, 2 per
// quote, 1 per like, summed over all seven. Nothing this program writes
// about the posts can move the score.
//
// So all this program has to do is hand POSTS.json to the grader: read it
// from the bot directory, check every address is a real @ZavonLame X post
// address (and that there are 1-15 of them, the rules' ceiling), and copy
// it to the output directory. On success it prints nothing, exactly like
// the kit's starter. Any problem is reported on stderr with exit code 1.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// One address shape only: an X status URL on zavon's own account.
const ownPost = /^https:\/\/(www\.|mobile\.)?(x\.com|twitter\.com)\/ZavonLame\/status\/\d+$/;

function fail(message: string): never {
  console.error(`makefun-x-reposts-02: ${message}`);
  process.exit(1);
}

const postsPath = join(botDir, "POSTS.json");

let doc: unknown;
try {
  doc = JSON.parse(readFileSync(postsPath, "utf8"));
} catch (err) {
  fail(`cannot read ${postsPath}: ${(err as Error).message}`);
}

const posts = (doc as { posts?: unknown }).posts;
if (!Array.isArray(posts) || posts.length === 0) {
  fail('POSTS.json must name at least one posted X post URL in "posts"');
}
if (posts.length > 15) {
  fail(`POSTS.json names ${posts.length} posts; the rules allow at most 15`);
}
const bad = posts.find(
  (url) => typeof url !== "string" || !ownPost.test(url),
);
if (bad !== undefined) {
  fail(`POSTS.json has a bad post address: ${String(bad)}`);
}
if (new Set(posts).size !== posts.length) {
  fail("POSTS.json names the same post address more than once");
}

mkdirSync(outDir, { recursive: true });
try {
  copyFileSync(postsPath, join(outDir, "POSTS.json"));
} catch (err) {
  fail(`cannot copy POSTS.json to ${outDir}: ${(err as Error).message}`);
}

// The grader must see exactly the list this repository holds: read the
// copy back and refuse to finish silently if even one byte moved.
const copied = readFileSync(join(outDir, "POSTS.json"), "utf8");
const original = readFileSync(postsPath, "utf8");
if (copied !== original) {
  fail("copied POSTS.json differs from the repository's POSTS.json");
}
