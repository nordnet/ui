export type Props = {
  className?: string;
  checkedInitially?: boolean;
  /**
   * Using this prop will enable controlled behaviour
   * https://reactjs.org/docs/forms.html#controlled-components
   */
  checked?: boolean;
  disabled?: boolean;
  label: string | React.ReactNode;
  hiddenLabel?: boolean;
  /**
   * In controlled mode the parameter checked is unnecessary and therefore dropped
   */
  onClick?: (e: React.MouseEvent, checked?: boolean) => void;
  readOnly?: boolean;
};

export type SwitchToggleProps = Props & {
  valueLeft: string;
  valueRight: string;
  width?: number;
};

export type KnobWidth = {
  knobwidth?: number;
};
