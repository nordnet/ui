import { ColorFn } from '../../common/Types/sharedTypes';

export type StyledIconBaseProps = {
  $color?: string;
  inline?: boolean;
};

export type IconProps = {
  className?: string;
  title?: string;
  color?: ColorFn | string;
  inline?: boolean;
};

export type InternalProps = IconProps & {
  children: React.ReactNode;
  ref?: React.Ref<SVGSVGElement>;
  width: number;
  height: number;
};

export { ColorFn };
