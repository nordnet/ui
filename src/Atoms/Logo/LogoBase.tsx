import React from 'react';
import styled from 'styled-components';
import * as R from 'ramda';
import { InternalProps, StyledLogoBaseProps } from './LogoBase.types';

const CleanSvg = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>((props, ref) => (
  <svg ref={ref} {...R.omit(['inline'])(props)} />
));

const StyledLogoBase = styled(CleanSvg)<StyledLogoBaseProps>`
  ${(p) => {
    return `
      user-select: none;
      flex-shrink: 0;
      display: ${p.inline ? 'inline-block' : 'block'};
      ${p.inline ? 'vertical-align: sub;' : ''}
    `;
  }}
`;

export const LogoBase: React.FC<InternalProps> = React.forwardRef<SVGSVGElement, InternalProps>(
  (props, ref) => {
    const { className, children, title, inline, ...rest } = props;

    return (
      <StyledLogoBase
        className={className}
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        aria-hidden={title ? 'false' : 'true'}
        role={title ? 'img' : 'presentation'}
        inline={inline}
        ref={ref}
        {...rest}
      >
        {children}
        {title ? <title>{title}</title> : null}
      </StyledLogoBase>
    );
  },
);
