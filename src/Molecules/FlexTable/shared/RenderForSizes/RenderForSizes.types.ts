import { Theme, MediaQuery } from '../../../../theme/theme.types';

export type ScreenSize = 'xs' | keyof Theme['breakpoints'];

export interface ScreenSizeProps {
  [key: string]: any;
}

export type PropsForScreenSizes = { [size in ScreenSize]?: ScreenSizeProps };

export type ScreenSizePropsAndSize = ScreenSizeProps & { size: ScreenSize };

export type GetMediaQuery = (
  theme: Theme,
  currentSize: ScreenSize,
  nextSize: ScreenSize | null,
) => MediaQuery;

export type GetPropsForScreenSizes = (
  propsForScreenSizes: PropsForScreenSizes,
) => Array<ScreenSizePropsAndSize>;

export type RenderForSizesComponent = React.FC<
  PropsForScreenSizes & {
    children: (props: ScreenSizePropsAndSize) => React.ReactNode;
  }
>;

export type ChildWrapperComponent = React.FC<
  ScreenSizePropsAndSize & { children: (props: ScreenSizePropsAndSize) => React.ReactNode }
>;
