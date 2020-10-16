export type Props = {
  ariaLabelPrevious?: string;
  ariaLabelNext?: string;
  open?: boolean;
  onChange?: (date: Date) => void;
  label: string;
  disableDate?: (date: Date) => boolean;
  disabled?: boolean;
  enableDate?: (date: Date) => boolean;
  id: string;
  width?: number;
  ref?: React.Ref<HTMLDivElement>;
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
};
