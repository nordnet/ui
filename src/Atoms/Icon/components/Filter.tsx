import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';

export const Filter = (props: BaseProps) => {
  return (
    <IconBase {...props} viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M0 0l5 8.26v7.66l6-4.19V8.28L15.98 0H0zm3.55 2h8.9L9 7.72v2.97l-2 1.4v-4.4L3.55 2z"
      />
    </IconBase>
  );
};

Filter.displayName = 'Icon.Filter';
