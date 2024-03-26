import React from 'react';
import { FormGroup, Flexbox, Input } from '../..';

export default {
  title: 'Molecules / FormGroup',
  parameters: {
    component: FormGroup,
  },
};

function GroupContent({ name }: { name: string }) {
  return (
    <Flexbox container gap={4}>
      <Input.Radio label="Red" name={name} id={`${name}-red`} />
      <Input.Radio label="Blue" name={name} id={`${name}-blue`} />
    </Flexbox>
  );
}

export const DefaultStory = {
  render: () => (
    <FormGroup label="Choose a color">
      <GroupContent name="default-colors" />
    </FormGroup>
  ),

  name: 'Default',
};

export const CustomWidth = {
  render: () => (
    <FormGroup label="Choose a color" width="100%">
      <GroupContent name="default-colors" />
    </FormGroup>
  ),
};

export const Required = {
  render: () => (
    <FormGroup label="Choose a color" required>
      <GroupContent name="default-colors" />
    </FormGroup>
  ),
};

export const Disabled = {
  render: () => (
    <FormGroup label="Choose a color" disabled>
      <GroupContent name="default-colors" />
    </FormGroup>
  ),
};

export const Error = {
  render: () => (
    <FormGroup label="Choose a color" error="My error">
      <GroupContent name="default-colors" />
    </FormGroup>
  ),
};

export const ExtraInfo = {
  render: () => (
    <FormGroup label="Choose a color" extraInfo="More information">
      <GroupContent name="default-colors" />
    </FormGroup>
  ),
};

export const HiddenLabel = {
  render: () => (
    <FormGroup label="Choose a color" hideLabel>
      <GroupContent name="default-colors" />
    </FormGroup>
  ),
};

export const WithTooltip = {
  render: () => (
    <FormGroup label="Choose a color" labelTooltip="Tooltip content">
      <GroupContent name="default-colors" />
    </FormGroup>
  ),
};
