import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import SegmentedControl from './SegmentedControl';
import docs from './SegmentedControl.mdx';
import Box from '../../Atoms/Box';
import Button from '../Button';

export default {
  title: 'Molecules / SegmentedControl',
  parameters: {
    component: SegmentedControl,
    docs: {
      page: docs,
    },
  },
};

export const Default = () => (
  <div style={{ backgroundColor: 'green', width: '50%', margin: '50px', height: '100%' }}>
    <SegmentedControl>
      <SegmentedControl.Item itemId={0} onItemClick={action('clicked item 0')}>
        Option 1
      </SegmentedControl.Item>
      <SegmentedControl.Item itemId={1} onItemClick={action('clicked item 1')}>
        Option 2
      </SegmentedControl.Item>
      <SegmentedControl.Item itemId={2} onItemClick={action('clicked item 2')}>
        Option 3
      </SegmentedControl.Item>
    </SegmentedControl>
  </div>
);

export const LastItemSelected = () => (
  <div style={{ backgroundColor: 'green', width: '110px', margin: '50px', height: '100%' }}>
    <SegmentedControl selectedInitially={1}>
      <SegmentedControl.Item itemId={0} onItemClick={action('clicked item 0')}>
        %
      </SegmentedControl.Item>
      <SegmentedControl.Item itemId={1} onItemClick={action('clicked item 1')}>
        SEK
      </SegmentedControl.Item>
    </SegmentedControl>
  </div>
);

const ControlledBehaviourExample = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div style={{ backgroundColor: 'green', width: '250px', margin: '50px', height: '100%' }}>
      <SegmentedControl selected={selected} onClick={(_, itemId) => setSelected(itemId)}>
        <SegmentedControl.Item itemId={0}>Option 1</SegmentedControl.Item>
        <SegmentedControl.Item itemId={1}>Option 2</SegmentedControl.Item>
        <SegmentedControl.Item itemId={2}>Option 3</SegmentedControl.Item>
      </SegmentedControl>
    </div>
  );
};

export const ControlledBehaviour = {
  render: () => <ControlledBehaviourExample />,
};

export const Disabled = () => (
  <div style={{ backgroundColor: 'green', width: '50%', margin: '50px', height: '100%' }}>
    <SegmentedControl disabled>
      <SegmentedControl.Item itemId={0} onItemClick={action('clicked item 0')}>
        Option 1
      </SegmentedControl.Item>
      <SegmentedControl.Item itemId={1} onItemClick={action('clicked item 1')}>
        Option 2
      </SegmentedControl.Item>
    </SegmentedControl>
  </div>
);

const ControlledDisabledExample = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div style={{ backgroundColor: 'green', width: '250px', margin: '50px', height: '100%' }}>
      <SegmentedControl disabled selected={selected} onClick={(_, itemId) => setSelected(itemId)}>
        <SegmentedControl.Item itemId={0}>Option 1</SegmentedControl.Item>
        <SegmentedControl.Item itemId={1}>Option 2</SegmentedControl.Item>
        <SegmentedControl.Item itemId={2}>Option 3</SegmentedControl.Item>
      </SegmentedControl>
      <Box mt={4}>
        <Button onClick={() => setSelected((selected + 1) % 3)}>Next</Button>
      </Box>
    </div>
  );
};

export const ControlledDisabled = {
  render: () => <ControlledDisabledExample />,
};
