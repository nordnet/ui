export type Props = {
  /**
   * Main indicator value
   * Needs to be between 0 and max */
  value: number;

  /** Text in the main indicator */
  valueLabel?: string;

  /** Color of the main indicator */
  valueColor?: string;

  /**
   * Average indicator value
   * Needs to be between 0 and max if present */
  averageValue?: number;

  /** Text in the average indicator */
  averageValueLabel?: string;

  /** X axis min label */
  /** @default null */
  minLabel?: React.ReactNode;

  /** X axis max label */
  /** @default null */
  maxLabel?: React.ReactNode;
};

export type IndicatorProps = {
  $value: number;
  $valueColor?: string;
  $leftCollision: boolean;
  $rightCollision: boolean;
};

export type AverageLabelProps = {
  $averageValue?: number;
  $leftCollision: boolean;
  $rightCollision: boolean;
};

export type LineProps = {
  $value: number;
  $valueColor?: string;
  $averageValue?: number;
};

export type CheckCollision = (a: HTMLElement, b: HTMLElement) => boolean;
