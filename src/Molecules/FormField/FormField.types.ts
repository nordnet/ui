import { Props as TooltipProps } from './Tooltip/Tooltip.types';

export type Props = {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  error?: string;
  extraInfo?: string;
  fieldId?: string;
  /** @deprecated use FormGroup component */
  group?: boolean;
  /** Label can be visually hidden */
  hideLabel?: boolean;
  /** Label should always be presented - A11y */
  label: string;
  ref?: React.Ref<HTMLDivElement>;
  /** Decorative only. */
  required?: boolean;

  /**
   * Number is treated as pixels.
   * You need to specify width
   * (better in pixels), because
   * that will affect wrapping
   * of the error/info text
   * underneath
   */
  width?: string | number;
} & TooltipProps;
