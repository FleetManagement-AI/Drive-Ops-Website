#!/usr/bin/env python3
"""Offline tool: punch outer halo/plate from Fleet Care hero PNGs.

Keeps original assets; writes fleet-care-*-transparent.png.
Not used at runtime.
"""
from __future__ import annotations

from collections import deque
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
HERO = ROOT / "public" / "images" / "hero"

JOBS = [
    (
        HERO / "Fleet Management Dashboard compliance maintenantce fuel.png",
        HERO / "fleet-care-fuel-transparent.png",
    ),
    (
        HERO / "Fleet Management Dashboard Cards review alerts.png",
        HERO / "fleet-care-alerts-transparent.png",
    ),
]


def chroma(r: int, g: int, b: int) -> int:
    return max(r, g, b) - min(r, g, b)


def is_border(r: int, g: int, b: int, a: int) -> bool:
    if a < 100:
        return False
    c = chroma(r, g, b)
    return b >= 200 and g >= 170 and r <= 235 and c >= 18 and b > r + 5


def is_hard(r: int, g: int, b: int, a: int) -> bool:
    if a < 80:
        return False
    c = chroma(r, g, b)
    if c >= 30 and a >= 140:
        return True
    if max(r, g, b) <= 95 and a >= 150:
        return True
    return is_border(r, g, b, a)


def is_bg_candidate(r: int, g: int, b: int, a: int) -> bool:
    if a < 50:
        return True
    if b >= r + 12 and b >= g + 8 and a < 240:
        c = chroma(r, g, b)
        if a < 200 or c < 95:
            return True
    if r >= 228 and g >= 228 and b >= 228 and chroma(r, g, b) <= 24:
        return True
    if r >= 235 and g >= 238 and b >= 242:
        return True
    return False


def process(src: Path, dest: Path) -> None:
    im = Image.open(src).convert("RGBA")
    w, h = im.size
    px = im.load()
    remove = [[False] * w for _ in range(h)]
    q: deque[tuple[int, int]] = deque()

    def try_push(x: int, y: int) -> None:
        if remove[y][x]:
            return
        r, g, b, a = px[x, y]
        if is_hard(r, g, b, a):
            return
        if is_bg_candidate(r, g, b, a):
            remove[y][x] = True
            q.append((x, y))

    for x in range(w):
        for y in range(min(20, h)):
            try_push(x, y)
            try_push(x, h - 1 - y)
    for y in range(h):
        for x in range(min(20, w)):
            try_push(x, y)
            try_push(w - 1 - x, y)

    while q:
        x, y = q.popleft()
        for nx, ny in ((x - 1, y), (x + 1, y), (x, y - 1), (x, y + 1)):
            if 0 <= nx < w and 0 <= ny < h:
                try_push(nx, ny)

    for _ in range(8):
        changed = False
        for y in range(h):
            for x in range(w):
                if remove[y][x]:
                    continue
                r, g, b, a = px[x, y]
                if is_hard(r, g, b, a):
                    continue
                glow = b >= r + 10 and b >= g + 6 and a < 230 and chroma(r, g, b) < 110
                soft_white_edge = r >= 240 and g >= 240 and b >= 240 and a < 250
                if not (glow or soft_white_edge or a < 80):
                    continue
                near = False
                for nx, ny in (
                    (x - 1, y),
                    (x + 1, y),
                    (x, y - 1),
                    (x, y + 1),
                    (x - 2, y),
                    (x + 2, y),
                    (x, y - 2),
                    (x, y + 2),
                ):
                    if 0 <= nx < w and 0 <= ny < h and (
                        remove[ny][nx] or px[nx, ny][3] < 40
                    ):
                        near = True
                        break
                if near:
                    remove[y][x] = True
                    changed = True
        if not changed:
            break

    out = im.copy()
    opx = out.load()
    for y in range(h):
        for x in range(w):
            if remove[y][x]:
                r, g, b, _ = opx[x, y]
                opx[x, y] = (r, g, b, 0)

    bbox = out.getbbox()
    if bbox:
        l, t, r, b = bbox
        pad = 8
        out = out.crop((max(0, l - pad), max(0, t - pad), min(w, r + pad), min(h, b + pad)))
    out.save(dest, optimize=True)
    print(f"wrote {dest} ({out.size[0]}x{out.size[1]})")


def main() -> None:
    for src, dest in JOBS:
        if not src.exists():
            raise SystemExit(f"missing source: {src}")
        process(src, dest)


if __name__ == "__main__":
    main()
