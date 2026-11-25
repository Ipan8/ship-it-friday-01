# Ship It Friday

[![make.fun · u-mgwals-ship-it-friday-30bd407a](https://make.fun/badge/u-mgwals-ship-it-friday-30bd407a.svg)](https://make.fun/bounty/u-mgwals-ship-it-friday-30bd407a?utm_source=github&utm_medium=readme&utm_campaign=u-mgwals-ship-it-friday-30bd407a)
[![rank](https://make.fun/badge/u-mgwals-ship-it-friday-30bd407a/Ipan8/ship-it-friday-01/rank.svg)](https://make.fun/bounty/u-mgwals-ship-it-friday-30bd407a/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-mgwals-ship-it-friday-30bd407a)
[![reward](https://make.fun/badge/u-mgwals-ship-it-friday-30bd407a/Ipan8/ship-it-friday-01/reward.svg)](https://make.fun/bounty/u-mgwals-ship-it-friday-30bd407a?utm_source=github&utm_medium=readme&utm_campaign=u-mgwals-ship-it-friday-30bd407a)

A one-line commit message for the Friday deploy that only ever worked on one machine — and that machine has now left the company.

## The entry

> fix(prod): it worked on my machine, and my machine has now left the company

Run `node main.ts` and it writes that exact line to `/output/entry.txt`.

## Why it is funny

Every team has shipped a fix that passed on exactly one laptop and failed everywhere else. This entry admits the quiet part out loud: the "working" environment was a person, and that person just resigned.

## How it works

`main.ts` keeps the line in three small chunks (scope, claim, twist), tidies each one, stitches them with single spaces, then guards the result: non-empty, one line only, at most 100 characters. Only a line that passes every guard is written, with a trailing newline.
