import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { OptionList, Option } from './SingleSelectList';
import { Display } from '../../../../common/Display';

storiesOf('Molecules | Input / Select / SingleSelectList', module)
  .add('Item default', () => <Option value={0} label="First" />)
  .add('Item selected', () => <Option value={0} label="First" selected />)
  .add('Item disabled', () => <Option value={0} label="First" disabled />)
  .add('List with different arrow positions', () => (
    <Display
      items={[
        {
          component: (
            <OptionList>
              <Option value={-1} label="Default?" />
              <Option value={0} label="First" selected />
              <Option value={2} label="Second" />
              <Option value={3} label="Disabled" disabled />
            </OptionList>
          ),
          title: 'Default (right)',
        },

        {
          component: (
            <OptionList position="left">
              <Option value={-1} label="Default?" />
              <Option value={0} label="First" selected />
              <Option value={2} label="Second" />
              <Option value={3} label="Disabled" disabled />
            </OptionList>
          ),
          title: 'Left',
        },
        {
          component: (
            <OptionList position="center">
              <Option value={-1} label="Default?" />
              <Option value={0} label="First" selected />
              <Option value={2} label="Second" />
              <Option value={3} label="Disabled" disabled />
            </OptionList>
          ),
          title: 'Center',
        },
      ]}
    />
  ));
