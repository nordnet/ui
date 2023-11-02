import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import styled from 'styled-components';

import { Box, Flexbox, Icon, Typography } from '../..';
import { SelectionCard } from './SelectionCard';
import { SelectionCard as Props } from './SelectionCard.types';

import image from './images/guidance_economic_independence.jpg';

export default {
  title: 'Molecules / SelectionCard',
  component: SelectionCard,
} as Meta;

const StyledFlexbox = styled(Flexbox)`
  width: 100%;
`;

const StyledBox = styled(Box)`
  height: 100%;
  width: 150px;
`;

export const SelectionCardDefault = {
  args: {
    title: 'Selection Card Default',
    tag: 'Tag',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent scelerisque dignissim dolor.',
    border: true,
    disabled: false,
    outline: true,
    horizontal: false,
    error: false,
  },

  name: 'Default',
};

export const WithReactNode = {
  args: {
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
  },
};

export const WithIcon = {
  args: {
    ...SelectionCardDefault,
    title: 'With Icon',
    icon: <Icon.Book24 />,
  },
};

export const withImage = {
  render: () => {
    const Component = () => {
      return (
        <StyledBox>
          <SelectionCard
            title="Controlled selection card"
            text="This component is controlled"
            imageUrl={image}
            border
          />
        </StyledBox>
      );
    };
    return <Component />;
  },

  name: 'With image',
};

export const WithIconAndText = {
  args: {
    ...SelectionCardDefault,
    title: 'Title and Icon',
    text: 'Description for title and icon',
    icon: <Icon.Book32 />,
  },
};

export const WithIconAndTextHorizontal = {
  args: {
    ...SelectionCardDefault,
    title: 'Title and Icon',
    text: 'Description for title and icon',
    icon: <Icon.Book32 />,
    horizontal: true,
  },
};

export const withValueControlledBehavior = {
  render: () => {
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
  },

  name: 'With controlled behavior',
};
