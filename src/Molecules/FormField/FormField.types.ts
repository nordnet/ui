export type LabelAddonProp = {
  children?: React.ReactNode;
  hideLabel?: boolean;
  labelTooltip?: string;
  labelTooltipInModal?: boolean;
  labelTooltipPosition?: 'top' | 'left' | 'bottom' | 'right';
};

export type Props = {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  error?: string;
  extraInfo?: string;
  fieldId?: string;
  /** @deprecated use fieldId */
  forId?: string;
  group?: boolean;
  /** visually hide label */
  hideLabel?: boolean;
  /** Label should always be presented - A11y */
  label: string;
  ref?: React.Ref<HTMLDivElement>;
  required?: boolean;
  /** @deprecated use required */
  showRequired?: boolean;
  /**
   * You need to specify width
   * (better in pixels), because
   * that will affect wrapping
   * of the error/info text
   * underneath
   */
  width?: string | number;
} & LabelAddonProp;
