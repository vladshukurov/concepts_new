# До/после: python3 beforeafter.py <slug> screen1 screen2 ...
import sys, os
from PIL import Image, ImageDraw
slug, names = sys.argv[1], sys.argv[2:]
SP = os.environ.get('SCRATCH', '/tmp')
A = f'{SP}/before/{slug}'; B = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'concepts') + f'/{slug}/assets/screenshots'
h = 700
def load(p):
    if not os.path.exists(p): return None
    im = Image.open(p).convert('RGB'); return im.resize((int(im.width * h / im.height), h))
pairs = [(n, load(f'{A}/{n}.png'), load(f'{B}/{n}.png')) for n in names]
w = max(i.width for _, a, b in pairs for i in (a, b) if i)
out = Image.new('RGB', (len(pairs) * (w + 16) + 16, 2 * (h + 36) + 16), (200, 200, 205))
dr = ImageDraw.Draw(out)
for k, (n, a, b) in enumerate(pairs):
    x = 16 + k * (w + 16)
    for r, im, lab in ((0, a, 'до'), (1, b, 'после')):
        y = 16 + r * (h + 36)
        if im: out.paste(im, (x, y))
        dr.text((x, y + h + 6), f'{n} · {lab}', fill=(0, 0, 0))
p = f'{SP}/{slug}-before-after.png'; out.save(p); print(p, out.size)
