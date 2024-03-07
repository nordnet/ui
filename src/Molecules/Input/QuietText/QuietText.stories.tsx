import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../../..';

const meta: Meta<typeof Input.QuietText> = {
  component: Input.QuietText,
  title: 'Molecules / Input / QuietText',
};

export default meta;
type Story = StoryObj<typeof Input.QuietText>;

export const DefaultStory: Story = {
  render: () => <Input.QuietText label="Label" placeholder="Placeholder" />,
  name: 'Default',
};

export const Filled: Story = {
  render: () => <Input.QuietText label="Label" placeholder="Placeholder" value="Fill State" />,
};

export const FullWidth: Story = {
  render: () => <Input.QuietText label="Label" placeholder="Placeholder" width="100%" />,
};

export const Disabled: Story = {
  render: () => <Input.QuietText label="Label" placeholder="Placeholder" value="0" disabled />,
};

export const Required: Story = {
  render: () => (
    <Input.QuietText label="Label" placeholder="Placeholder" required visuallyEmphasiseRequired />
  ),
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
