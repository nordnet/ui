import { css } from 'styled-components';
import Color from 'color';
import { InnerProps } from './Button.types';

const HEIGHT = {
  s: 6,
  m: 8,
  l: 10,
};
const PADDING_VERTICAL = {
  s: 1,
  m: 1,
  l: 2,
};
const PADDING_HORIZONTAL = {
  s: 3,
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
  ${(p) => (p.$fullWidth ? `display: flex; width: 100%;` : `display: inline-flex;`)}
`;

const minHeight = css<InnerProps>`
  ${(p) =>
    p.$size === 'm' || p.$size === 'l'
      ? `min-height: ${p.theme.spacing.unit(HEIGHT[p.$size])}px;`
      : ''}
`;

const padding = css<InnerProps>`
  ${(p) => `
    padding:
      ${p.theme.spacing.unit(PADDING_VERTICAL[p.$size])}px
      ${p.theme.spacing.unit(PADDING_HORIZONTAL[p.$size])}px;
  `}
`;

export const primaryStyles = css<InnerProps>`
  ${shared}
  ${padding}
  ${minHeight}
  background-color: ${(p) => {
    const customColor = p.$colorFn && p.$colorFn(p.theme);
    const background = customColor || p.theme.color.buttonBackgroundPrimary;

    return p.disabled ? p.theme.color.buttonBackgroundDisabled : background;
  }};
  color: ${(p) => (p.disabled ? p.theme.color.buttonTextDisabled : p.theme.color.buttonText)};
  ${getBorder('transparent')}

  ${(p) => {
    const customColor = p.$colorFn && p.$colorFn(p.theme);
    const background = customColor || p.theme.color.buttonBackgroundPrimary;

    return p.disabled
      ? ''
      : `
    &:hover {
      background-color: ${
        customColor ? Color(background).darken(0.1) : p.theme.color.buttonBackgroundHoverPrimary
      };
    }
    &:active {
      background-color: ${
        customColor ? Color(background).darken(0.2) : p.theme.color.buttonBackgroundActivePrimary
      };
    }
  `;
  }}
`;

export const negativeStyles = css<InnerProps>`
  ${shared}
  ${padding}
  ${minHeight}
  background-color: ${(p) => {
    const background = p.theme.color.buttonBackgroundNegative;

    return p.disabled ? p.theme.color.buttonBackgroundDisabled : background;
  }};
  color: ${(p) => (p.disabled ? p.theme.color.buttonTextDisabled : p.theme.color.buttonText)};
  ${getBorder('transparent')}

  ${(p) => {
    return p.disabled
      ? ''
      : `
    &:hover {
      background-color: ${p.theme.color.buttonBackgroundNegativeHover};
    }
    &:active {
      background-color: ${p.theme.color.buttonBackgroundNegativeActive};
    }
  `;
  }}
`;

export const secondaryStyles = css<InnerProps>`
  ${shared}
  ${padding}
  ${minHeight}
  background-color: ${(p) => (p.disabled ? p.theme.color.buttonBackgroundDisabled : 'transparent')};

  ${(p) => {
    const customColor = p.$colorFn && p.$colorFn(p.theme);
    const color = customColor || p.theme.color.buttonTextSecondary;

    const hoverTextColor = (() => {
      if (customColor) {
        return Color(color).darken(0.2);
      }
      if (p.theme.isDarkMode) {
        return color;
      }
      return p.theme.color.buttonHoverSecondary;
    })();
    const activeTextColor = (() => {
      if (customColor) {
        return Color(color).darken(0.3);
      }
      if (p.theme.isDarkMode) {
        return color;
      }
      return p.theme.color.buttonActiveSecondary;
    })();

    return `
      color: ${p.disabled ? p.theme.color.buttonTextDisabled : color};
      ${getBorder(p.disabled ? 'transparent' : p.theme.color.buttonBorderSecondary)}

      ${
        p.disabled
          ? ''
          : `
        &:hover {
          color: ${hoverTextColor};

          &::before {
            border-color: ${
              customColor ? Color(color).darken(0.2) : p.theme.color.buttonHoverSecondary
            };
          }
        }

        &:active {
          color: ${activeTextColor};

          &::before {
            border-color: ${
              customColor ? Color(color).darken(0.3) : p.theme.color.buttonActiveSecondary
            };
          }
        }
      `
      }
    `;
  }};
`;

export const neutralStyles = css<InnerProps>`
  ${shared};
  padding: 0;
  background-color: transparent;

  ${(p) => {
    const color = p.theme.isDarkMode
      ? (p.$colorFn && p.$colorFn(p.theme)) || p.theme.color.buttonTextLight
      : (p.$colorFn && p.$colorFn(p.theme)) || p.theme.color.text;

    return `
      color: ${p.disabled ? p.theme.color.disabledText : color}
    `;
  }};
`;
