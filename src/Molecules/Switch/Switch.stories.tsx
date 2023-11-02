import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';

import { Switch, Typography } from '../..';
import { Display } from '../../common/Display';

export default {
  title: 'DEPRECATED / Molecules / Switch (use Toggle instead)',
  parameters: {
    component: [Switch],
  },
};

export const DefaultOff = () => <Switch label="Notify me by email" onClick={action('clicked')} />;

export const DefaultOn = () => (
  <Switch label="Notify me by email" onClick={action('clicked')} checkedInitially />
);

export const Disabled = {
  render: () => <Switch label="Notify me by email" disabled />,
};

export const ControlledBehaviour = {
  render: () => {
    const ControlledExample = () => {
      const [checked, setChecked] = useState(true);

      return (
        <Switch label="Notify me by email" onClick={() => setChecked(!checked)} checked={checked} />
      );
    };
    return <ControlledExample />;
  },
};

export const WithLabelPropAsReactNode = {
  render: () => (
    <Switch label={<Typography>Notify me by email</Typography>} onClick={action('clicked')} />
  ),
};

export const WithHiddenLabel = {
  render: () => <Switch label="Notify me by email" onClick={action('clicked')} hiddenLabel />,
};

export const ReadOnly = () => (
  <Display
    items={[
      {
        component: <Switch label="Necessary cookies" onClick={action('clicked')} readOnly />,
        title: 'Off',
      },
      {
        component: (
          <Switch label="Necessary cookies" onClick={action('clicked')} readOnly checkedInitially />
        ),
        title: 'On',
      },
    ]}
  />
);
