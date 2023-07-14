import React, { FC } from 'react';
import styled from 'styled-components';
import { TooltipContentProps } from './TooltipContent.types';
import { BORDER_SIZE } from '../consts';
import { Typography } from '../../..';

type StyledTooltipProps = {
  ref?: React.RefObject<any>;
} & Omit<TooltipContentProps, 'label'>;

const StyledTooltip = styled.div<StyledTooltipProps>`
  padding: ${(p) => p.theme.spacing.unit(1)}px ${(p) => p.theme.spacing.unit(2)}px;
  box-shadow: 0 10px 16px ${(p) => p.theme.color.shadowModal};
  background: ${(p) => p.backgroundColor(p.theme)};
  border: solid ${BORDER_SIZE}px ${(p) => p.borderColor(p.theme)};
  ${(p) => (p.maxWidth ? `max-width: ${p.theme.spacing.unit(p.maxWidth)}px;` : '')}
  overflow-wrap: break-word;
  border-radius: ${(p) => p.theme.borderRadius4};

  ${(p) =>
    p.bottomSheet &&
    `
        width: 100%;
        max-width: none;
        box-sizing: border-box;
        border-radius: ${p.theme.borderRadius20} ${p.theme.borderRadius20} 0px 0px;
    `}
`;

const TooltipContent: FC<TooltipContentProps> = ({
  label,
  ariaLabel,
  maxWidth,
  backgroundColor,
  borderColor,
  invertedColors,
  ...htmlDivProps
}) => {
  return (
    <StyledTooltip
      maxWidth={maxWidth}
      aria-label={ariaLabel}
      role={ariaLabel ? 'tooltip' : undefined}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      {...htmlDivProps}
    >
      <Typography
        type="tertiary"
        color={(c) => (invertedColors ? c.color.textLight : c.color.text)}
      >
        {label}
      </Typography>
    </StyledTooltip>
  );
};

export default TooltipContent;
