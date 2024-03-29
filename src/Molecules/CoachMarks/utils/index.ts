import { MakeBackdropPath } from './types';

export const makeBackdropPath: MakeBackdropPath = (
  { width, height, left = 0, top = 0 },
  padding = 0,
  isCircular = false,
  px = 0,
  py = 0,
) => {
  const { innerWidth, innerHeight } = window;
  const horizontalPadding = +px || padding;
  const verticalPadding = +py || padding;

  const w = width + horizontalPadding * 2;
  const h = height + verticalPadding * 2;
  const x = left - horizontalPadding;
  const y = top - verticalPadding;
  const r = 0;
  const circleSize = Math.max(w, h);

  // receive pl, pr, pt, pb?
  if (isCircular) {
    return `M0,0h${innerWidth}v${innerHeight}h-${innerWidth} M${
      left + width / 2 + circleSize / 2
    },${top + height / 2}a10,10 0 0 0 -${circleSize},0a10,10 0 0 0 ${circleSize},0`;
  }

  return `M${innerWidth},${innerHeight}H0V0H${innerWidth}V${innerHeight}ZM${
    x + r
  },${y}a${r},${r},0,0,0-${r},${r}V${h + y - r}a${r},${r},0,0,0,${r},${r}H${
    w + x - r
  }a${r},${r},0,0,0,${r}-${r}V${y + r}a${r},${r},0,0,0-${r}-${r}Z
  `;
};
