import React, { useState } from 'react';
import styled from 'styled-components';
import { Display } from '../../../../common/Display';
import { Typography, Box, Button, Flexbox } from '../../../..';
import Badge from '../..';
import { numberWithLimit } from '../../../../common/utils';

export default {
  title: 'Molecules / Badge / Number',
  parameters: {
    component: Badge.Number,
  },
};

export const Showcase = {
  render: () => (
    <Display
      items={[
        {
          title: 'Default Number Badge',
          component: <Badge.Number>1</Badge.Number>,
        },
        {
          title: 'Badge with different sizes',
          component: (
            <table>
              <tr>
                <td width="30px">xs</td>
                <td width="55px">16px</td>
                <td width="50px">
                  <Badge.Number badgeSize="xs">1</Badge.Number>
                </td>
                <td width="50px">
                  <Badge.Number badgeSize="xs">99</Badge.Number>
                </td>
                <td width="50px">
                  <Badge.Number badgeSize="xs">123</Badge.Number>
                </td>
              </tr>
              <tr>
                <td>s</td>
                <td>20px</td>
                <td>
                  <Badge.Number badgeSize="s">1</Badge.Number>
                </td>
                <td>
                  <Badge.Number badgeSize="s">99</Badge.Number>
                </td>
                <td>
                  <Badge.Number badgeSize="s">123</Badge.Number>
                </td>
              </tr>
              <tr>
                <td>m</td>
                <td>24px</td>
                <td>
                  <Badge.Number badgeSize="m">1</Badge.Number>
                </td>
                <td>
                  <Badge.Number badgeSize="m">99</Badge.Number>
                </td>
                <td>
                  <Badge.Number badgeSize="m">123</Badge.Number>
                </td>
              </tr>
              <tr>
                <td>l</td>
                <td>32px</td>
                <td>
                  <Badge.Number badgeSize="l">1</Badge.Number>
                </td>
                <td>
                  <Badge.Number badgeSize="l">99</Badge.Number>
                </td>
                <td>
                  <Badge.Number badgeSize="l">123</Badge.Number>
                </td>
              </tr>
            </table>
          ),
        },
        {
          title: 'Custom background colors with children',
          component: (
            <>
              <Box mb={1}>
                <Badge.Number badgeColor={(t) => t.color.badgeBackgroundPositive}>2</Badge.Number>
              </Box>
              <Box mb={1}>
                <Badge.Number badgeColor={(t) => t.color.badgeBackgroundNegative}>3</Badge.Number>
              </Box>
              <Box mb={1}>
                <Badge.Number badgeColor={(t) => t.color.badgeBackgroundWarning}>4</Badge.Number>
              </Box>
            </>
          ),
        },

        {
          title: 'Custom text color',
          component: <Badge.Number color={(t) => t.color.warning}>5</Badge.Number>,
        },
      ]}
    />
  ),

  name: 'Showcase',
};

export const CommonUseCases = {
  render: () => {
    return (
      <Display
        items={[
          {
            title: 'Number with limit',
            component: <Badge.Number>{numberWithLimit(1234567, 99)}</Badge.Number>,
          },
          {
            title: 'Text with Badge',
            component: (
              <Box my={2}>
                <Typography>
                  Orders <Badge.Number>7</Badge.Number>
                </Typography>
              </Box>
            ),
          },
          {
            title: 'Badge with Aria-label',
            component: (
              <Box my={2}>
                <Typography>
                  Orders <Badge.Number aria-label="7 new orders">7</Badge.Number>
                </Typography>
              </Box>
            ),
          },
          {
            title: 'Badge without Aria-label',
            component: (
              <Box my={2}>
                <Typography>
                  Orders <Badge.Number>7</Badge.Number>
                </Typography>
              </Box>
            ),
          },
        ]}
      />
    );
  },

  name: 'Common use cases',
};

export const SpecializedChildren = {
  render: () => {
    return (
      <Display
        items={[
          {
            title: 'Component as child',
            component: (
              <Box my={2}>
                <Badge.Number color={(t) => t.color.badgeTextColor}>
                  <>
                    <Typography type="title3" color={(t) => t.color.badgeTextColor}>
                      8
                    </Typography>
                    <Typography type="tertiary" color={(t) => t.color.badgeTextColor}>
                      %
                    </Typography>
                  </>
                </Badge.Number>
                <Typography as="p" type="caption">
                  * It&apos;s up to developer to set child component font (family, size, etc.)
                </Typography>
              </Box>
            ),
          },
          {
            title: 'Function as child',
            component: (
              <Box my={2}>
                <Badge.Number color={(t) => t.color.badgeTextColor}>
                  {() => (
                    <Typography type="tertiary" color={(t) => t.color.badgeTextColor}>
                      9%
                    </Typography>
                  )}
                </Badge.Number>
                <Typography as="p" type="caption">
                  * It&apos;s up to developer to set child function font (family, size, etc.)
                </Typography>
              </Box>
            ),
          },
        ]}
      />
    );
  },

  name: 'Specialized children',
};

const StyledFlexbox = styled(Flexbox)`
  width: 200px;
`;

export const BadgeWithAnimation = {
  render: () => {
    const [notificationsExampleOne, setNotificationsExampleOne] = useState(4);
    const [notificationsExampleTwo, setNotificationsExampleTwo] = useState(4);
    const [isNewNotifications, setIsNewNotifications] = useState(false);

    return (
      <Display
        items={[
          {
            title: 'Badge with animation',
            component: (
              <Box py={3}>
                <StyledFlexbox container justifyContent="space-between">
                  <Button
                    variant="secondary"
                    onClick={() => setNotificationsExampleOne(notificationsExampleOne - 1)}
                  >
                    -
                  </Button>
                  <Badge.Number key={notificationsExampleOne} animateOnChange>
                    {notificationsExampleOne}
                  </Badge.Number>
                  <Button
                    variant="secondary"
                    onClick={() => setNotificationsExampleOne(notificationsExampleOne + 1)}
                  >
                    +
                  </Button>
                </StyledFlexbox>
              </Box>
            ),
          },
          {
            title: 'Badge with animation, but without initial animation example',
            component: (
              <Box py={3}>
                <StyledFlexbox container justifyContent="space-between">
                  <Button
                    variant="secondary"
                    onClick={() => {
                      setNotificationsExampleTwo(notificationsExampleTwo - 1);
                      setIsNewNotifications(true);
                    }}
                  >
                    -
                  </Button>
                  <Badge.Number key={notificationsExampleTwo} animateOnChange={isNewNotifications}>
                    {notificationsExampleTwo}
                  </Badge.Number>
                  <Button
                    variant="secondary"
                    onClick={() => {
                      setNotificationsExampleTwo(notificationsExampleTwo + 1);
                      setIsNewNotifications(true);
                    }}
                  >
                    +
                  </Button>
                </StyledFlexbox>
              </Box>
            ),
          },
        ]}
      />
    );
  },

  name: 'Badge with animation',
};
