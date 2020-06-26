import { DENSITY_PADDING_LARGE, DENSITY_PADDING_MEDIUM, DENSITY_PADDING_SMALL } from './constants';
import { Density, FontSize } from './shared.types';

export const getFontSizeTypographyType = (fontSize: FontSize) =>
  fontSize === 'm' ? 'secondary' : 'tertiary';

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
