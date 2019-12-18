import React from 'react';
import styled from 'styled-components';
import { Tooltip } from '../..';
import { Display } from '../../common/Display';

export default {
  title: 'Molecules | Tooltip',
  parameters: {
    component: Tooltip,
  },
};

const label = 'Modals should be used with care as they are quite intrusive on the user';

const Button = styled.button`
  display: block;
`;

export const defaultStory = () => (
  <Tooltip label={label}>
    <Button type="button">Hover me</Button>
  </Tooltip>
);

defaultStory.story = {
  name: 'Default',
};

export const withPosition = () => (
  <Display
    items={[
      {
        component: (
          <Tooltip label={label} position="bottom">
            <Button type="button">Hover me</Button>
          </Tooltip>
        ),
        title: 'bottom',
      },
      {
        component: (
          <Tooltip label={label} position="left">
            <Button type="button">Hover me</Button>
          </Tooltip>
        ),
        title: 'left',
      },
      {
        component: (
          <Tooltip label={label} position="top">
            <Button type="button">Hover me</Button>
          </Tooltip>
        ),
        title: 'top',
      },
      {
        component: (
          <Tooltip label={label} position="right">
            <Button type="button">Hover me</Button>
          </Tooltip>
        ),
        title: 'right',
      },
    ]}
  />
);

withPosition.story = {
  name: 'With position defined',
};
