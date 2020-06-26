import React from 'react';
import { Typography, TruncateWithTooltip } from '../../..';
import { TextWrapperComponent } from './Cell.types';
import { getFontSizeTypographyType } from '../shared/textUtils';

export const TextWrapper: TextWrapperComponent = ({ fontSize = 'm', children }) => (
  <TruncateWithTooltip label={children}>
    <Typography type={getFontSizeTypographyType(fontSize)} color={t => t.color.text}>
      {children}
    </Typography>
  </TruncateWithTooltip>
);
