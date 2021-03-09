export type MediaQuery = string;
/** Number of pixels */
export type ThemeConfig = {
  a11yColors?: boolean;
};
type Unit = {
  (times: number): number;
  toString: () => string;
  valueOf: () => number;
};
export type RawColor = {
  // BRAND
  brandBlue: '#00C8F5';
  brandGreen: '#D2F500';
  brandPink: '#FF2B83';
  brandTurquoise: '#00F0E1';

  // COMPLEMENTARY BRAND COLOURS
  complementaryBlue1: '#385E9D';
  complementaryBlue2: '#131F4F';
  complementaryGreen1: '#3A913F';
  complementaryGreen2: '#023C00';
  complementaryPink1: '#AC135A';
  complementaryPink2: '#78013A';
  complementaryTurquoise1: '#009195';
  complementaryTurquoise2: '#01424C';

  // GRAYSCALE PALETTE
  black: '#000000';
  gray0: '#282823';
  gray1: '#4B4B46';
  gray2: '#6E6E69';
  gray3: '#A0A09B';
  gray4: '#BCBCB6';
  /** @deprecated */ gray5: '#D7D7D2';
  gray6: '#EBEBE8';
  gray7: '#F5F5F5';
  white: '#FFFFFF';

  // FUNCTIONAL COLOURS FOR PRODUCT DEVELOPMENT
  cta: '#0046FF';
  ctaHover: '#003BD9';
  ctaPressed: '#0030B2';
  positive: '#00D200';
  negative: '#FF1900';
  negativeHover: '#D90E00';
  negativePressed: '#B20300';
  index: '#FFCF00';

  // ACCESSIBLE FUNCTIONAL COLORS
  a11yCta: '#0046FF';
  a11yCtaPressed: '#003BD9';
  a11yPositive: '#008A00';
  a11yNegative: '#AC135A';
  a11yNegativePressed: '#78013A';
  a11yIndex: '#DFC700';
};

type NumberOrObjectWithNumber = number | { size: number };

type RawColors = RawColor[keyof RawColor];

export type ThemeColorsVersion = 'all' | 'default' | 'a11y';

type ChangeableColor<
  DefaultColor extends RawColors,
  A11yColor extends RawColors,
  Version extends ThemeColorsVersion
> = Version extends 'all'
  ? DefaultColor | A11yColor
  : Version extends 'default'
  ? DefaultColor
  : A11yColor;

export type ThemeColors<Version extends ThemeColorsVersion> = {
  /** white */
  backgroundInput: RawColor['white'];
  /** gray7 */
  background: RawColor['gray7'];
  /** black */
  backgroundBlack: RawColor['black'];
  /** complementaryBlue1 */
  barScaleActiveBar: RawColor['complementaryBlue1'];
  /** gray6 */
  barScaleInactiveBar: RawColor['gray6'];
  /** gray0 */
  text: RawColor['gray0'];
  /** white */
  textLight: RawColor['white'];
  /** gray2 */
  label: RawColor['gray2'];
  /** brandGreen */
  bulbBackground: RawColor['brandGreen'];
  /** cta */
  buy: ChangeableColor<RawColor['cta'], RawColor['a11yCta'], Version>;
  /** ctaPressed */
  buyActive: ChangeableColor<RawColor['ctaPressed'], RawColor['a11yCtaPressed'], Version>;
  /** white */
  buttonText: RawColor['white'];
  /** cta */
  borderActive: ChangeableColor<RawColor['cta'], RawColor['a11yCta'], Version>;
  /** white */
  bubbleBackground: RawColor['white'];
  /** gray4 */
  bubbleBorder: RawColor['gray4'];
  /** gray2 */
  bubbleSecondaryText: RawColor['gray2'];
  /** gray0 */
  tableBorder: RawColor['gray0'];
  /** negative */
  sell: ChangeableColor<RawColor['negative'], RawColor['a11yNegative'], Version>;
  /** negativePressed */
  sellActive: ChangeableColor<
    RawColor['negativePressed'],
    RawColor['a11yNegativePressed'],
    Version
  >;
  /** cta */
  cta: ChangeableColor<RawColor['cta'], RawColor['a11yCta'], Version>;
  /** creditsPiePrimary */
  creditsPiePrimary: RawColor['complementaryPink1'];
  /** creditsPieSecondary */
  creditsPieSecondary: RawColor['complementaryPink2'];
  /** otherMonthDateText */
  otherMonthDateText: RawColor['gray4'];
  /** positive */
  positive: ChangeableColor<RawColor['positive'], RawColor['a11yPositive'], Version>;
  /** negative */
  negative: ChangeableColor<RawColor['negative'], RawColor['a11yNegative'], Version>;
  /** negative or brandPink */
  negativeBlackBackground: ChangeableColor<RawColor['negative'], RawColor['brandPink'], Version>;
  /** index */
  warning: ChangeableColor<RawColor['index'], RawColor['a11yIndex'], Version>;
  /** white */
  card: RawColor['white'];
  /** gray6 */
  divider: RawColor['gray6'];
  /** gray4 */
  emptyState: RawColor['gray4'];
  /** gray2 */
  fundExchange: RawColor['gray2'];
  /** gray0 */
  separator: RawColor['gray0'];
  /** gray0 */
  backgroundDark: RawColor['gray0'];
  /** gray1 */
  searchBackground: RawColor['gray1'];
  /** gray3 */
  disabledText: RawColor['gray3'];
  /** gray6 */
  disabledBackground: RawColor['gray6'];
  /** white */
  buttonSecondaryBackground: RawColor['white'];
  /** gray2 */
  accordionText: RawColor['gray2'];
  /** 63 percent of gray2 */
  modalBackdrop: string;
  /** white */
  module: RawColor['white'];
  /** 3 percent of black */
  shadowCard: string;
  /** 16 percent of black */
  shadowModal: string;
  /** 5 percent of black */
  shadowInput: string;
  /** 5 percent of black */
  shadowSwitch: string;
  /** complementaryGreen1 */
  shareville: string;
  /** gray6 */
  skeleton: RawColor['gray6'];
  /** black */
  spinnerBlack: RawColor['black'];
  /** white */
  spinnerWhite: RawColor['white'];
  /** index */
  starRating: RawColor['index'];
  /** gray6 */
  starRatingOff: RawColor['gray6'];
  /** index */
  streamingBolt: RawColor['index'];
  /** gray0 */
  svgFill: RawColor['gray0'];
  /** gray2 */
  svgStroke: RawColor['gray2'];
  /** white */
  svgStokeLight: RawColor['white'];
  /** 10 percent of cta */
  switchReadOnlyTrackBg: string;
  /** gray7 */
  switchReadOnlyKnobBg: RawColor['gray7'];
  /** gray4 */
  inputBorder: RawColor['gray4'];
  /** gray1 */
  inputBorderHover: RawColor['gray1'];
  /** white */
  tableRowBackground: RawColor['white'];
  /** gray7 */
  tableRowHover: RawColor['gray7'];
  /** gray2 */
  datePickerWithinRangeBackground: string;
  /** gray2 */
  datePickerWithinRangeFade: string;
  /** negative */
  inputBorderError: RawColor['negative'];
  /** positive */
  inputBorderSuccess: RawColor['positive'];
  /** gray6 */
  flagBorder: RawColor['gray6'];
  /** white */
  selectOptionBackground: RawColor['white'];
  /** complementaryGreen1 */
  generationSavingsTimelineColor1: RawColor['complementaryGreen1'];
  /** complementaryPink1 */
  generationSavingsTimelineColor2: RawColor['complementaryPink1'];
  /** brandBlue */
  generationSavingsTimelineColor3: RawColor['brandBlue'];
  /** complementaryBlue1 */
  generationSavingsTimelineColor4: RawColor['complementaryBlue1'];
  /** brandPink */
  guidanceSelectionCardIcon: RawColor['brandPink'];
  /** gray6 */
  orderDepthBackground: RawColor['gray6'];
  /** gray5 */
  orderDepthDarkBackground: RawColor['gray5'];
  /** gray1 */
  orderAccountLabel: RawColor['gray1'];
  /** complementaryTurquoise1 */
  listItemBackgroundHover: string;
  /** complementaryBlue2 */
  loanRatesGraphColor2: RawColor['complementaryBlue2'];
  /** brandGreen */
  menuAccent1: RawColor['brandGreen'];
  /** brandTurquoise */
  menuAccent2: RawColor['brandTurquoise'];
  /** index */
  menuAccent3: RawColor['index'];
  /** brandPink */
  menuAccent4: RawColor['brandPink'];
  /** brandBlue */
  menuAccent5: RawColor['brandBlue'];
  /** gray5 */
  selectionCardBorder: RawColor['gray5'];
  /** gray2 */
  selectionCardText: RawColor['gray2'];
  /** cta */
  sliderColor: RawColor['cta'];
  /** brandGreen */
  sliderSecondary: RawColor['brandGreen'];
  /** gray6 */
  sliderDisabled: RawColor['gray6'];
  /** gray6 */
  sliderBackgroundColor: RawColor['gray6'];
  /** cta */
  statusFulfilledBackgroundColor: RawColor['cta'];
  /** white */
  statusFulfilledTextColor: RawColor['white'];
  /** white */
  sliderThumbBackground: RawColor['white'];
  /** gray6 */
  dateAvatarBackground1: RawColor['gray6'];
  /** gray7 */
  dateAvatarBackground2: RawColor['gray7'];
  /** gray2 */
  dateAvatarText1: RawColor['gray2'];
  /** gray0 */
  dateAvatarText2: RawColor['gray0'];
  /** index */
  transferPendingIconColor: ChangeableColor<RawColor['index'], RawColor['a11yIndex'], Version>;
  /** cta */
  timelineActive: ChangeableColor<RawColor['cta'], RawColor['a11yCta'], Version>;
  /** positive */
  timelineSuccess: ChangeableColor<RawColor['positive'], RawColor['a11yPositive'], Version>;
  /** index */
  timelineWarning: ChangeableColor<RawColor['index'], RawColor['a11yIndex'], Version>;
  /** negative */
  timelineFailure: ChangeableColor<RawColor['negative'], RawColor['a11yNegative'], Version>;
  /** gray4 */
  timelineNext: RawColor['gray4'];
  /** brankPink */
  transferProgressBar1: RawColor['brandPink'];
  /** positive */
  transferProgressBar2: ChangeableColor<RawColor['positive'], RawColor['a11yPositive'], Version>;
  /** gray5 */
  transferProgressBar3: RawColor['gray5'];
  /** gray1 */
  transferProgressBarText1: RawColor['gray1'];
  /** gray2 */
  transferProgressBarText2: RawColor['gray2'];
  /** 10 percent of complementaryBlue1 */
  transferStatusBannerBackground1: string;
  /** 10 percent of complementaryPink1 */
  transferStatusBannerBackground2: string;
  /** 10 percent of index */
  transferStatusBannerBackground3: string;
  /** complementaryBlue1 */
  transferStatusBannerText1: RawColor['complementaryBlue1'];
  /** complementaryPink1 */
  transferStatusBannerText2: RawColor['complementaryPink1'];
  /** gray0 */
  transferStatusBannerText3: RawColor['gray0'];
  /** gray0 */
  transferStatusBannerChevron: RawColor['gray0'];
  /** white */
  progressBarText: RawColor['white'];
  /** positive */
  progressBarDone: RawColor['positive'];
  /** positive */
  progressBarFailure: RawColor['negative'];
  /** index */
  progressBarWarning: RawColor['index'];
  /** cta */
  progressBarActive: RawColor['cta'];
  /** gray4 */
  progressBarNext: RawColor['gray4'];
  /** gray6 */
  indexFundsBackground: RawColor['gray6'];
  /** brandBlue */
  indexFundsNorwegianAccent: RawColor['brandBlue'];
  /** brandPink, brandBlue, complementaryBlue2, black, complementaryTurquoise1 */
  indexFundsFinnishAccent: string[];
  paletteMap: string[];
  palettePink: string[];
  paletteGreen: string[];
  paletteBlue: string[];
  paletteTurquoise: string[];
  paletteLineGraph: string[];
  /** gray6 */
  privateBankingBannerTitle: RawColor['gray6'];
  /** white */
  privateBankingBannerText: RawColor['white'];
  /** gray6 */
  privateBankingBannerBackground: RawColor['gray6'];
  /** @deprecated
   * gray3 */
  disabled: RawColor['gray3'];
  /** @deprecated
   * complementaryBlue2 */
  mapColor1: RawColor['complementaryBlue2'];
  /** @deprecated
   * complementaryBlue1 */
  mapColor2: RawColor['complementaryBlue1'];
  /** @deprecated
   * brandBlue */
  mapColor3: RawColor['brandBlue'];
  /** @deprecated
   * gray1 */
  mapColor4: RawColor['gray1'];
  /** @deprecated
   * gray3 */
  mapColor5: RawColor['gray3'];
  /** @deprecated
   * brandBlue */
  barChartColor1: RawColor['brandBlue'];
  /** @deprecated
   * complementaryBlue2 */
  barChartColor2: RawColor['complementaryBlue2'];
  /** @deprecated
   * complementaryBlue1 */
  barChartColor3: RawColor['complementaryBlue1'];
  /** @deprecated
   * complementaryGreen1 */
  barChartColor4: RawColor['complementaryGreen1'];
  /** @deprecated
   * complementaryPink1 */
  barChartColor5: RawColor['complementaryPink1'];
  /** @deprecated
   * index */
  barChartColor6: RawColor['index'];
  /** @deprecated
   * complementaryGreen1 */
  barChartColor7: RawColor['complementaryGreen1'];
  /** @deprecated
   * brandGreen */
  columnChartColor1: RawColor['brandGreen'];
  /** @deprecated
   * complementaryGreen2 */
  columnChartColor2: RawColor['complementaryGreen2'];
  /** @deprecated
   * complementaryGreen1 */
  columnChartColor3: RawColor['complementaryGreen1'];
  /** @deprecated
   * complementaryTurquoise1 */
  columnChartColor4: RawColor['complementaryTurquoise1'];
  /** @deprecated
   * complementaryTurquoise2 */
  columnChartColor5: RawColor['complementaryTurquoise2'];
  /** @deprecated
   * complementaryPink2 */
  pieChartColor1: RawColor['complementaryPink2'];
  /** @deprecated
   * brandPink */
  pieChartColor2: RawColor['brandPink'];
  /** @deprecated
   * gray4 */
  pieChartColor3: RawColor['gray4'];
  /** @deprecated
   * complementaryPink1 */
  indicatorPillColor1: RawColor['complementaryPink1'];
  /** @deprecated
   * complementaryTurquoise1 */
  indicatorPillColor2: RawColor['complementaryTurquoise1'];
  /** @deprecated
   * complementaryGreen1 */
  indicatorPillColor3: RawColor['complementaryGreen1'];
  /** @deprecated
   * complementaryBlue1 */
  indicatorPillColor4: RawColor['complementaryBlue1'];
  /** @deprecated
   * brandPink */
  indicatorPillColor5: RawColor['brandPink'];
  /** @deprecated
   * brandTurquoise */
  indicatorPillColor6: RawColor['brandTurquoise'];
  /** @deprecated
   * brandBlue */
  indicatorPillColor7: RawColor['brandBlue'];
  /** @deprecated
   * complementaryGreen2 */
  indicatorPillColor8: RawColor['complementaryGreen2'];
  /** @deprecated
   * complementaryBlue2 */
  indicatorPillColor9: RawColor['complementaryBlue2'];
  /** @deprecated
   * complementaryPink2 */
  indicatorPillColor10: RawColor['complementaryPink2'];
};

export type ColorSets = {
  /** Semantic names for the colors */
  color: ThemeColors<'all'>;
  colorDefault: ThemeColors<'default'>;
  colorA11y: ThemeColors<'a11y'>;
};

export type Theme = ColorSets & {
  spacing: {
    /**
     * One unit, all spacing should be handled with this
     * @example
     * margin: ${({ theme }) => theme.spacing.unit * 4}px;
     * @example
     * margin: ${({ theme }) => theme.spacing.unit(4)}px;
     */
    unit: Unit;
    /** Number of units in gutter */
    gutter: 5;
  };

  breakpoints: {
    /** Tablet, mobile size: 760; offset: 5; */
    sm: Record<'offset' | 'size', number>;
    /** Tablet, desktop size: 976; offset: 5; */
    md: Record<'offset' | 'size', number>;
    /** Desktop size: 1280; offset: 5; */
    lg: Record<'offset' | 'size', number>;
    /** Desktop big size: 1600; offset: 5; */
    xl: Record<'offset' | 'size', number>;
  };

  size: {
    /** Mobile */
    xs: 360;
    /** Tablet, mobile */
    sm: 760;
    /** Tablet, desktop */
    md: 976;
    /** Desktop */
    lg: 1280;
    /** Desktop big */
    xl: 1600;
  };

  media: {
    /**
     * @param size One of theme.breakpoints
     * @example
     * styled.div`${({ theme }) => theme.media.lessThan(theme.breakpoints.md)} {}`
     */
    lessThan: (size: NumberOrObjectWithNumber) => MediaQuery;
    /**
     * @param size One of theme.breakpoints
     * @example
     * styled.div`${({ theme }) => theme.media.greaterThan(theme.breakpoints.lg)} {}`
     */
    greaterThan: (size: NumberOrObjectWithNumber) => MediaQuery;
    /**
     * @param size1 One of theme.breakpoints
     * @param size2 One of theme.breakpoints
     * @example
     * styled.div`${({ theme }) => theme.media.between(theme.breakpoints.md, theme.breakpoints.lg)} {}`
     */
    between: (size1: NumberOrObjectWithNumber, size2: NumberOrObjectWithNumber) => MediaQuery;
  };
  /** Some units for animation */
  animation: {
    duration: {};
    easing: {};
  };
  zIndex: {
    footer: 100;
    header: 200;
    dropdown: 300;
    overlay: 400;
    modal: 500;
    overlayInModal: 600;
  };
  isHighContrastMode: boolean;
};
