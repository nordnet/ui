export type Props = {
  /** Needs to be between 0 and max  */
  value: number;

  /** The number of bars to render */
  /** @default 7 */
  max?: number;

  /** X axis label */
  /** @default null */
  axisLabel?: React.ReactNode;

  /** Height of bars in units */
  /** @default 3 */
  barHeight?: number;

  /** Distance in units between bars */
  /** @default 1 */
  gutter?: number;
};

export type BarProps = {
  $isActive: boolean;
  $barHeight: number;
};
