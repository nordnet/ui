import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';

import { Flexbox, OldIcon, Typography } from '../..';
import { SelectionCard } from './SelectionCard';
import { SelectionCard as Props } from './SelectionCard.types';

export default {
  title: 'Molecules / SelectionCard',
  component: SelectionCard,
} as Meta;

const StyledFlexbox = styled(Flexbox)`
  width: 100%;
`;

const Template: Story<Props> = (args) => <SelectionCard {...args} />;

export const SelectionCardDefault = Template.bind({});
SelectionCardDefault.args = {
  title: 'Selection Card Default',
  tag: 'Tag',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent scelerisque dignissim dolor.',
  border: true,
  disabled: false,
  outline: true,
  horizontal: false,
  error: false,
};
SelectionCardDefault.storyName = 'Default';

export const WithReactNode = Template.bind({});
WithReactNode.args = {
  ...SelectionCardDefault,
  title: (
    <StyledFlexbox container justifyContent="flex-start">
      <Flexbox item>
        <Typography type="primary" weight="bold">
          Title in a flexbox
        </Typography>
      </Flexbox>
    </StyledFlexbox>
  ),
  text: (
    <StyledFlexbox container justifyContent="flex-end">
      <Flexbox item>
        <Typography type="secondary">Text in a flexbox</Typography>
      </Flexbox>
    </StyledFlexbox>
  ),
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  ...SelectionCardDefault,
  title: 'With Icon',
  icon: <OldIcon.House size={8} />,
};

export const withValueControlledBehavior = () => {
  const Component = () => {
    const [value, setValue] = useState(false);

    return (
      <>
        <SelectionCard
          title="Controlled selection card"
          text="This component is controlled"
          selected={value}
          onChange={() => setValue(!value)}
        />
        <button type="button" onClick={() => setValue(true)}>
          Selected
        </button>
        <button type="button" onClick={() => setValue(false)}>
          Not selected
        </button>
        value: {value.toString()}
      </>
    );
  };
  return <Component />;
};

withValueControlledBehavior.storyName = 'With controlled behavior';
