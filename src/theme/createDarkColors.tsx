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
    rawColor.positive,
    rawColor.graphPurple,
    rawColor.complementaryTurquoise1,
    rawColor.negative,
    rawColor.brandBlue,
    rawColor.gray3,
    rawColor.graphOrange,
  ];

  // prettier-ignore
  return {
    accordionText: rawColor.gray2,

    accountBadgeBackground: rawColor.black,
    accountBadgeText: rawColor.white,

    background: rawColor.gray900,
    backgroundBlack: rawColor.black,
    backgroundDark: rawColor.gray2,

    badgeBackground: rawColor.blue500,
    badgeTextColor: rawColor.white,

    barGraphHighlight: Color(rawColor.complementaryBlue1).alpha(0.3).rgb().string(),

    barScaleActiveBar: rawColor.complementaryTurquoise1,
    barScaleInactiveBar: rawColor.gray6,

    borderActive: rawColor.blue500,

    bubbleBackground: rawColor.gray800,
    bubbleBorder: rawColor.gray700,
    bubbleSecondaryText: rawColor.gray7,

    bulbBackground: rawColor.brandGreen,
    bulbForeground: rawColor.gray0,

    buttonSecondaryBackground: rawColor.white,
    buttonTextLight: rawColor.white,

    buttonBackgroundPrimary: rawColor.blue500,
    buttonBackgroundHoverPrimary: rawColor.blue600,
    buttonBackgroundActivePrimary: rawColor.blue700,

    buttonBackgroundDisabled: rawColor.gray900,

    buttonBorderSecondary: rawColor.blue500,
    buttonHoverSecondary: rawColor.blue600,
    buttonActiveSecondary: rawColor.blue700,

    buttonText: rawColor.white,
    buttonTextSecondary: rawColor.white,
    buttonTextDisabled: rawColor.gray600,

    buy: rawColor.blue400,
    buyActive: rawColor.blue700,
    buyHover: rawColor.blue500,

    card: rawColor.gray0,
    cta: rawColor.blue500,
    ctaHover: rawColor.blue600,

    darkmodeIllustrationBackground: rawColor.blue800,
    darkmodeIllustrationLightBulb: rawColor.blue400,

    dateAvatarBackground1: rawColor.gray6,
    dateAvatarBackground2: rawColor.gray7,
    dateAvatarText1: rawColor.gray2,
    dateAvatarText2: rawColor.gray0,

    datePickerWithinRangeBackground: Color(rawColor.gray2).alpha(0.1).rgb().string(),
    datePickerWithinRangeFade: Color(rawColor.gray2).alpha(0.01).rgb().string(),

    disabledBackground: rawColor.gray900,
    disabledText: rawColor.gray600,

    divider: rawColor.gray900,
    pageWrapperDivider: rawColor.gray800,
    emptyState: rawColor.gray4,
    flagBorder: rawColor.gray6,
    fundExchange: rawColor.gray2,

    generationSavingsTimelineColor1: rawColor.complementaryGreen1,
    generationSavingsTimelineColor2: rawColor.complementaryPink1,
    generationSavingsTimelineColor3: rawColor.brandTurquoise,
    generationSavingsTimelineColor4: rawColor.complementaryTurquoise1,

    keyFiguresBackground: rawColor.gray700,

    graphVolume: rawColor.gray2,
    graphVolumeHover: rawColor.gray3,

    guidanceSelectionCardIcon: rawColor.brandPink,
    iconBackdropCta: Color(rawColor.cta).alpha(0.1).rgb().string(),
    icon: rawColor.white,

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
    inputBorderError: rawColor.pink500,
    inputBorderHover: rawColor.gray800,
    inputBorderSuccess: rawColor.green500,
    inputHover: rawColor.gray700,

    investmentPredictionGraphBlue: rawColor.complementaryTurquoise2,
    investmentPredictionGraphGreen: rawColor.complementaryGreen2,
    investmentPredictionGraphPink: rawColor.complementaryPink1,
    investmentPredictionGraphTurquoise: rawColor.complementaryTurquoise2,

    label: rawColor.gray3,
    lineScaleValueColor: rawColor.complementaryTurquoise1,
    listItemBackgroundHover: Color(rawColor.complementaryTurquoise1).alpha(0.1).rgb().string(),
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

    negative: rawColor.negative,
    negativeBlackBackground: rawColor.negative,

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
    paletteLineGraph: [rawColor.complementaryTurquoise1, rawColor.index, ...lineColors],
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

    positive: rawColor.positive,

    infoBarBackgroundSuccess: rawColor.green800,
    infoBarBackgroundWarning: rawColor.yellow800,
    infoBarBackgroundError: rawColor.red800,
    infoBarBackgroundInfo: rawColor.gray800,

    infoBarSuccess: rawColor.green500,
    infoBarWarning: rawColor.yellow400,
    infoBarError: rawColor.red500,
    infoBarInfo: rawColor.blue500,

    link: rawColor.blue400,

    privateBankingBannerBackground: rawColor.gray6,
    privateBankingBannerText: rawColor.white,
    privateBankingBannerTitle: rawColor.gray6,

    progressBarActive: rawColor.cta,
    progressBarDone: rawColor.positive,
    progressBarFailure: rawColor.negative,
    progressBarNext: rawColor.gray4,
    progressBarText: rawColor.white,
    progressBarWarning: rawColor.index,

    searchBackground: rawColor.gray1,
    searchText: rawColor.gray7,

    segmentedControlBackground: rawColor.gray1,

    selectionCardBorder: rawColor.gray5,
    selectionCardText: rawColor.gray2,
    selectOptionBackground: rawColor.gray800,

    sell: rawColor.pink500,
    sellActive: rawColor.pink700,
    separator: rawColor.gray2,

    shadowCard: Color(rawColor.black).alpha(0.03).rgb().string(),
    shadowInput: Color(rawColor.black).alpha(0.03).rgb().string(),
    shadowModal: Color(rawColor.black).alpha(0.16).rgb().string(),
    shadowSwitch: Color(rawColor.black).alpha(0.05).rgb().string(),

    shareville: rawColor.complementaryGreen1,
    skeleton: rawColor.gray700,

    sliderBackgroundColor: rawColor.gray6,
    sliderColor: rawColor.cta,
    sliderDisabled: rawColor.gray6,
    sliderSecondary: rawColor.brandGreen,
    sliderThumbBackground: rawColor.white,

    spinnerBlack: rawColor.black,
    spinnerWhite: rawColor.white,
    starRating: rawColor.index,
    starRatingOff: rawColor.gray6,
    statusFulfilledBackgroundColor: rawColor.cta,
    statusFulfilledTextColor: rawColor.white,
    streamingBolt: rawColor.index,

    svgFill: rawColor.gray7,
    svgStokeLight: rawColor.gray0,
    svgStroke: rawColor.gray4,

    switchReadOnlyKnobBg: rawColor.gray7,
    switchReadOnlyTrackBg: Color(rawColor.cta).alpha(0.1).rgb().string(),

    tableBorder: rawColor.gray0,
    tableRowBackground: rawColor.gray0,
    tableRowHover: rawColor.gray1,
    tableEmphasis: rawColor.blue800,

    text: rawColor.gray7,
    textLight: rawColor.gray0, // FIXME: to be removed later

    timelineActive: rawColor.cta,
    timelineFailure: rawColor.negative,
    timelineNext: rawColor.gray4,
    timelineSuccess: rawColor.positive,
    timelineWarning: rawColor.index,

    transferPendingIconColor: rawColor.index,
    transferProgressBar1: rawColor.brandPink,
    transferProgressBar2: rawColor.positive,
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

    sfdrArticle6: rawColor.gray3,
    sfdrArticle8: rawColor.sfdrArticle8,
    sfdrArticle9: rawColor.sfdrArticle9,

    joinSharevilleIllustration: rawColor.green600,
    joinSharevilleBadge: rawColor.green200,
    joinSharevilleBanner: rawColor.green100,

    quickFilterSelectedBackground: rawColor.blue800,
    quickFilterBackground: rawColor.gray900,
    quickFilterText: rawColor.white,
    quickFilterSelectedText: rawColor.blue500,

    warning: rawColor.index,

    worldMapLand: rawColor.blue600, // not yet in use
    worldMapWater: rawColor.gray800, // not yet in use

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
