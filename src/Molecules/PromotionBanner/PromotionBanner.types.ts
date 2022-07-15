import { ColorFn } from 'common/Types';
import React from 'react';

export type PromotionBannerProps = {
  /** @default blue */
  background?: 'blue' | 'green' | 'white';
  badgeBackground?: ColorFn;
  badgeContent: React.ReactNode;
  description: string | React.ReactChild | React.ReactChild[];
  /** @default true */
  dismissable?: boolean;
  mobileBadgeContent: React.ReactNode;
  /** @default module */
  scope?: 'module' | 'page';
  title: string | React.ReactChild | React.ReactChild[];
  /** @default false */
  // isMobile?: boolean;
  buttonText: string;
};

export type PromotionBannerComponent = React.FC<PromotionBannerProps>;
