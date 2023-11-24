import React from 'react';
import MD from 'react-markdown';
import docs from './Badge.md';

import { Badge, Typography } from '../..';

export default {
  title: 'Molecules / Badge',
  parameters: {
    component: Badge,
  },
};

export const Documentation = () => (
  <Typography type="primary">
    <MD>{docs}</MD>
  </Typography>
);
