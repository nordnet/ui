import { filter, values, mapObjIndexed, pipe, prop as Rprop } from 'ramda';
import Color from 'color';
import { assert, isNumber, deprecate } from '../common/utils'; // eslint-disable-line import/no-unresolved
import { ThemeConfig, Theme, RawColor, ThemeColors, ThemeColorsVersion } from './theme.types';

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
  ctaHover: '#003BD9',
  ctaPressed: '#0030B2',
  positive: '#00D200',
  negative: '#FF1900',
  negativeHover: '#D90E00',
  negativePressed: '#B20300',
  index: '#FFCF00',

  // ACCESSIBLE FUNCTIONAL COLORS
  a11yCta: '#0046FF',
  a11yCtaPressed: '#003BD9',
  a11yPositive: '#008A00',
  a11yNegative: '#AC135A',
  a11yNegativePressed: '#78013A',
  a11yIndex: '#DFC700',
} as RawColor;

const breakpoints: Theme['breakpoints'] = {
  sm: {
    size: 760,
    offset: 5,
  },
  md: {
    size: 976,
    offset: 5,
  },
  lg: {
    size: 1280,
    offset: 5,
  },
  xl: {
    size: 1600,
    offset: 5,
  },
};

const size: Theme['size'] = {
  xs: 360,
  sm: 760,
  md: 976,
  lg: 1280,
  xl: 1600,
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

const createColors = (type: ThemeColorsVersion): ThemeColors<typeof type> => {
  const a11yColors = type === 'a11y';

  return {
    backgroundInput: rawColor.white,
    background: rawColor.gray7,
    backgroundBlack: rawColor.black,
    backgroundDark: rawColor.gray0,
    barScaleActiveBar: rawColor.complementaryBlue1,
    barScaleInactiveBar: rawColor.gray6,
    bubbleBackground: rawColor.white,
    bubbleBorder: rawColor.gray4,
    buttonSecondaryBackground: rawColor.white,
    buttonText: rawColor.white,
    buy: a11yColors ? rawColor.a11yCta : rawColor.cta,
    buyActive: a11yColors ? rawColor.a11yCtaPressed : rawColor.ctaPressed,
    borderActive: a11yColors ? rawColor.a11yCta : rawColor.cta,
    card: rawColor.white,
    cta: a11yColors ? rawColor.a11yCta : rawColor.cta,
    /** @deprecated  */ creditsPiePrimary: rawColor.complementaryPink1,
    /** @deprecated  */ creditsPieSecondary: rawColor.complementaryPink2,
    /** @deprecated  */ disabled: rawColor.gray3,
    disabledText: rawColor.gray3,
    disabledBackground: rawColor.gray6,
    divider: rawColor.gray6,
    label: rawColor.gray2,
    accordionText: rawColor.gray2,
    selectOptionBackground: rawColor.white,
    menuAccent1: rawColor.brandGreen,
    menuAccent2: rawColor.brandTurquoise,
    menuAccent3: rawColor.index,
    menuAccent4: rawColor.brandPink,
    menuAccent5: rawColor.brandBlue,
    mapColor1: rawColor.complementaryBlue2,
    mapColor2: rawColor.complementaryBlue1,
    mapColor3: rawColor.brandBlue,
    mapColor4: rawColor.gray1,
    mapColor5: rawColor.gray3,
    modalBackdrop: Color(rawColor.gray2)
      .alpha(0.63)
      .rgb()
      .string(),
    module: rawColor.white,
    negative: a11yColors ? rawColor.a11yNegative : rawColor.negative,
    negativeBlackBackground: a11yColors ? rawColor.brandPink : rawColor.negative,
    positive: a11yColors ? rawColor.a11yPositive : rawColor.positive,
    sell: a11yColors ? rawColor.a11yNegative : rawColor.negative,
    sellActive: a11yColors ? rawColor.a11yNegativePressed : rawColor.negativePressed,
    shadowCard: Color(rawColor.black)
      .alpha(0.03)
      .rgb()
      .string(),
    shadowModal: Color(rawColor.black)
      .alpha(0.16)
      .rgb()
      .string(),
    shadowInput: Color(rawColor.black)
      .alpha(0.03)
      .rgb()
      .string(),
    shadowSwitch: Color(rawColor.black)
      .alpha(0.05)
      .rgb()
      .string(),
    shareville: rawColor.complementaryGreen1,
    skeleton: rawColor.gray6,
    spinnerBlack: rawColor.black,
    spinnerWhite: rawColor.white,
    starRating: rawColor.index,
    starRatingOff: rawColor.gray6,
    streamingBolt: rawColor.index,
    svgFill: rawColor.gray0,
    svgStroke: rawColor.gray2,
    svgStokeLight: rawColor.white,
    text: rawColor.gray0,
    textLight: rawColor.white, // FIXME: to be removed later
    warning: a11yColors ? rawColor.a11yIndex : rawColor.index,
    inputBorder: rawColor.gray4,
    inputBorderHover: rawColor.gray1,
    flagBorder: rawColor.gray6,
    inputBorderError: rawColor.negative,
    inputBorderSuccess: rawColor.positive,
    generationSavingsTimelineColor1: rawColor.complementaryGreen1,
    generationSavingsTimelineColor2: rawColor.complementaryPink1,
    generationSavingsTimelineColor3: rawColor.brandBlue,
    generationSavingsTimelineColor4: rawColor.complementaryBlue1,
    orderDepthBackground: rawColor.gray6,
    orderDepthDarkBackground: rawColor.gray5,
    loanRatesGraphColor2: rawColor.complementaryBlue2,
    barChartColor1: rawColor.brandBlue,
    barChartColor2: rawColor.complementaryBlue2,
    barChartColor3: rawColor.complementaryBlue1,
    barChartColor4: rawColor.complementaryGreen1,
    barChartColor5: rawColor.complementaryPink1,
    barChartColor6: rawColor.index,
    barChartColor7: rawColor.complementaryGreen1,
    columnChartColor1: rawColor.brandGreen,
    columnChartColor2: rawColor.complementaryGreen2,
    columnChartColor3: rawColor.complementaryGreen1,
    columnChartColor4: rawColor.complementaryTurquoise1,
    columnChartColor5: rawColor.complementaryTurquoise2,
    pieChartColor1: rawColor.complementaryPink2,
    pieChartColor2: rawColor.brandPink,
    pieChartColor3: rawColor.gray4,
    pill1: rawColor.complementaryPink1,
    pill2: rawColor.complementaryTurquoise1,
    pill3: rawColor.complementaryGreen1,
    pill4: rawColor.complementaryBlue1,
    pill5: rawColor.brandPink,
    pill6: rawColor.brandTurquoise,
    pill7: rawColor.brandBlue,
    pill8: rawColor.complementaryGreen2,
    pill9: rawColor.complementaryBlue2,
    pill10: rawColor.complementaryPink2,
    indicatorPillColor1: rawColor.complementaryPink1,
    indicatorPillColor2: rawColor.complementaryTurquoise1,
    indicatorPillColor3: rawColor.complementaryGreen1,
    indicatorPillColor4: rawColor.complementaryBlue1,
    indicatorPillColor5: rawColor.brandPink,
    indicatorPillColor6: rawColor.brandTurquoise,
    indicatorPillColor7: rawColor.brandBlue,
    indicatorPillColor8: rawColor.complementaryGreen2,
    indicatorPillColor9: rawColor.complementaryBlue2,
    indicatorPillColor10: rawColor.complementaryPink2,
    sliderLeftColor: rawColor.brandGreen,
    sliderRightColor: rawColor.gray6,
    sliderThumbColor: rawColor.white,
    sliderThumbBackground: rawColor.gray4,
    sliderThumbBorder: rawColor.gray4,
    sliderThumbActive: rawColor.cta,
    dateAvatarBackground1: rawColor.gray6,
    dateAvatarBackground2: rawColor.gray7,
    dateAvatarText1: rawColor.gray2,
    dateAvatarText2: rawColor.gray0,
    transferPendingIconColor: a11yColors ? rawColor.a11yIndex : rawColor.index,
    timelineColor1: a11yColors ? rawColor.a11yCta : rawColor.cta,
    timelineColor2: a11yColors ? rawColor.a11yPositive : rawColor.positive,
    timelineColor3: a11yColors ? rawColor.a11yIndex : rawColor.index,
    timelineColor4: a11yColors ? rawColor.a11yNegative : rawColor.negative,
    timelineColor5: rawColor.gray4,
    transferProgressBar1: rawColor.brandPink,
    transferProgressBar2: a11yColors ? rawColor.a11yPositive : rawColor.positive,
    transferProgressBar3: rawColor.gray5,
    transferProgressBarText1: rawColor.gray1,
    transferProgressBarText2: rawColor.gray2,
    transferStatusBannerBackground1: Color(rawColor.complementaryBlue1)
      .alpha(0.1)
      .rgb()
      .string(),
    transferStatusBannerBackground2: Color(rawColor.complementaryPink1)
      .alpha(0.1)
      .rgb()
      .string(),
    transferStatusBannerBackground3: Color(rawColor.index)
      .alpha(0.1)
      .rgb()
      .string(),
    transferStatusBannerText1: rawColor.complementaryBlue1,
    transferStatusBannerText2: rawColor.complementaryPink1,
    transferStatusBannerText3: rawColor.gray0,
    transferStatusBannerChevron: rawColor.gray0,
    progressBarText: rawColor.white,
    progressBarDone: rawColor.positive,
    progressBarActive: rawColor.cta,
    progressBarNext: rawColor.gray4,
  };
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const createTheme = (config: ThemeConfig = {}): Theme => {
  const { a11yColors = false } = config;
  const type = a11yColors ? 'a11y' : 'default';

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
    color: createColors(type),
    colorDefault: createColors('default'),
    colorA11y: createColors('a11y'),
    isHighContrastMode: a11yColors,
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
    zIndex,
  };
  return theme;
};
