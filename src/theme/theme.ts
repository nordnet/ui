import { filter, mapObjIndexed, pipe, prop as Rprop, values } from 'ramda';
import { assert, deprecate, isNumber } from '../common/utils';
import { Theme, ThemeColorsVersion, ThemeConfig } from './theme.types';
import { createLightColors, getColorLightScheme } from './createLightColors';
import { createDarkColors, getColorDarkScheme } from './createDarkColors';

const breakpoints: Theme['breakpoints'] = {
  xs: {
    size: 360,
    offset: 0,
  },
  sm: {
    size: 768,
    offset: 6,
  },
  md: {
    size: 992,
    offset: 6,
  },
  lg: {
    size: 1440,
    offset: 25,
  },
  xl: {
    size: 1680,
    offset: 14,
  },
};

const size: Theme['size'] = {
  xs: 360,
  sm: 768,
  md: 992,
  lg: 1440,
  xl: 1680,
};

const zIndex: Theme['zIndex'] = {
  footer: 100,
  header: 200,
  dropdown: 300,
  overlay: 400,
  modal: 500,
  overlayInModal: 600,
};

const getSizesValues = pipe(
  // @ts-ignore
  mapObjIndexed(Rprop('size')),
  // @ts-ignore
  values,
  filter(Boolean),
);

export const createTheme = (config: ThemeConfig = {}): Theme => {
  const { a11yColors = false, darkColors = false } = config;
  const type: ThemeColorsVersion = a11yColors ? 'a11y' : 'default';
  const color = darkColors
    ? createDarkColors(getColorDarkScheme(type))
    : createLightColors(getColorLightScheme(type));

  // @ts-ignore
  const sizeValues = getSizesValues(breakpoints) as number[];

  const GUTTER = 5;
  const UNIT = 4;
  const unit = (times: number) => times * UNIT;
  unit.valueOf = () => UNIT;
  unit.toString = () => UNIT.toString();

  const spacing: Theme['spacing'] = {
    unit,
    gutter: GUTTER,
  };

  return {
    animation: {
      easing: {},
      duration: {},
    },
    breakpoints,
    color,
    lightColor: createLightColors(getColorLightScheme(type)),
    darkColor: createDarkColors(getColorDarkScheme(type)),
    isHighContrastMode: a11yColors,
    isDarkMode: darkColors,
    media: {
      between: (s1, s2) => {
        const number1 = isNumber(s1) ? s1 : s1.size;
        const number2 = isNumber(s2) ? s2 : s2.size;

        assert(sizeValues.includes(number1), `[theme.media] Unrecognized size value: ${number1}`);
        assert(sizeValues.includes(number2), `[theme.media] Unrecognized size value: ${number2}`);

        return `@media (min-width: ${number1}px) and (max-width: ${number2 - 1}px)`;
      },
      greaterThan: (s) => {
        const number = isNumber(s) ? s : s.size;

        assert(sizeValues.includes(number), `[theme.media] Unrecognized size value: ${number}`);
        return `@media (min-width: ${number}px)`;
      },
      lessThan: (s) => {
        const number = isNumber(s) ? s : s.size;

        assert(sizeValues.includes(number), `[theme.media] Unrecognized size value: ${number}`);
        return `@media (max-width: ${number - 1}px)`;
      },
    },
    size: deprecate('theme.size, please use theme.breakpoint instead.')(size),
    spacing,
    zIndex,
  };
};
