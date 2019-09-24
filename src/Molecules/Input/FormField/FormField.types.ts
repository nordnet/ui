export type Props = {
  /** Label should always be presented - A11y */
  label: string;
  /** But you can hide it visually */
  hideLabel?: boolean;

  className?: string;
  error?: string;
  extraInfo?: string;
  fieldId?: string;
  forId?: string;
  group?: boolean;
  required?: boolean;

  /**
   * You need to specify width
   * (better in pixels), because
   * that will affect wrapping
   * of the error/info text
   * underneath
   */
  width?: string | number;
};
