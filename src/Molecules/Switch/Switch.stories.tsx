import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';

import { Switch, Typography } from '../..';

export default {
  title: 'Molecules / Switch',
  parameters: {
    component: Switch,
  },
};

export const defaultOff = () => <Switch label="Notify me by email" onClick={action('clicked')} />;

export const defaultOn = () => (
  <Switch label="Notify me by email" onClick={action('clicked')} checkedInitially />
);

export const disabledStory = () => <Switch label="Notify me by email" disabled />;

disabledStory.story = {
  name: 'Disabled',
};

export const controlledBehaviour = () => {
  const ControlledExample = () => {
    const [checked, setChecked] = useState(true);

    return (
      <Switch label="Notify me by email" onClick={() => setChecked(!checked)} checked={checked} />
    );
  };
  return <ControlledExample />;
};

controlledBehaviour.story = {
  name: 'Controlled behaviour',
};

export const withLabelPropAsReactNode = () => (
  <Switch label={<Typography>Notify me by email</Typography>} onClick={action('clicked')} />
);

withLabelPropAsReactNode.story = {
  name: 'With Label prop as ReactNode',
};

export const withHiddenLabel = () => (
  <Switch label="Notify me by email" onClick={action('clicked')} hiddenLabel />
);

withHiddenLabel.story = {
  name: 'With hidden label',
};

export const readOnly = () => (
  <Switch label="Necessary cookies" onClick={action('clicked')} readOnly checkedInitially />
);
