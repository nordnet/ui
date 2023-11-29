export type SelectionCard = {
  title: string | React.ReactNode;
  /** @default '' */
  text?: string | React.ReactNode;
  /** @default undefined */
  onChange?: (value: any) => void;
  /** @default null */
  icon?: React.ReactNode;
  /** @default '' */
  imageUrl?: string;
  /** @default '' */
  imageAlt?: string;
  tag?: string;
  /** @default false */
  horizontal?: boolean;
  /** @default false */
  border?: boolean;
  /** @default false */
  disabled?: boolean;
  /** @default false */
  error?: boolean;
  /** @default undefined using this prop will enabled controlled behavior */
  selected?: boolean;
  /** @default false */
  outline?: boolean;
  /** @default false */
  selectedInitially?: boolean;
};

export type SelectionCardComponent = React.FC<SelectionCard>;
