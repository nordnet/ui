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

export const InfoCircle = ({ stroke, ...props }: ChildProps) => {
  return (
    <IconBase {...props} viewBox="0 0 20 20">
      <path d="M10,20 C4.4771525,20 0,15.5228475 0,10 C0,4.4771525 4.4771525,0 10,0 C15.5228475,0 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 Z" />

      <StyledPolygon
        strokeColorFn={stroke}
        points="11 8 11 16 9 16 9 8 11 8 11 4 11 6 9 6 9 4 11 4"
      />
    </IconBase>
  );
};

InfoCircle.displayName = 'Icon.InfoCircle';
