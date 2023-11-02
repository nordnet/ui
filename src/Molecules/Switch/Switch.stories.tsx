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

export const defaultOff = () => <Switch label="Notify me by email" onClick={action('clicked')} />;

export const defaultOn = () => (
  <Switch label="Notify me by email" onClick={action('clicked')} checkedInitially />
);

export const disabledStory = {
  render: () => <Switch label="Notify me by email" disabled />,
  name: 'Disabled',
};

export const controlledBehaviour = {
  render: () => {
    const ControlledExample = () => {
      const [checked, setChecked] = useState(true);

      return (
        <Switch label="Notify me by email" onClick={() => setChecked(!checked)} checked={checked} />
      );
    };
    return <ControlledExample />;
  },

  name: 'Controlled behaviour',
};

export const withLabelPropAsReactNode = {
  render: () => (
    <Switch label={<Typography>Notify me by email</Typography>} onClick={action('clicked')} />
  ),

  name: 'With Label prop as ReactNode',
};

export const withHiddenLabel = {
  render: () => <Switch label="Notify me by email" onClick={action('clicked')} hiddenLabel />,

  name: 'With hidden label',
};

export const readOnly = () => (
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
