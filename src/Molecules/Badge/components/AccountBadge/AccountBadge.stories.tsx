import React from 'react';
import styled from 'styled-components';
import { Display } from '../../../../common/Display';
import { Flexbox, Typography } from '../../../..';
import Badge from '../..';

export default {
  title: 'Molecules / Badge / Account',
  parameters: {
    component: Badge.Account,
  },
};

export const Showcase = {
  render: () => (
    <Flexbox container>
      <Flexbox container direction="column">
        <Badge.Account badgeSize="l">ISK</Badge.Account>
        <Badge.Account badgeSize="m">ISK</Badge.Account>
        <Badge.Account badgeSize="s">ISK</Badge.Account>
      </Flexbox>

      <Flexbox container direction="column">
        <Badge.Account badgeColor={(t) => t.color.badgeBackgroundPositive} badgeSize="l">
          SEB
        </Badge.Account>
        <Badge.Account badgeColor={(t) => t.color.badgeBackgroundPositive} badgeSize="m">
          SEB
        </Badge.Account>
        <Badge.Account badgeColor={(t) => t.color.badgeBackgroundPositive} badgeSize="s">
          SEB
        </Badge.Account>
      </Flexbox>

      <Flexbox container direction="column">
        <Badge.Account badgeColor={(t) => t.color.badgeBackground} badgeSize="l">
          Handels
        </Badge.Account>
        <Badge.Account badgeColor={(t) => t.color.badgeBackground} badgeSize="m">
          HB
        </Badge.Account>
        <Badge.Account badgeColor={(t) => t.color.badgeBackground} badgeSize="s">
          HB
        </Badge.Account>
      </Flexbox>
    </Flexbox>
  ),

  name: 'Showcase',
};

const StyledTypography = styled(Typography)`
  font-size: 8px;
  color: ${(p) => p.theme.color.badgeTextColor};
`;

export const CustomChildren = {
  render: () => (
    <Display
      items={[
        {
          title: 'Typography as child',
          component: (
            <Badge.Account>
              <Typography color={(t) => t.color.badgeTextColor} type="caption">
                KF
              </Typography>
            </Badge.Account>
          ),
        },
        {
          title: 'Styled typography as child',
          component: (
            <Badge.Account>
              <StyledTypography>ASK</StyledTypography>
            </Badge.Account>
          ),
        },
      ]}
    />
  ),

  name: 'Custom children',
};
