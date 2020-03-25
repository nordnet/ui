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

export const CrossCircle = ({ stroke, ...props }: ChildProps) => {
  return (
    <IconBase {...props} viewBox="0 0 20 20">
      <path d="M10,20 C4.4771525,20 0,15.5228475 0,10 C0,4.4771525 4.4771525,0 10,0 C15.5228475,0 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 Z" />
      <StyledPolygon
        strokeColorFn={stroke}
        points="8.681 9.967 5.073 6.333 6.396 5 10.004 8.634 13.604 5.007 14.916 6.329 11.316 9.956 15 13.667 13.677 15 9.993 11.289 6.312 14.997 5 13.675"
      />
    </IconBase>
  );
};

CrossCircle.displayName = 'Icon.CrossCircle';
