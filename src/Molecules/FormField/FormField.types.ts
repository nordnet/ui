export type LabelAddonProp = {
  labelTooltip?: string;
  labelTooltipPosition?: 'top' | 'left' | 'bottom' | 'right';
  hideLabel?: boolean;
  children?: React.ReactNode;
  labelTooltipInModal?: boolean;
};

export type Props = {
  label?: string;
  hideLabel?: boolean;
  children: React.ReactNode;
  className?: string;
  error?: string;
  extraInfo?: string;
  fieldId?: string;
  /** @deprecated use fieldId */
  forId?: string;
  group?: boolean;
  ref?: React.Ref<HTMLDivElement>;
  required?: boolean;
  /** @deprecated use required */
  showRequired?: boolean;
  disabled?: boolean;

  /**
   * You need to specify width
   * (better in pixels), because
   * that will affect wrapping
   * of the error/info text
   * underneath
   */
  width?: string | number;
} & LabelAddonProp;
