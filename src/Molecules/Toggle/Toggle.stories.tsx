import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import Toggle from '.';
import { Box, Typography } from '../..';
import { Display } from '../../common/Display';

export default {
  title: 'Molecules / Toggle',
  parameters: {
    component: [Toggle],
  },
};

export const defaultOff = () => (
  <Box py={4}>
    {' '}
    <Toggle label="Notify me by email" onClick={action('clicked')} />
  </Box>
);

export const defaultOn = () => (
  <>
    <Box py={4}>
      <Toggle label="Size: large" size="l" onClick={action('clicked')} checkedInitially />
    </Box>
    <Box py={4}>
      <Toggle label="Size: medium" size="m" onClick={action('clicked')} checkedInitially />
    </Box>
    <Box py={4}>
      <Toggle label="Size: small" size="s" onClick={action('clicked')} checkedInitially />
    </Box>
  </>
);

export const disabledStory = () => (
  <Box py={4}>
    {' '}
    <Toggle label="Notify me by email" disabled />
  </Box>
);

disabledStory.story = {
  name: 'Disabled',
};

export const controlledBehaviour = () => {
  const ControlledExample = () => {
    const [checked, setChecked] = useState(true);

    return (
      <Box py={4}>
        {' '}
        <Toggle label="Notify me by email" onClick={() => setChecked(!checked)} checked={checked} />
      </Box>
    );
  };
  return <ControlledExample />;
};

controlledBehaviour.story = {
  name: 'Controlled behaviour',
};

export const withLabelPropAsReactNode = () => (
  <Box py={4}>
    {' '}
    <Toggle label={<Typography>Notify me by email</Typography>} onClick={action('clicked')} />
  </Box>
);

withLabelPropAsReactNode.story = {
  name: 'With Label prop as ReactNode',
};

export const withHiddenLabel = () => (
  <Box py={4}>
    {' '}
    <Toggle label="Notify me by email" onClick={action('clicked')} hiddenLabel />
  </Box>
);

withHiddenLabel.story = {
  name: 'With hidden label',
};

export const readOnly = () => (
  <Display
    items={[
      {
        component: (
          <Box py={4}>
            {' '}
            <Toggle label="Necessary cookies" onClick={action('clicked')} readOnly />
          </Box>
        ),
        title: 'Off',
      },
      {
        component: (
          <Box py={4}>
            {' '}
            <Toggle
              label="Necessary cookies"
              onClick={action('clicked')}
              readOnly
              checkedInitially
            />
          </Box>
        ),
        title: 'On',
      },
    ]}
  />
);
