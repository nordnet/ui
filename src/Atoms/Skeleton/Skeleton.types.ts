export type StringOrNumber = string | number;

export type Props = {
  className?: string;
  /**
   * Number as value will translate into units.
   * This prop is not applicable to text variant
   */
  height?: StringOrNumber;
  /** Number as value will translate into units */
  width?: StringOrNumber;
  /** @default 'text' */
  variant?: 'text' | 'rect' | 'circle';
  /**
   * Number as value will translate to milliseconds .
   * This props is false by default .
   * If true, the default delay is 1000ms
   */
  delay?: boolean | number;
};

export type SkeletonComponent = React.FunctionComponent<Props>;
