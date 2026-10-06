# Контактный лист экранов концепта: python3 sheet.py <slug> [cols]
import sys, os
from PIL import Image, ImageDraw
slug = sys.argv[1]
cols = int(sys.argv[2]) if len(sys.argv) > 2 else 8
d = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'concepts') + f'/{slug}/assets/screenshots'
skip = {'phone', 'password', 'register', 'registerpassword', 'overview', 'account', 'deleteaccount', 'code', 'auth'}
names = sorted(n[:-4] for n in os.listdir(d) if n.endswith('.png') and n[:-4] not in skip)
h = 620
ims = []
for n in names:
    im = Image.open(os.path.join(d, n + '.png')).convert('RGB')
    ims.append((n, im.resize((int(im.width * h / im.height), h))))
w = max(i.width for _, i in ims)
rows = (len(ims) + cols - 1) // cols
out = Image.new('RGB', (cols * (w + 16) + 16, rows * (h + 40) + 16), (200, 200, 205))
dr = ImageDraw.Draw(out)
for k, (n, im) in enumerate(ims):
    x = 16 + (k % cols) * (w + 16); y = 16 + (k // cols) * (h + 40)
    out.paste(im, (x, y)); dr.text((x, y + h + 6), n, fill=(0, 0, 0))
p = f"{os.environ.get('SCRATCH', '/tmp')}/sheet-{slug}.png"
out.save(p); print(p, len(ims), out.size)
