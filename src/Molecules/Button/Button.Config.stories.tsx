import React, { ComponentProps } from 'react';
import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { Button, Icon } from '../..';

type Icons = keyof typeof Icon;
type ButtonProps = ComponentProps<typeof Button>;
type ComponentName = 'Pill' | 'Icon' | undefined;
const getIcon = (IconName: Icons) => {
  const IconComponent = Icon[IconName];
  IconComponent.displayName = `Icon.${IconName}`;
  return <IconComponent color="currentColor" />;
};

const include = ['componentName', 'size', 'variant', 'iconName', 'iconPlacement'];

const argTypes = {
  componentName: {
    options: [undefined, 'Pill', 'Icon'],
    control: { type: 'inline-radio' },
  },
  size: {
    options: ['s', 'm', 'l'],
    control: { type: 'inline-radio' },
  },
  variant: {
    options: ['primary', 'secondary', 'neutral', 'negative', 'tertiary'],
    control: { type: 'inline-radio' },
  },
  iconName: {
    options: Object.keys(Icon),
    control: { type: 'select' },
  },
  iconPlacement: {
    options: ['left', 'right'],
    control: { type: 'inline-radio' },
  },
};

const Template = ({
  componentName,
  iconName,
  iconPlacement,
  ...rest
}: {
  componentName?: ComponentName;
  iconName?: Icons;
} & ButtonProps) => {
  const ButtonComponent = componentName ? Button[componentName] : Button;
  const icon = iconName ? getIcon(iconName) : undefined;
  const commonProps = { onClick: action('clicked') };
  return componentName === 'Icon' ? (
    <ButtonComponent {...commonProps} {...rest}>
      {icon || '-'}
    </ButtonComponent>
  ) : (
    <ButtonComponent {...commonProps} icon={icon} iconPlacement={iconPlacement} {...rest}>
      {componentName === 'Pill' ? 'Button.Pill' : 'Button'}
    </ButtonComponent>
  );
};

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Molecules / Button',
  parameters: {
    controls: { sort: 'alpha', include },
    docs: {
      description: {
        component: 'Configure a button here',
      },
    },
    viewMode: 'docs',
  },
  argTypes,
};

export default meta;

type Story = StoryObj<typeof Template>;

export const ConfigureAButton: Story = {
  render: Template,
};
