export type Props = {
  className?: string;
  defaultOn?: boolean;
  disabled?: boolean;
  labelText: string;
  onClick?: React.MouseEventHandler;
  onChange?: (checked: boolean) => void;
};
