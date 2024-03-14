import React from 'react';
import { Typography } from '../../../..';

import { StyledNestedBadge, StyledFallback, StyledFlag, StyledImg } from './NestedBadge.styles';
import { NestedBadgeComponent } from './NestedBadge.types';

const isValidCountry = (country: string): boolean => {
  return ['SE', 'DK', 'FI', 'NO', 'US', 'DE', 'CA', 'GB'].includes(country);
};

export const NestedBadge: NestedBadgeComponent = ({
  alt,
  badgeSize = 'l',
  className,
  country,
  fallback,
  logoUrl,
}) => (
  <StyledNestedBadge $badgeSize={badgeSize} className={className}>
    {logoUrl ? (
      <StyledImg src={`${logoUrl}?w=48&q=90&fm=webp`} alt={alt} $badgeSize={badgeSize} />
    ) : (
      <StyledFallback $badgeSize={badgeSize}>
        <Typography
          type="secondary"
          weight="bold"
          color={(t) => t.colorTokens.neutral.text_default}
        >
          {fallback?.charAt(0).toUpperCase()}
        </Typography>
      </StyledFallback>
    )}
    {country && isValidCountry(country) && (
      <>
        <StyledFlag country={country} size="m" $badgeSize={badgeSize} />
      </>
    )}
  </StyledNestedBadge>
);
