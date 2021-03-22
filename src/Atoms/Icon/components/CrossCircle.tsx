import React from 'react';
import styled from 'styled-components';
import { IconBase, getColor } from '../IconBase';
import { ChildProps, StyledChildProps } from '../IconBase.types';

const StyledPath = styled.path<StyledChildProps>`
  ${(p) => {
    const strokeColor = getColor(p.theme, p.theme.color.svgStokeLight, p.strokeColorFn);
    return `fill: ${strokeColor};`;
  }}
`;

const StyledPolygon = styled.polygon<StyledChildProps>`
  ${(p) => {
    const strokeColor = getColor(p.theme, p.theme.color.svgStokeLight, p.strokeColorFn);
    return `fill: ${strokeColor};`;
  }}
`;

export const CrossCircle = ({ fill, stroke, ...props }: ChildProps) => {
  return (
    <IconBase {...props} viewBox="0 0 24 24">
      <g fill="none" fillRule="evenodd">
        <StyledPolygon
          strokeColorFn={fill || (() => '#28282A')}
          points="16.8 0 24 7.2 24 16.8 16.8 24 7.2 24 0 16.8 0 7.2 7.2 0"
        />
        <StyledPath
          strokeColorFn={stroke || (() => '#FFF')}
          d="M13,17 L13,19 L11,19 L11,17 L13,17 Z M13,5 L13,15 L11,15 L11,5 L13,5 Z"
        />
      </g>
    </IconBase>
  );
};

CrossCircle.displayName = 'Icon.CrossCircle';
