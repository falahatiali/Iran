#!/usr/bin/env python3
"""Render the Battle of Carrhae diagram to MP4, WebM, GIF and a PNG poster, frame by frame.

Serve the built site first (e.g. `cd .output/public && python3 -m http.server 8811`), then:
    python3 scripts/render-carrhae-clip.py [base_url]
Each frame is set through window.__carrhae, so the output is deterministic.
"""
import os, subprocess, sys, tempfile
from playwright.sync_api import sync_playwright

BASE = sys.argv[1] if len(sys.argv) > 1 else 'http://localhost:8811'
OUT = os.path.join(os.path.dirname(__file__), '..', 'public', 'media', 'carrhae')
FPS, MOVE_S, HOLD_S, PHASES = 20, 1.6, 4.4, 11
CHROME = os.environ.get('CHROME', '/usr/bin/google-chrome')

def run(*a): subprocess.run(a, check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)

os.makedirs(OUT, exist_ok=True)
with sync_playwright() as p:
    b = p.chromium.launch(executable_path=CHROME)
    for loc, prefix in (('fa', ''), ('en', '/en')):
        pg = b.new_page(viewport={'width': 1280, 'height': 720}, device_scale_factor=1)
        pg.goto(f'{BASE}{prefix}/battle/carrhae/?render=1'); pg.wait_for_function('!!window.__carrhae && !!document.getElementById("carrhae-render")')
        pg.evaluate('document.fonts.ready'); el = pg.locator('#carrhae-render svg').first
        tmp = tempfile.mkdtemp(); n = 0; clock = 0.0
        for ph in range(PHASES):
            steps = (0 if ph == 0 else int(MOVE_S * FPS)) + int(HOLD_S * FPS)
            for k in range(steps):
                t = min(1.0, k / (MOVE_S * FPS)) if ph else 1.0
                pg.evaluate('f => window.__carrhae(f)', {'phase': ph, 't': t, 'clock': clock})
                el.screenshot(path=f'{tmp}/f{n:05d}.png'); n += 1; clock += 1 / FPS
            if ph == PHASES - 1: el.screenshot(path=f'{OUT}/battle-{loc}.png')
        src = f'{tmp}/f%05d.png'
        run('ffmpeg', '-y', '-framerate', str(FPS), '-i', src, '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-crf', '24', '-movflags', '+faststart', f'{OUT}/battle-{loc}.mp4')
        run('ffmpeg', '-y', '-framerate', str(FPS), '-i', src, '-c:v', 'libvpx-vp9', '-b:v', '0', '-crf', '38', '-row-mt', '1', f'{OUT}/battle-{loc}.webm')
        g = 'fps=8,scale=1280:-1:flags=lanczos'
        run('ffmpeg', '-y', '-framerate', str(FPS), '-i', src, '-vf', f'{g},palettegen=max_colors=96', f'{tmp}/pal.png')
        run('ffmpeg', '-y', '-framerate', str(FPS), '-i', src, '-i', f'{tmp}/pal.png', '-lavfi', f'{g}[x];[x][1:v]paletteuse=dither=bayer:bayer_scale=4', f'{OUT}/battle-{loc}.gif')
        print(loc, n, 'frames'); pg.close()
    b.close()
