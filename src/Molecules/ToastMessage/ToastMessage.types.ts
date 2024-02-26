export type Props = {
  label: string;
  icon?: React.ReactNode;
  linkButton?: React.ReactNode;
  isVisible: boolean;
  timeout?: number;
  setIsVisible?: (set: any) => void;
  ref?: React.SetStateAction<any>;
};
