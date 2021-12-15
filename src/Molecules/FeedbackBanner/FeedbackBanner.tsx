import React from 'react';
import styled from 'styled-components';

import { FeedbackBannerComponent, FeedbackBannerProps } from './FeedbackBanner.types';
import { Flexbox, OldIcon, Typography } from '../..';
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
      return <OldIcon.CrossCircle size={5} fill={(t) => t.color.negative} />;
    case 'warning':
      return <OldIcon.WarningTriangle size={5} fill={(t) => t.color.warning} />;
    case 'success':
      return <OldIcon.CheckMarkCircle size={5} fill={(t) => t.color.positive} />;
    case 'info':
    default:
      return <OldIcon.InfoCircle size={5} fill={(t) => t.color.cta} />;
  }
};

const StyledContainer = styled.div<FeedbackBannerProps>`
  background-color: ${({ theme, scope }) =>
    theme.color[scope === 'module' ? 'feedbackModuleBackground' : 'feedbackPageBackground']};
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
  children,
  className,
}) => {
  return (
    <StyledContainer className={className} variant={variant} scope={scope}>
      <Flexbox container direction="row" alignItems="center" gutter={3}>
        <>{getIcon(variant)}</>
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
