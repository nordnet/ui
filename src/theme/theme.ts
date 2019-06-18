import { filter, values, mapObjIndexed, pipe, prop as Rprop } from 'ramda';
import { assert, isNumber, deprecate } from '../common/utils'; // eslint-disable-line import/no-unresolved
import { ThemeConfig, Theme, RawColor } from './theme.types';

// Export from here for showing in story,
// but don't export from index.ts
export const rawColor = {
  // BRAND
  brandBlue: '#00C8F5',
  brandGreen: '#D2F500',
  brandPink: '#FF2B83',
  brandTurquoise: '#00F0E1',

  // COMPLEMENTARY BRAND COLOURS
  complementaryBlue1: '#385E9D',
  complementaryBlue2: '#131F4F',
  complementaryGreen1: '#3A913F',
  complementaryGreen2: '#023C00',
  complementaryPink1: '#AC135A',
  complementaryPink2: '#78013A',
  complementaryTurquoise1: '#009195',
  complementaryTurquoise2: '#01424C',

  // GRAYSCALE PALETTE
  black: '#000000',
  gray0: '#282823',
  gray1: '#4B4B46',
  gray2: '#6E6E69',
  gray3: '#A0A09B',
  gray4: '#BCBCB6',
  /** @deprecated  */ gray5: '#D7D7D2',
  gray6: '#EBEBE8',
  gray7: '#F5F5F5',
  white: '#FFFFFF',

  // FUNCTIONAL COLOURS FOR PRODUCT DEVELOPMENT
  cta: '#0046FF',
  positive: '#00D200',
  negative: '#FF1900',
  index: '#FFCF00',

  // ACCESSIBLE FUNCTIONAL COLORS
  a11yCta: '#2D67FF',
  a11yPositive: '#008A00',
  a11yNegative: '#E81700',
  a11yIndex: '#C15700',
} as RawColor;

const breakpoints: Theme['breakpoints'] = {
  xs: {
    offset: 3,
  },
  sm: {
    size: 768,
    offset: 6,
  },
  md: {
    size: 992,
    offset: 7,
  },
  lg: {
    size: 1440,
    offset: 24,
  },
  xl: {
    size: 1680,
    offset: 10,
  },
};

const size: Theme['size'] = {
  xs: 360,
  sm: 768,
  md: 992,
  lg: 1440,
  xl: 1680,
};

const getSizesValues = pipe(
  // @ts-ignore
  mapObjIndexed(Rprop('size')),
  // @ts-ignore
  values,
  filter(Boolean),
);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const createTheme = (config: ThemeConfig = {}): Theme => {
  const { a11yColors = false } = config;

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

  const theme: Theme = {
    animation: {
      easing: {},
      duration: {},
    },
    breakpoints,
    color: {
      background: rawColor.gray7,
      backgroundDark: rawColor.gray0,
      buttonSecondaryBackground: rawColor.white,
      buttonText: rawColor.white,
      buy: a11yColors ? rawColor.a11yCta : rawColor.cta,
      borderActive: a11yColors ? rawColor.a11yCta : rawColor.cta,
      card: rawColor.white,
      cta: a11yColors ? rawColor.a11yCta : rawColor.cta,
      /** @deprecated  */ disabled: rawColor.gray3,
      disabledText: rawColor.gray3,
      disabledBackground: rawColor.gray6,
      divider: rawColor.gray6,
      label: rawColor.gray2,
      module: rawColor.white,
      negative: a11yColors ? rawColor.a11yNegative : rawColor.negative,
      positive: a11yColors ? rawColor.a11yPositive : rawColor.positive,
      sell: a11yColors ? rawColor.a11yNegative : rawColor.negative,
      spinnerBlack: rawColor.black,
      spinnerWhite: rawColor.white,
      svgFill: rawColor.gray0,
      svgStroke: rawColor.gray2,
      text: rawColor.gray0,
      textLight: rawColor.white, // FIXME: to be removed later
      warning: a11yColors ? rawColor.a11yIndex : rawColor.index,
      inputBorder: rawColor.gray4,
      inputBorderHover: rawColor.gray1,
      flagBorder: rawColor.gray6,
    },
    media: {
      between: (s1, s2) => {
        const number1 = isNumber(s1) ? s1 : s1.size;
        const number2 = isNumber(s2) ? s2 : s2.size;

        assert(sizeValues.includes(number1), `[theme.media] Unrecognized size value: ${number1}`);
        assert(sizeValues.includes(number2), `[theme.media] Unrecognized size value: ${number2}`);

        return `@media (min-width: ${number1}px) and (max-width: ${number2 - 1}px)`;
      },
      greaterThan: s => {
        const number = isNumber(s) ? s : s.size;

        assert(sizeValues.includes(number), `[theme.media] Unrecognized size value: ${number}`);
        return `@media (min-width: ${number}px)`;
      },
      lessThan: s => {
        const number = isNumber(s) ? s : s.size;

        assert(sizeValues.includes(number), `[theme.media] Unrecognized size value: ${number}`);
        return `@media (max-width: ${number - 1}px)`;
      },
    },
    size: deprecate('theme.size, please use theme.breakpoint instead.')(size),
    spacing,
  };
  return theme;
};
