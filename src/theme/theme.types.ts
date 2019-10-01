type MediaQuery = string;
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
  positive: '#00D200';
  negative: '#FF1900';
  index: '#FFCF00';

  // ACCESSIBLE FUNCTIONAL COLORS
  a11yCta: '#2D67FF';
  a11yPositive: '#008A00';
  a11yNegative: '#E81700';
  a11yIndex: '#C15700';
};

type NumberOrObjectWithNumber = number | { size: number };

export type Theme = {
  /** Semantic names for the colors */
  color: {
    /** white */
    backgroundInput: RawColor['white'];
    /** gray7 */
    background: RawColor['gray7'];
    /** gray0 */
    text: RawColor['gray0'];
    /** white */
    textLight: RawColor['white'];
    /** gray2 */
    label: RawColor['gray2'];
    /** cta */
    buy: RawColor['cta'] | RawColor['a11yCta'];
    /** white */
    buttonText: RawColor['white'];
    /** cta */
    borderActive: RawColor['cta'] | RawColor['a11yCta'];
    /** negative */
    sell: RawColor['negative'] | RawColor['a11yNegative'];
    /** cta */
    cta: RawColor['cta'] | RawColor['a11yCta'];
    /** positive */
    positive: RawColor['positive'] | RawColor['a11yPositive'];
    /** negative */
    negative: RawColor['negative'] | RawColor['a11yNegative'];
    /** index */
    warning: RawColor['index'] | RawColor['a11yIndex'];
    /** white */
    card: RawColor['white'];
    /** gray6 */
    divider: RawColor['gray6'];
    /** gray0 */
    backgroundDark: RawColor['gray0'];
    /** @deprecated gray3 */
    disabled: RawColor['gray3'];
    /** gray3 */
    disabledText: RawColor['gray3'];
    /** gray6 */
    disabledBackground: RawColor['gray6'];
    /** white */
    buttonSecondaryBackground: RawColor['white'];
    /** 63 percent of gray2 */
    modalBackdrop: string;
    /** white */
    module: RawColor['white'];
    /** 3 percent of black */
    shadowCard: string;
    /** 3 percent of black */
    shadowModal: string;
    /** 5 percent of black */
    shadowInput: string;
    /** 5 percent of black */
    shadowSwitch: string;
    /** black */
    spinnerBlack: RawColor['black'];
    /** white */
    spinnerWhite: RawColor['white'];
    /** gray0 */
    svgFill: RawColor['gray0'];
    /** gray2 */
    svgStroke: RawColor['gray2'];
    /** gray4 */
    inputBorder: RawColor['gray4'];
    /** gray1 */
    inputBorderHover: RawColor['gray1'];
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
  };

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
    /** Tablet, mobile size: 736; offset: 2; */
    sm: Record<'offset' | 'size', number>;
    /** Tablet, desktop size: 952; offset: 2; */
    md: Record<'offset' | 'size', number>;
    /** Desktop size: 1268; offset: 52; */
    lg: Record<'offset' | 'size', number>;
    /** Desktop big size: 1576; offset: 2 */
    xl: Record<'offset' | 'size', number>;
  };

  size: {
    /** Mobile */
    xs: 360;
    /** Tablet, mobile */
    sm: 736;
    /** Tablet, desktop */
    md: 952;
    /** Desktop */
    lg: 1268;
    /** Desktop big */
    xl: 1576;
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
};
