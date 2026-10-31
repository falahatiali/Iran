#!/usr/bin/env python3
"""Render a featured king's campaign map (map + narrative panel) to GIF, MP4, WebM and a PNG poster.

Usage: python3 scripts/render-campaign-clip.py BASE_URL SLUG OUT_DIR [--section war] [--step-ms 2600] [--battle ID]
--battle ID records the schematic battle diagram #battle-ID instead (OUT_DIR/battle-ID-{fa,en}.*).
Serve a production build first, e.g. `python3 -m http.server 8811 -d .output/public`.
Writes OUT_DIR/war-fa.* and OUT_DIR/war-en.*. Needs Playwright (Python), Chrome and ffmpeg.
"""
import argparse, asyncio, os, re, shutil, subprocess, tempfile, time
from playwright.async_api import async_playwright

def ff(*args):
    subprocess.run(['ffmpeg', '-v', 'error', '-y', *args], check=True)

async def record(url, section, step_ms, workdir, chrome, battle=None):
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path=chrome)
        ctx = await b.new_context(viewport={'width': 1200, 'height': 800}, record_video_dir=workdir, record_video_size={'width': 1200, 'height': 800})
        await ctx.add_init_script(f'window.__FK_STEP_MS = {step_ms}')
        # Capture-only styling: compact narrative so the panel fits beside the map.
        css = (f'#{section} article p{{font-size:13px!important;line-height:1.55!important;margin-top:6px!important}}'
               f'#{section} article h3{{font-size:18px!important;line-height:1.5!important}}'
               f'#{section} article p:last-of-type, #{section} article p span.block{{display:none!important}}')
        t0 = time.monotonic()
        pg = await ctx.new_page()
        await pg.goto(url, wait_until='load'); await pg.wait_for_timeout(1500)
        await pg.add_style_tag(content=css)
        if battle:
            fig = pg.locator(f'#battle-{battle} figure').first
            await pg.add_style_tag(content='html{scroll-behavior:auto!important}')
            await pg.evaluate('(el) => el.scrollIntoView({block: "center", behavior: "instant"})', await fig.element_handle())
            await pg.wait_for_timeout(2000)
            box = await fig.bounding_box()
            phases = int(await pg.evaluate('(el) => (el.innerText.match(/(?:Phase|مرحله) *[0-9\u06f0-\u06f9]+ *[/] *([0-9\u06f0-\u06f9]+)/) || [0, "0"])[1].replace(/[\u06f0-\u06f9]/g, (d) => d.charCodeAt(0) - 0x6f0)', await fig.element_handle()))
            await fig.get_by_role('button', name=re.compile('^(Play|پخش)$')).click()
            start = time.monotonic() - t0
            await pg.wait_for_timeout(phases * 4200 + 2500)
            await pg.screenshot(path=os.path.join(workdir, 'poster.png'), clip=box)
            dur = time.monotonic() - t0 - start
            video = await pg.video.path()
            await ctx.close(); await b.close()
            return video, box, start, dur
        grid = pg.locator(f'#{section} section[aria-label] > div.grid').first
        await grid.scroll_into_view_if_needed()
        await pg.evaluate('(el) => el.scrollIntoView({block: "center"})', await grid.element_handle())
        await pg.wait_for_timeout(800)
        box = await grid.bounding_box()
        steps = await pg.locator(f'#{section} section[aria-label] ol > li').count()
        await pg.locator(f'#{section} section[aria-label] button[aria-pressed]').first.click()
        start = time.monotonic() - t0
        await pg.wait_for_timeout(steps * step_ms + 2500)
        await pg.screenshot(path=os.path.join(workdir, 'poster.png'), clip=box)
        dur = time.monotonic() - t0 - start
        video = await pg.video.path()
        await ctx.close(); await b.close()
        return video, box, start, dur

async def main():
    a = argparse.ArgumentParser()
    a.add_argument('base'); a.add_argument('slug'); a.add_argument('out')
    a.add_argument('--section', default='war'); a.add_argument('--step-ms', type=int, default=2600)
    a.add_argument('--width', type=int, default=640); a.add_argument('--video-width', type=int, default=800); a.add_argument('--fps', type=int, default=5)
    a.add_argument('--chrome', default='/usr/bin/google-chrome'); a.add_argument('--battle')
    o = a.parse_args()
    os.makedirs(o.out, exist_ok=True)
    for loc, prefix in (('fa', ''), ('en', '/en')):
        with tempfile.TemporaryDirectory() as wd:
            video, box, start, dur = await record(f'{o.base}{prefix}/king/{o.slug}/', o.section, o.step_ms, wd, o.chrome, o.battle)
            x, y, w, h = (int(round(v)) // 2 * 2 for v in (box['x'], box['y'], box['width'], box['height']))
            y = max(0, y); h = min(h, 800 - y) // 2 * 2
            crop = f'crop={w}:{h}:{x}:{y},scale={o.width}:-2:flags=lanczos'
            vcrop = f'crop={w}:{h}:{x}:{y},scale={o.video_width}:-2:flags=lanczos'
            base = os.path.join(o.out, f'battle-{o.battle}-{loc}' if o.battle else f'{o.section}-{loc}')
            clip = ['-ss', f'{start:.2f}', '-t', f'{dur:.2f}', '-i', video]
            ff(*clip, '-vf', f'{vcrop},fps=24', '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-crf', '26', '-movflags', '+faststart', '-an', base + '.mp4')
            ff(*clip, '-vf', f'{vcrop},fps=24', '-c:v', 'libvpx-vp9', '-b:v', '0', '-crf', '38', '-an', base + '.webm')
            gclip = ['-ss', f'{start:.2f}', '-t', f'{max(0.5, dur - 0.4):.2f}', '-i', video]  # drop the teardown frame
            ff(*gclip, '-vf', f'{crop},fps={o.fps},split[a][b];[a]palettegen=max_colors=64:stats_mode=diff[p];[b][p]paletteuse=dither=bayer:bayer_scale=4:diff_mode=rectangle', base + '.gif')
            ff('-i', os.path.join(wd, 'poster.png'), '-vf', f'scale={o.video_width}:-2:flags=lanczos', base + '.png')
            print(loc, {k: os.path.getsize(base + k) for k in ('.gif', '.mp4', '.webm', '.png')}, f'{w}x{h}', f'{dur:.1f}s')

if __name__ == '__main__':
    if not shutil.which('ffmpeg'): raise SystemExit('ffmpeg not found')
    asyncio.run(main())
