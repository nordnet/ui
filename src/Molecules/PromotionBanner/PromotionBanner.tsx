import React from 'react';
import styled from 'styled-components';

import { ColorFn } from 'common/Types';
import { PromotionBannerComponent } from './PromotionBanner.types';
import { Badge, Box, Button, Flexbox, Icon, theme, Typography, useMedia } from '../..';

const StyledContainer = styled.div<{ $bg: ColorFn }>`
  background-color: ${p => p.$bg(p.theme)};
  width: 100%;
`;

const StyledPillButton = styled(Button.Pill)`
  white-space: nowrap;
`;

const StyledBox = styled(Box)`
  margin: auto;
  ${p => p.theme.media.greaterThan(theme.breakpoints.sm)} {
    max-width: 720px;
  }
  ${p => p.theme.media.greaterThan(theme.breakpoints.md)} {
    max-width: 936px;
  }
  ${p => p.theme.media.greaterThan(theme.breakpoints.lg)} {
    max-width: 1240px;
  }
  ${p => p.theme.media.greaterThan(theme.breakpoints.xl)} {
    max-width: 1560px;
  }
`;

const StyledIconCross = styled(Icon.Cross16)`
  padding-left: 4px;
`;

export const PromotionBanner: PromotionBannerComponent = ({
  scope = 'module',
  title,
  badgeContent,
  mobileBadgeContent,
  badgeBackground,
  buttonText,
  description,
  background = 'blue',
  dismissable = true,
}) => {
  const getColor = (t: any) => {
    let bg = t.color.illustrationBackgroundBlue;
    if (background === 'green') {
      bg = t.color.infoBarBackgroundSuccess;
    } else if (background === 'white') {
      bg = t.color.bubbleBackground;
    }
    return bg;
  };

  const isMobile = useMedia(t => t.media.lessThan(t.breakpoints.sm));
  const isDesktop = useMedia(t => t.media.greaterThan(t.breakpoints.lg));

  return (
    <StyledContainer $bg={t => getColor(t)}>
      <StyledBox p={3} sm={{ p: 5 }}>
        <Flexbox container justifyContent="space-between">
          {isDesktop && <Flexbox item width="16px" />}
          <Flexbox
            container
            item
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            gutter={3}
            width="100%"
            sm={{ gutter: 5 }}
            md={{ gutter: 5 }}
            lg={{ gutter: 5, justifyContent: 'center', width: '610px' }}
            xl={{ width: '772px' }}
          >
            <Flexbox item>
              <Badge.Icon
                badgeSize={isMobile ? 16 : 24}
                badgeColor={badgeBackground !== undefined ? badgeBackground : t => t.color.text}
              >
                {isMobile ? mobileBadgeContent : badgeContent}
              </Badge.Icon>
            </Flexbox>

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
                    color={t => t.color.label}
                  >
                    {description}
                  </Typography>
                </Flexbox>
              </Flexbox>
              <Flexbox item alignSelf={!isDesktop ? '' : 'center'} width="auto">
                <StyledPillButton size="m">{buttonText}</StyledPillButton>
              </Flexbox>
            </Flexbox>
          </Flexbox>
          {dismissable && (
            <Flexbox item>
              <Button variant="neutral">
                <StyledIconCross />
              </Button>
            </Flexbox>
          )}
        </Flexbox>
      </StyledBox>
    </StyledContainer>
  );
};
