import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Switch } from '../..';

storiesOf('Molecules | Switch', module)
  .add('Default Off', () => <Switch labelText="Notify me by email" onClick={action('clicked')} />)
  .add('Default On', () => (
    <Switch labelText="Notify me by email" onClick={action('clicked')} checkedInitially />
  ))
  .add('Disabled', () => <Switch labelText="Notify me by email" disabled />)
  .add('Controlled behaviour', () => {
    const ControlledExample = () => {
      const [checked, setChecked] = useState(true);

      return (
        <Switch
          labelText="Notify me by email"
          onClick={() => setChecked(!checked)}
          checked={checked}
        />
      );
    };
    return <ControlledExample />;
  });
