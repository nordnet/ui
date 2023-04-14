import Color from 'color';
// import accessabilityColors from './accessabilityColors';
import defaultColors from './defaultColors';
import { RawColors, ThemeColors, ThemeColorsVersion } from './theme.types';

export const getColorDarkScheme = (scheme: ThemeColorsVersion) => {
  switch (scheme) {
    // case 'a11y': return accessabilityColors;
    default:
      return defaultColors;
  }
};
export const createDarkColors = (rawColor: RawColors): ThemeColors => {
  const lineColors = [
    rawColor.brandPink,
    rawColor.green500,
    rawColor.graphPurple,
    rawColor.complementaryTurquoise1,
    rawColor.red500,
    rawColor.brandBlue,
    rawColor.gray3,
    rawColor.graphOrange,
  ];

  // prettier-ignore
  return {
    accordionText: rawColor.gray2,

    actionModalSharevilleIllustration: rawColor.gray900,
    actionModalSharevilleIllustrationSecondary: rawColor.brandGreen,
    actionModalBackground: rawColor.white,
    actionModalLink: rawColor.blue500,

    accountBadgeBackground: rawColor.black,
    accountBadgeText: rawColor.white,
    allocationBars: rawColor.teal400,
    allocationBarDarkBlue: rawColor.blue700,
    allocationBarLightBlue: rawColor.blue400,

    background: rawColor.gray900,
    backgroundBlack: rawColor.black,
    backgroundDark: rawColor.white,
    persistedTooltipBackground: rawColor.white,

    badgeBackground: rawColor.blue500,
    badgeBackgroundPositive: rawColor.green500,
    badgeBackgroundWarning: rawColor.yellow400,
    badgeBackgroundNegative: rawColor.red500,
    badgeIconColor: rawColor.black,
    badgeTextColor: rawColor.white,

    tooltipBadgeBackground: rawColor.black,
    tooltipBadgeBorder: rawColor.gray400,
    tooltipBadgeText: rawColor.white,

    barGraphHighlight: Color(rawColor.complementaryBlue1).alpha(0.3).rgb().string(),

    barScaleActiveBar: rawColor.complementaryTurquoise1,
    barScaleInactiveBar: rawColor.gray700,

    borderActive: rawColor.blue500,

    bubbleBackground: rawColor.gray800,
    bubbleBorder: rawColor.gray700,
    bubbleSecondaryText: rawColor.gray7,
    bubbleBackgroundInverted: rawColor.white,
    bubbleBorderInverted: rawColor.white,

    bulbBackground: rawColor.brandGreen,
    bulbForeground: rawColor.gray0,

    bulletLightBlue: rawColor.blue300,

    buttonSecondaryBackground: rawColor.white,
    buttonTextLight: rawColor.white,

    buttonBackgroundPrimary: rawColor.blue500,
    buttonBackgroundHoverPrimary: rawColor.blue600,
    buttonBackgroundActivePrimary: rawColor.blue700,
    buttonBackgroundDisabled: rawColor.gray900,

    buttonBackgroundNegative: rawColor.red500,
    buttonBackgroundNegativeHover: rawColor.red600,
    buttonBackgroundNegativeActive: rawColor.red700,

    pillButtonBackgroundNegative: rawColor.red500,
    pillButtonBackgroundNegativeHover: rawColor.red400,
    pillButtonBackgroundNegativeActive: rawColor.red300,

    pillButtonHoverSecondary: rawColor.blue300,
    pillButtonActiveSecondary: rawColor.blue200,

    pillButtonTertiary: rawColor.white,
    pillButtonBackgroundTertiary: rawColor.gray700,

    buttonBorderSecondary: rawColor.blue500,
    buttonHoverSecondary: rawColor.blue600,
    buttonActiveSecondary: rawColor.blue700,

    buttonText: rawColor.white,
    buttonTextSecondary: rawColor.white,
    buttonTextDisabled: rawColor.gray600,
    buttonTextNegative: rawColor.red500,

    buttonSpinner: rawColor.white,
    buttonSpinnerSecondary: rawColor.white,

    buy: rawColor.blue400,
    buyActive: rawColor.blue700,
    buyHover: rawColor.blue500,

    card: rawColor.gray800,
    cta: rawColor.blue500,
    ctaHover: rawColor.blue600,

    danger: rawColor.red500,

    darkmodeIllustrationBackground: rawColor.blue800,
    darkmodeIllustrationLightBulb: rawColor.blue400,

    dateAvatarBackground1: rawColor.gray6,
    dateAvatarBackground2: rawColor.gray7,
    dateAvatarText1: rawColor.gray2,
    dateAvatarText2: rawColor.gray0,

    dateBadgeUpperBackground: rawColor.gray900,
    dateBadgeLowerBackground: rawColor.gray700,

    datePickerWithinRangeBackground: Color(rawColor.gray2).alpha(0.1).rgb().string(),
    datePickerWithinRangeFade: Color(rawColor.gray2).alpha(0.01).rgb().string(),

    disabledBackground: rawColor.gray900,
    disabledLabelBackground: rawColor.gray900,
    disabledText: rawColor.gray600,

  discoveryTooltipPrimaryText: rawColor.white,

    dropDownButtonText: rawColor.white,
    dropDownButtonTextHover: rawColor.blue400,
    dropDownButtonTextActive: rawColor.blue400,
    dropDownButtonTextDisabled: rawColor.gray600,
    dropDownButtonBackground: rawColor.gray700,
    dropDownButtonBackgroundHover: rawColor.gray700,
    dropDownButtonBackgroundActive: rawColor.blue800,
    dropDownButtonBackgroundDisabled: rawColor.gray900,
    dropDownButtonBackgroundLoading: rawColor.gray800,
    dropDownButtonBorderError: rawColor.red500,

    divider: rawColor.gray900,
    pageWrapperDivider: rawColor.gray800,

    emptyState: rawColor.gray4,
    emptyStateCardText: rawColor.gray500,
    error: rawColor.red500,

    featuredFundsBackground: rawColor.blue800,
    featuredFundsSeparator: rawColor.blue900,

    feedbackModuleBackground: rawColor.gray700,
    feedbackPageBackground: rawColor.gray800,

    flagBorder: rawColor.gray6,
    fundExchange: rawColor.gray2,

    functionBlue: rawColor.functionBlue,
    functionRed: rawColor.functionRed,
    functionGreen: rawColor.functionGreen,
    functionYellow: rawColor.functionYellow,

    generationSavingsTimelineColor1: rawColor.complementaryGreen1,
    generationSavingsTimelineColor2: rawColor.complementaryPink1,
    generationSavingsTimelineColor3: rawColor.brandTurquoise,
    generationSavingsTimelineColor4: rawColor.complementaryTurquoise1,

    keyFiguresBackground: rawColor.gray700,

    graphVolume: rawColor.gray2,
    graphVolumeHover: rawColor.gray3,
    graphCrosshair: rawColor.gray600,

    guidanceSelectionCardIcon: rawColor.brandPink,
    iconBackdropCta: Color(rawColor.cta).alpha(0.1).rgb().string(),
    icon: rawColor.white,
    iconButtonHover: rawColor.blue400,
    iconButtonPressed: rawColor.blue300,

    indexFundsBackground: rawColor.gray6,
    indexFundsFinnishAccent: [
      rawColor.brandPink,
      rawColor.brandTurquoise,
      rawColor.complementaryTurquoise2,
      rawColor.black,
      rawColor.complementaryTurquoise1,
    ],
    indexFundsNorwegianAccent: rawColor.brandTurquoise,

    inputBackground: rawColor.gray800,
    inputBorder: rawColor.gray700,
    inputBorderError: rawColor.red500,
    inputBorderHover: rawColor.gray400,
    inputBorderSuccess: rawColor.green500,
    inputHover: rawColor.gray700,

    investmentPredictionGraphBlue: rawColor.complementaryTurquoise2,
    investmentPredictionGraphGreen: rawColor.complementaryGreen2,
    investmentPredictionGraphPink: rawColor.complementaryPink1,
    investmentPredictionGraphTurquoise: rawColor.complementaryTurquoise2,

    label: rawColor.gray400,

    labelBackgroundBlue: rawColor.blue800,
    labelBackgroundGreen: rawColor.green800,
    labelBackgroundPink: rawColor.pink900,
    labelBackgroundTeal: rawColor.teal800,
    labelBackgroundYellow: rawColor.yellow900,

    labelTextBlue: rawColor.blue400,
    labelTextGreen: rawColor.green450,
    labelTextPink: rawColor.pink500,
    labelTextTeal: rawColor.teal400,
    labelTextYellow: rawColor.yellow400,

    lineScaleValueColor: rawColor.complementaryTurquoise1,
    listItemBackgroundHover: Color(rawColor.complementaryTurquoise1).alpha(0.1).rgb().string(),
    listSelectionCardBorder: rawColor.gray700,
    loanRatesGraphColor2: rawColor.complementaryTurquoise2,
    marketingCardMortageHighlight: rawColor.brandTurquoise,

    menuAccent1: rawColor.brandGreen,
    menuAccent2: rawColor.brandTurquoise,
    menuAccent3: rawColor.index,
    menuAccent4: rawColor.brandPink,
    menuAccent5: rawColor.brandTurquoise,
    menuText: rawColor.white,

    messageCentralFaqButtonBorder: rawColor.gray4,
    messageCentralFaqIcon: rawColor.gray5,

    modalBackdrop: Color(rawColor.gray2).alpha(0.63).rgb().string(),
    module: rawColor.black,

    negative: rawColor.pink500,
    negativeBlackBackground: rawColor.pink500,

    newsLabelTextColors: [rawColor.green450, rawColor.pink500, rawColor.blue400, rawColor.teal400],
    newsLabelBackgroundColors: [
      rawColor.green800,
      rawColor.pink900,
      rawColor.blue800,
      rawColor.teal800,
    ],

    onboardingAccentBlue: rawColor.brandTurquoise,
    onboardingAccentGreen: rawColor.brandGreen,
    onboardingAccentPink: rawColor.brandPink,
    onboardingAccentTurquoise: rawColor.brandTurquoise,

    orderAccountLabel: rawColor.gray1,
    orderDepthBackground: rawColor.gray1,
    orderDepthDarkBackground: rawColor.gray2,
    orderPanelLabelColor: rawColor.gray400,
    orderPanelItemBackgroundHover: Color(rawColor.black).alpha(0.6).rgb().string(),

    otherMonthDateText: rawColor.gray4,

    paletteBlue: rawColor.palettes.blue,
    paletteGreen: rawColor.palettes.green,
    paletteLineGraph: [rawColor.teal400, rawColor.index, ...lineColors],
    paletteMap: [
      rawColor.complementaryTurquoise2,
      rawColor.complementaryTurquoise1,
      rawColor.brandTurquoise,
      rawColor.gray1,
      rawColor.gray3,
    ],
    palettePink: rawColor.palettes.pink,
    paletteTurquoise: rawColor.palettes.turquoise,

    placeholderText: rawColor.gray3,

    pillBackground: rawColor.gray900,

    positive: rawColor.green500,
    positiveBlackBackground: rawColor.green500,

    periodScrollButtonBackground: rawColor.gray1,
    periodScrollButtonIcon: rawColor.white,

    infoBarBackgroundSuccess: rawColor.green800,
    infoBarBackgroundWarning: rawColor.yellow800,
    infoBarBackgroundError: rawColor.red800,
    infoBarBackgroundInfo: rawColor.gray800,

    infoBarSuccess: rawColor.green500,
    infoBarWarning: rawColor.yellow400,
    infoBarError: rawColor.red500,
    infoBarInfo: rawColor.blue500,

    link: rawColor.blue400,
    linkHover: rawColor.blue300,
    linkPressed: rawColor.blue200,

    privateBankingBannerBackground: rawColor.gray6,
    privateBankingBannerText: rawColor.white,
    privateBankingBannerTitle: rawColor.gray6,

    progressBarActive: rawColor.blue500,
    progressBarDone: rawColor.green500,
    progressBarFailure: rawColor.red500,
    progressBarNext: rawColor.gray700,
    progressBarText: rawColor.white,
    progressBarWarning: rawColor.index,

    savingsForecastExpected: rawColor.cta,
    savingsForecastNormal: rawColor.gray500,
    savingsForecastPotential: Color(rawColor.cta).alpha(0.12).rgb().string(),

    searchBackground: rawColor.gray1,
    searchText: rawColor.gray7,

    segmentedControlBackground: rawColor.gray800,
    segmentedControlBackgroundSelected: rawColor.gray700,
    segmentedControlBorder: rawColor.gray700,

    selectionCardBorder: rawColor.gray5,
    selectionCardText: rawColor.gray2,
    selectOptionBackground: rawColor.gray800,

    sell: rawColor.pink500,
    sellActive: rawColor.pink700,
    separator: rawColor.gray2,
    separatorFullWidth: rawColor.gray900,

    shadowCard: Color(rawColor.black).alpha(0.40).rgb().string(),
    shadowInput: Color(rawColor.black).alpha(0.03).rgb().string(),
    shadowModal: Color(rawColor.black).alpha(0.60).rgb().string(),
    shadowSwitch: Color(rawColor.black).alpha(0.05).rgb().string(),

    shareville: rawColor.complementaryGreen1,
    sharevilleDeletedContent: rawColor.gray500,

    skeleton: rawColor.gray700,

    sliderBackgroundColor: rawColor.gray700,
    sliderColor: rawColor.blue500,
    sliderDisabled: rawColor.gray400,
    sliderSecondary: rawColor.brandGreen,
    sliderKnobBackground: rawColor.white,

    spinnerBlack: rawColor.black,
    spinnerWhite: rawColor.white,
    starRating: rawColor.index,
    starRatingBlue: rawColor.blue400,
    starRatingOff: rawColor.gray700,
    starRatingBlueOff: rawColor.gray700,
    statusFulfilledBackgroundColor: rawColor.cta,
    statusFulfilledTextColor: rawColor.white,
    streamingBolt: rawColor.index,

    svgFill: rawColor.gray7,
    svgStokeLight: rawColor.gray0,
    svgStroke: rawColor.gray4,

    switchReadOnlyKnobBg: rawColor.gray600,
    switchReadOnlyTrackBg: rawColor.blue700,

    toggleTrackEnabledOnBg: rawColor.blue500,
    toggleTrackEnabledOffBg: rawColor.gray600,
    toggleTrackDisabledOnBg: rawColor.blue700,
    toggleTrackDisabledOffBg: rawColor.gray700,

    toggleKnobEnabledOnBg: rawColor.white,
    toggleKnobEnabledOffBg: rawColor.white,
    toggleKnobDisabledOnBg: rawColor.gray600,
    toggleKnobDisabledOffBg: rawColor.gray600,

    tableBorder: rawColor.gray0,
    tableRowBackground: rawColor.gray800,
    tableRowHover: rawColor.gray700,
    tableEmphasis: rawColor.blue800,

    tabTitle: rawColor.gray400,
    tabTitleActive: rawColor.white,

    newBadgeLabelBackground: rawColor.teal800,
    newBadgeLabelText: rawColor.teal400,

    text: rawColor.gray7,
    textLight: rawColor.gray800,

    technicalAnalysisPlotBands: rawColor.gray900,
    technicalAnalysisPrimaryLine: rawColor.teal400,
    technicalAnalysisSecondaryLine: rawColor.pink500,
    technicalAnalysisPrimaryBar: rawColor.teal600,
    technicalAnalysisSecondaryBar: rawColor.pink600,
    technicalAnalysisSingleLine: rawColor.gray200,

    timelineActive: rawColor.cta,
    timelineFailure: rawColor.red500,
    timelineNext: rawColor.gray4,
    timelineSuccess: rawColor.green500,
    timelineWarning: rawColor.index,

    transferFlowText: rawColor.gray400,

    transferLabelBackground: rawColor.yellow900,
    transferLabelText: rawColor.yellow400,

    transferPendingIconColor: rawColor.index,
    transferProgressBar1: rawColor.brandPink,
    transferProgressBar2: rawColor.green500,
    transferProgressBar3: rawColor.gray5,
    transferProgressBarText1: rawColor.gray1,
    transferProgressBarText2: rawColor.gray2,
    transferStatusBannerBackground1: Color(rawColor.complementaryTurquoise1)
      .alpha(0.1)
      .rgb()
      .string(),
    transferStatusBannerBackground2: Color(rawColor.complementaryPink1).alpha(0.1).rgb().string(),
    transferStatusBannerBackground3: Color(rawColor.index).alpha(0.1).rgb().string(),
    transferStatusBannerChevron: rawColor.gray0,
    transferStatusBannerText1: rawColor.complementaryTurquoise1,
    transferStatusBannerText2: rawColor.complementaryPink1,
    transferStatusBannerText3: rawColor.gray0,

    sfdrArticle6: rawColor.gray500,
    sfdrArticle6Text: rawColor.gray800,
    sfdrArticle8: rawColor.sfdrArticle8,
    sfdrArticle9: rawColor.sfdrArticle9,

    popularBadgeBackground: rawColor.pink900,
    popularBadgeText: rawColor.pink500,

    promotionBannerTitle: rawColor.white,
    promotionBannerDescription: rawColor.gray400,

    joinSharevilleIllustration: rawColor.green200,
    joinSharevilleBadge: rawColor.green800,
    joinSharevilleBanner: rawColor.green900,

    quickFilterSelectedBackground: rawColor.blue800,
    quickFilterBackground: rawColor.gray700,
    quickFilterText: rawColor.white,
    quickFilterSelectedText: rawColor.blue400,
    quickFilterFocusOutline: rawColor.gray600,
    quickFilterFocusSelectedOutline: rawColor.blue400,

    quickFilterSustainabilityColor: rawColor.green500,
    quickFilterSustainabilityBackground: rawColor.green800,
    quickFilterSustainabilityHoverColor: rawColor.green400,

    quickFilterBrandActiveColor: rawColor.gray800,
    quickFilterBrandHoverColor: rawColor.blue400,
    quickFilterBrandActiveBackground: rawColor.white,
    quickFilterBrandFocusBorder: rawColor.gray600,

    monthlySavingsTransferTypeInactive: rawColor.gray500,
    daySelectInputTextInactive: rawColor.gray400,
    daySelectActiveText: rawColor.white,
    daySelectInactiveText: rawColor.gray600,

    warning: rawColor.index,

    worldMapLand: rawColor.blue600, // not yet in use
    worldMapWater: rawColor.gray800, // not yet in use

    removeInstrumentText: rawColor.red500,

    searchPopupBackground: rawColor.blue800,

    monthlySavingsTableRowDivider: rawColor.gray900,

    illustrationBackgroundBlue: rawColor.blue800,
    narrowCardBorder: rawColor.gray900,
    existingMonthlyDepositsDivider: rawColor.gray900,

    visitedInstrumentsEmptyStateColor: rawColor.gray400,
    visitedInstrumentsInstrumentBorder: rawColor.gray700,
    visitedInstrumentsInstrumentBackground: rawColor.gray800,
    visitedInstrumentsInstrumentColorLoading: rawColor.gray700,
    visitedInstrumentsInstrumentColorError: rawColor.gray400,
    visitedInstrumentsPositiveFont: rawColor.green500,
    visitedInstrumentsPositiveFill: rawColor.green800,
    visitedInstrumentsNegativeFont: rawColor.pink500,
    visitedInstrumentsNegativeFill: rawColor.pink800,

    progressIndicatorBackground: rawColor.gray800,
    progressIndicatorBarEmpty: rawColor.gray700,
    progressIndicatorBar: rawColor.blue500,
    progressIndicatorSvgHover: rawColor.blue400,

    actionBackgroundWeak: rawColor.blue800,
    actionBorderDefault: rawColor.blue500,

    pageHeaderBackground: rawColor.black,

    notFoundColor: rawColor.gray600,
    notFoundFill: rawColor.gray900,
    headerCardBorder: rawColor.gray800,

    /** @deprecated  */ creditsPiePrimary: rawColor.complementaryPink1,
    /** @deprecated  */ creditsPieSecondary: rawColor.complementaryPink2,
    /** @deprecated  */ disabled: rawColor.gray3,
    /** @deprecated  */ mapColor1: rawColor.complementaryTurquoise2,
    /** @deprecated  */ mapColor2: rawColor.complementaryTurquoise1,
    /** @deprecated  */ mapColor3: rawColor.brandTurquoise,
    /** @deprecated  */ mapColor4: rawColor.gray1,
    /** @deprecated  */ mapColor5: rawColor.gray3,
    /** @deprecated  */ pieChartColor2: rawColor.brandPink,
  };
};
