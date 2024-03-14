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
  required?: boolean;
  width?: string | number;
};
