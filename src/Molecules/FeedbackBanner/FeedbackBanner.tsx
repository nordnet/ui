import React from 'react';
import styled from 'styled-components';

import { FeedbackBannerComponent, FeedbackBannerProps } from './FeedbackBanner.types';
import { Icon, Typography, Flexbox } from '../..';
import { Theme } from '../../theme/theme.types';

const getBorderColor = ({
  variant,
  theme,
}: {
  variant?: FeedbackBannerProps['variant'];
  theme: Theme;
}) => {
  switch (variant) {
    case 'error':
      return theme.color.negative;
    case 'warning':
      return theme.color.warning;
    case 'success':
      return theme.color.positive;
    case 'info':
    default:
      return theme.color.cta;
  }
};

const getIcon = (variant: FeedbackBannerProps['variant']) => {
  switch (variant) {
    case 'error':
      return <Icon.CrossCircle size={5} fill={t => t.color.negative} />;
    case 'warning':
      return <Icon.WarningTriangle size={5} fill={t => t.color.warning} />;
    case 'success':
      return <Icon.CheckMarkCircle size={5} fill={t => t.color.positive} />;
    case 'info':
    default:
      return <Icon.InfoCircle size={5} fill={t => t.color.cta} />;
  }
};

const StyledContainer = styled.div<FeedbackBannerProps>`
  background-color: ${p => p.theme.color.background};
  border-left: ${p => p.theme.spacing.unit(1)}px solid ${getBorderColor};
  padding: ${p => `${p.theme.spacing.unit(1)}px ${p.theme.spacing.unit(3)}px`};
  box-sizing: border-box;
`;

export const FeedbackBanner: FeedbackBannerComponent = props => {
  const { variant, title, children, className } = props;
  return (
    <StyledContainer className={className} variant={variant}>
      <Flexbox container direction="row" alignItems="center" gutter={3}>
        <span>{getIcon(variant)}</span>
        <Flexbox container item direction="column">
          {title && (
            <Typography type="secondary" weight="bold">
              {title}
            </Typography>
          )}
          <Typography type="secondary">{children}</Typography>
        </Flexbox>
      </Flexbox>
    </StyledContainer>
  );
};
