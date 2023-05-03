export type BaseProps = {
  ariaLabelPrevious?: string;
  ariaLabelNext?: string;
  open?: boolean;
  /**
   * Specifies whether date should be selected while user types without need to submit
   * @default false
   */
  allowDateUpdateOnType?: boolean;
  onChange?: (date: Date) => void;
  onBlur?: (date: Date) => void;
  label: string;
  disableDate?: (date: Date) => boolean;
  disabled?: boolean;
  enableDate?: (date: Date) => boolean;
  id: string;
  selectedDate?: Date;
  inputSize?: 's';
  width?: number | string;
  ref?: React.Ref<HTMLDivElement>;
  yearSelectLength?: number;
  selectMonthLabel?: string;
  selectYearLabel?: string;
  errorMessage?: string;
};

interface FullscreenProps {
  /**
   * Renders datepicker inside a full screen modal on "mobile-sized" resolutions
   */
  title: string;
  clearButtonLabel: string;
  confirmButtonLabel: string;
  dateLabel?: string;
}

export interface PropsWithFullscreen extends BaseProps {
  fullscreenOnMobile: true;
  fullscreenProps: FullscreenProps;
}

export interface PropsWithoutFullscreen extends BaseProps {
  fullscreenOnMobile?: false;
  fullscreenProps?: never;
}

export type Props = PropsWithFullscreen | PropsWithoutFullscreen;
