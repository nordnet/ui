import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';

export const ExternalLink = (props: BaseProps) => {
  return (
    <IconBase {...props}>
      <path
        d="M6.674.417l16.903.068.068 16.902L21 20.032l-.06-15.025L2.462 23.485.577 21.599 19.053 3.121l-15.022-.06L6.674.416z"
        fillRule="nonzero"
      />
    </IconBase>
  );
};

ExternalLink.displayName = 'Icon.ExternalLink';
