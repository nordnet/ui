import React from 'react';
import styled from 'styled-components';
import { InternalProps, StyledIconBaseProps } from './IconBase.types';

const StyledIconBase = styled.svg<StyledIconBaseProps>`
  user-select: none;
  width: ${p => p.theme.spacing.unit(p.size)}px;
  height: ${p => p.theme.spacing.unit(p.size)}px;
  display: inline-block;
  fill: currentColor;
  flex-shrink: 0;
  color: ${p => (p.colorFn ? p.colorFn(p.theme) : p.theme.color.text)};
`;

StyledIconBase.defaultProps = {
  size: 5,
};

export const IconBase: React.FC<InternalProps> = (props: InternalProps) => {
  const { className, children, title, size, color } = props;

  return (
    <StyledIconBase
      className={className}
      size={size}
      focusable="false"
      viewBox="0 0 24 24"
      aria-hidden={title ? 'false' : 'true'}
      role={title ? 'img' : 'presentation'}
      colorFn={color}
    >
      {children}
      {title ? <title>{title}</title> : null}
    </StyledIconBase>
  );
};
