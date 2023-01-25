export type Props = {
  value: string;

  /** @default '' */
  label?: string;
  /** @default undefined */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  /** @default null */
  icon?: React.ReactNode;
  /** @default false */
  disabled?: boolean;
  /** @default false */
  selected?: boolean;
  /** @default false */
  selectedInitially?: boolean;
  /** @default '' */
  className?: string;
};
