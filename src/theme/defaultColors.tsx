const colorScales = {
  // GRAY
  white: '#FFFFFF',
  gray100: '#F5F5F5',
  gray200: '#EEEEEE',
  gray300: '#E0E0E0',
  gray400: '#BDBDBD',
  gray500: '#9E9E9E',
  gray600: '#6E6E6E',
  gray700: '#424242',
  gray800: '#212121',
  gray900: '#121212',
  black: '#000000',

  // BLUE
  blue100: '#EAF0FF',
  blue200: '#D6E1FF',
  blue300: '#ADC4FF',
  blue400: '#6690FF',
  blue450: '#00C8F5',
  blue500: '#336BFF',
  blue600: '#2650BF',
  blue700: '#1F4099',
  blue800: '#142B66',
  blue900: '#0A1533',

  // PINK
  pink100: '#F6E7EE',
  pink200: '#FFD5E6',
  pink300: '#FFAACD',
  pink400: '#FF6AA8',
  pink500: '#FF2B83',
  pink600: '#CC2269',
  pink700: '#AC135A',
  pink800: '#78013A',
  pink900: '#590F2E',

  // GREEN
  green100: '#EDFAE8',
  green200: '#DCF5D2',
  green300: '#B9EAA6',
  green400: '#85DA62',
  green450: '#D2F500',
  green500: '#51CB20',
  green600: '#41A21A',
  green700: '#368716',
  green800: '#20510D',
  green900: '#102906',

  // TEAL
  teal100: '#E5FDFC',
  teal200: '#CCFCF9',
  teal300: '#99F9F3',
  teal400: '#00F0E1',
  teal500: '#00C0B4',
  teal600: '#009087',
  teal700: '#00605A',
  teal800: '#004844',
  teal900: '#00302D',

  // YELLOW
  yellow100: '#FFFAE5',
  yellow200: '#FFF3BD',
  yellow300: '#FFE98A',
  yellow400: '#FFCF00',
  yellow500: '#E6BB00',
  yellow600: '#C49F00',
  yellow700: '#9E8000',
  yellow800: '#614F00',
  yellow900: '#332900',

  // RED
  red100: '#FFECEA',
  red200: '#FFC7C1',
  red300: '#FFA399',
  red400: '#FF7E70',
  red500: '#FF4733',
  red600: '#CC3929',
  red700: '#992B1F',
  red800: '#661C14',
  red900: '#330E0A',
};
const defaultColors = {
  // BRAND
  brandBlue: '#00C8F5',
  brandGreen: '#D2F500',
  brandPink: '#FF2B83', // Included in Dark Mode
  brandTurquoise: '#00F0E1', // Included in Dark Mode

  // COMPLEMENTARY BRAND COLOURS
  complementaryBlue1: '#385E9D',
  complementaryBlue2: '#131F4F',
  complementaryGreen1: '#3A913F',
  complementaryGreen2: '#023C00',
  complementaryPink1: '#AC135A',
  complementaryPink2: '#78013A',
  complementaryTurquoise1: '#009195', // Included in Dark Mode
  complementaryTurquoise2: '#01424C', // Included in Dark Mode

  // FUNCTION
  functionBlue: '#336BFF',
  functionRed: '#FF4733',
  functionGreen: '#51CB20',
  functionYellow: '#FFCF00',

  // GRAYSCALE PALETTE
  black: '#000000', // Included in Dark Mode
  gray100: '#F5F5F5',
  gray800: '#212121',
  gray900: '#121212', // Included in Dark Mode
  gray0: '#282823', // Included in Dark Mode
  gray1: '#4B4B46', // Included in Dark Mode
  gray2: '#6E6E69', // Included in Dark Mode
  gray3: '#A0A09B', // Included in Dark Mode
  gray4: '#BCBCB6', // Included in Dark Mode
  gray5: '#D7D7D2', // Included in Dark Mode
  gray6: '#EBEBE8', // Included in Dark Mode
  gray7: '#F5F5F5', // Included in Dark Mode
  white: '#FFFFFF', // Included in Dark Mode

  // FUNCTIONAL COLOURS FOR PRODUCT DEVELOPMENT
  cta: '#0046FF',
  ctaHover: '#003BD9',
  ctaPressed: '#0030B2',
  positive: '#368716', // Included in Dark Mode
  negative: '#CC2269', // Included in Dark Mode
  negativeHover: '#AC135A',
  negativePressed: '#78013A',
  index: '#FFCF00', // Included in Dark Mode
  sfdrArticle9: '#41A21A',
  sfdrArticle8: '#85DA62',
  graphPurple: '#9C88FF',
  graphOrange: '#F0932B',
};

const grayPalette = [
  defaultColors.gray6,
  defaultColors.gray4,
  defaultColors.gray3,
  defaultColors.gray1,
  defaultColors.gray0,
];

export default {
  ...defaultColors,
  ...colorScales,
  palettes: {
    gray: grayPalette,
    pink: [
      defaultColors.brandPink,
      defaultColors.complementaryPink1,
      defaultColors.complementaryPink2,
      defaultColors.brandTurquoise,
      defaultColors.complementaryTurquoise1,
      ...grayPalette,
    ],
    blue: [
      defaultColors.brandBlue,
      defaultColors.complementaryBlue1,
      defaultColors.complementaryBlue2,
      defaultColors.brandTurquoise,
      defaultColors.complementaryTurquoise1,
      colorScales.blue100,
      colorScales.blue400,
      colorScales.blue500,
      colorScales.blue800,
      ...grayPalette,
    ],
    green: [
      defaultColors.brandGreen,
      defaultColors.complementaryGreen1,
      defaultColors.complementaryGreen2,
      defaultColors.brandTurquoise,
      defaultColors.complementaryTurquoise1,
      ...grayPalette,
    ],
    turquoise: [
      defaultColors.brandTurquoise,
      defaultColors.complementaryTurquoise1,
      defaultColors.complementaryTurquoise2,
      defaultColors.brandBlue,
      defaultColors.complementaryBlue1,
      ...grayPalette,
    ],
  },
};
