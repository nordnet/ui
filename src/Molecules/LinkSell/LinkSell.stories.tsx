import React from 'react';
import { storiesOf } from '@storybook/react';
import LinkSell from '.';

const stories = storiesOf('Molecules | LinkSell', module);

stories.add('LinkSell', () => {
  return (
    <>
      <LinkSell />
    </>
  );
});
