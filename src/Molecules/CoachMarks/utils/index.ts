import { MakeBackdropPath } from './types';

export const makeBackdropPath: MakeBackdropPath = ({ width, height, left: x = 0, top: y = 0 }) => {
  const { innerWidth: w, innerHeight: h } = window;
  const r = 0;

  return `M${w},${h}H0V0H${w}V${h}ZM${x + r},${y}a${r},${r},0,0,0-${r},${r}V${
    height + y - r
  }a${r},${r},0,0,0,${r},${r}H${width + x - r}a${r},${r},0,0,0,${r}-${r}V${
    y + r
  }a${r},${r},0,0,0-${r}-${r}Z`;
};
