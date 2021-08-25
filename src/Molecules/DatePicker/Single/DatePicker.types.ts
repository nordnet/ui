import { ReactElement } from 'react';
import { RANGE_DATE_PICKER, REGULAR_DATE_PICKER } from '../shared/constants';

type DatePickerVariant = typeof REGULAR_DATE_PICKER | typeof RANGE_DATE_PICKER;

interface Fullscreen {
  /**
   * Renders datepicker inside a full screen modal on "mobile-sized" resolutions
   */
  fullscreenOnMobile?: boolean;
  fullscreenTitle?: ReactElement | string;
  fullscreenCloseButtonTitle?: ReactElement | string;
}

export interface PropsWithFullscreen extends Fullscreen {
  fullscreenOnMobile: true;
  fullscreenCloseButtonTitle: ReactElement | string;
}

export interface PropsWithoutFullscreen extends Fullscreen {
  fullscreenOnMobile?: false;
  fullscreenTitle?: never;
  fullscreenCloseButtonTitle?: never;
}

type FullscreenProps = PropsWithoutFullscreen | PropsWithFullscreen;

export type Props = {
  ariaLabelPrevious?: string;
  ariaLabelNext?: string;
  open?: boolean;
  allowDateUpdateOnType?: boolean;
  onChange?: (date: Date, endDate?: Date | null) => void;
  onBlur?: (date: Date, endDate?: Date | null) => void;
  label: string;
  disableDate?: (date: Date) => boolean;
  disabled?: boolean;
  enableDate?: (date: Date) => boolean;
  id: string;
  selectedDate?: Date;
  selectedEndDate?: Date;
  inputValue?: string;
  variant?: DatePickerVariant;
  inputSize?: 's';
  width?: number | string;
  ref?: React.Ref<HTMLDivElement>;
  yearSelectLength?: number;
} & FullscreenProps;
