import React, { createContext } from 'react';
import { LinkProps } from './types';

export const DefaultLink = ({ to, children, innerRef, ...rest }: LinkProps) => {
  return (
    <a ref={innerRef} {...rest} href={to}>
      {children}
    </a>
  );
};

export const LinkContext = createContext(DefaultLink);

export default LinkContext;
