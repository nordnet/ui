import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Input, Flexbox, Icon } from '../../..';

const meta: Meta<typeof Input.QuietText> = {
  component: Input.QuietText,
  title: 'Molecules / Input / QuietText',
};

export default meta;
type Story = StoryObj<typeof Input.QuietText>;

function ControlledExample() {
  const defaultValue = 'My value';
  const [value, setValue] = useState(defaultValue);

  return (
    <Flexbox container gap={4} direction="column">
      <div>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="controlInput">Controlled value: </label>
        <input
          id="controlInput"
          onChange={(e) => setValue(e.target.value)}
          defaultValue={defaultValue}
        />
      </div>
      <Input.QuietText label="Label" placeholder="Placeholder" value={value} />
    </Flexbox>
  );
}

export const DefaultStory: Story = {
  render: () => <Input.QuietText label="Label" placeholder="Placeholder" />,
  name: 'Default',
};

export const Controlled: Story = {
  render: () => <ControlledExample />,
};

export const FullWidth: Story = {
  render: () => <Input.QuietText label="Label" placeholder="Placeholder" width="100%" />,
};

export const Disabled: Story = {
  render: () => (
    <Input.QuietText label="Label" placeholder="Placeholder" value="0" disabled rightAddon="SEK" />
  ),
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
  render: () => <Input.QuietText label="Label" placeholder="Placeholder" rightAddon="SEK" />,
};

export const LeftAddon: Story = {
  render: () => <Input.QuietText label="Label" placeholder="Placeholder" leftAddon="$" />,
};

export const RightAndLeftAddons: Story = {
  render: () => (
    <Input.QuietText label="Label" placeholder="Placeholder" rightAddon="SEK" leftAddon="$" />
  ),
};

export const CustomAddons: Story = {
  render: () => (
    <Input.QuietText
      label="Label"
      placeholder="Placeholder"
      rightAddon={<Icon.DividendStock24 />}
      leftAddon={<Icon.Gold24 />}
    />
  ),
};
