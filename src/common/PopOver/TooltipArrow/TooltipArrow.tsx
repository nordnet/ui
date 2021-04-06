import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { Props } from './TooltipArrow.types';
import { BORDER_SIZE, TRIANGLE_SIZE } from '../consts';

type ArrowProps = {
  borderColor: Props['borderColor'];
  backgroundColor: Props['backgroundColor'];
};

const arrowTop = css<ArrowProps>`
  top: 3px;
  margin-left: -${TRIANGLE_SIZE}px;
  &::before {
    border-left: ${TRIANGLE_SIZE}px solid transparent;
    border-right: ${TRIANGLE_SIZE}px solid transparent;
    border-bottom: ${TRIANGLE_SIZE}px solid ${(p) => p.borderColor(p.theme)};
  }

  &::after {
    left: ${BORDER_SIZE * 2}px;
    top: 2px;
    border-left: ${TRIANGLE_SIZE - BORDER_SIZE * 2}px solid transparent;
    border-right: ${TRIANGLE_SIZE - BORDER_SIZE * 2}px solid transparent;
    border-bottom: ${TRIANGLE_SIZE - BORDER_SIZE * 2}px solid ${(p) => p.backgroundColor(p.theme)};
  }
`;

const arrowBottom = css<ArrowProps>`
  bottom: 13px;
  margin-left: -${TRIANGLE_SIZE}px;
  &::before {
    border-left: ${TRIANGLE_SIZE}px solid transparent;
    border-right: ${TRIANGLE_SIZE}px solid transparent;
    border-top: ${TRIANGLE_SIZE}px solid ${(p) => p.borderColor(p.theme)};
  }

  &::after {
    left: ${BORDER_SIZE * 2}px;
    top: 0;
    border-left: ${TRIANGLE_SIZE - BORDER_SIZE * 2}px solid transparent;
    border-right: ${TRIANGLE_SIZE - BORDER_SIZE * 2}px solid transparent;
    border-top: ${TRIANGLE_SIZE - BORDER_SIZE * 2}px solid ${(p) => p.backgroundColor(p.theme)};
  }
`;

const arrowLeft = css<ArrowProps>`
  left: 3px;
  margin-top: -${TRIANGLE_SIZE}px;
  &::before {
    border-top: ${TRIANGLE_SIZE}px solid transparent;
    border-bottom: ${TRIANGLE_SIZE}px solid transparent;
    border-right: ${TRIANGLE_SIZE}px solid ${(p) => p.borderColor(p.theme)};
  }

  &::after {
    left: ${BORDER_SIZE * 2}px;
    top: ${BORDER_SIZE * 2}px;
    border-top: ${TRIANGLE_SIZE - BORDER_SIZE * 2}px solid transparent;
    border-bottom: ${TRIANGLE_SIZE - BORDER_SIZE * 2}px solid transparent;
    border-right: ${TRIANGLE_SIZE - BORDER_SIZE * 2}px solid ${(p) => p.backgroundColor(p.theme)};
  }
`;

const arrowRight = css<ArrowProps>`
  left: auto;
  right: 13px;
  margin-top: -${TRIANGLE_SIZE}px;
  &::before {
    border-top: ${TRIANGLE_SIZE}px solid transparent;
    border-bottom: ${TRIANGLE_SIZE}px solid transparent;
    border-left: ${TRIANGLE_SIZE}px solid ${(p) => p.borderColor(p.theme)};
  }

  &::after {
    left: 0;
    top: ${BORDER_SIZE * 2}px;
    border-top: ${TRIANGLE_SIZE - BORDER_SIZE * 2}px solid transparent;
    border-bottom: ${TRIANGLE_SIZE - BORDER_SIZE * 2}px solid transparent;
    border-left: ${TRIANGLE_SIZE - BORDER_SIZE * 2}px solid ${(p) => p.backgroundColor(p.theme)};
  }
`;

const StyledArrow = styled.span<Props>`
  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 0;
    height: 0;
  }

  &::before {
    left: 0;
    top: 0;
  }

  ${(p) => (p.position === 'top' ? arrowBottom : '')}
  ${(p) => (p.position === 'bottom' ? arrowTop : '')}
  ${(p) =>
    p.position === 'left' ? arrowRight : ''}
  ${(p) => (p.position === 'right' ? arrowLeft : '')}
`;

type PropsWithoutRef = Omit<Props, 'ref'>;

const TooltipArrow = forwardRef<HTMLSpanElement, PropsWithoutRef>(
  ({ position, style, backgroundColor, borderColor, ...htmlSpanProps }, ref) => {
    return (
      <StyledArrow
        ref={ref as any}
        position={position}
        style={style}
        backgroundColor={backgroundColor}
        borderColor={borderColor}
        {...htmlSpanProps}
      />
    );
  },
);

export default TooltipArrow;
