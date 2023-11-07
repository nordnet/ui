import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import styled from 'styled-components';

import { Box, Button, CssGrid, Icon, Illustration, PageWrapper, PromotionBanner } from '../..';
import { Display } from '../../common/Display';

import imageDesktop from './images/example_image_96px.jpg';
import imageMobile from './images/example_image_64px.jpg';

const StyledBackground = styled.div`
  background-color: ${(p) => p.theme.color.background};
`;

const meta: Meta<typeof PromotionBanner> = {
  component: PromotionBanner,
  title: 'Molecules / PromotionBanner',
};

export default meta;
type Story = StoryObj<typeof PromotionBanner>;

export const DefaultUsage: Story = {
  render: () => (
    <StyledBackground>
      <PromotionBanner
        title="Save with Nordnet One"
        description="Everything you need for a low fee, compare and choose the fund that suits you best in Nordnet one."
        badgeContent={<Illustration.Robot64 color={(t) => t.color.menuAccent2} />}
        mobileBadgeContent={<Icon.Robot32 color={(t) => t.color.menuAccent2} />}
        scope="page"
        dismissible
      >
        <Button.Pill size="m">Compare fund</Button.Pill>
      </PromotionBanner>
      <PageWrapper background={(t) => t.color.background}>
        <Box py={4} pb={10}>
          <CssGrid.Container
            // prettier-ignore
            areas={[
            ['account'],
            ['values'],
            ['wnl'],
            ['rightCol'],
          ]}
            templateRows={['auto', 'auto', 'auto', 'auto']}
            md={{
              templateColumns: [4, 8],
              templateRows: ['auto', 'auto', 'auto'],
              areas: [
                ['account', 'values'],
                ['account', 'wnl'],
                ['account', 'rightCol'],
              ],
            }}
            lg={{
              templateColumns: [4, 4, 4],
              templateRows: ['auto', '1fr'],
              areas: [
                ['account', 'values', 'rightCol'],
                ['account', 'wnl', 'rightCol'],
              ],
            }}
          >
            <CssGrid.Item area="account">
              <PromotionBanner
                dismissible
                title="Save with Nordnet One"
                description="Everything you need for a low fee, compare and choose the fund that suits you best in Nordnet One."
                badgeContent={<Illustration.Robot64 color={(t) => t.color.menuAccent2} />}
                mobileBadgeContent={<Icon.Robot32 color={(t) => t.color.menuAccent2} />}
              />
            </CssGrid.Item>
            <CssGrid.Item area="values">
              <div style={{ background: 'green', height: '100px' }}>content</div>
            </CssGrid.Item>
            <CssGrid.Item area="wnl">
              <div style={{ background: 'green', height: '100px' }}>content</div>
            </CssGrid.Item>
            <CssGrid.Item area="rightCol">
              <PromotionBanner
                title="Save with Nordnet One"
                description="Everything you need for a low fee, compare and choose the fund that suits you best in Nordnet One."
                badgeContent={<Illustration.Robot64 color={(t) => t.color.menuAccent2} />}
                mobileBadgeContent={<Icon.Robot32 color={(t) => t.color.menuAccent2} />}
                dismissible
              />
            </CssGrid.Item>
          </CssGrid.Container>
        </Box>
      </PageWrapper>
    </StyledBackground>
  ),
};

export const DifferentVariant: Story = {
  render: () => (
    <>
      <Display
        horizontal
        items={[
          {
            title: 'Full width banner scope="page"',
            component: (
              <StyledBackground>
                <PromotionBanner
                  scope="page"
                  title="Save with Nordnet One"
                  description="Everything you need for a low fee, compare and choose the fund that suits you best in Nordnet One."
                  badgeContent={<Illustration.Robot64 color={(t) => t.color.menuAccent2} />}
                  mobileBadgeContent={<Icon.Robot32 color={(t) => t.color.menuAccent2} />}
                  dismissible
                  // eslint-disable-next-line no-alert
                  onClose={() => alert('Close Promotion Banner')}
                />
              </StyledBackground>
            ),
          },
        ]}
      />
      <Display
        items={[
          {
            title: 'With title, description and icon, not dismissible',
            component: (
              <StyledBackground>
                <PromotionBanner
                  title="Save with Nordnet One"
                  description="Everything you need for a low fee, compare and choose the fund that suits you best in Nordnet One."
                  badgeContent={<Illustration.Robot64 color={(t) => t.color.menuAccent2} />}
                  mobileBadgeContent={<Icon.Robot32 color={(t) => t.color.menuAccent2} />}
                >
                  <Button.Pill iconPlacement="left" onClick={() => {}} variant="primary">
                    Compare funds
                  </Button.Pill>
                </PromotionBanner>
              </StyledBackground>
            ),
          },
        ]}
      />
      <Display
        items={[
          {
            title: 'Background color Blue, Green, White. You can also pass custom color',
            component: (
              <StyledBackground>
                <PromotionBanner
                  title="Save with Nordnet One"
                  description="Everything you need for a low fee, compare and choose the fund that suits you best in Nordnet One."
                  badgeContent={<Illustration.Robot64 color={(t) => t.color.menuAccent2} />}
                  mobileBadgeContent={<Icon.Robot32 color={(t) => t.color.menuAccent2} />}
                  dismissible
                />
                <PromotionBanner
                  title="Save with Nordnet One"
                  description="Everything you need for a low fee, compare and choose the fund that suits you best in Nordnet One."
                  badgeContent={<Illustration.Robot64 color={(t) => t.color.menuAccent2} />}
                  backgroundColor="green"
                  mobileBadgeContent={<Icon.Robot32 color={(t) => t.color.menuAccent2} />}
                  dismissible
                />
                <PromotionBanner
                  title="Save with Nordnet One"
                  description="Everything you need for a low fee, compare and choose the fund that suits you best in Nordnet One."
                  badgeContent={<Illustration.Robot64 color={(t) => t.color.menuAccent2} />}
                  backgroundColor="white"
                  mobileBadgeContent={<Icon.Robot32 color={(t) => t.color.menuAccent2} />}
                  dismissible
                />
                <PromotionBanner
                  title="Save with Nordnet One"
                  description="Everything you need for a low fee, compare and choose the fund that suits you best in Nordnet One."
                  badgeContent={<Illustration.Robot64 color={(t) => t.color.menuAccent2} />}
                  backgroundColor={(t) => t.color.menuAccent2}
                  mobileBadgeContent={<Icon.Robot32 color={(t) => t.color.menuAccent2} />}
                  dismissible
                />
              </StyledBackground>
            ),
          },
        ]}
      />
      <Display
        items={[
          {
            title: 'Image badge banner',
            component: (
              <StyledBackground>
                <PromotionBanner
                  title="Save with Nordnet One"
                  description="Everything you need for a low fee, compare and choose the fund that suits you best in Nordnet One."
                  badgeContent={
                    <img src={imageDesktop} alt="hello" style={{ height: 'inherit' }} />
                  }
                  mobileBadgeContent={
                    <img src={imageMobile} alt="hello" style={{ height: 'inherit' }} />
                  }
                  dismissible
                >
                  <Button.Pill iconPlacement="left" onClick={() => {}} variant="primary">
                    Compare funds
                  </Button.Pill>
                </PromotionBanner>
              </StyledBackground>
            ),
          },
        ]}
      />
    </>
  ),
};
