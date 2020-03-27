import React from 'react';
import styled from 'styled-components';
import { IconBase, getColor } from '../IconBase';
import { ChildProps, StyledChildProps } from '../IconBase.types';

const StyledPolygon = styled.polygon<StyledChildProps>`
  ${p => {
    const strokeColor = getColor(p.theme, p.theme.color.svgStokeLight, p.strokeColorFn);
    return `fill: ${strokeColor};`;
  }}
`;

export const WarningTriangle = ({ stroke, ...props }: ChildProps) => {
  return (
    <IconBase {...props} viewBox="0 0 20 20">
      <polygon points="10 1 20 19 0 19" />
      <StyledPolygon
        strokeColorFn={stroke}
        points="11 14 11 16 9 16 9 14 11 14 11 8 11 13 9 13 9 8 11 8"
      />
    </IconBase>
  );
};

WarningTriangle.displayName = 'Icon.WarningTriangle';
