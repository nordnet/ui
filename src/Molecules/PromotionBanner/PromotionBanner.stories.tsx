import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';

import {
  Box,
  Card,
  CssGrid,
  Icon,
  Illustration,
  PageWrapper,
  PromotionBanner,
} from '../..';
import { Display } from '../../common/Display';
import { PromotionBannerProps as Props } from './PromotionBanner.types';

export default {
  title: 'Molecules / PromotionBanner',
  component: PromotionBanner,
} as Meta;

const Template: Story<Props & { children: React.ReactNode }> = args => (
  // <PromotionBanner {...args} />
  <StyledBackground>
    <PromotionBanner {...args} />
    <PageWrapper background={t => t.color.background}>
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
              badgeContent={<Illustration.Robot64 color={t => t.color.menuAccent2} />}
              buttonText="Compare funds"
              mobileBadgeContent={<Icon.Robot32 color={t => t.color.menuAccent2} />}
              scope="module"
            ></PromotionBanner>
          </CssGrid.Item>
        </CssGrid.Container>
      </Box>
    </PageWrapper>
  </StyledBackground>
);
const StyledBackground = styled.div`
  background-color: ${p => p.theme.color.background};
`;

export const DefaultUsage = Template.bind({});
DefaultUsage.args = {
  children:
    'Promotion banner should be used within modules to display information that needs attention. Content is flexible, it can contain links and plain text.',
  title: 'A complete saving with Nordnet One',
  description:
    'Everything you need for a low fee, compare and choose the fund that suits you best in Nordnet One.',
  badgeContent: <Illustration.Robot64 color={t => t.color.menuAccent2} />,
  buttonText: 'Compare funds',
  mobileBadgeContent: <Icon.Robot32 color={t => t.color.menuAccent2} />,
};

export const displayingTitle = () => (
  <Display
    items={[
      {
        title: 'With title',
        component: (
          <PromotionBanner
            title="A complete saving with Nordnet One"
            description="Everything you need for a low fee, compare and choose the fund that suits you best in Nordnet One."
            badgeContent={<Illustration.Robot64 color={t => t.color.menuAccent2} />}
            buttonText="Compare funds"
            mobileBadgeContent={<Icon.Robot32 color={t => t.color.menuAccent2} />}
          ></PromotionBanner>
        ),
      },
    ]}
  />
);

export const differentVariant = () => (
  <Display
    items={[
      {
        title: 'With title',
        component: (
          <StyledBackground>
            <PromotionBanner
              title="A complete saving with Nordnet One"
              description="Everything you need for a low fee, compare and choose the fund that suits you best in Nordnet One."
              badgeContent={<Illustration.Robot64 color={t => t.color.menuAccent2} />}
              buttonText="Compare funds"
              mobileBadgeContent={<Icon.Robot32 color={t => t.color.menuAccent2} />}
            />
            <PageWrapper background={t => t.color.background}>
              <Box py={4} pb={10}>
                <Card>geg</Card>
              </Box>
            </PageWrapper>
          </StyledBackground>
        ),
      },
    ]}
  />
);

export const complexChildren = () => (
  <HashRouter>
    {/* <PromotionBanner title="Warning, complex child">
      <>
        <p>The message can also be structured as a more complex item than just a string</p>
        <p>
          For example, you can provide a Spinner <Spinner id="defaultSpinner" /> if you want to
        </p>
      </>
    </PromotionBanner> */}
  </HashRouter>
);
