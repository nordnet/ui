import { css } from 'styled-components';
import Color from 'color';
import { InnerProps } from './Button.types';

const HEIGHT = {
  m: 8,
  l: 10,
};
const PADDING_VERTICAL = {
  m: 1,
  l: 2,
};
const PADDING_HORIZONTAL = {
  m: 3,
  l: 4,
};
const BORDER_SIZE = 2;

const getBorder = (color: string) => `
  &::before {
    content: '';
    display: block;
    position: absolute;
    border: ${BORDER_SIZE}px solid ${color};
    top: 0;
    left: 0;
    width: calc(100% - ${BORDER_SIZE * 2}px);
    height: calc(100% - ${BORDER_SIZE * 2}px);
  }
`;

const shared = css<InnerProps>`
  position: relative;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  ${p => (p.fullWidth ? `display: flex; width: 100%;` : `display: inline-flex;`)}
`;

const minHeight = css<InnerProps>`
  min-height: ${p => p.theme.spacing.unit(HEIGHT[p.size])}px;
`;

const padding = css<InnerProps>`
  ${p => `
    padding:
      ${p.theme.spacing.unit(PADDING_VERTICAL[p.size])}px
      ${p.theme.spacing.unit(PADDING_HORIZONTAL[p.size])}px;
  `}
`;

export const primaryStyles = css<InnerProps>`
  ${shared}
  ${padding}
  ${minHeight}
  background-color: ${p => {
    const customColor = p.colorFn && p.colorFn(p.theme);
    const background = customColor || p.theme.color.cta;

    return p.disabled ? p.theme.color.disabledBackground : background;
  }};
  color: ${p => (p.disabled ? p.theme.color.disabledText : p.theme.color.buttonText)};
  ${getBorder('transparent')}

  ${p => {
    const customColor = p.colorFn && p.colorFn(p.theme);
    const background = customColor || p.theme.color.cta;

    return p.disabled
      ? ''
      : `
    &:hover {
      background-color: ${Color(background).darken(0.1)};
    }
    &:active {
      background-color: ${Color(background).darken(0.2)};
    }
  `;
  }}
`;

export const secondaryStyles = css<InnerProps>`
  ${shared}
  ${padding}
  ${minHeight}
  background-color: ${p =>
    p.disabled ? p.theme.color.disabledBackground : p.theme.color.buttonSecondaryBackground};

  ${p => {
    const customColor = p.colorFn && p.colorFn(p.theme);
    const color = customColor || p.theme.color.cta;

    return `
      color: ${p.disabled ? p.theme.color.disabledText : customColor || p.theme.color.cta};
      ${getBorder(p.disabled ? 'transparent' : color)}

      ${
        p.disabled
          ? ''
          : `
        &:hover {
          color: ${Color(color).darken(0.2)};
    
          &::before {
            border-color: ${Color(color).darken(0.2)};
          }
        }
    
        &:active {
          color: ${Color(color).darken(0.3)};
    
          &::before {
            border-color: ${Color(color).darken(0.3)};
          }
        }
      `
      }
    `;
  }};
`;

export const neutralStyles = css<InnerProps>`
  ${shared}
  ${minHeight}
  padding: 0;
  background-color: transparent;

  ${p => {
    const color = p.colorFn && p.colorFn(p.theme);

    return `
      color: ${p.disabled ? p.theme.color.disabledText : color || p.theme.color.text}
    `;
  }};
`;
