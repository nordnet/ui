import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';

export const CandleSticks = (props: BaseProps) => {
  return (
    <IconBase {...props} viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M4 0v4h1v3H4v9H2V7H1V4h1V0h2zm5 0v8h1v5H9v3H7v-3H6V8h1V0h2zm5 0v2h1v2h-1v12h-2V4h-1V2h1V0h2z"
      />
    </IconBase>
  );
};

CandleSticks.displayName = 'Icon.CandleSticks';
