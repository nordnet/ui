import React from 'react';
import { StyledTruncateTooltip, Text } from '../shared';

type TextWrapperProps = {
  /**
   * Truncate the text inside and a tooltip on hover when truncated
   * @default true
   */
  truncate?: boolean;
  className?: string;
  weight?: string;
  children?: React.ReactNode;
};

export const TextWrapper = ({ className, truncate = true, weight, children }: TextWrapperProps) => {
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
