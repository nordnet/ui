import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Switch, Typography } from '../..';

storiesOf('Molecules | Switch', module)
  .add('Default Off', () => <Switch label="Notify me by email" onClick={action('clicked')} />)
  .add('Default On', () => (
    <Switch label="Notify me by email" onClick={action('clicked')} checkedInitially />
  ))
  .add('Disabled', () => <Switch label="Notify me by email" disabled />)
  .add('Controlled behaviour', () => {
    const ControlledExample = () => {
      const [checked, setChecked] = useState(true);

      return (
        <Switch label="Notify me by email" onClick={() => setChecked(!checked)} checked={checked} />
      );
    };
    return <ControlledExample />;
  })
  .add('With Label prop as ReactNode', () => (
    <Switch label={<Typography>Notify me by email</Typography>} onClick={action('clicked')} />
  ));
