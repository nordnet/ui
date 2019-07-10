import React from 'react';
import { storiesOf } from '@storybook/react';
import { Typography, Portal } from '../..';

storiesOf('Atoms | Portal', module).add('Default', () => (
  <Portal>
    <Typography type="primary" as="p">
      This element is moved to the bottom of the body tag
    </Typography>
  </Portal>
));
