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

export const Star24 = ({ stroke, ...props }: ChildProps) => {
  return (
    <IconBase {...props}>
      <StyledPath
        strokeColorFn={stroke}
        strokeWidth="2"
        d="M12,3.28909585 L9.7518819,10.3333333 L2.94990324,10.3333333 L8.34965326,14.4696321 L6.10344598,21.3821992 L12,17.0986537 L17.896554,21.3821992 L15.6503467,14.4696321 L21.0500967,10.3333333 L14.2481181,10.3333333 L12,3.28909585 Z"
      />
    </IconBase>
  );
};

Star24.displayName = 'Icon.Star24';
