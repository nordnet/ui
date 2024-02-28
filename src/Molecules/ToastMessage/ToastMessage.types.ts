import { ReactNode, Ref } from 'react';

export type Props = {
  label: string | ReactNode;
  icon?: ReactNode;
  linkButton?: ReactNode;
  isVisible?: boolean;
  timeout?: number;
  setIsVisible?: (set: any) => void;
  ref?: Ref<any>;
};
