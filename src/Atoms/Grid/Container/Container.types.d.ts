import { Props as CSSGridProps } from './CssGrid/CssGridContainer.types';
import { Props as FlexboxGridProps } from './Flexbox/FlexboxContainer.types';

export type PixelOrUnit = number | string;

export type Props = CSSGridProps | FlexboxGridProps;
