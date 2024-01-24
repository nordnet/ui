import React from 'react';
import styled, { ThemedStyledProps } from 'styled-components';
import { Theme } from '../../theme/theme.types';
import { Props, StyledSpanProps } from './ResponsiveTypography.types';
import { BREAKPOINTS } from './config';
import { getTitleRichTextComponents, renderText } from '../../utils';
import { getBreakpointSettingCss, getMediaCssWithTheme } from './utils';

const Span = styled.span``;

const CleanSpan = React.forwardRef<StyledSpanProps, any>((props, ref) => {
  return (
    <Span ref={ref} as={props.as} className={props.className}>
      {props.children}
    </Span>
  );
});

const getColor = (props: ThemedStyledProps<Props, Theme>) => {
  const { color, theme } = props;

  if (color && typeof color === 'function') {
    return color(theme);
  }

  if (color === 'inherit') {
    return 'inherit';
  }

  return theme.colorTokens.neutral.text_default;
};

const StyledSpan = styled(CleanSpan)<StyledSpanProps>`
  font-family:
    'Nordnet Sans Mono',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    sans-serif;
  margin: 0;
  color: ${(p) => getColor(p)};
  ${({ hyphens }) => (hyphens ? `hyphens: ${hyphens};` : '')};
  ${({ overflowWrap }) => (overflowWrap ? `overflow-wrap: ${overflowWrap};` : '')};
  ${({ type, weight, ellipsis }) =>
    getBreakpointSettingCss({
      type,
      ...(weight ? { weight } : {}),
      ...(ellipsis ? { ellipsis } : {}),
    })}
  ${(props) => {
    const getMediaCss = getMediaCssWithTheme(props);
    return BREAKPOINTS.map(getMediaCss);
  }}
`;

export const Header: React.FC<Props> = ({ children, titleRichText, as, ...rest }) => {
  let childrenToRender: React.ReactNode = titleRichText
    ? getTitleRichTextComponents(titleRichText)
    : children;

  childrenToRender =
    childrenToRender && typeof childrenToRender === 'string'
      ? renderText(childrenToRender.replace(/\\n/g, '\n'))
      : childrenToRender;
  return (
    <StyledSpan forwardedAs={as} {...rest}>
      {childrenToRender}
    </StyledSpan>
  );
};
