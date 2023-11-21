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

export const DefaultOff = () => (
  <Box py={4}>
    {' '}
    <Toggle label="Notify me by email" onClick={action('clicked')} />
  </Box>
);

export const DefaultOn = () => (
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

export const DisabledStory = {
  render: () => (
    <>
      <Box py={4}>
        <Toggle label="Disabled on" checkedInitially disabled />
      </Box>
      <Box py={4}>
        <Toggle label="Disabled off" disabled />
      </Box>
    </>
  ),

  name: 'Disabled',
};

export const ControlledBehaviour = {
  render: () => {
    const ControlledExample = () => {
      const [checked, setChecked] = useState(true);

      return (
        <Box py={4}>
          {' '}
          <Toggle
            label="Notify me by email"
            onClick={() => setChecked(!checked)}
            checked={checked}
          />
        </Box>
      );
    };
    return <ControlledExample />;
  },

  name: 'Controlled behaviour',
};

export const WithLabelPropAsReactNode = {
  render: () => (
    <Box py={4}>
      {' '}
      <Toggle label={<Typography>Notify me by email</Typography>} onClick={action('clicked')} />
    </Box>
  ),

  name: 'With Label prop as ReactNode',
};

export const WithHiddenLabel = {
  render: () => (
    <Box py={4}>
      {' '}
      <Toggle label="Notify me by email" onClick={action('clicked')} hiddenLabel />
    </Box>
  ),

  name: 'With hidden label',
};

export const ReadOnly = () => (
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
