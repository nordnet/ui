export type BaseProps = {
  ariaLabelPrevious?: string;
  ariaLabelNext?: string;
  open?: boolean;
  /**
   * Specifies whether date should be selected while user types without need to submit
   * @default false
   */
  allowDateUpdateOnType?: boolean;
  onChange?: (date: Date, endDate?: Date | null) => void;
  label: string;
  disableDate?: (date: Date) => boolean;
  disabled?: boolean;
  enableDate?: (date: Date) => boolean;
  id: string;
  selectedDate?: Date;
  selectedEndDate?: Date;
  inputSize?: 's';
  width?: number | string;
  ref?: React.Ref<HTMLDivElement>;
  yearSelectLength?: number;
  /**
   * Allow a range starting and ending in the same day to be selected
   * @default true
   */
  allowSingleDayRange?: boolean;
  selectMonthLabel?: string;
  selectYearLabel?: string;
};

export type PropsWithoutClearButton = BaseProps & {
  showClearButton?: false;
  clearButtonLabel?: never;
};

export type PropsWithClearButton = BaseProps & {
  showClearButton: true;
  clearButtonLabel: string;
};

type PropsWithOrWithoutClearButton = PropsWithoutClearButton | PropsWithClearButton;

interface FullscreenProps {
  /**
   * Renders datepicker inside a full screen modal on "mobile-sized" resolutions
   */
  title: string;
  clearButtonLabel: string;
  confirmButtonLabel: string;
  pickDateLabel?: string;
  fromLabel?: string;
  toLabel?: string;
}

export type PropsWithFullscreen = PropsWithOrWithoutClearButton & {
  fullscreenOnMobile: true;
  fullscreenProps: FullscreenProps;
};

export type PropsWithoutFullscreen = PropsWithOrWithoutClearButton & {
  fullscreenOnMobile?: false;
  fullscreenProps?: never;
};

export type Props = PropsWithFullscreen | PropsWithoutFullscreen;
