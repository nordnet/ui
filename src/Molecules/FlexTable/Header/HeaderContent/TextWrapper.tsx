import React from 'react';
import { TextWrapperProps } from './HeaderContent.types';
import { StyledTruncateTooltip, Text } from '../../shared';

export const TextWrapper = ({ className, sorted, truncate = true, children }: TextWrapperProps) => {
  if (!truncate) {
    return (
      <Text
        className={className}
        color={(t) => (sorted ? t.color.text : t.color.label)}
        weight={sorted ? 'bold' : 'regular'}
      >
        {children}
      </Text>
    );
  }

  return (
    <StyledTruncateTooltip label={children}>
      <Text
        className={className}
        color={(t) => (sorted ? t.color.text : t.color.label)}
        weight={sorted ? 'bold' : 'regular'}
      >
        {children}
      </Text>
    </StyledTruncateTooltip>
  );
};
