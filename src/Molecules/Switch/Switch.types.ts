export type Props = {
  className?: string;
  checkedInitially?: boolean;
  /**
   * Using this prop will enable controlled behaviour
   * https://reactjs.org/docs/forms.html#controlled-components
   */
  checked?: boolean;
  disabled?: boolean;
  labelText: string;
  onClick?: (e: React.MouseEvent, checked: boolean) => void;
};
