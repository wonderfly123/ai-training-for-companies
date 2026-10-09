"""
Covers customer PII on the Windansea BEO screenshot with solid bars and
writes the result to public/images/windansea-beo.png.

Usage: python3 scripts/redact-beo.py assets/beo.png
Boxes are defined against a 1494 px wide capture and scaled to the input.
"""
import sys
from PIL import Image, ImageDraw

BASE_W = 1494
# (x0, y0, x1, y1) in base coordinates: BEO number, event name, first name,
# last name, email, phone, delivery address.
BOXES = [
    (158, 212, 340, 242),
    (188, 452, 520, 496),
    (188, 580, 300, 620),
    (754, 580, 860, 620),
    (188, 706, 480, 748),
    (754, 706, 920, 748),
    (188, 1790, 740, 1832),
]
BAR = (226, 226, 226)

def main(src: str, out: str = "public/images/windansea-beo.png") -> None:
    im = Image.open(src).convert("RGB")
    k = im.width / BASE_W
    d = ImageDraw.Draw(im)
    for x0, y0, x1, y1 in BOXES:
        d.rectangle([x0 * k, y0 * k, x1 * k, y1 * k], fill=BAR)
    im.save(out, optimize=True)
    print(f"wrote {out} ({im.width}x{im.height}), {len(BOXES)} fields covered")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        sys.exit("usage: redact-beo.py <screenshot.png>")
    main(sys.argv[1], *sys.argv[2:])
