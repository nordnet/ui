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

const Button = styled.button`
  margin: 0 auto;
  display: block;
`;

export const defaultStory = () => (
  <Tooltip label="Modals should be used with care as they are quite intrusive on the user">
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
          <Tooltip
            label="Modals should be used with care as they are quite intrusive on the user"
            position="auto"
          >
            <Button type="button">Hover me</Button>
          </Tooltip>
        ),
        title: 'auto',
      },
      {
        component: (
          <Tooltip
            label="Modals should be used with care as they are quite intrusive on the user"
            position="top"
          >
            <Button type="button">Hover me</Button>
          </Tooltip>
        ),
        title: 'top',
      },
      {
        component: (
          <Tooltip
            label="Modals should be used with care as they are quite intrusive on the user"
            position="right"
          >
            <Button type="button">Hover me</Button>
          </Tooltip>
        ),
        title: 'right',
      },
      {
        component: (
          <Tooltip
            label="Modals should be used with care as they are quite intrusive on the user"
            position="bottom"
          >
            <Button type="button">Hover me</Button>
          </Tooltip>
        ),
        title: 'bottom',
      },
      {
        component: (
          <Tooltip
            label="Modals should be used with care as they are quite intrusive on the user"
            position="left"
          >
            <Button type="button">Hover me</Button>
          </Tooltip>
        ),
        title: 'left',
      },
    ]}
  />
);

withPosition.story = {
  name: 'With position defined',
};
