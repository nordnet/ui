import { Theme } from '../../theme/theme.types';

export type ColorFn = (t: Theme) => Values<Theme['color']>;

type Values<ObjectType> = ObjectType extends Record<any, infer K> ? K : never; // can move it to util types

export type StyledIllustrationBaseProps = {
  $color?: string;
  inline?: boolean;
};

export type IllustrationProps = {
  className?: string;
  title?: string;
  color?: ColorFn | string;
  secondaryColor?: ColorFn | string;
  inline?: boolean;
};

export type InternalProps = IllustrationProps & {
  children: React.ReactNode;
  ref?: React.Ref<SVGSVGElement>;
  width: number;
  height: number;
};
