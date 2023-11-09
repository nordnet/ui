import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import Tooltip from '../../../Tooltip';
import Drawer from '../../../Drawer';
import Badge from '../..';
import { Display } from '../../../../common/Display';

export default {
  title: 'Molecules / Badge / Tooltip',
  parameters: {
    component: Badge.Tooltip,
  },
};

const DefaultUseComponent = () => {
  const label = 'Extra information goes here';

  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const closeDrawer = () => {
    setOpen(false);
  };

  return (
    <Display
      items={[
        {
          title: 'Small Tooltip Badge',
          component: <Badge.Tooltip badgeSize="s" />,
        },
        {
          title: 'Small Tooltip Badge – Tooltip on hover',
          component: (
            <Tooltip label={label} position="top">
              <Badge.Tooltip badgeSize="s" />
            </Tooltip>
          ),
        },
        {
          title: 'Large Tooltip Badge',
          component: <Badge.Tooltip badgeSize="l" />,
        },
        {
          title: 'Large Tooltip Badge – Tooltip on hover',
          component: (
            <>
              <Tooltip label={label} position="top">
                <Badge.Tooltip />
              </Tooltip>
            </>
          ),
        },
        {
          title: 'Large Tooltip Badge – onClick action',
          component: <Badge.Tooltip badgeSize="l" onClick={action('TooltipBadge clicked')} />,
        },
        {
          title: 'Large Tooltip Badge – onClick opens drawer',
          component: (
            <>
              <Badge.Tooltip
                badgeSize="l"
                onClick={() => toggleDrawer()}
                data-drawer-prevent-click-outside
              />
              <Drawer onClose={closeDrawer} title="TooltipBadge with hover in Drawer" open={open}>
                <Tooltip label="Extra information goes here" position="top">
                  <Badge.Tooltip />
                </Tooltip>
              </Drawer>
            </>
          ),
        },
      ]}
    />
  );
};

export const DefaultUse = {
  render: () => <DefaultUseComponent />,
};
