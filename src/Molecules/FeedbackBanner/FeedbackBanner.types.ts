import React from 'react';

export type FeedbackBannerProps = {
  /** @default info */
  variant?: 'info' | 'error' | 'warning' | 'success';
  title?: string | React.ReactChild | React.ReactChild[];
  className?: string;
};

export type FeedbackBannerComponent = React.FC<FeedbackBannerProps>;
