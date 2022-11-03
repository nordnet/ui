import { FC, HTMLProps, ReactNode, Ref } from 'react';

export type LinkProps = Partial<HTMLProps<HTMLAnchorElement>> & {
  to: any;
  external?: boolean;
  /** @deprecated use fullServerRedirect instead */
  cms?: boolean;
  fullServerRedirect?: boolean;
  innerRef?: Ref<any>;
  children?: ReactNode;
};

export type LinkProviderProps = {
  link: FC<LinkProps>;
  children: ReactNode;
};

export type ProviderProps = {
  children?: ReactNode;
};
