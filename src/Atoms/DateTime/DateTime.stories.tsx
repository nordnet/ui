import { storiesOf } from '@storybook/react';
import React from 'react';
import DateTime from './DateTime';

storiesOf('Atoms | DateTime', module)
  .add('DateTime', () => {
    return <DateTime value={1554824654} />;
  })
  .add('With date only', () => {
    return <DateTime onlyDate value={1554824654} />;
  })
  .add('Invalid value', () => {
    return <DateTime value={null} />;
  })
  .add('Uses custom symbol for invalid value', () => {
    return <DateTime value={null} invalidValue="X" />;
  });
