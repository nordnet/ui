import React from 'react';
import styled, { css } from 'styled-components';
import { Typography } from '../..';
import { isElement, isFunction } from '../../common/utils';
import { BadgeComponent, Wrapper as WrapperComponentProps, WrapperComponent } from './Badge.types';

const SMALL_BADGE_SIZE = 2;
const MEDIUM_BADGE_SIZE = 5;

const BADGE_PADDING = 1.5;

const animation = css`
  @keyframes scale {
    0% {
      transform: scale(1);
    }
    1% {
      transform: scale(1.4);
    }
    100% {
      transform: scale(1);
    }
  }
  animation: scale 0.5s ease-out;
`;

const Wrapper: WrapperComponent = styled.span<WrapperComponentProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
  height: ${(p) => p.theme.spacing.unit(p.badgeSize)}px;
  min-width: ${(p) => p.theme.spacing.unit(p.badgeSize)}px;
  background-color: ${(p) =>
    p.backgroundColor ? p.backgroundColor(p.theme) : p.theme.color.badgeBackground};
  ${(p) => (p.color ? `color ${p.color(p.theme)}` : '')};
  ${(p) =>
    p.variant !== 'square' && p.variant !== 'rect'
      ? `border-radius: ${p.theme.spacing.unit(p.badgeSize)}px`
      : ''};
  ${(p) =>
    p.badgeSize === MEDIUM_BADGE_SIZE && p.variant !== 'square'
      ? `padding: 0 ${p.theme.spacing.unit(BADGE_PADDING)}px;`
      : ''};
  ${({ $animateOnChange }) => ($animateOnChange ? animation : '')}
`;

export const Badge: BadgeComponent = ({
  backgroundColor,
  color,
  children,
  animateOnChange = false,
  weight,
  ...props
}) => {
  const BadgeContent = () => {
    if (typeof children === 'undefined') return null;
    if (isFunction(children)) return children();
    if (isElement(children)) return children;

    return (
      <Typography
        type="tertiary"
        color={(t) => (color ? color(t) : t.color.badgeTextColor)}
        weight={weight}
      >
        {children}
      </Typography>
    );
  };

  // if child is component, color style should apply to parent since Typography doesn't render
  const textColorOnParent = isFunction(children) || isElement(children);

  return (
    <Wrapper
      $animateOnChange={animateOnChange}
      badgeSize={typeof children !== 'undefined' ? MEDIUM_BADGE_SIZE : SMALL_BADGE_SIZE}
      backgroundColor={backgroundColor}
      {...(textColorOnParent && { color })}
      {...props}
    >
      <BadgeContent />
    </Wrapper>
  );
};
