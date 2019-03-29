export type Props = {
  order?: number;
  grow?: number;
  shrink?: number;
  basis?: string;
  flex?: string;
  align?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  size?: number | 'string';
};

export type PropsWithGutter = {
  gutter?: number;
} & Props;
