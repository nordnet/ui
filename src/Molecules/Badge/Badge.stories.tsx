import React from 'react';
import MD from 'react-markdown';
import { Badge, Typography } from '../..';
import docs from './Badge.md';

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
