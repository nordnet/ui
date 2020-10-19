import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';

export const TrendlineArrowhead = (props: BaseProps) => {
  return (
    <IconBase {...props} viewBox="0 0 32 32">
      <path
        fillRule="evenodd"
        d="M29.613 13.38L32 5l-7.986 2.653 1.564 1.6-7.09 7.541-4.804-5.681L0 24.027l2.537 2.693 10.844-10.236 4.963 5.866 9.822-10.448z"
      />
    </IconBase>
  );
};

TrendlineArrowhead.displayName = 'Icon.TrendlineArrowhead';
