import { Props as TooltipProps } from './Tooltip/Tooltip.types';

export type Props = {
  /** Label should always be presented - A11y */
  label: string;
  /** But you can hide it visually */
  hideLabel?: boolean;
  children: React.ReactNode;
  className?: string;
  error?: string;
  extraInfo?: string;
  fieldId?: string;
  group?: boolean;
  ref?: React.Ref<HTMLDivElement>;
  required?: boolean;
  disabled?: boolean;

  /**
   * You need to specify width
   * (better in pixels), because
   * that will affect wrapping
   * of the error/info text
   * underneath
   */
  width?: string | number;
} & TooltipProps;
