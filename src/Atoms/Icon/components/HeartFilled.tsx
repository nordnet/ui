import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';

export const HeartFilled = (props: BaseProps) => {
  return (
    <IconBase {...props} viewBox="0 0 32 32">
      <path
        fillRule="evenodd"
        d="M22.407 2.043a8.785 8.785 0 017.038 2.483 8.55 8.55 0 01.202 11.987l-.2.205L16.007 30 2.572 16.71a8.511 8.511 0 01-2.11-8.855c1.068-3.107 3.837-5.345 7.14-5.77 3.301-.426 6.562 1.034 8.406 3.765a8.728 8.728 0 016.399-3.807z"
      />
    </IconBase>
  );
};

HeartFilled.displayName = 'Icon.HeartFilled';
