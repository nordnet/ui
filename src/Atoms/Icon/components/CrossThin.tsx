import React from 'react';
import styled from 'styled-components';
import { IconBase, getColor } from '../IconBase';
import { ChildProps, StyledChildProps } from '../IconBase.types';

const StyledPath = styled.path<StyledChildProps>`
  ${p => {
    const strokeColor = getColor(p.theme, p.theme.color.svgStroke, p.strokeColorFn);
    return `stroke: ${strokeColor};`;
  }}
`;

export const CrossThin = ({ stroke, ...props }: ChildProps) => {
  return (
    <IconBase {...props}>
      <StyledPath strokeWidth={2} d="m 1 1 l 22 22 m -22 0 l 22 -22" strokeColorFn={stroke} />
    </IconBase>
  );
};

CrossThin.displayName = 'Icon.CrossThin';
