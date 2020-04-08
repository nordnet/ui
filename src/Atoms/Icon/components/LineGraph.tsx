import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';

export const LineGraph = (props: BaseProps) => {
  return (
    <IconBase {...props} viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M2 0v13.999L16 14v2l-14-.001V16H0V0h2zm12.213.034l1.757.955-4.531 8.34-3.991-2.014-2.647 5.189-1.782-.909 3.552-6.961 4.036 2.036L14.213.034z"
      />
    </IconBase>
  );
};

LineGraph.displayName = 'Icon.LineGraph';
