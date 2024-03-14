export type Props = {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  error?: string;
  extraInfo?: string;
  hideLabel?: boolean;
  label?: string;
  labelTooltip?: string;
  labelTooltipInModal?: boolean;
  labelTooltipPosition?: 'top' | 'bottom' | 'left' | 'right';
  /** Decorative only. */
  required?: boolean;
  /** Number is treated as pixels. */
  width?: string | number;
};
