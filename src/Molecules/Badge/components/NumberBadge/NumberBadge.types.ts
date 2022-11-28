import React from 'react';
import { Typography } from '../../../..';
import { ColorFn } from '../../../../common/Types';
import { BaseBadgeProps, HtmlProps } from '../BaseBadge/BaseBadge.types';

export type StyledBaseBadgeProps = BaseBadgeProps & {
  $animateOnChange: boolean;
  $padding: number;
  badgeSize: number;
};

type BaseProps = HtmlProps & {
  badgeColor?: ColorFn;
  color?: ColorFn;
  animateOnChange?: boolean;
  symmetricShape?: boolean;
};

export type Props = BaseProps & {
  badgeSize?: 'xs' | 's' | 'm' | 'l' | number;
  children?: React.ReactNode | (() => React.ReactNode);
};

export type NumberBadgeContentProps = {
  color?: ColorFn;
  typographyType: React.ComponentProps<typeof Typography>['type'];
  children?: React.ReactNode | (() => React.ReactNode);
};

export type NumberBadgeComponent = React.ForwardRefExoticComponent<
  React.RefAttributes<HTMLSpanElement> & Props
>;
