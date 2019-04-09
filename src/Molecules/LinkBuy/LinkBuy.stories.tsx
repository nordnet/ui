import React from 'react';
import { storiesOf } from '@storybook/react';
import LinkBuy from '.';

const stories = storiesOf('Molecules | LinkBuy', module);

stories.add('LinkBuy', () => {
  return (
    <>
      <LinkBuy />
    </>
  );
});
