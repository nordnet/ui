import React, { useState } from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';
import { Icon, Flexbox, Typography } from '../..';
import { SelectionCard } from './SelectionCard';

const StyledFlexbox = styled(Flexbox)`
  width: 100%;
`;

const onChange = action('on change triggered');

const getCardProps = () => ({
  tag: text('Tag', 'Tag'),
  text: text(
    'Text',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent scelerisque dignissim dolor.',
  ),
  border: boolean('Border', true),
  disabled: boolean('Disabled', false),
  outline: boolean('Outline', true),
  horizontal: boolean('Horizontal', false),
  error: boolean('Error', false),
});

export default {
  title: 'Molecules | SelectionCard',
  parameters: {
    component: SelectionCard,
  },
  decorators: [withKnobs],
};

export const SelectionCardDefault = () => (
  <SelectionCard {...getCardProps()} title="Selection Card Default" onChange={onChange} />
);

SelectionCardDefault.story = {
  name: 'Default',
};

export const SelectionCardWithReactNode = () => (
  <SelectionCard
    {...getCardProps()}
    onChange={onChange}
    title={
      <StyledFlexbox container justifyContent="flex-start">
        <Flexbox item>
          <Typography type="primary" weight="bold">
            Title in a flexbox
          </Typography>
        </Flexbox>
      </StyledFlexbox>
    }
    text={
      <StyledFlexbox container justifyContent="flex-end">
        <Flexbox item>
          <Typography type="secondary">Text in a flexbox</Typography>
        </Flexbox>
      </StyledFlexbox>
    }
  />
);

SelectionCardWithReactNode.story = {
  name: 'With ReactNode',
};

export const SelectionCardWithIcon = () => {
  return (
    <>
      <SelectionCard
        {...getCardProps()}
        title="With Icon"
        onChange={onChange}
        icon={<Icon.House size={8} />}
      />
    </>
  );
};

SelectionCardWithIcon.story = {
  name: 'With icon',
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

        <span>value: {value.toString()}</span>
      </>
    );
  };
  return <Component />;
};

withValueControlledBehavior.story = {
  name: 'With controlled behavior',
};
