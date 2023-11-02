import React from 'react';
import styled from 'styled-components';
import { StoryObj, StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { AccountBadgeStack } from './AccountBadgeStack';
import { AccountBadgeStackProps, Item } from './AccountBadgeStack.types';
import { Display } from '../../../../common/Display';
import Button from '../../../Button';
import { Badge, Typography } from '../../../..';
import ChevronDown8 from '../../../../Atoms/Icon/action/chevronDown/ChevronDown8';

export default {
  title: 'Molecules / Badge / Account / Stack',
  parameters: {
    component: AccountBadgeStack,
  },
};

const DisplayContainer = styled.div`
  > div:nth-child(3n + 1) {
    padding-left: 20px;
    padding-top: 12px;
  }
`;

const singleArray: Item[] = [{ label: 'TJP' }];
const threeArray: Item[] = [{ label: 'KF' }, { label: 'AF' }, { label: 'ISK' }];
const fiveArray: Item[] = [
  { label: 'KF' },
  { label: 'AF' },
  { label: 'ISK' },
  { label: 'ISK' },
  { label: 'ISK' },
];
const tenArray: Item[] = [...fiveArray, ...fiveArray];

export const Default: StoryObj<AccountBadgeStackProps> = {
  render: () => {
    return (
      <DisplayContainer>
        <Display
          title="Size s"
          items={[
            {
              component: <Badge.Account.Stack items={threeArray} truncated={false} />,
              title: '3 badges',
            },
            {
              component: <Badge.Account.Stack items={threeArray} />,
              title: '3 badges, with truncation',
            },
            {
              component: <Badge.Account.Stack items={fiveArray} />,
              title: '3 badges, with more truncation',
            },
            {
              component: <Badge.Account.Stack items={tenArray} truncated={false} />,
              title: '10 badges',
            },
            {
              component: <Badge.Account.Stack items={singleArray} />,
              title: '1 badge',
            },
          ]}
        />
        <Display
          title="Size m"
          items={[
            {
              component: <Badge.Account.Stack items={threeArray} badgeSize="m" truncated={false} />,
              title: '3 badges',
            },
            {
              component: <Badge.Account.Stack items={threeArray} badgeSize="m" />,
              title: '3 badges, with truncation',
            },
            {
              component: <Badge.Account.Stack items={fiveArray} badgeSize="m" />,
              title: '3 badges, with more truncation',
            },
            {
              component: <Badge.Account.Stack items={tenArray} badgeSize="m" truncated={false} />,
              title: '10 badges',
            },
            {
              component: <Badge.Account.Stack items={singleArray} badgeSize="m" />,
              title: '1 badge',
            },
          ]}
        />
        <Display
          title="Size l"
          items={[
            {
              component: <Badge.Account.Stack items={threeArray} badgeSize="l" truncated={false} />,
              title: '3 badges',
            },
            {
              component: <Badge.Account.Stack items={threeArray} badgeSize="l" />,
              title: '3 badges, with truncation',
            },
            {
              component: <Badge.Account.Stack items={fiveArray} badgeSize="l" />,
              title: '3 badges, with more truncation',
            },
            {
              component: <Badge.Account.Stack items={tenArray} badgeSize="l" truncated={false} />,
              title: '10 badges',
            },
            {
              component: <Badge.Account.Stack items={singleArray} badgeSize="l" />,
              title: '1 badge',
            },
          ]}
        />

        <Display
          title="custom size 40"
          items={[
            {
              component: (
                <Badge.Account.Stack items={threeArray} badgeSize={40} truncated={false} />
              ),
              title: '3 badges',
            },
            {
              component: <Badge.Account.Stack items={threeArray} badgeSize={40} />,
              title: '3 badges, with truncation',
            },
            {
              component: <Badge.Account.Stack items={fiveArray} badgeSize={40} />,
              title: '3 badges, with more truncation',
            },
            {
              component: <Badge.Account.Stack items={tenArray} badgeSize={40} truncated={false} />,
              title: '10 badges',
            },
            {
              component: <Badge.Account.Stack items={singleArray} badgeSize={40} />,
              title: '1 badge',
            },
          ]}
        />
      </DisplayContainer>
    );
  },

  name: 'Default',
};

export const InsideButton = {
  render: () => {
    return (
      <DisplayContainer>
        <Display
          title="Size s"
          items={[
            {
              component: (
                <Button.Pill size="m" variant="primary">
                  <Badge.Account.Stack items={[...singleArray, ...singleArray]} />
                </Button.Pill>
              ),
              title: '2 badges',
            },
            {
              component: (
                <Button.Pill size="m">
                  <Badge.Account.Stack items={fiveArray} maxElementsInStack={3} />
                </Button.Pill>
              ),
              title: '3 badges, with truncation',
            },
            {
              component: (
                <div style={{ background: 'white', padding: '12px' }}>
                  <Button.Pill
                    onClick={action('Ouch')}
                    size="m"
                    variant="secondary"
                    icon={<ChevronDown8 color="currentColor" />}
                    iconPlacement="right"
                  >
                    <Badge.Account.Stack items={[...singleArray, ...singleArray]} />
                  </Button.Pill>
                </div>
              ),
              title: '2 badges in secondary button',
            },
            {
              component: (
                <Button.Pill size="m" variant="primary" disabled>
                  <Badge.Account.Stack items={[...singleArray, ...singleArray]} useCurrentColor />
                </Button.Pill>
              ),
              title: '2 badges with current color inherited',
            },
          ]}
        />
      </DisplayContainer>
    );
  },

  name: 'Inside a button',
};

export const OtherVariants = {
  render: () => {
    return (
      <DisplayContainer>
        <Display
          title="With different colors"
          items={[
            {
              component: (
                <Badge.Account.Stack
                  badgeSize="m"
                  items={[
                    { label: 'SEB', badgeColor: (t) => t.color.positive },
                    { label: 'HB', badgeColor: (t) => t.color.badgeBackground },
                    { label: 'AVA', badgeColor: (t) => t.color.negative },
                    { label: 'NN', badgeColor: (t) => t.color.cta },
                  ]}
                />
              ),
              title: 'Other banks',
            },
            {
              component: (
                <Badge.Account.Stack
                  badgeSize="m"
                  items={[
                    {
                      label: (
                        <Typography weight="bold" type="caption" color={(t) => t.color.positive}>
                          TJP
                        </Typography>
                      ),
                    },
                    {
                      label: (
                        <Typography
                          weight="bold"
                          type="caption"
                          color={(t) => t.color.negativeBlackBackground}
                        >
                          TJP
                        </Typography>
                      ),
                    },
                    {
                      label: (
                        <Typography
                          weight="bold"
                          type="tertiary"
                          color={(t) => t.color.bubbleBackground}
                        >
                          TJP
                        </Typography>
                      ),
                    },
                    {
                      label: (
                        <Typography weight="bold" type="secondary" color={(t) => t.color.buyHover}>
                          TJP
                        </Typography>
                      ),
                    },
                  ]}
                />
              ),
              title: 'Custom label',
            },
            {
              component: (
                <Badge.Account.Stack
                  badgeSize="m"
                  maxElementsInStack={2}
                  truncationWrapper={({ truncatedItems }) => (
                    <Typography weight="bold" type="primary" color={(t) => t.color.negative}>
                      {truncatedItems.length}!
                    </Typography>
                  )}
                  items={threeArray}
                />
              ),
              title: 'Custom truncation item',
            },
          ]}
        />
      </DisplayContainer>
    );
  },

  name: 'Other variants',
};
