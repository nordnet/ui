import { A11yTheme, LightTheme, DarkTheme } from '@nordnet/design-tokens';

export type MediaQuery = string;
/** Number of pixels */
export type ThemeConfig = {
  a11yColors?: boolean;
  darkColors?: boolean;
  tokensTheme?: 'dark' | 'light' | 'a11y';
};
type Unit = {
  (times: number): number;
  toString: () => string;
  valueOf: () => number;
};

export type BORDER_RADIUS = 2 | 4 | 6 | 8 | 20 | 100;
type BorderRadius = {
  (radius: BORDER_RADIUS): string;
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

  // FUNCTION
  functionBlue: string;
  functionRed: string;
  functionGreen: string;
  functionYellow: string;

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
   * brand gray900
   */
  actionModalSharevilleIllustration: string;
  /**
   * brand green 450
   */
  actionModalSharevilleIllustrationSecondary: string;
  /**
   * blue 400
   */
  actionModalLink: string;
  /**
   * gray 800
   */
  actionModalBackground: string;
  /**
   * black
   */
  accountBadgeBackground: string;
  /**
   * white
   */
  accountBadgeText: string;
  /**
   * teal500
   */
  allocationBars: string;
  /**
   * blue700
   */
  allocationBarDarkBlue: string;
  /**
   * blue400
   */
  allocationBarLightBlue: string;
  /**
   * blue500
   */
  badgeBackground: string;
  /**
   * green500
   */
  badgeBackgroundPositive: string;
  /**
   * yellow400
   */
  badgeBackgroundWarning: string;
  /**
   * red500
   */
  badgeBackgroundNegative: string;
  /**
   * white
   */
  badgeIconColor: string;
  /**
   * white
   */
  badgeTextColor: string;
  /**
   * white
   */
  tooltipBadgeBackground: string;
  /**
   * gray400
   */
  tooltipBadgeBorder: string;
  /**
   * gray800
   */
  tooltipBadgeText: string;
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
  /** red600 */
  buttonBackgroundNegative: string;
  /** red700 */
  buttonBackgroundNegativeHover: string;
  /** red800 */
  buttonBackgroundNegativeActive: string;
  /** red600 */
  pillButtonBackgroundNegative: string;
  /** red700 */
  pillButtonBackgroundNegativeHover: string;
  /** red800 */
  pillButtonBackgroundNegativeActive: string;
  /** blue600 */
  pillButtonHoverSecondary: string;
  /** blue700 */
  pillButtonActiveSecondary: string;
  /** light gray800 dark white */
  pillButtonTertiary: string;
  /** light gray100 dark gray700 */
  pillButtonBackgroundTertiary: string;
  /**
   * gray500
   */
  buttonTextDisabled: string;
  /**
   * white
   */
  buttonSpinner: string;
  /**
   * blue500
   */
  buttonSpinnerSecondary: string;
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
  /** gray800 */
  persistedTooltipBackground: string;
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
  /** gray800 */
  bubbleBackgroundInverted: string;
  /** gray700 */
  bubbleBorderInverted: string;
  /** brandGreen */
  bulbBackground: string;
  /** gray0 */
  bulbForeground: string;
  /** blue300 */
  bulletLightBlue: string;
  /** white */
  buttonSecondaryBackground: string;
  /** white */
  buttonText: string;
  /** blue500 */
  buttonTextSecondary: string;
  /** gray0 */
  buttonTextLight: string;
  /** red500 */
  buttonTextNegative: string;
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
  /** blue500 */
  quickFilterSelectedText: string;
  /** gray400 */
  quickFilterFocusOutline: string;
  /** blue500 */
  quickFilterFocusSelectedOutline: string;
  quickFilterSustainabilityColor: string;
  quickFilterSustainabilityBackground: string;
  quickFilterSustainabilityHoverColor: string;
  quickFilterBrandActiveColor: string;
  quickFilterBrandHoverColor: string;
  quickFilterBrandActiveBackground: string;
  quickFilterBrandFocusBorder: string;
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
  /** light: red600, dark: red500 */
  danger: string;
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
  /** light: gray400, dark: gray900 */
  disabledLabelBackground: string;
  /** gray3 */
  disabledText: string;

  /** white */
  discoveryTooltipPrimaryText: string;

  /** light: gray800, dark: white */
  dropDownButtonText: string;
  /** light: blue500, dark: blue400 */
  dropDownButtonTextHover: string;
  /** light: blue500, dark: blue400 */
  dropDownButtonTextActive: string;
  /** light: gray400, dark: gray600 */
  dropDownButtonTextDisabled: string;
  /** light: gray100, dark: gray700 */
  dropDownButtonBackground: string;
  /** light: gray100, dark: gray700 */
  dropDownButtonBackgroundHover: string;
  /** light: blue100, dark: blue800 */
  dropDownButtonBackgroundActive: string;
  /** light: gray200, dark: gray900 */
  dropDownButtonBackgroundDisabled: string;
  /** light: gray200, dark: gray800 */
  dropDownButtonBackgroundLoading: string;
  /** light: red500, dark: red500 */
  dropDownButtonBorderError: string;

  /** gray6 */
  divider: string;
  /** gray4 */
  emptyState: string;
  /** gray500 */
  emptyStateCardText: string;
  /** red600 */
  error: string;

  /** light: blue100, dark: blue800 */
  featuredFundsBackground: string;
  /** light: blue200, dark: blue900 */
  featuredFundsSeparator: string;

  /** gray100 */
  feedbackModuleBackground: string;
  /** white */
  feedbackPageBackground: string;

  /** gray6 */
  flagBorder: string;
  /** gray2 */
  fundExchange: string;

  /** functionBlue */
  functionBlue: string;
  /** functionRed */
  functionRed: string;
  /** functionGreen */
  functionGreen: string;
  /** functionYellow */
  functionYellow: string;

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
  /** grey400 */
  graphCrosshair: string;
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
  /** blue500 */
  iconButtonHover: string;
  /** blue600 */
  iconButtonPressed: string;
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
  /** light: green600, dark: green500 */
  inputBorderSuccess: string;
  /** gray100 */
  inputHover: string;
  /** complementaryBlue2 */
  investmentPredictionGraphBlue: string;
  /** complementaryGreen2 */
  investmentPredictionGraphGreen: string;
  /** complementaryPink1 */
  investmentPredictionGraphPink: string;
  /** complementaryTurquoise2 */
  investmentPredictionGraphTurquoise: string;
  /** gray600 */
  label: string;
  /** light: blue100, dark: blue800 */
  labelBackgroundBlue: string;
  /** light: green100, dark: green800 */
  labelBackgroundGreen: string;
  /** light: pink100, dark: pink900 */
  labelBackgroundPink: string;
  /** light: teal100, dark: teal800 */
  labelBackgroundTeal: string;
  /** light: yellow200, dark: yellow900 */
  labelBackgroundYellow: string;
  /** light: blue500, dark: blue400 */
  labelTextBlue: string;
  /** light: green700, dark: green450 */
  labelTextGreen: string;
  /** light: pink600, dark: pink500 */
  labelTextPink: string;
  /** light: teal600, dark: teal400 */
  labelTextTeal: string;
  /** light: yellow800, dark: yellow400 */
  labelTextYellow: string;
  /** complementaryTurquoise1 */
  lineScaleValueColor: string;
  /** complementaryTurquoise1 */
  listItemBackgroundHover: string;
  /** light: gray300, dark: gray700  */
  listSelectionCardBorder: string;
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
  /** green600, pink600, blue500, teal600 */
  newsLabelTextColors: string[];
  /** green100, pink100, blue100, teal100 */
  newsLabelBackgroundColors: string[];
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
  /** gray800 */
  promotionBannerTitle: string;
  /** gray600 */
  promotionBannerDescription: string;
  /** green500 */
  positiveBlackBackground: string;
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
  /**
   * blue500
   */
  linkHover: string;
  /**
   * blue500
   */
  linkPressed: string;
  /** gray6 */
  privateBankingBannerBackground: string;
  /** white */
  privateBankingBannerText: string;
  /** gray6 */
  privateBankingBannerTitle: string;
  /** cta */
  progressBarActive: string;
  /** green500 */
  progressBarDone: string;
  /** red500 */
  progressBarFailure: string;
  /** gray4 */
  progressBarNext: string;
  /** white */
  progressBarText: string;
  /** index */
  progressBarWarning: string;
  /** gray100 */
  pillBackground: string;
  /** savings forecast drawer colors */
  savingsForecastExpected: string;
  savingsForecastNormal: string;
  savingsForecastPotential: string;
  /** gray1 */
  searchBackground: string;
  /** gray1 */
  searchText: string;
  /** gray5 */
  selectionCardBorder: string;
  /** gray100 */
  segmentedControlBackground: string;
  /** white */
  segmentedControlBackgroundSelected: string;
  /** gray100 */
  segmentedControlBorder: string;
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
  /** gray200 */
  separatorFullWidth: string;
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
  /** gray500 */
  sharevilleDeletedContent: string;
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
  sliderKnobBackground: string;
  /** black */
  spinnerBlack: string;
  /** white */
  spinnerWhite: string;
  /** index */
  starRating: string;
  starRatingBlue: string;
  /** gray6 */
  starRatingOff: string;
  starRatingBlueOff: string;
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
  /** toggle colors */
  toggleTrackEnabledOnBg: string;
  toggleTrackEnabledOffBg: string;
  toggleTrackDisabledOnBg: string;
  toggleTrackDisabledOffBg: string;
  toggleKnobEnabledOnBg: string;
  toggleKnobEnabledOffBg: string;
  toggleKnobDisabledOnBg: string;
  toggleKnobDisabledOffBg: string;
  /** gray0 */
  tableBorder: string;
  /** white */
  tableRowBackground: string;
  /** gray7 */
  tableRowHover: string;
  /** blue100 */
  tableEmphasis: string;
  /** gray600 */
  tabTitle: string;
  /** gray800 */
  tabTitleActive: string;
  /** teal100 */
  newBadgeLabelBackground: string;
  /** teal600 */
  newBadgeLabelText: string;
  /** gray0 */
  text: string;
  /** white */
  textLight: string;
  /** cta */
  timelineActive: string;
  /** red500 */
  timelineFailure: string;
  /** gray4 */
  timelineNext: string;
  /** green500 */
  timelineSuccess: string;
  /** index */
  timelineWarning: string;
  /** light: gray600, dark: gray400 */
  transferFlowText: string;
  /** light: yellow200, dark: yellow900 */
  transferLabelBackground: string;
  /** light: yellow800, dark: yellow400 */
  transferLabelText: string;
  /** index */
  transferPendingIconColor: string;
  /** brandPink */
  transferProgressBar1: string;
  /** green500 */
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
  /** gray500 */
  sfdrArticle6: string;
  /** white */
  sfdrArticle6Text: string;
  /** SFDR Article 8 */
  sfdrArticle8: string;
  /** SFDR Article 9 */
  sfdrArticle9: string;
  /** pink100 */
  popularBadgeBackground: string;
  /** pink */
  popularBadgeText: string;
  /** gray800 */
  periodScrollButtonBackground: string;
  /** gray100 */
  periodScrollButtonIcon: string;
  /** gray200 */
  technicalAnalysisPlotBands: string;
  /** blue500 */
  technicalAnalysisPrimaryLine: string;
  /** pink600 */
  technicalAnalysisSecondaryLine: string;
  /** blue300 */
  technicalAnalysisPrimaryBar: string;
  /** pink300 */
  technicalAnalysisSecondaryBar: string;
  /** black */
  technicalAnalysisSingleLine: string;
  /** Join Shareville Illustration */
  joinSharevilleIllustration: string;
  /** Join Shareville Badge */
  joinSharevilleBadge: string;
  /** Join Shareville Banner */
  joinSharevilleBanner: string;
  /** Monthly Savings Transfer Type Inactive */
  monthlySavingsTransferTypeInactive: string;
  /** day select input inactive */
  daySelectInputTextInactive: string;
  /** day select day active / hover */
  daySelectActiveText: string;
  /** day select day inactive */
  daySelectInactiveText: string;
  /** remove instrument added */
  removeInstrumentText: string;
  /** background for toaster pop up */
  searchPopupBackground: string;
  /** MS table row divider */
  monthlySavingsTableRowDivider: string;
  /** illustration background blue */
  illustrationBackgroundBlue: string;
  /** border for narrow cards in transfer info modal */
  narrowCardBorder: string;
  /** existing monthly deposits table row divider */
  existingMonthlyDepositsDivider: string;
  /** visited instrument assorted colors */
  visitedInstrumentsInstrumentBorder: string;
  visitedInstrumentsEmptyStateColor: string;
  visitedInstrumentsInstrumentBackground: string;
  visitedInstrumentsInstrumentColorLoading: string;
  visitedInstrumentsInstrumentColorError: string;
  visitedInstrumentsPositiveFont: string;
  visitedInstrumentsPositiveFill: string;
  visitedInstrumentsNegativeFont: string;
  visitedInstrumentsNegativeFill: string;
  /** progress indicator colors */
  progressIndicatorBackground: string;
  progressIndicatorBarEmpty: string;
  progressIndicatorBar: string;
  progressIndicatorSvgHover: string;

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
  /** blue100 */
  actionBackgroundWeak: string;
  /** blue500 */
  actionBorderDefault: string;
  pageHeaderBackground: string;
  notFoundColor: string;
  notFoundFill: string;
  headerCardBorder: string;
  /** light gray200 dark gray700 */
  tagChipBorder: string;
};

export type ColorSets = {
  /** Semantic names for the colors */
  color: ThemeColors;
};

export type Theme = {
  /** @deprecated use colorTokens instead */
  color: ThemeColors;
  colorTokens: LightTheme['color'] | DarkTheme['color'] | A11yTheme['color'];
  lightColor: ThemeColors;
  darkColor: ThemeColors;
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
    /** Tablet, mobile size: 360; offset: 5; */
    xs: Record<'offset' | 'size', number>;
    /** Tablet, mobile size: 768; offset: 5; */
    sm: Record<'offset' | 'size', number>;
    /** Tablet, desktop size: 992; offset: 5; */
    md: Record<'offset' | 'size', number>;
    /** Desktop size: 1280; offset: 5; */
    lg: Record<'offset' | 'size', number>;
    /** Desktop big size: 1680; offset: 5; */
    xl: Record<'offset' | 'size', number>;
  };

  size: {
    /** Mobile */
    xs: 360;
    /** Tablet, mobile */
    sm: 768;
    /** Tablet, desktop */
    md: 992;
    /** Desktop */
    lg: 1280;
    /** Desktop big */
    xl: 1680;
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
  borderRadius: BorderRadius;
};
