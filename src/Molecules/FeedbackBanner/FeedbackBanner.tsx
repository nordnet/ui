import React from 'react';
import styled from 'styled-components';
import { FeedbackBannerComponent, FeedbackBannerProps } from './FeedbackBanner.types';
import { Flexbox, Icon, Typography } from '../..';
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
      return theme.colorTokens.error.background_medium;
    case 'warning':
      return theme.colorTokens.warning.background_default;
    case 'success':
      return theme.colorTokens.positive.background_default;
    case 'info':
    default:
      return theme.colorTokens.action.background_default;
  }
};

const getIcon = (variant: FeedbackBannerProps['variant']) => {
  switch (variant) {
    case 'error':
      return <Icon.ErrorFill24 color={(t) => t.colorTokens.error.icon_default} />;
    case 'warning':
      return <Icon.WarningFill24 color={(t) => t.colorTokens.warning.icon_default} />;
    case 'success':
      return <Icon.CheckCircleFill24 color={(t) => t.colorTokens.positive.icon_default} />;
    case 'info':
    default:
      return <Icon.InformationFill24 color={(t) => t.colorTokens.action.icon_default} />;
  }
};

const StyledContainer = styled.div<FeedbackBannerProps>`
  background-color: ${({ theme, scope }) =>
    scope === 'module'
      ? theme.colorTokens.neutral.background_weak
      : theme.colorTokens.neutral.background_default};
  border-left: ${(p) => p.theme.spacing.unit(1)}px solid ${getBorderColor};
  padding: ${(p) => `${p.theme.spacing.unit(1)}px ${p.theme.spacing.unit(3)}px`};
  box-sizing: border-box;
`;

const TextFlexbox = styled(Flexbox)`
  width: 100%;
`;

export const FeedbackBanner: FeedbackBannerComponent = ({
  variant = 'info',
  scope = 'module',
  title,
  withIcon = true,
  children,
  className,
}) => {
  return (
    <StyledContainer className={className} variant={variant} scope={scope}>
      <Flexbox container direction="row" alignItems="center" gutter={3}>
        {withIcon && <>{getIcon(variant)}</>}
        <TextFlexbox container item direction="column">
          {title && (
            <Typography type="secondary" weight="bold">
              {title}
            </Typography>
          )}
          <Typography type="secondary">{children}</Typography>
        </TextFlexbox>
      </Flexbox>
    </StyledContainer>
  );
};
