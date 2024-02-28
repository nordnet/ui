import { ReactNode, Ref } from 'react';

export type Props = {
  label: string | ReactNode;
  icon?: ReactNode;
  linkButton?: ReactNode;
  isVisible?: boolean;
  timeout?: number;
  setIsVisible?: (visible: boolean) => void;
  ref?: Ref<any>;
  key?: string;
};
