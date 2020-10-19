import * as React from 'react';
import { Action } from './Action';
import { Display } from '../../../../../common/Display';
import { Icon } from '../../../../..';

export default {
  title: 'Molecules / Input / Select / Action',
};

export const allStates = () => (
  <Display
    items={[
      {
        component: (
          <Action
            label="Normal"
            isKeyboardNavigation={false}
            icon={<Icon.Bank size={4} color="currentColor" />}
            focused={false}
          />
        ),
        title: 'Normal',
      },
      {
        component: (
          <Action
            label="Focused"
            isKeyboardNavigation
            icon={<Icon.Bank size={4} color="currentColor" />}
            focused
          />
        ),
        title: 'Focused',
      },
      {
        component: (
          <Action
            label="Disabled"
            isKeyboardNavigation={false}
            icon={<Icon.Bank size={4} color="currentColor" />}
            focused={false}
            disabled
          />
        ),
        title: 'Disabled',
      },
      {
        component: (
          <Action
            label="No icon"
            isKeyboardNavigation={false}
            icon={null}
            focused={false}
            disabled
          />
        ),
        title: 'No icon',
      },
    ]}
  />
);
