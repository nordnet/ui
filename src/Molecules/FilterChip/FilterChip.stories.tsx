import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

import { Box, Flexbox, Icon, Card } from '../..';
import { FilterChip } from './FilterChip';
import { Props } from './FilterChip.types';

const meta: Meta<typeof FilterChip> = {
  component: FilterChip,
  title: 'Molecules / FilterChip',
};

export default meta;
type Story = StoryObj<typeof FilterChip>;

const onChange = action('on change triggered');

const Template = (args: Props) => (
  <div style={{ padding: '10px', backgroundColor: 'white' }}>
    <FilterChip {...args} />
  </div>
);

export const OnlyLabel: Story = {
  render: Template,

  args: {
    label: 'Default',
  },
};

export const OnlyIcon: Story = {
  render: Template,

  args: {
    icon: <Icon.Money16 />,
  },
};

export const BothIconAndLabel: Story = {
  render: Template,

  args: {
    icon: <Icon.MonthlySavings16 />,
    label: 'Default',
  },
};

export const AnotherIconAndLabel: Story = {
  render: Template,

  args: {
    icon: <Icon.Money16 />,
    label: 'Another label yqPomå',
  },
};

export const WithSelectedInitially: Story = {
  render: Template,

  args: {
    icon: <Icon.Money16 />,
    selectedInitially: true,
  },
};

export const WithDisabled: Story = {
  render: Template,

  args: {
    icon: <Icon.Money16 />,
    label: 'disabled',
    disabled: true,
  },
};

export const SustainabilityVariant = () => (
  <Card>
    <Box p={3}>
      <FilterChip
        label="Sustainable"
        value="Sustainable"
        icon={<Icon.Sustainable16 />}
        variant="sustainability"
      />
    </Box>
  </Card>
);

export const BrandVariant = () => (
  <Card>
    <Box p={3}>
      <FilterChip label="brand" value="brand" icon={<Icon.Sustainable16 />} variant="brand" />
    </Box>
  </Card>
);

export const EmojiVariant = () => (
  <Card>
    <Box p={3}>
      <FilterChip label="Title" value="Title" icon="🌻" variant="brand" />
    </Box>
  </Card>
);

export const WithFourFilterChips = () => (
  <Card>
    <Box p={2}>
      <Flexbox container gap={1}>
        <FilterChip icon={<Icon.MonthlySavings16 />} value="1" />{' '}
        <FilterChip icon={<Icon.MonthlySavings16 />} label="&nbsp;" value="1" />{' '}
        <FilterChip icon={<Icon.MonthlySavings16 />} label="label" value="1" />{' '}
        <FilterChip label="Label one next to icon one" value="0" />
      </Flexbox>
    </Box>
  </Card>
);

const WithValueControlledBehaviorExample = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Card>
      <FilterChip
        label="Controlled selection card"
        value="This component is controlled"
        selected={isChecked}
        onChange={onChange}
      />
      <button type="button" onClick={() => setIsChecked(true)}>
        Selected
      </button>
      <button type="button" onClick={() => setIsChecked(false)}>
        Not selected
      </button>
      value: {isChecked.toString()}
    </Card>
  );
};

export const WithValueControlledBehavior = {
  render: () => <WithValueControlledBehaviorExample />,
};
