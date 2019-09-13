import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';

export const Alert = (props: BaseProps) => {
  return (
    <IconBase {...props}>
      <path d="M9.789 21.779C9.789 23.007 10.778 24 12 24a2.215 2.215 0 0 0 2.211-2.221H9.79zM12 5.023c3.067 0 5.556 2.5 5.556 5.582v7.814H6.444v-7.814c0-3.081 2.49-5.582 5.556-5.582zM12 0c-.922 0-1.667.748-1.667 1.674V2.98c-3.489.76-6.11 3.885-6.11 7.625v6.697L2 19.535v1.116h20v-1.116l-2.222-2.233v-6.697c0-3.74-2.622-6.865-6.111-7.625V1.674C13.667.748 12.922 0 12 0zm1.111 7.256H10.89v3.349H7.556v2.232h3.333v3.349h2.222v-3.349h3.333v-2.232h-3.333v-3.35z" />
    </IconBase>
  );
};

Alert.displayName = 'Icon.Alert';
