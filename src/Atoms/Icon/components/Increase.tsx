import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';

export const Increase = (props: BaseProps) => {
  return (
    <IconBase {...props} viewBox="0 0 32 31">
      <g fillRule="evenodd">
        <path d="M32 28v3H0v-3h32zM16 .10781753L26 10.1848175v4.434l-8.445-8.50999997.0005556 19.78336497h-3.1111112L14.444 6.10781753 6 14.6178175v-4.434L16 .10781753z" />
      </g>
    </IconBase>
  );
};

Increase.displayName = 'Icon.Increase';
