export type MediaQuery = string;
/** Number of pixels */
export type ThemeConfig = {
  a11yColors?: boolean;
  darkColors?: boolean;
};
type Unit = {
  (times: number): number;
  toString: () => string;
  valueOf: () => number;
};

export type RawColor = {
  // BRAND
  brandBlue: string;
  brandGreen: string;
  brandPink: string;
  brandTurquoise: string;

  // COMPLEMENTARY BRAND COLOURS
  complementaryBlue1: string;
  complementaryBlue2: string;
  complementaryGreen1: string;
  complementaryGreen2: string;
  complementaryPink1: string;
  complementaryPink2: string;
  complementaryTurquoise1: string;
  complementaryTurquoise2: string;

  // GRAYSCALE PALETTE OLD
  gray0: string;
  gray1: string;
  gray2: string;
  gray3: string;
  gray4: string;
  gray5: string;
  gray6: string;
  gray7: string;

  // GRAY
  white: string;
  gray100: string;
  gray200: string;
  gray300: string;
  gray400: string;
  gray500: string;
  gray600: string;
  gray700: string;
  gray800: string;
  gray900: string;
  black: string;

  // BLUE
  blue100: string;
  blue200: string;
  blue300: string;
  blue400: string;
  blue450: string;
  blue500: string;
  blue600: string;
  blue700: string;
  blue800: string;
  blue900: string;

  // PINK
  pink100: string;
  pink200: string;
  pink300: string;
  pink400: string;
  pink500: string;
  pink600: string;
  pink700: string;
  pink800: string;
  pink900: string;

  // GREEN
  green100: string;
  green200: string;
  green300: string;
  green400: string;
  green450: string;
  green500: string;
  green600: string;
  green700: string;
  green800: string;
  green900: string;

  // TEAL
  teal100: string;
  teal200: string;
  teal300: string;
  teal400: string;
  teal500: string;
  teal600: string;
  teal700: string;
  teal800: string;
  teal900: string;

  // YELLOW
  yellow100: string;
  yellow200: string;
  yellow300: string;
  yellow400: string;
  yellow500: string;
  yellow600: string;
  yellow700: string;
  yellow800: string;
  yellow900: string;

  // RED
  red100: string;
  red200: string;
  red300: string;
  red400: string;
  red500: string;
  red600: string;
  red700: string;
  red800: string;
  red900: string;

  // FUNCTIONAL COLOURS FOR PRODUCT DEVELOPMENT
  cta: string;
  ctaHover: string;
  ctaPressed: string;
  positive: string;
  negative: string;
  negativeHover: string;
  negativePressed: string;
  sfdrArticle8: string;
  sfdrArticle9: string;
  index: string;
  graphPurple: string;
  graphOrange: string;
};

export type RawColors = RawColor & {
  palettes: {
    pink: string[];
    green: string[];
    blue: string[];
    turquoise: string[];
    gray: string[];
  };
};

type NumberOrObjectWithNumber = number | { size: number };

export type ThemeColorsVersion = 'default' | 'a11y' | 'dark';

export type ThemeColors = {
  /**
   * black
   */
  accountBadgeBackground: string;
  /**
   * white
   */
  accountBadgeText: string;
  /**
   * blue500
   */
  badgeBackground: string;
  /**
   * white
   */
  badgeTextColor: string;
  /**
   * blue500
   */
  buttonBackgroundPrimary: string;
  /**
   * blue600
   */
  buttonBackgroundHoverPrimary: string;
  /**
   * blue700
   */
  buttonBackgroundActivePrimary: string;
  /**
   * gray200
   */
  buttonBackgroundDisabled: string;
  /**
   * gray500
   */
  buttonTextDisabled: string;
  /**
   * blue500
   */
  buttonBorderSecondary: string;
  /**
   * blue600
   */
  buttonHoverSecondary: string;
  /**
   * blue700
   */
  buttonActiveSecondary: string;
  /** gray2 */
  accordionText: string;
  /** gray100 */
  background: string;
  /** black */
  backgroundBlack: string;
  /** gray0 */
  backgroundDark: string;
  /** complementaryBlue1 */
  barGraphHighlight: string;
  /** complementaryBlue1 */
  barScaleActiveBar: string;
  /** gray6 */
  barScaleInactiveBar: string;
  /** blue500 */
  borderActive: string;
  /** white */
  bubbleBackground: string;
  /** gray4 */
  bubbleBorder: string;
  /** gray2 */
  bubbleSecondaryText: string;
  /** brandGreen */
  bulbBackground: string;
  /** gray0 */
  bulbForeground: string;
  /** white */
  buttonSecondaryBackground: string;
  /** white */
  buttonText: string;
  /** blue500 */
  buttonTextSecondary: string;
  /** gray0 */
  buttonTextLight: string;
  /** blue500 */
  buy: string;
  /** blue700 */
  buyActive: string;
  /** blue500 */
  buyHover: string;
  /** gray100 */
  quickFilterBackground: string;
  /** blue100 */
  quickFilterSelectedBackground: string;
  /** gray800 */
  quickFilterText: string;
  /** blue400 */
  quickFilterSelectedText: string;
  /** white */
  card: string;
  /** creditsPiePrimary */
  creditsPiePrimary: string;
  /** creditsPieSecondary */
  creditsPieSecondary: string;
  /** blue500 */
  cta: string;
  /** blue600 */
  ctaHover: string;
  /** blue800 */
  darkmodeIllustrationBackground: string;
  /** blue400 */
  darkmodeIllustrationLightBulb: string;
  /** gray6 */
  dateAvatarBackground1: string;
  /** gray7 */
  dateAvatarBackground2: string;
  /** gray2 */
  dateAvatarText1: string;
  /** gray0 */
  dateAvatarText2: string;

  /** gray200 */
  dateBadgeUpperBackground: string;
  /** gray100 */
  dateBadgeLowerBackground: string;

  /** gray2 */
  datePickerWithinRangeBackground: string;
  /** gray2 */
  datePickerWithinRangeFade: string;
  /** gray6 */
  disabledBackground: string;
  /** gray3 */
  disabledText: string;
  /** gray6 */
  divider: string;
  /** gray4 */
  emptyState: string;
  /** gray6 */
  flagBorder: string;
  /** gray2 */
  fundExchange: string;
  /** complementaryGreen1 */
  generationSavingsTimelineColor1: string;
  /** complementaryPink1 */
  generationSavingsTimelineColor2: string;
  /** brandBlue */
  generationSavingsTimelineColor3: string;
  /** complementaryBlue1 */
  generationSavingsTimelineColor4: string;
  /** gray100 */
  keyFiguresBackground: string;
  /** gray5 */
  graphVolume: string;
  /** gray4 */
  graphVolumeHover: string;
  /** brandPink */
  guidanceSelectionCardIcon: string;
  /** 10 percent of cta */
  iconBackdropCta: string;
  /** gray2 */
  icon: string;
  /** gray6 */
  indexFundsBackground: string;
  /** brandPink, brandBlue, complementaryBlue2, black, complementaryTurquoise1 */
  indexFundsFinnishAccent: string[];
  /** brandBlue */
  indexFundsNorwegianAccent: string;
  /** white */
  inputBackground: string;
  /** gray400 */
  inputBorder: string;
  /** pink600 */
  inputBorderError: string;
  /** gray700 */
  inputBorderHover: string;
  /** positive */
  inputBorderSuccess: string;
  /** gray7 */
  inputHover: string;
  /** complementaryBlue2 */
  investmentPredictionGraphBlue: string;
  /** complementaryGreen2 */
  investmentPredictionGraphGreen: string;
  /** complementaryPink1 */
  investmentPredictionGraphPink: string;
  /** complementaryTurquoise2 */
  investmentPredictionGraphTurquoise: string;
  /** gray2 */
  label: string;
  /** complementaryTurquoise1 */
  lineScaleValueColor: string;
  /** complementaryTurquoise1 */
  listItemBackgroundHover: string;
  /** complementaryBlue2 */
  loanRatesGraphColor2: string;
  /** brandTurquoise */
  marketingCardMortageHighlight: string;
  /** brandGreen */
  menuAccent1: string;
  /** brandTurquoise */
  menuAccent2: string;
  /** index */
  menuAccent3: string;
  /** brandPink */
  menuAccent4: string;
  /** brandBlue */
  menuAccent5: string;
  /** white */
  menuText: string;
  /** gray4 */
  messageCentralFaqButtonBorder: string;
  /** gray5 */
  messageCentralFaqIcon: string;
  /** 63 percent of gray2 */
  modalBackdrop: string;
  /** white */
  module: string;
  /** negative */
  negative: string;
  /** negative or brandPink */
  negativeBlackBackground: string;
  /** brandBlue */
  onboardingAccentBlue: string;
  /** brandGreen */
  onboardingAccentGreen: string;
  /** brandPink */
  onboardingAccentPink: string;
  /** brandTurquoise */
  onboardingAccentTurquoise: string;
  /** gray1 */
  orderAccountLabel: string;
  /** gray6 */
  orderDepthBackground: string;
  /** gray5 */
  orderDepthDarkBackground: string;
  /** gray600 */
  orderPanelLabelColor: string;
  /** gray100 */
  orderPanelItemBackgroundHover: string;
  /** otherMonthDateText */
  otherMonthDateText: string;
  /** gray700 */
  pageWrapperDivider: string;
  paletteBlue: string[];
  paletteGreen: string[];
  paletteLineGraph: string[];
  paletteMap: string[];
  palettePink: string[];
  paletteTurquoise: string[];
  /** gray2 */
  placeholderText: string;
  /** positive */
  positive: string;
  /**
   * positive
   */
  infoBarBackgroundSuccess: string;
  /**
   * index
   */
  infoBarBackgroundWarning: string;
  /**
   * negative
   */
  infoBarBackgroundError: string;
  /**
   * white
   */
  infoBarBackgroundInfo: string;
  /**
   * green500
   */
  infoBarSuccess: string;
  /**
   * blue500
   */
  infoBarInfo: string;
  /**
   * pink600
   */
  infoBarError: string;
  /**
   * yellow400
   */
  infoBarWarning: string;
  /**
   * blue500
   */
  link: string;
  /** gray6 */
  privateBankingBannerBackground: string;
  /** white */
  privateBankingBannerText: string;
  /** gray6 */
  privateBankingBannerTitle: string;
  /** cta */
  progressBarActive: string;
  /** positive */
  progressBarDone: string;
  /** positive */
  progressBarFailure: string;
  /** gray4 */
  progressBarNext: string;
  /** white */
  progressBarText: string;
  /** index */
  progressBarWarning: string;
  /** gray1 */
  searchBackground: string;
  /** gray1 */
  searchText: string;
  /** gray5 */
  selectionCardBorder: string;
  /** gray7 */
  segmentedControlBackground: string;
  /** gray2 */
  selectionCardText: string;
  /** white */
  selectOptionBackground: string;
  /** pink600 */
  sell: string;
  /** pink700 */
  sellActive: string;
  /** gray0 */
  separator: string;
  /** 3 percent of black */
  shadowCard: string;
  /** 5 percent of black */
  shadowInput: string;
  /** 16 percent of black */
  shadowModal: string;
  /** 5 percent of black */
  shadowSwitch: string;
  /** complementaryGreen1 */
  shareville: string;
  /** gray6 */
  skeleton: string;
  /** gray6 */
  sliderBackgroundColor: string;
  /** cta */
  sliderColor: string;
  /** gray6 */
  sliderDisabled: string;
  /** brandGreen */
  sliderSecondary: string;
  /** white */
  sliderThumbBackground: string;
  /** black */
  spinnerBlack: string;
  /** white */
  spinnerWhite: string;
  /** index */
  starRating: string;
  /** gray6 */
  starRatingOff: string;
  /** cta */
  statusFulfilledBackgroundColor: string;
  /** white */
  statusFulfilledTextColor: string;
  /** index */
  streamingBolt: string;
  /** gray0 */
  svgFill: string;
  /** white */
  svgStokeLight: string;
  /** gray2 */
  svgStroke: string;
  /** gray7 */
  switchReadOnlyKnobBg: string;
  /** 10 percent of cta */
  switchReadOnlyTrackBg: string;
  /** gray0 */
  tableBorder: string;
  /** white */
  tableRowBackground: string;
  /** gray7 */
  tableRowHover: string;
  /** blue100 */
  tableEmphasis: string;
  /** gray0 */
  text: string;
  /** white */
  textLight: string;
  /** cta */
  timelineActive: string;
  /** negative */
  timelineFailure: string;
  /** gray4 */
  timelineNext: string;
  /** positive */
  timelineSuccess: string;
  /** index */
  timelineWarning: string;
  /** index */
  transferPendingIconColor: string;
  /** brandPink */
  transferProgressBar1: string;
  /** positive */
  transferProgressBar2: string;
  /** gray5 */
  transferProgressBar3: string;
  /** gray1 */
  transferProgressBarText1: string;
  /** gray2 */
  transferProgressBarText2: string;
  /** 10 percent of complementaryBlue1 */
  transferStatusBannerBackground1: string;
  /** 10 percent of complementaryPink1 */
  transferStatusBannerBackground2: string;
  /** 10 percent of index */
  transferStatusBannerBackground3: string;
  /** gray0 */
  transferStatusBannerChevron: string;
  /** complementaryBlue1 */
  transferStatusBannerText1: string;
  /** complementaryPink1 */
  transferStatusBannerText2: string;
  /** gray0 */
  transferStatusBannerText3: string;
  /** index */
  warning: string;
  /** blue700 */
  worldMapLand: string; // not yet in use
  /** gray800 */
  worldMapWater: string; // not yet in use
  /** SFDR Article 6 */
  sfdrArticle6: string;
  /** SFDR Article 8 */
  sfdrArticle8: string;
  /** SFDR Article 9 */
  sfdrArticle9: string;
  /** Join Shareville Illustration */
  joinSharevilleIllustration: string;
  /** Join Shareville Badge */
  joinSharevilleBadge: string;
  /** Join Shareville Banner */
  joinSharevilleBanner: string;
  /** @deprecated * gray3 */
  disabled: string;
  /** @deprecated * complementaryBlue2 */
  mapColor1: string;
  /** @deprecated * complementaryBlue1 */
  mapColor2: string;
  /** @deprecated * brandBlue */
  mapColor3: string;
  /** @deprecated * gray1 */
  mapColor4: string;
  /** @deprecated * gray3 */
  mapColor5: string;
  /** @deprecated * brandPink */
  pieChartColor2: string;
};

export type ColorSets = {
  /** Semantic names for the colors */
  color: ThemeColors;
};

export type Theme = {
  color: ThemeColors;
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
  isDarkMode: boolean;
};
