import React from 'react';
import styled from 'styled-components';
import { IconBase } from '../IconBase';
import { ChildProps, StyledChildProps } from '../IconBase.types';

const StyledPath = styled.path<StyledChildProps>`
  ${p => {
    const strokeColor = p.strokeColorFn ? p.strokeColorFn(p.theme) : p.theme.color.svgStroke;
    return `stroke: ${strokeColor};`;
  }}
`;

export const Star16 = ({ stroke, ...props }: ChildProps) => {
  return (
    <IconBase {...props}>
      <StyledPath
        strokeColorFn={stroke}
        strokeWidth="1"
        d="M12,1.64454792 L9.3866076,9.8333333 L1.47495162,9.8333333 L7.76482663,14.6514827 L5.15238966,22.6910996 L12,17.7166602 L18.8476103,22.6910996 L16.2351733,14.6514827 L22.5250484,9.8333333 L14.6133924,9.8333333 L12,1.64454792 Z"
      />
    </IconBase>
  );
};

Star16.displayName = 'Icon.Star16';
