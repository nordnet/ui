import React, { FC } from 'react';
import { Link as RRLink, MemoryRouter } from 'react-router-dom';
import { LinkProvider } from '.';
import { LinkProps, ProviderProps } from './types';

export const RawLink: FC<LinkProps> = (props) => {
  const {
    innerRef,
    to,
    external,
    cms,
    fullServerRedirect,
    children,
    className,
    target = external ? '_blank' : undefined,
    rel = external ? 'noopener noreferrer nofollow' : undefined,
    ...rest
  } = props;
  if (cms || fullServerRedirect || external) {
    return (
      <a href={to} ref={innerRef} target={target} rel={rel} className={className} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <RRLink ref={innerRef as any} className={className} to={to} rel={rel} target={target} {...rest}>
      {children}
    </RRLink>
  );
};

export const Provider: FC<ProviderProps> = ({ children }) => {
  return (
    <MemoryRouter>
      <LinkProvider link={RawLink}>
        <>{children}</>
      </LinkProvider>
    </MemoryRouter>
  );
};
