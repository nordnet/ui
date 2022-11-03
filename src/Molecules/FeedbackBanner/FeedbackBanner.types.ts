import React from 'react';

export type FeedbackBannerProps = {
  /** @default info */
  variant?: 'info' | 'error' | 'warning' | 'success';
  /** @default module */
  scope?: 'module' | 'page';
  title?: string | React.ReactChild | React.ReactChild[];
  withIcon?: boolean;
  className?: string;
  children?: React.ReactNode;
};

export type FeedbackBannerComponent = React.FC<FeedbackBannerProps>;
