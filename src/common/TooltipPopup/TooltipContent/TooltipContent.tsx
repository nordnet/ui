import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { ColorFn } from 'common/Types';
import { StyledTooltipProps } from './TooltipContent.types';
import { BORDER_SIZE } from '../consts';
import { Typography } from '../../..';

const StyledTooltip = styled.div<StyledTooltipProps>`
  padding: ${(p) => p.theme.spacing.unit(1)}px ${(p) => p.theme.spacing.unit(2)}px;
  box-shadow: 0 10px 16px ${(p) => p.theme.color.shadowModal};
  background: ${(p) => p.backgroundColor(p.theme)};
  border: solid ${BORDER_SIZE}px ${(p) => p.borderColor(p.theme)};
  ${(p) => (p.maxWidth ? `max-width: ${p.theme.spacing.unit(p.maxWidth)}px;` : '')}
  overflow-wrap: break-word;
`;

type Props = {
  readonly maxWidth?: any;
  readonly label?: any;
  readonly ariaLabel?: any;
  readonly backgroundColor: ColorFn;
  readonly borderColor: ColorFn;
};

const TooltipContent = forwardRef<HTMLDivElement, Props>(
  ({ label, ariaLabel, maxWidth, backgroundColor, borderColor, ...htmlDivProps }, ref) => {
    return (
      <StyledTooltip
        ref={ref as any}
        maxWidth={maxWidth}
        aria-label={ariaLabel}
        role={ariaLabel ? 'tooltip' : undefined}
        backgroundColor={backgroundColor}
        borderColor={borderColor}
        {...htmlDivProps}
      >
        <Typography type="tertiary">{label}</Typography>
      </StyledTooltip>
    );
  },
);

export default TooltipContent;
