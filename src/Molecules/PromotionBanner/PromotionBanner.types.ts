import { ColorFn } from 'common/Types';
import React from 'react';

export type PromotionBannerProps = {
  /** @default blue */
  background?: 'blue' | 'green' | 'white';
  badgeBackground?: ColorFn;
  badgeContent?: React.ReactNode;
  buttonText?: string;
  /** @default string */
  buttonLink?: any;
  children?: React.ReactNode;
  description?: string | React.ReactChild | React.ReactChild[];
  /** @default true */
  dismissible?: boolean;
  /** @default null */
  onClose?: () => void;
  mobileBadgeContent?: React.ReactNode;
  /** @default module */
  scope?: 'module' | 'page';
  title: string | React.ReactChild | React.ReactChild[];
  /** @default false */
  // isMobile?: boolean;
};

export type PromotionBannerComponent = React.FC<PromotionBannerProps>;
