import { css } from 'styled-components';
import Color from 'color';

import { units } from '../../../../common/unitUtils';
import { InnerProps } from './Button.types';

const HEIGHT = {
  s: 8,
  m: 10,
  l: 12,
};
const PADDING_VERTICAL = {
  s: 1,
  m: 2,
  l: 3,
};
const PADDING_HORIZONTAL = {
  s: 3,
  m: 3,
  l: 4,
};
const PADDING_HORIZONTAL_ROUNDED_CORNERS = {
  s: 4,
  m: 5,
  l: 6,
};
const PADDING_VERTICAL_ROUNDED_CORNERS = {
  s: 1,
  m: 2,
  l: 2,
};

const BORDER_SIZE = 2;

const getBorder = (color: string) => css`
  border: ${BORDER_SIZE}px solid ${color};
  border-radius: ${(p) => p.theme.borderRadius100};
`;

const shared = css<InnerProps>`
  position: relative;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  ${(p) => (p.$fullWidth ? `display: flex; width: 100%;` : `display: inline-flex;`)}
`;

const minHeight = css<InnerProps>`
  min-height: ${(p) => `${p.theme.spacing.unit(HEIGHT[p.$size])}px`};
`;

const getPadding = (roundedCornersToggleEnabled: boolean, size: string) => {
  const horizontalPadding = roundedCornersToggleEnabled
    ? units(PADDING_HORIZONTAL_ROUNDED_CORNERS[size])
    : units(PADDING_HORIZONTAL[size]);

  const verticalPadding = roundedCornersToggleEnabled
    ? units(PADDING_VERTICAL_ROUNDED_CORNERS[size])
    : units(PADDING_VERTICAL[size]);

  return css`
    padding: ${verticalPadding}px ${horizontalPadding}px;
  `;
};

const padding = css<InnerProps>`
  ${(p) => getPadding(p.theme.isFeatureEnabled('roundedCorners'), p.$size)}
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

    return css`
      color: ${p.disabled ? p.theme.color.buttonTextDisabled : color};
      ${p.disabled
        ? ''
        : `
        &:hover {
          color: ${hoverTextColor};
          border-color: ${
            customColor ? Color(color).darken(0.2) : p.theme.color.buttonHoverSecondary
          };
        }

        &:active {
          color: ${activeTextColor};
          border-color: ${
            customColor ? Color(color).darken(0.3) : p.theme.color.buttonActiveSecondary
          };
        }
      `}
    `;
  }};
  ${(p) => getBorder(p.disabled ? 'transparent' : p.theme.color.buttonBorderSecondary)}
`;

export const neutralStyles = css<InnerProps>`
  ${shared};
  padding: 0;
  background-color: transparent;
  border: none;
  ${(p) => {
    const color = p.theme.isDarkMode
      ? (p.$colorFn && p.$colorFn(p.theme)) || p.theme.color.buttonTextLight
      : (p.$colorFn && p.$colorFn(p.theme)) || p.theme.color.text;

    return `
      color: ${p.disabled ? p.theme.color.disabledText : color}
    `;
  }};
`;
