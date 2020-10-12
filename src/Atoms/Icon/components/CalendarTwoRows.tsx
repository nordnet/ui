import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';

export const CalendarTwoRows = (props: BaseProps) => {
  return (
    <IconBase {...props}>
      <path d="M8 3v2h8V3h2v2h4v16H2V5h4V3h2zm12 7H4v9h16v-9zM7 15v2H5v-2h2zm3 0v2H8v-2h2zm3 0v2h-2v-2h2zm3 0v2h-2v-2h2zm3 0v2h-2v-2h2zM7 12v2H5v-2h2zm3 0v2H8v-2h2zm3 0v2h-2v-2h2zm3 0v2h-2v-2h2zm3 0v2h-2v-2h2zm1-5H4v1h16V7z" />
    </IconBase>
  );
};

CalendarTwoRows.displayName = 'Icon.CalendarTwoRows';
