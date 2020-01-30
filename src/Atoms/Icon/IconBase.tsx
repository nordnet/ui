import React from 'react';
import styled, { DefaultTheme } from 'styled-components';
import * as R from 'ramda';
import { InternalProps, StyledIconBaseProps, ColorFn } from './IconBase.types';
import { assert } from '../../common/utils';

const ALLOWED_COLOR_STRINGS = ['transparent', 'inherit', 'currentColor'];
export const getColor = (
  theme: DefaultTheme,
  defaultColor: string,
  colorFnOrColor?: ColorFn | string,
) => {
  if (typeof colorFnOrColor !== 'undefined') {
    if (typeof colorFnOrColor === 'function') {
      return colorFnOrColor(theme);
    }

    if (typeof colorFnOrColor === 'string') {
      if (ALLOWED_COLOR_STRINGS.includes(colorFnOrColor)) {
        return colorFnOrColor;
      }
      assert(
        ALLOWED_COLOR_STRINGS.includes(colorFnOrColor),
        `Incorrect string value for color, use t => t.color.<some color> instead. Allowed string values are: ${ALLOWED_COLOR_STRINGS.join(
          ', ',
        )}.`,
      );
    }
  }
  return defaultColor;
};

const CleanSvg = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>((props, ref) => (
  <svg ref={ref} {...R.omit(['size', 'colorFn', 'inline'])(props)} />
));

const StyledIconBase = styled(CleanSvg)<StyledIconBaseProps>`
  ${p => {
    const size = p.size || 5;
    const fill = getColor(p.theme, p.theme.color.svgFill, p.colorFn);

    return `
      user-select: none;
      width: ${p.theme.spacing.unit(size)}px;
      height: ${p.theme.spacing.unit(size)}px;
      fill: ${fill};
      flex-shrink: 0;

      display: ${p.inline ? 'inline-block' : 'block'};
      ${p.inline ? 'vertical-align: middle;' : ''}
    `;
  }}
`;

export const IconBase: React.FC<InternalProps> = React.forwardRef<SVGSVGElement, InternalProps>(
  (props, ref) => {
    const {
      className,
      children,
      title,
      size = 5,
      color,
      fill,
      inline,
      viewBox = '0 0 24 24',
      ...rest
    } = props;

    return (
      <StyledIconBase
        className={className}
        preserveAspectRatio="xMidYMid meet"
        size={size}
        focusable="false"
        viewBox={viewBox}
        aria-hidden={title ? 'false' : 'true'}
        role={title ? 'img' : 'presentation'}
        colorFn={fill || color}
        inline={inline}
        ref={ref}
        {...rest}
      >
        {children}
        {title ? <title>{title}</title> : null}
      </StyledIconBase>
    );
  },
);
