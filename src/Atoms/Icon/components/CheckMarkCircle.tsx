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

export const CheckMarkCircle = ({ stroke, ...props }: ChildProps) => {
  return (
    <IconBase {...props} viewBox="0 0 20 20">
      <path d="M10,20 C4.4771525,20 0,15.5228475 0,10 C0,4.4771525 4.4771525,0 10,0 C15.5228475,0 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 Z" />

      <StyledPolygon
        strokeColorFn={stroke}
        points="13.695 6 15 7.314 8.696 13.69 5 9.924 6.319 8.656 8.696 11.059"
      />
    </IconBase>
  );
};

CheckMarkCircle.displayName = 'Icon.CheckMarkCircle';
