import { ColorFn } from '../../common/Types/sharedTypes';

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

export { ColorFn };
