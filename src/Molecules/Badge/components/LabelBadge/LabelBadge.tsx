import React from 'react';
import styled from 'styled-components';
import { Typography } from '../../../..';
import { LabelBadgeComponent, LabelBadgeProps, StyledBaseBadgeProps } from './LabelBadge.types';
import { BaseBadge } from '../BaseBadge';
import {
  PRIMARY_HORIZONTAL_PADDING,
  VERTICAL_PADDING,
  SECONDARY_HORIZONTAL_PADDING,
  PRIMARY_MIN_WIDTH,
  SECONDARY_MIN_WIDTH,
} from './LabelBadge.constants';

const StyledBaseBadge: React.FC<StyledBaseBadgeProps> = styled(BaseBadge)<StyledBaseBadgeProps>`
  border-radius: ${({ theme }) => theme.borderRadius(2)};
  ${(p) =>
    p.$type === 'primary'
      ? `padding: ${p.theme.spacing.unit(VERTICAL_PADDING)}px ${p.theme.spacing.unit(
          PRIMARY_HORIZONTAL_PADDING,
        )}px;`
      : `padding: ${p.theme.spacing.unit(VERTICAL_PADDING)}px ${p.theme.spacing.unit(
          SECONDARY_HORIZONTAL_PADDING,
        )}px;`}
  ${(p) =>
    p.$type === 'primary'
      ? `min-width: ${p.theme.spacing.unit(PRIMARY_MIN_WIDTH)}px;`
      : `min-width: ${p.theme.spacing.unit(SECONDARY_MIN_WIDTH)}px;`}
`;

export const LabelBadge: LabelBadgeComponent = React.forwardRef<HTMLSpanElement, LabelBadgeProps>(
  (
    {
      badgeColor = (t) => t.color.badgeBackground,
      color = (t) => t.color.badgeTextColor,
      type = 'primary',
      weight,
      children,
      ...htmlProps
    },
    ref,
  ) => {
    return (
      <StyledBaseBadge {...htmlProps} ref={ref} badgeColor={badgeColor} $type={type} variant="rect">
        <Typography
          // Looks weird but according to the design system,
          // Typography's type="secondary" is equal to LabelBadge's type="primary" 😅
          type={type === 'primary' ? 'secondary' : 'tertiary'}
          color={color}
          weight={weight}
        >
          {children}
        </Typography>
      </StyledBaseBadge>
    );
  },
);
