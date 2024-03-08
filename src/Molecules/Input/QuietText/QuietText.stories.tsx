import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Input, Flexbox } from '../../..';

const meta: Meta<typeof Input.QuietText> = {
  component: Input.QuietText,
  title: 'Molecules / Input / QuietText',
};

export default meta;
type Story = StoryObj<typeof Input.QuietText>;

function ControlledExample() {
  const [value, setValue] = useState('Filled state');

  return (
    <Flexbox container gap={4}>
      <input onChange={(e) => setValue(e.target.value)} />
      <Input.QuietText label="Label" placeholder="Placeholder" value={value} rightAddon="%" />
    </Flexbox>
  );
}

export const DefaultStory: Story = {
  render: () => <Input.QuietText label="Label" placeholder="Placeholder" />,
  name: 'Default',
};

export const Filled: Story = {
  render: () => <ControlledExample />,
};

export const FullWidth: Story = {
  render: () => <Input.QuietText label="Label" placeholder="Placeholder" width="100%" />,
};

export const Disabled: Story = {
  render: () => <Input.QuietText label="Label" placeholder="Placeholder" value="0" disabled />,
};

export const Required: Story = {
  render: () => <Input.QuietText label="Label" placeholder="Placeholder" required />,
};

export const Error: Story = {
  render: () => (
    <Input.QuietText
      label="Label"
      placeholder="Placeholder"
      error="Some error text that will wrap itself over couple of lines"
    />
  ),
};

export const Success: Story = {
  render: () => <Input.QuietText label="Label" placeholder="Placeholder" success />,
};

export const RightAddon: Story = {
  render: () => <Input.QuietText label="Label" placeholder="Placeholder" rightAddon="%" />,
};

export const LeftAddon: Story = {
  render: () => <Input.QuietText label="Label" placeholder="Placeholder" leftAddon="$" />,
};

export const RightAndLeftAddons: Story = {
  render: () => (
    <Input.QuietText label="Label" placeholder="Placeholder" rightAddon="%" leftAddon="$" />
  ),
};
