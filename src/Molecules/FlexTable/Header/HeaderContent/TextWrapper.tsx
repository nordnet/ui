import React from 'react';
import { getFontSizeTypographyType } from '../../shared/textUtils';
import { TextWrapperComponent } from './HeaderContent.types';
import { TruncateWithTooltip, Typography } from '../../../..';

export const TextWrapper: TextWrapperComponent = ({ fontSize = 'm', sorted, children }) => (
  <TruncateWithTooltip label={children}>
    <Typography
      type={getFontSizeTypographyType(fontSize)}
      color={t => (sorted ? t.color.text : t.color.label)}
      weight={sorted ? 'bold' : 'regular'}
    >
      {children}
    </Typography>
  </TruncateWithTooltip>
);
