import React from 'react';
import styled, { css } from 'styled-components';
import { Typography } from '../../../..';
import { ColorFn } from '../../../../common/Types';
import { isElement, isFunction } from '../../../../common/utils';
import {
  StyledBaseBadgeProps,
  Props,
  NumberBadgeComponent,
  NumberBadgeContentProps,
} from './NumberBadge.types';
import { BaseBadge } from '../BaseBadge';
import {
  MAP_FONT_SIZE,
  MAP_BADGE_PADDING,
  DEFAULT_PADDING,
  DEFAULT_TYPOGRAPHY_TYPE,
  NumberBadgeSize,
} from './NumberBadge.constants';

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

const StyledBaseBadge: React.FC<StyledBaseBadgeProps> = styled(BaseBadge)<StyledBaseBadgeProps>`
  ${({ $animateOnChange }) => ($animateOnChange ? animation : '')}
  ${(p) => (p.$padding ? `padding: 0 ${p.theme.spacing.unit(p.$padding)}px;` : '')}
`;

const NumberBadgeContent = ({
  children,
  color,
  typographyType,
}: NumberBadgeContentProps): React.ReactNode => {
  if (typeof children === 'undefined') return null;
  if (isFunction(children)) return children();
  if (isElement(children)) return children;

  // default textcolor to badgeTextColor
  const textColor: ColorFn = (t) => (color ? color(t) : t.color.badgeTextColor);

  return (
    <Typography type={typographyType} color={textColor} weight="bold">
      {children}
    </Typography>
  );
};

export const NumberBadge: NumberBadgeComponent = React.forwardRef<HTMLSpanElement, Props>(
  (
    {
      badgeColor = (t) => t.color.badgeBackground,
      color = (t) => t.color.badgeTextColor,
      children,
      badgeSize = 's',
      animateOnChange = false,
      symmetricShape = false,
      ...htmlProps
    },
    ref,
  ) => {
    const textColorOnParent = isFunction(children) || isElement(children);

    const numberBadgeSize = typeof badgeSize === 'number' ? badgeSize : NumberBadgeSize[badgeSize];

    const typographyType = MAP_FONT_SIZE[numberBadgeSize] ?? DEFAULT_TYPOGRAPHY_TYPE;
    const padding = MAP_BADGE_PADDING[numberBadgeSize] ?? DEFAULT_PADDING;

    return (
      <StyledBaseBadge
        {...htmlProps}
        ref={ref}
        $animateOnChange={animateOnChange}
        $padding={padding}
        badgeSize={numberBadgeSize}
        badgeColor={badgeColor}
        symmetricShape={symmetricShape}
        {...(textColorOnParent && { color })}
      >
        {/* @ts-ignore */}
        <NumberBadgeContent typographyType={typographyType} color={color}>
          {children}
        </NumberBadgeContent>
      </StyledBaseBadge>
    );
  },
);
