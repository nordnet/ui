import React from 'react';
import styled from 'styled-components';
import { BubbleArrow } from './BubbleArrow';
import { Component, Props } from './Bubble.types';
import { BORDER_SIZE } from './consts';

const Card = styled.div`
  width: 350px;
  min-height: ${(p) => p.theme.spacing.unit(35)}px;
  padding: ${(p) => p.theme.spacing.unit(5)}px;
  background: ${(p) => p.theme.color.bubbleBackground};
  border: ${BORDER_SIZE}px solid ${(p) => p.theme.color.bubbleBorder};
  position: fixed;
  z-index: ${(p) => p.theme.zIndex.modal + 1};
  display: flex;
  box-sizing: border-box;
`;

export const Bubble: Component = React.forwardRef<HTMLDivElement, Props>(
  ({ children, className, position, style }, ref) => (
    <Card className={className} style={style} ref={ref}>
      {children}
      <BubbleArrow bubblePlacement={position} />
    </Card>
  ),
);
