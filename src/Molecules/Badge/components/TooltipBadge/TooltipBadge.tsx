import React from 'react';
import styled from 'styled-components';
import { TooltipBadgeComponent, TooltipBadgeProps } from './TooltipBadge.types';
import { BaseBadge } from '..';
import Typography from '../../../../Atoms/Typography';
import Button from '../../../Button';
import { TooltipBadgeSize } from './TooltipBadge.constants';

const StyledTypography = styled(Typography)`
  font-weight: 800;
  cursor: default;
`;

const StyledBaseBadge = styled(BaseBadge)`
  background-color: 1px solid ${(p) => p.theme.colorTokens.neutral.background_medium};
`;

const StyledButton = styled(Button)`
  ${(p) => `
    :hover {
      cursor: pointer;
      ${StyledTypography} {
        color: ${p.theme.colorTokens.action.text_default};
        cursor: pointer;
      }
      ${StyledBaseBadge} {
        background-color: ${p.theme.colorTokens.action.background_weak};
      }
    }
    
    :focus {
      ${StyledBaseBadge} {
        border: 2px solid ${p.theme.colorTokens.action.border_focus};
      }
    }
    
    `}
`;

const TooltipBadgeContent = React.forwardRef<HTMLSpanElement, { baseBadgeSize: number }>(
  ({ baseBadgeSize, ...htmlProps }, ref) => {
    const typographyType = baseBadgeSize === TooltipBadgeSize.s ? 'caption' : 'secondary';

    return (
      <StyledBaseBadge
        {...htmlProps}
        ref={ref}
        badgeColor={(t) => t.colorTokens.neutral.background_medium}
        badgeSize={baseBadgeSize}
        symmetricShape
      >
        <StyledTypography color={(t) => t.colorTokens.neutral.text_default} type={typographyType}>
          ?
        </StyledTypography>
      </StyledBaseBadge>
    );
  },
);

export const TooltipBadge: TooltipBadgeComponent = React.forwardRef<
  HTMLSpanElement,
  TooltipBadgeProps
>(
  (
    // explicitly types props to remove children (which is added by forwardRef).
    { badgeSize = 'l', onClick, ...htmlProps }: TooltipBadgeProps,
    ref,
  ) => {
    const baseBadgeSize = typeof badgeSize === 'number' ? badgeSize : TooltipBadgeSize[badgeSize];

    return onClick ? (
      <StyledButton variant="neutral" onClick={onClick}>
        <TooltipBadgeContent {...htmlProps} ref={ref} baseBadgeSize={baseBadgeSize} />
      </StyledButton>
    ) : (
      <TooltipBadgeContent {...htmlProps} ref={ref} baseBadgeSize={baseBadgeSize} />
    );
  },
);
