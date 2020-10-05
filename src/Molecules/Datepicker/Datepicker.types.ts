export type Props = {
  open?: boolean;
  onChange?: (date: Date) => void;
  label: string;
  locale?: string;
  dateFormat?: string;
  disableDate?: (date: Date) => boolean;
  disabled?: boolean;
  enableDate?: (date: Date) => boolean;
  id: string;
  width?: string | number;
  ref?: React.Ref<HTMLDivElement>;
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
};
