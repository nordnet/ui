import React from 'react';
import { ListItem, Typography } from '../..';

export default {
  title: 'Atoms / ListItem',
  parameters: {
    component: ListItem,
  },
};

export const BasicListItem = {
  render: () => (
    <ul>
      <ListItem>
        <Typography>List item</Typography>
      </ListItem>
    </ul>
  ),

  name: 'Basic list item',
};
