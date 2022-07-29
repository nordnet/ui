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
  title,
}) => {
  const isMobile = useMedia((t) => t.media.lessThan(t.breakpoints.sm));
  const [showPromotion, setShowPromotion] = useState(true);

  const handleClose = useCallback(() => {
    setShowPromotion(false);

    if (onClose) {
      onClose();
    }
  }, [onClose]);

  return showPromotion ? (
    <StyledContainer backgroundColor={backgroundColor}>
      <StyledBox p={3} sm={{ p: 5 }}>
        <Flexbox container justifyContent="center">
          <Flexbox
            container
            flex="1"
            item
            direction="row"
            alignItems="center"
            justifyContent="center"
            gutter={3}
            width="100%"
            sm={{ gutter: 5 }}
            md={{ gutter: 5 }}
            lg={{ gutter: 5, justifyContent: 'center', width: '610px' }}
            xl={{ width: '772px' }}
          >
            {mobileBadgeContent && badgeContent && (
              <Flexbox item>
                <StyledBadge
                  badgeSize={isMobile ? 16 : 24}
                  badgeColor={badgeBackground || ((t) => t.color.accountBadgeBackground)}
                >
                  {isMobile ? mobileBadgeContent : badgeContent}
                </StyledBadge>
              </Flexbox>
            )}
            <Flexbox
              container
              item
              direction="column"
              gutter={2}
              width="100%"
              sm={{ gutter: 3 }}
              lg={{ direction: scope === 'page' ? 'row' : 'column', gutter: 5, width: 'auto' }}
            >
              <Flexbox
                container
                item
                direction="column"
                width="100%"
                gutter={1}
                sm={{ gutter: 2, justifyContent: 'center' }}
                lg={{ gutter: 2, width: 'auto' }}
              >
                <Flexbox
                  item
                  container
                  width="100%"
                  justifyContent="space-between"
                  lg={{ width: 'auto' }}
                >
                  <Flexbox item>
                    <Typography
                      type={scope === 'page' && !isMobile ? 'title3' : 'primary'}
                      weight="extrabold"
                    >
                      {title}
                    </Typography>
                  </Flexbox>
                </Flexbox>
                <Flexbox item>
                  <Typography
                    type={scope === 'page' && !isMobile ? 'secondary' : 'tertiary'}
                    color={(t) => t.color.label}
                  >
                    {description}
                  </Typography>
                </Flexbox>
                {children && <Flexbox item>{children}</Flexbox>}
              </Flexbox>
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
