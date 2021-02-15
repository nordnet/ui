import { MakeBackdropPath } from './types';

export const makeBackdropPath: MakeBackdropPath = (
  { width, height, left = 0, top = 0 },
  padding = 0,
) => {
  const { innerWidth, innerHeight } = window;
  const w = width + padding * 2;
  const h = height + padding * 2;
  const x = left - padding;
  const y = top - padding;
  const r = 0;

  return `M${innerWidth},${innerHeight}H0V0H${innerWidth}V${innerHeight}ZM${
    x + r
  },${y}a${r},${r},0,0,0-${r},${r}V${h + y - r}a${r},${r},0,0,0,${r},${r}H${
    w + x - r
  }a${r},${r},0,0,0,${r}-${r}V${y + r}a${r},${r},0,0,0-${r}-${r}Z`;
};
