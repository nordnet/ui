import React from 'react';
import styled, { useTheme, DefaultTheme } from 'styled-components';
import * as R from 'ramda';
import { ColorFn, InternalProps, StyledIllustrationBaseProps } from './IllustrationBase.types';
import { assert } from '../../common/utils';

const ALLOWED_COLOR_STRINGS = ['transparent', 'inherit', 'currentColor'];
export const getColor: (
  theme: DefaultTheme,
  defaultColor: string,
  colorFnOrColor?: ColorFn | string,
) => string = (theme, defaultColor, colorFnOrColor) => {
  if (typeof colorFnOrColor !== 'undefined') {
    if (typeof colorFnOrColor === 'function') {
      return colorFnOrColor(theme) as string;
    }

    if (ALLOWED_COLOR_STRINGS.includes(colorFnOrColor)) {
      return colorFnOrColor;
    }
    assert(
      ALLOWED_COLOR_STRINGS.includes(colorFnOrColor),
      `Incorrect string value for color, use t => t.colorTokens instead. Allowed string values are: ${ALLOWED_COLOR_STRINGS.join(
        ', ',
      )}.`,
    );
  }
  return defaultColor;
};

const CleanSvg = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>((props, ref) => (
  <svg ref={ref} {...R.omit(['inline'])(props)} />
));

const StyledIllustrationBase = styled(CleanSvg)<StyledIllustrationBaseProps>`
  ${(p) => {
    return `
      color: ${p.$color};
      user-select: none;
      flex-shrink: 0;
      display: ${p.inline ? 'inline-block' : 'block'};
      ${p.inline ? 'vertical-align: sub;' : ''}
    `;
  }}
`;

export const IllustrationBase: React.FC<InternalProps> = React.forwardRef<
  SVGSVGElement,
  InternalProps
>((props, ref) => {
  const { className, children, title, color, inline, ...rest } = props;

  const theme = useTheme();
  const illustrationColor = getColor(theme, theme.color.icon, color);

  return (
    <StyledIllustrationBase
      className={className}
      preserveAspectRatio="xMidYMid meet"
      focusable="false"
      aria-hidden={title ? 'false' : 'true'}
      role={title ? 'img' : 'presentation'}
      inline={inline}
      ref={ref}
      $color={illustrationColor}
      {...rest}
    >
      {children}
      {title ? <title>{title}</title> : null}
    </StyledIllustrationBase>
  );
});
