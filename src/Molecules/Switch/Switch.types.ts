export type Props = {
  className?: string;
  defaultOn?: boolean;
  disabled?: boolean;
  labelText: string;
  onClick?: (e: React.MouseEvent, checked: boolean) => void;
};
