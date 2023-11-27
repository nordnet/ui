import { Theme } from '../../theme/theme.types';

type Values<ObjectType> = ObjectType extends Record<any, infer K> ? K : never; // c
export type ColorFn = (t: Theme) => Values<Theme['color']>;
export type Variant = 'big' | 'small' | 'player';

export type InternalProps = {
  $disabled?: boolean;
  $sliderColor?: ColorFn;
  $variant?: Variant;
};

export type Props = {
  variant?: Variant;
  /**
   * @param {number} defaultHighValue The default high value.
   * Must be greater than defaultLowValue
   */
  defaultHighValue?: number;
  /**
   * @param {number} defaultLowValue The default low value.
   * Must be less than defaultLowValue
   */
  defaultLowValue?: number;
  disabled?: boolean;
  formatter?: (value: number) => string;
  /**
   * @param {number} max Max value.
   * Must be greater than min value
   */
  max: number;
  /**
   * @param {number} max Min value.
   * Must be less th max value
   */
  min: number;
  onChange?: (v: { low: number; high: number }) => void;
  readOnly?: boolean;
  showTooltip?: boolean;
  sliderColor?: ColorFn;
  /**
   * @param {number} step The step size of the slider.
   * Must be greater than 0
   */
  step: number;
};

export type Component = React.FC<Props>;
