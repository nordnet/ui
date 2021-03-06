import React from 'react';
import { LinkProviderProps } from './types';
import LinkContext from './context';

export const LinkProvider = ({ link, children }: LinkProviderProps) => {
  return <LinkContext.Provider value={link}>{children}</LinkContext.Provider>;
};

export default LinkProvider;
