import Color from 'color';
import accessabilityColors from './accessabilityColors';
import defaultColors from './defaultColors';
import { RawColors, ThemeColors, ThemeColorsVersion } from './theme.types';

export const getColorLightScheme = (scheme: ThemeColorsVersion) => {
  switch (scheme) {
    case 'a11y':
      return accessabilityColors;
    default:
      return defaultColors;
  }
};

export const createLightColors = (rawColor: RawColors): ThemeColors => {
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

    actionModalSharevilleIllustration: rawColor.brandGreen,
    actionModalSharevilleIllustrationSecondary: rawColor.gray900,
    actionModalBackground: rawColor.gray800,
    actionModalLink: rawColor.blue400,

    accountBadgeBackground: rawColor.black,
    accountBadgeText: rawColor.white,
    allocationBars: rawColor.teal500,
    allocationBarDarkBlue: rawColor.blue700,
    allocationBarLightBlue: rawColor.blue400,

    background: rawColor.gray100,
    backgroundBlack: rawColor.black,
    backgroundDark: rawColor.gray0,
    persistedTooltipBackground: rawColor.gray800,

    badgeBackground: rawColor.blue500,
    badgeBackgroundPositive: rawColor.green500,
    badgeBackgroundWarning: rawColor.yellow400,
    badgeBackgroundNegative: rawColor.red500,
    badgeIconColor: rawColor.white,
    badgeTextColor: rawColor.white,

    tooltipBadgeBackground: rawColor.white,
    tooltipBadgeBorder: rawColor.gray400,
    tooltipBadgeText: rawColor.gray800,

    barGraphHighlight: Color(rawColor.complementaryBlue1).alpha(0.1).rgb().string(),

    barScaleActiveBar: rawColor.complementaryBlue1,
    barScaleInactiveBar: rawColor.gray6,

    borderActive: rawColor.blue500,

    bubbleBackground: rawColor.white,
    bubbleBorder: rawColor.gray4,
    bubbleSecondaryText: rawColor.gray2,
    bubbleBackgroundInverted: rawColor.gray800,
    bubbleBorderInverted: rawColor.gray800,

    bulbBackground: rawColor.brandGreen,
    bulbForeground: rawColor.gray0,

    bulletLightBlue: rawColor.blue300,

    buttonSecondaryBackground: rawColor.white,
    buttonTextLight: rawColor.gray0,

    buttonBackgroundPrimary: rawColor.blue500,
    buttonBackgroundHoverPrimary: rawColor.blue600,
    buttonBackgroundActivePrimary: rawColor.blue700,
    buttonBackgroundDisabled: rawColor.gray200,

    buttonBackgroundNegative: rawColor.red600,
    buttonBackgroundNegativeHover: rawColor.red700,
    buttonBackgroundNegativeActive: rawColor.red800,

    pillButtonBackgroundNegative: rawColor.red600,
    pillButtonBackgroundNegativeHover: rawColor.red700,
    pillButtonBackgroundNegativeActive: rawColor.red800,

    pillButtonHoverSecondary: rawColor.blue600,
    pillButtonActiveSecondary: rawColor.blue700,

    pillButtonTertiary: rawColor.gray800,
    pillButtonBackgroundTertiary: rawColor.gray100,

    buttonBorderSecondary: rawColor.blue500,
    buttonHoverSecondary: rawColor.blue600,
    buttonActiveSecondary: rawColor.blue700,

    buttonText: rawColor.white,
    buttonTextSecondary: rawColor.blue500,
    buttonTextDisabled: rawColor.gray500,
    buttonTextNegative: rawColor.red500,

    buttonSpinner: rawColor.white,
    buttonSpinnerSecondary: rawColor.blue500,

    buy: rawColor.blue500,
    buyActive: rawColor.blue700,
    buyHover: rawColor.blue500,

    card: rawColor.white,
    cta: rawColor.blue500,
    ctaHover: rawColor.blue600,

    danger: rawColor.red600,

    darkmodeIllustrationBackground: rawColor.blue800,
    darkmodeIllustrationLightBulb: rawColor.blue400,

    dateAvatarBackground1: rawColor.gray6,
    dateAvatarBackground2: rawColor.gray7,
    dateAvatarText1: rawColor.gray2,
    dateAvatarText2: rawColor.gray0,

    dateBadgeUpperBackground: rawColor.gray200,
    dateBadgeLowerBackground: rawColor.gray100,

    datePickerWithinRangeBackground: Color(rawColor.gray2).alpha(0.1).rgb().string(),
    datePickerWithinRangeFade: Color(rawColor.gray2).alpha(0.01).rgb().string(),

    disabledBackground: rawColor.gray6,
    disabledLabelBackground: rawColor.gray400,
    disabledText: rawColor.gray3,

    discoveryTooltipPrimaryText: rawColor.white,

    dropDownButtonText: rawColor.gray800,
    dropDownButtonTextHover: rawColor.blue500,
    dropDownButtonTextActive: rawColor.blue500,
    dropDownButtonTextDisabled: rawColor.gray400,
    dropDownButtonBackground: rawColor.gray100,
    dropDownButtonBackgroundHover: rawColor.gray100,
    dropDownButtonBackgroundActive: rawColor.blue100,
    dropDownButtonBackgroundDisabled: rawColor.gray200,
    dropDownButtonBackgroundLoading: rawColor.gray200,
    dropDownButtonBorderError: rawColor.red500,

    divider: rawColor.gray6,
    pageWrapperDivider: rawColor.gray700,

    error: rawColor.red600,
    emptyState: rawColor.gray4,
    emptyStateCardText: rawColor.gray500,

    featuredFundsBackground: rawColor.blue100,
    featuredFundsSeparator: rawColor.blue200,

    feedbackModuleBackground: rawColor.gray100,
    feedbackPageBackground: rawColor.white,

    flagBorder: rawColor.gray6,
    fundExchange: rawColor.gray2,

    functionBlue: rawColor.functionBlue,
    functionRed: rawColor.functionRed,
    functionGreen: rawColor.functionGreen,
    functionYellow: rawColor.functionYellow,

    generationSavingsTimelineColor1: rawColor.complementaryGreen1,
    generationSavingsTimelineColor2: rawColor.complementaryPink1,
    generationSavingsTimelineColor3: rawColor.brandBlue,
    generationSavingsTimelineColor4: rawColor.complementaryBlue1,

    keyFiguresBackground: rawColor.gray100,

    graphVolume: rawColor.gray5,
    graphVolumeHover: rawColor.gray4,
    graphCrosshair: rawColor.gray400,

    guidanceSelectionCardIcon: rawColor.brandPink,
    iconBackdropCta: Color(rawColor.cta).alpha(0.1).rgb().string(),
    icon: rawColor.gray800,
    iconButtonHover: rawColor.blue500,
    iconButtonPressed: rawColor.blue600,

    indexFundsBackground: rawColor.gray6,
    indexFundsFinnishAccent: [
      rawColor.brandBlue,
      rawColor.complementaryBlue2,
      rawColor.black,
      rawColor.complementaryTurquoise1,
    ],
    indexFundsNorwegianAccent: rawColor.brandBlue,

    inputBackground: rawColor.white,
    inputBorder: rawColor.gray400,
    inputBorderError: rawColor.red600,
    inputBorderHover: rawColor.gray700,
    inputBorderSuccess: rawColor.green600,
    inputHover: rawColor.gray100,

    investmentPredictionGraphBlue: rawColor.complementaryBlue2,
    investmentPredictionGraphGreen: rawColor.complementaryGreen2,
    investmentPredictionGraphPink: rawColor.complementaryPink1,
    investmentPredictionGraphTurquoise: rawColor.complementaryTurquoise2,

    label: rawColor.gray600,

    labelBackgroundBlue: rawColor.blue100,
    labelBackgroundGreen: rawColor.green100,
    labelBackgroundPink: rawColor.pink100,
    labelBackgroundTeal: rawColor.teal100,
    labelBackgroundYellow: rawColor.yellow200,

    labelTextBlue: rawColor.blue500,
    labelTextGreen: rawColor.green700,
    labelTextPink: rawColor.pink600,
    labelTextTeal: rawColor.teal600,
    labelTextYellow: rawColor.yellow800,

    lineScaleValueColor: rawColor.complementaryTurquoise1,
    listItemBackgroundHover: Color(rawColor.complementaryTurquoise1).alpha(0.1).rgb().string(),
    listSelectionCardBorder: rawColor.gray300,
    loanRatesGraphColor2: rawColor.complementaryBlue2,
    marketingCardMortageHighlight: rawColor.brandTurquoise,

    menuAccent1: rawColor.brandGreen,
    menuAccent2: rawColor.brandTurquoise,
    menuAccent3: rawColor.index,
    menuAccent4: rawColor.brandPink,
    menuAccent5: rawColor.brandBlue,
    menuText: rawColor.white,

    messageCentralFaqButtonBorder: rawColor.gray4,
    messageCentralFaqIcon: rawColor.gray5,

    modalBackdrop: Color(rawColor.gray2).alpha(0.63).rgb().string(),
    module: rawColor.white,

    negative: rawColor.pink600,
    negativeBlackBackground: rawColor.pink500,

    newsLabelTextColors: [rawColor.green600, rawColor.pink600, rawColor.blue500, rawColor.teal600],
    newsLabelBackgroundColors: [
      rawColor.green100,
      rawColor.pink100,
      rawColor.blue100,
      rawColor.teal100,
    ],

    onboardingAccentBlue: rawColor.brandBlue,
    onboardingAccentGreen: rawColor.brandGreen,
    onboardingAccentPink: rawColor.brandPink,
    onboardingAccentTurquoise: rawColor.brandTurquoise,

    orderAccountLabel: rawColor.gray1,
    orderDepthBackground: rawColor.gray6,
    orderDepthDarkBackground: rawColor.gray5,
    orderPanelLabelColor: rawColor.gray600,
    orderPanelItemBackgroundHover: rawColor.gray100,

    otherMonthDateText: rawColor.gray4,

    paletteBlue: rawColor.palettes.blue,
    paletteGreen: rawColor.palettes.green,
    paletteLineGraph: [rawColor.cta, rawColor.index, ...lineColors],
    paletteMap: [
      rawColor.complementaryBlue2,
      rawColor.complementaryBlue1,
      rawColor.brandBlue,
      rawColor.gray1,
      rawColor.gray3,
    ],
    palettePink: rawColor.palettes.pink,
    paletteTurquoise: rawColor.palettes.turquoise,

    placeholderText: rawColor.gray2,

    pillBackground: rawColor.gray100,

    positive: rawColor.green700,
    positiveBlackBackground: rawColor.green500,

    infoBarBackgroundSuccess: rawColor.green100,
    infoBarBackgroundWarning: rawColor.yellow100,
    infoBarBackgroundError: rawColor.red100,
    infoBarBackgroundInfo: rawColor.gray100,

    infoBarSuccess: rawColor.green500,
    infoBarWarning: rawColor.yellow400,
    infoBarError: rawColor.red500,
    infoBarInfo: rawColor.blue500,

    link: rawColor.blue500,
    linkHover: rawColor.blue500,
    linkPressed: rawColor.blue500,

    privateBankingBannerBackground: rawColor.gray6,
    privateBankingBannerText: rawColor.white,
    privateBankingBannerTitle: rawColor.gray6,

    progressBarActive: rawColor.blue500,
    progressBarDone: rawColor.green500,
    progressBarFailure: rawColor.red500,
    progressBarNext: rawColor.gray4,
    progressBarText: rawColor.white,
    progressBarWarning: rawColor.index,

    periodScrollButtonBackground: rawColor.gray100,
    periodScrollButtonIcon: rawColor.gray800,

    savingsForecastExpected: rawColor.cta,
    savingsForecastNormal: rawColor.gray500,
    savingsForecastPotential: Color(rawColor.cta).alpha(0.12).rgb().string(),

    searchBackground: rawColor.gray1,
    searchText: rawColor.gray7,

    segmentedControlBackground: rawColor.gray100,
    segmentedControlBackgroundSelected: rawColor.white,
    segmentedControlBorder: rawColor.gray100,

    selectionCardBorder: rawColor.gray5,
    selectionCardText: rawColor.gray2,
    selectOptionBackground: rawColor.white,

    sell: rawColor.pink600,
    sellActive: rawColor.pink700,
    separator: rawColor.gray0,
    separatorFullWidth: rawColor.gray200,

    shadowCard: Color(rawColor.black).alpha(0.03).rgb().string(),
    shadowInput: Color(rawColor.black).alpha(0.03).rgb().string(),
    shadowModal: Color(rawColor.black).alpha(0.16).rgb().string(),
    shadowSwitch: Color(rawColor.black).alpha(0.05).rgb().string(),

    shareville: rawColor.complementaryGreen1,
    sharevilleDeletedContent: rawColor.gray500,

    skeleton: rawColor.gray6,

    sliderBackgroundColor: rawColor.gray200,
    sliderColor: rawColor.blue500,
    sliderDisabled: rawColor.gray400,
    sliderSecondary: rawColor.brandGreen,
    sliderKnobBackground: rawColor.white,

    spinnerBlack: rawColor.black,
    spinnerWhite: rawColor.white,
    starRating: rawColor.index,
    starRatingBlue: rawColor.blue500,
    starRatingOff: rawColor.gray6,
    starRatingBlueOff: rawColor.gray400,
    statusFulfilledBackgroundColor: rawColor.cta,
    statusFulfilledTextColor: rawColor.white,
    streamingBolt: rawColor.index,

    svgFill: rawColor.gray0,
    svgStokeLight: rawColor.white,
    svgStroke: rawColor.gray2,

    switchReadOnlyKnobBg: rawColor.gray200,
    switchReadOnlyTrackBg: rawColor.blue200,

    toggleTrackEnabledOnBg: rawColor.blue500,
    toggleTrackEnabledOffBg: rawColor.gray300,
    toggleTrackDisabledOnBg: rawColor.blue200,
    toggleTrackDisabledOffBg: rawColor.gray300,

    toggleKnobEnabledOnBg: rawColor.white,
    toggleKnobEnabledOffBg: rawColor.white,
    toggleKnobDisabledOnBg: rawColor.white,
    toggleKnobDisabledOffBg: rawColor.gray200,

    tableBorder: rawColor.gray0,
    tableRowBackground: rawColor.white,
    tableRowHover: rawColor.gray7,
    tableEmphasis: rawColor.blue100,

    tabTitle: rawColor.gray600,
    tabTitleActive: rawColor.gray800,

    newBadgeLabelBackground: rawColor.teal100,
    newBadgeLabelText: rawColor.teal600,

    text: rawColor.gray0,
    textLight: rawColor.white, // FIXME: to be removed later

    technicalAnalysisPlotBands: rawColor.gray200,
    technicalAnalysisPrimaryLine: rawColor.blue500,
    technicalAnalysisSecondaryLine: rawColor.pink600,
    technicalAnalysisPrimaryBar: rawColor.blue300,
    technicalAnalysisSecondaryBar: rawColor.pink300,
    technicalAnalysisSingleLine: rawColor.black,

    timelineActive: rawColor.cta,
    timelineFailure: rawColor.red500,
    timelineNext: rawColor.gray4,
    timelineSuccess: rawColor.green500,
    timelineWarning: rawColor.index,

    transferFlowText: rawColor.gray600,

    transferLabelBackground: rawColor.yellow200,
    transferLabelText: rawColor.yellow800,

    transferPendingIconColor: rawColor.index,
    transferProgressBar1: rawColor.brandPink,
    transferProgressBar2: rawColor.green500,
    transferProgressBar3: rawColor.gray5,
    transferProgressBarText1: rawColor.gray1,
    transferProgressBarText2: rawColor.gray2,
    transferStatusBannerBackground1: Color(rawColor.complementaryBlue1).alpha(0.1).rgb().string(),
    transferStatusBannerBackground2: Color(rawColor.complementaryPink1).alpha(0.1).rgb().string(),
    transferStatusBannerBackground3: Color(rawColor.index).alpha(0.1).rgb().string(),
    transferStatusBannerChevron: rawColor.gray0,
    transferStatusBannerText1: rawColor.complementaryBlue1,
    transferStatusBannerText2: rawColor.complementaryPink1,
    transferStatusBannerText3: rawColor.gray0,

    sfdrArticle6: rawColor.gray500,
    sfdrArticle6Text: rawColor.white,
    sfdrArticle8: rawColor.sfdrArticle8,
    sfdrArticle9: rawColor.sfdrArticle9,

    popularBadgeBackground: rawColor.pink100,
    popularBadgeText: rawColor.pink600,

    promotionBannerTitle: rawColor.gray800,
    promotionBannerDescription: rawColor.gray600,

    joinSharevilleIllustration: rawColor.green600,
    joinSharevilleBadge: rawColor.green200,
    joinSharevilleBanner: rawColor.green100,

    quickFilterSelectedBackground: rawColor.blue100,
    quickFilterBackground: rawColor.gray100,
    quickFilterText: rawColor.gray800,
    quickFilterSelectedText: rawColor.blue600,
    quickFilterFocusOutline: rawColor.gray400,
    quickFilterFocusSelectedOutline: rawColor.blue500,

    quickFilterSustainabilityColor: rawColor.green600,
    quickFilterSustainabilityBackground: rawColor.green100,
    quickFilterSustainabilityHoverColor: rawColor.green700,

    quickFilterBrandActiveColor: rawColor.white,
    quickFilterBrandHoverColor: rawColor.blue500,
    quickFilterBrandActiveBackground: rawColor.gray800,
    quickFilterBrandFocusBorder: rawColor.gray600,

    monthlySavingsTransferTypeInactive: rawColor.gray500,
    daySelectInputTextInactive: rawColor.gray600,
    daySelectActiveText: rawColor.white,
    daySelectInactiveText: rawColor.gray500,

    warning: rawColor.index,

    worldMapLand: rawColor.blue700, // not yet in use
    worldMapWater: rawColor.gray800, // not yet in use

    removeInstrumentText: rawColor.red600,

    searchPopupBackground: rawColor.blue100,

    monthlySavingsTableRowDivider: rawColor.gray100,

    illustrationBackgroundBlue: rawColor.blue100,
    narrowCardBorder: rawColor.gray200,
    existingMonthlyDepositsDivider: rawColor.gray200,

    visitedInstrumentsEmptyStateColor: rawColor.gray500,
    visitedInstrumentsInstrumentBorder: rawColor.gray200,
    visitedInstrumentsInstrumentBackground: rawColor.white,
    visitedInstrumentsInstrumentColorLoading: rawColor.gray200,
    visitedInstrumentsInstrumentColorError: rawColor.gray600,
    visitedInstrumentsPositiveFont: rawColor.green600,
    visitedInstrumentsPositiveFill: rawColor.green100,
    visitedInstrumentsNegativeFont: rawColor.pink600,
    visitedInstrumentsNegativeFill: rawColor.pink100,

    progressIndicatorBackground: rawColor.white,
    progressIndicatorBarEmpty: rawColor.gray200,
    progressIndicatorBar: rawColor.blue500,
    progressIndicatorSvgHover: rawColor.blue500,

    actionBackgroundWeak: rawColor.blue100,
    actionBorderDefault: rawColor.blue500,

    pageHeaderBackground: rawColor.white,

    notFoundColor: rawColor.gray500,
    notFoundFill: rawColor.gray200,
    headerCardBorder: rawColor.gray200,

    tagChipBorder: rawColor.gray200,

    /** @deprecated  */ creditsPiePrimary: rawColor.complementaryPink1,
    /** @deprecated  */ creditsPieSecondary: rawColor.complementaryPink2,
    /** @deprecated  */ disabled: rawColor.gray3,
    /** @deprecated  */ mapColor1: rawColor.complementaryBlue2,
    /** @deprecated  */ mapColor2: rawColor.complementaryBlue1,
    /** @deprecated  */ mapColor3: rawColor.brandBlue,
    /** @deprecated  */ mapColor4: rawColor.gray1,
    /** @deprecated  */ mapColor5: rawColor.gray3,
    /** @deprecated  */ pieChartColor2: rawColor.brandPink,
  };
};
