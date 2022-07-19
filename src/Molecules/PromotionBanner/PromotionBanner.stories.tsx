import React from 'react';
import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';

import { Box, CssGrid, Icon, Illustration, PageWrapper, PromotionBanner, Spinner } from '../..';
import { Display } from '../../common/Display';
import { PromotionBannerProps as Props } from './PromotionBanner.types';

export default {
  title: 'Molecules / PromotionBanner',
  component: PromotionBanner,
} as Meta;

const Template: Story<Props & { children: React.ReactNode }> = (args) => {
  return (
    <StyledBackground>
      <PromotionBanner dismissible {...args} />
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
              templateColumns: [3, 6, 3],
              templateRows: ['auto', '1fr'],
              areas: [
                ['account', 'values', 'rightCol'],
                ['account', 'wnl', 'rightCol'],
              ],
            }}
          >
            <CssGrid.Item area="account">
              <div style={{ background: 'green', height: '100px' }}>
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              </div>
            </CssGrid.Item>
            <CssGrid.Item area="values">
              <div style={{ background: 'green', height: '100px' }}>
                bbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbb
              </div>
            </CssGrid.Item>
            <CssGrid.Item area="wnl">
              <div style={{ background: 'green', height: '100px' }}>
                cccccccccccccccccccccccccccccccccccccc
              </div>
            </CssGrid.Item>
            <CssGrid.Item area="rightCol">
              <PromotionBanner
                title="A complete saving with Nordnet One"
                description="Everything you need for a low fee, compare and choose the fund that suits you best in Nordnet One."
                badgeContent={<Illustration.Robot64 color={(t) => t.color.menuAccent2} />}
                buttonText="Compare funds"
                mobileBadgeContent={<Icon.Robot32 color={(t) => t.color.menuAccent2} />}
                scope="module"
                dismissible
              />
            </CssGrid.Item>
          </CssGrid.Container>
        </Box>
      </PageWrapper>
    </StyledBackground>
  );
};

const StyledBackground = styled.div`
  background-color: ${(p) => p.theme.color.background};
`;

export const DefaultUsage = Template.bind({});
DefaultUsage.args = {
  title: 'A complete saving with Nordnet One',
  description:
    'Everything you need for a low fee, compare and choose the fund that suits you best in Nordnet One.',
  badgeContent: <Illustration.Robot64 color={(t) => t.color.menuAccent2} />,
  buttonText: 'Compare funds',
  mobileBadgeContent: <Icon.Robot32 color={(t) => t.color.menuAccent2} />,
};

export const DifferentVariant = () => {
  return (
    <>
      <Display
        horizontal
        items={[
          {
            title: 'Page scope',
            component: (
              <StyledBackground>
                <PromotionBanner
                  scope="page"
                  title="A complete saving with Nordnet One"
                  description="Everything you need for a low fee, compare and choose the fund that suits you best in Nordnet One."
                  badgeContent={<Illustration.Robot64 color={(t) => t.color.menuAccent2} />}
                  buttonText="Compare funds"
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
            title: 'With title not dismissible',
            component: (
              <StyledBackground>
                <PromotionBanner
                  title="A complete saving with Nordnet One"
                  description="Everything you need for a low fee, compare and choose the fund that suits you best in Nordnet One."
                  badgeContent={<Illustration.Robot64 color={(t) => t.color.menuAccent2} />}
                  buttonText="Compare funds"
                  mobileBadgeContent={<Icon.Robot32 color={(t) => t.color.menuAccent2} />}
                />
              </StyledBackground>
            ),
          },
        ]}
      />
      <Display
        items={[
          {
            title: 'With title is dismissible',
            component: (
              <StyledBackground>
                <PromotionBanner
                  title="A complete saving with Nordnet One"
                  description="Everything you need for a low fee, compare and choose the fund that suits you best in Nordnet One."
                  badgeContent={<Illustration.Robot64 color={(t) => t.color.menuAccent2} />}
                  buttonText="Compare funds"
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
            title: 'With title no Icon',
            component: (
              <StyledBackground>
                <PromotionBanner
                  title="A complete saving with Nordnet One"
                  description="Everything you need for a low fee, compare and choose the fund that suits you best in Nordnet One."
                  buttonLink="https://example.se"
                  buttonText="Compare funds"
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
            title: 'Warning, complex child',
            component: (
              <StyledBackground>
                <PromotionBanner
                  title="A complete saving with Nordnet One"
                  description="Everything you need for a low fee, compare and choose the fund that suits you best in Nordnet One."
                  buttonLink="https://example.se"
                  buttonText="Compare funds"
                  dismissible
                >
                  <Spinner id="defaultSpinner" size={10} />
                </PromotionBanner>
              </StyledBackground>
            ),
          },
        ]}
      />
    </>
  );
};
