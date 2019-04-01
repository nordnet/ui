import React from 'react';
import { storiesOf } from '@storybook/react';
import Icon from '.';

const stories = storiesOf('Atoms/Icon', module);

stories.add('Icons', () => {
  return (
    <>
      <Icon.QuestionMark />
    </>
  );
});
