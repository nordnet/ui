import React from 'react';
import { TextWrapperProps } from './Footer.types';
import { StyledTruncateTooltip, Text } from '../shared';

export const TextWrapper = ({
  children,
  weight = 'bold',
  truncate = true,
  className,
}: TextWrapperProps) => {
  if (!truncate) {
    return (
      <Text className={className} weight={weight} color={(t) => t.color.text}>
        {children}
      </Text>
    );
  }

  return (
    <StyledTruncateTooltip label={children}>
      <Text className={className} weight={weight} color={(t) => t.color.text}>
        {children}
      </Text>
    </StyledTruncateTooltip>
  );
};
