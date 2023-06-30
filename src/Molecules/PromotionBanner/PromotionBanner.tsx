import React, { useState, useCallback } from 'react';
import styled, { ThemedStyledProps } from 'styled-components';

import { Theme } from '../../theme/theme.types';
import { PromotionBannerComponent, PromotionBannerProps } from './PromotionBanner.types';
import { Badge, Box, Button, Flexbox, Icon, Typography, useMedia } from '../..';

const getColor = (props: ThemedStyledProps<PromotionBannerProps, Theme>) => {
  const { backgroundColor, theme } = props;

  if (backgroundColor === 'green') {
    return theme.color.infoBarBackgroundSuccess;
  }
  if (backgroundColor === 'white') {
    return theme.color.bubbleBackground;
  }
  if (typeof backgroundColor === 'function') {
    return backgroundColor(theme);
  }

  return theme.color.illustrationBackgroundBlue;
};

const StyledContainer = styled.div<PromotionBannerProps>`
  background-color: ${(p) => getColor(p)};
  width: 100%;
  box-shadow: 0 2px 2px 0 ${({ theme }) => theme.color.shadowCard};
  border-radius: ${({ theme, scope }) => (scope === 'module' ? theme.borderRadius(8) : 0)};
`;

const StyledBox = styled(Box)`
  margin: auto;
  ${(p) => p.theme.media.greaterThan(p.theme.breakpoints.sm)} {
    max-width: 720px;
  }
  ${(p) => p.theme.media.greaterThan(p.theme.breakpoints.md)} {
    max-width: 936px;
  }
  ${(p) => p.theme.media.greaterThan(p.theme.breakpoints.lg)} {
    max-width: 1240px;
  }
  ${(p) => p.theme.media.greaterThan(p.theme.breakpoints.xl)} {
    max-width: 1560px;
  }
`;

const StyledIconCross = styled(Icon.Cross16)`
  padding-left: 4px;
`;

const StyledBadge = styled(Badge.Icon)`
  overflow: hidden;
`;

export const PromotionBanner: PromotionBannerComponent = ({
  backgroundColor,
  badgeBackground,
  badgeContent,
  children,
  description,
  dismissible,
  mobileBadgeContent,
  onClose,
  scope = 'module',
  justifyContent = 'center',
  title,
}) => {
  const isDesktop = useMedia((t) => t.media.greaterThan(t.breakpoints.sm));
  const isSmallScreen = useMedia((t) => t.media.lessThan(t.breakpoints.lg));

  const [showPromotion, setShowPromotion] = useState(true);
  const isPageDesktop = isDesktop && scope === 'page';

  const handleClose = useCallback(() => {
    setShowPromotion(false);

    if (onClose) {
      onClose();
    }
  }, [onClose]);

  return showPromotion ? (
    <StyledContainer backgroundColor={backgroundColor} scope={scope}>
      <StyledBox p={3} sm={{ p: 5 }}>
        <Flexbox container justifyContent="center">
          <Flexbox
            container
            flex="1"
            item
            direction="row"
            alignItems="center"
            justifyContent={justifyContent}
            gutter={3}
            width="100%"
            sm={{ gutter: 5 }}
            md={{ gutter: 5 }}
            lg={{ gutter: 5, justifyContent, width: '772px' }}
            xl={{ width: '772px' }}
          >
            {mobileBadgeContent && badgeContent && (
              <Flexbox item>
                <StyledBadge
                  badgeSize={isDesktop ? 24 : 16}
                  badgeColor={badgeBackground || ((t) => t.color.accountBadgeBackground)}
                >
                  {isDesktop ? badgeContent : mobileBadgeContent}
                </StyledBadge>
              </Flexbox>
            )}
            <Flexbox
              container
              item
              direction="column"
              gutter={2}
              alignItems="flex-start"
              sm={{ gutter: 3 }}
              lg={{
                direction: scope === 'page' ? 'row' : 'column',
                gutter: isPageDesktop ? 5 : 3,
                width: 'auto',
              }}
            >
              <Flexbox
                container
                item
                direction="column"
                gutter={1}
                sm={{ gutter: 2, justifyContent: 'center' }}
                lg={{ gutter: isPageDesktop ? 2 : 1 }}
              >
                <Flexbox item>
                  <Typography
                    type={isPageDesktop ? 'title3' : 'primary'}
                    weight="extrabold"
                    color={(t) => t.color.promotionBannerTitle}
                  >
                    {title}
                  </Typography>
                </Flexbox>
                <Flexbox item>
                  <Typography
                    type={isPageDesktop ? 'secondary' : 'tertiary'}
                    color={(t) => t.color.promotionBannerDescription}
                  >
                    {description}
                  </Typography>
                </Flexbox>
              </Flexbox>
              {children && (
                <Flexbox
                  item
                  alignSelf={isSmallScreen || scope !== 'page' ? 'flex-start' : 'center'}
                >
                  {children}
                </Flexbox>
              )}
            </Flexbox>
          </Flexbox>
          {dismissible && (
            <Flexbox container item flex="0" justifyContent="flex-end" alignItems="flex-start">
              <Button variant="neutral" onClick={handleClose}>
                <StyledIconCross />
              </Button>
            </Flexbox>
          )}
        </Flexbox>
      </StyledBox>
    </StyledContainer>
  ) : null;
};
