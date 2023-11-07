import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Box, Flexbox, Icon, Card } from '../..';
import { TagChip } from './TagChip';
import { Props } from './TagChip.types';

const meta: Meta<typeof TagChip> = {
  component: TagChip,
  title: 'Molecules / TagChip',
};

export default meta;
type Story = StoryObj<typeof TagChip>;

const Template = (args: Props) => (
  <div style={{ padding: '10px', backgroundColor: 'white' }}>
    <TagChip {...args} />
  </div>
);

export const OnlyLabel: Story = {
  render: Template,

  args: {
    label: 'Default',
  },
};

export const BothIconAndLabel: Story = {
  render: Template,

  args: {
    icon: <Icon.MonthlySavings16 />,
    label: 'Default',
  },
};

export const Emoji = () => (
  <Card>
    <Box p={3}>
      <TagChip label="Title" icon="😍" />
    </Box>
  </Card>
);

export const WithFourTagChips = () => (
  <Card>
    <Box p={2}>
      <Flexbox container gap={1}>
        <TagChip label="label" />
        <TagChip label="🌻 label" /> <TagChip icon={<Icon.MonthlySavings16 />} label="label" />{' '}
        <TagChip label="emoji as an icon" icon="😍" />
      </Flexbox>
    </Box>
  </Card>
);
