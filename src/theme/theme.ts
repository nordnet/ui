import { lightTheme, darkTheme, a11yTheme } from '@nordnet/design-tokens';

import { deprecate, isNumber } from '../common/utils';
import {
  BORDER_RADIUS,
  BreakpointDataOrNumber,
  Theme,
  CreateThemeConfig,
  ShadowTokens,
  MassagedShadowTokens,
} from './theme.types';
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
    size: 1280,
    offset: 6,
  },
  xl: {
    size: 1680,
    offset: 6,
  },
};

const size: Theme['size'] = {
  xs: 360,
  sm: 768,
  md: 992,
  lg: 1280,
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

const getTokens = (theme: CreateThemeConfig['tokensTheme']) => {
  if (theme === 'dark') return darkTheme;
  if (theme === 'a11y') return a11yTheme;
  return lightTheme;
};

const getColors = (theme: CreateThemeConfig['theme']) => {
  if (theme === 'dark') {
    return createDarkColors(getColorDarkScheme('default'));
  }
  if (theme === 'a11y') {
    createLightColors(getColorLightScheme('a11y'));
  }
  // light theme colors
  return createLightColors(getColorLightScheme('default'));
};

export function getChosenTheme({
  a11yColors,
  darkColors,
  tokensTheme,
  theme,
}: {
  a11yColors?: boolean;
  darkColors?: boolean;
  tokensTheme?: 'light' | 'dark' | 'a11y';
  theme?: 'light' | 'dark' | 'a11y';
}) {
  if (theme === 'dark' || tokensTheme === 'dark' || darkColors) {
    return 'dark';
  }

  if (theme === 'a11y' || tokensTheme === 'a11y' || a11yColors) {
    return 'a11y';
  }

  return 'light';
}

const massageShadowTokens = (shadowTokens: ShadowTokens) => {
  const shadows = Object.entries(shadowTokens).reduce((acc, [key, value]) => {
    acc[key] = Object.values(value).join(', ');
    return acc;
  }, {});

  return shadows as MassagedShadowTokens;
};

const getBreakpointNumber = (s: BreakpointDataOrNumber) => (isNumber(s) ? s : s.size);

export const createTheme = (config: CreateThemeConfig = {}): Theme => {
  const { a11yColors, darkColors, tokensTheme, theme, featureToggles = {} } = config;
  const chosenTheme = getChosenTheme({ a11yColors, darkColors, tokensTheme, theme });
  const color = getColors(chosenTheme);
  const tokens = getTokens(chosenTheme);

  const GUTTER = 5;
  const UNIT = 4;
  const unit = (times: number) => times * UNIT;
  unit.valueOf = () => UNIT;
  unit.toString = () => UNIT.toString();

  const spacing: Theme['spacing'] = {
    unit,
    gutter: GUTTER,
  };

  const RADIUS_XSMALL: BORDER_RADIUS = 2;
  const RADIUS_SMALL: BORDER_RADIUS = 4;
  const RADIUS_MEDIUM: BORDER_RADIUS = 8;
  const RADIUS_LARGE: BORDER_RADIUS = 20;
  const RADIUS_100: BORDER_RADIUS = 100;

  const borderRadius: Theme['borderRadius'] = (x) => `${x.toString()}px`;
  const borderRadius2 = `${RADIUS_XSMALL}px`;
  const borderRadius4 = `${RADIUS_SMALL}px`;
  const borderRadius8 = `${RADIUS_MEDIUM}px`;
  const borderRadius20 = `${RADIUS_LARGE}px`;
  const borderRadius100 = `${RADIUS_100}px`;

  return {
    animation: {
      easing: {},
      duration: {},
    },
    breakpoints,
    color,
    colorTokens: tokens.color,
    lightColor: getColors('light'),
    darkColor: getColors('dark'),
    shadow: massageShadowTokens(tokens.effect.shadow),
    isHighContrastMode: chosenTheme === 'a11y',
    isDarkMode: chosenTheme === 'dark',
    themeName: chosenTheme,
    media: {
      between: (s1, s2) => {
        const number1 = getBreakpointNumber(s1);
        const number2 = getBreakpointNumber(s2);

        return `@media (min-width: ${number1}px) and (max-width: ${number2 - 1}px)`;
      },
      greaterThan: (s) => {
        const number = getBreakpointNumber(s);

        return `@media (min-width: ${number}px)`;
      },
      lessThan: (s) => {
        const number = getBreakpointNumber(s);

        return `@media (max-width: ${number - 1}px)`;
      },
    },
    size: deprecate('theme.size, please use theme.breakpoint instead.')(size),
    spacing,
    zIndex,
    borderRadius,
    borderRadius2,
    borderRadius4,
    borderRadius8,
    borderRadius20,
    borderRadius100,
    isFeatureEnabled: (feature) => featureToggles?.[feature] === true,
  };
};
