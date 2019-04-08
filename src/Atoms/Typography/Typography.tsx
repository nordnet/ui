import React from 'react';
import styled, { ThemedStyledProps } from 'styled-components';
import { Theme } from '../../theme/theme.types';
import { Props } from './Typography.types';

const WEIGHTS = {
  regular: 400,
  bold: 700,
  extrabold: 800,
};

const SMALL_DEVICE_BP = 'xs';

const getColor = (props: ThemedStyledProps<Props, Theme>) => {
  const { color, theme } = props;

  if (color && typeof color === 'function') {
    return color(theme);
  }

  if (color === 'inherit') {
    return 'inherit';
  }

  return theme.color.text;
};

const getTypeStyles = (props: ThemedStyledProps<Props, Theme>) => {
  const { type, weight, theme } = props;
  let sizeMobile;
  let sizeDesktop;
  let defaultWeight;

  switch (type) {
    case 'primary':
      sizeMobile = 14;
      sizeDesktop = 16;
      defaultWeight = 'regular';
      break;
    case 'secondary':
      sizeMobile = 12;
      sizeDesktop = 14;
      defaultWeight = 'regular';
      break;
    case 'tertiary':
      sizeMobile = 10;
      sizeDesktop = 12;
      defaultWeight = 'regular';
      break;
    case 'title1':
      sizeMobile = 30;
      sizeDesktop = 32;
      defaultWeight = 'extrabold';
      break;
    case 'title3':
      sizeMobile = 18;
      sizeDesktop = 20;
      defaultWeight = 'extrabold';
      break;
    default:
      sizeMobile = 14;
      sizeDesktop = 16;
      defaultWeight = 'regular';
  }

  return `
    font-weight ${weight ? WEIGHTS[weight] : WEIGHTS[defaultWeight]};
    font-size: ${sizeMobile}px;

    ${theme.media.greaterThan(theme.size[SMALL_DEVICE_BP])} {
      font-size: ${sizeDesktop}px;
    }
  `;
};

const StyledTypography = styled.span<Props>`
  font-family: 'Nordnet Sans Mono', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    sans-serif;
  color: ${p => getColor(p)};
  ${p => getTypeStyles(p)}
` as React.FC<Props>;

export const Typography: React.FC<Props> = (props: Props) => {
  const { as, className, children, color, type, weight } = props;

  return (
    <StyledTypography className={className} as={as} color={color} type={type} weight={weight}>
      {children}
    </StyledTypography>
  );
};
