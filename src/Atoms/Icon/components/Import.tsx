import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';

export const Import = (props: BaseProps) => {
  return (
    <IconBase {...props}>
      <path
        d="M0 22h24v2H0v-2zM12.836 0v15.338l6.333-6.383v3.326l-7.5 7.557-7.5-7.558V8.955l6.334 6.382V0h2.333z"
        fillRule="evenodd"
      />
    </IconBase>
  );
};

Import.displayName = 'Icon.Import';
