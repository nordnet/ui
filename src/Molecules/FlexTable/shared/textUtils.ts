import { Density, FontSize } from './shared.types';

export const getFontSizeTypographyType = (fontSize: FontSize) =>
  fontSize === 'm' ? 'secondary' : 'tertiary';

// TODO: use theme spacing (on the following 3 constants)
const DENSITY_PADDING_SMALL = 0;
const DENSITY_PADDING_MEDIUM = 4;
const DENSITY_PADDING_LARGE = 8;

export const getDensityPaddings = (density: Density) => {
  switch (density) {
    case 's':
      return DENSITY_PADDING_SMALL;
    case 'm':
      return DENSITY_PADDING_MEDIUM;
    case 'l':
      return DENSITY_PADDING_LARGE;
    default:
      return DENSITY_PADDING_MEDIUM;
  }
};
