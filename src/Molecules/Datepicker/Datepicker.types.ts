export type Props = {
  open?: boolean;
  onChange?: (date: Date) => void;
  label: string;
  locale?: string;
  dateFormat?: string;
  disabled?: boolean;
  width?: string | number;
  ref?: React.Ref<HTMLDivElement>;
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
};
