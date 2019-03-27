import React from 'react';
import styled from 'styled-components';
import { TextComponent, StyledTextProps } from './Text.types';

const WEIGHTS = {
  regular: 400,
  bold: 700,
  extrabold: 800,
};

const SMALL_DEVICE_BP = 'xs';

const StyledText = styled.span<StyledTextProps>`
  font-family: 'Nordnet Sans Mono', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    sans-serif;
  font-size: ${p => p.sizeMobile}px;
  color: ${p => (p.colorFn ? p.colorFn(p.theme) : p.theme.color.text)};
  font-weight: ${p => WEIGHTS[p.weight] || WEIGHTS.regular};
  ${p => p.theme.media.greaterThan(p.theme.size[SMALL_DEVICE_BP])} {
    font-size: ${p => p.sizeDesktop}px;
  }
`;

const Primary: TextComponent['Primary'] = props => (
  <StyledText
    as={props.as}
    sizeMobile={14}
    sizeDesktop={16}
    colorFn={props.color}
    weight={props.weight || 'regular'}
  >
    {props.children}
  </StyledText>
);
const Secondary: TextComponent['Secondary'] = props => (
  <StyledText
    as={props.as}
    sizeMobile={12}
    sizeDesktop={14}
    colorFn={props.color}
    weight={props.weight || 'regular'}
  >
    {props.children}
  </StyledText>
);
const Tertiary: TextComponent['Tertiary'] = props => (
  <StyledText
    as={props.as}
    sizeMobile={10}
    sizeDesktop={12}
    colorFn={props.color}
    weight={props.weight || 'regular'}
  >
    {props.children}
  </StyledText>
);
const Title1: TextComponent['Title1'] = props => (
  <StyledText
    as={props.as}
    sizeMobile={30}
    sizeDesktop={32}
    colorFn={props.color}
    weight="extrabold"
  >
    {props.children}
  </StyledText>
);
const Title3: TextComponent['Title3'] = props => (
  <StyledText
    as={props.as}
    sizeMobile={18}
    sizeDesktop={20}
    colorFn={props.color}
    weight="extrabold"
  >
    {props.children}
  </StyledText>
);

export const Text: TextComponent = {
  Primary,
  Secondary,
  Tertiary,
  Title1,
  Title3,
};
