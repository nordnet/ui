import React from 'react';
import { storiesOf } from '@storybook/react';
import Development from './index';

const stories = storiesOf('Atoms/Development', module);

stories.add('Primary default', () => <Development.Primary value={234234} />);
stories.add('Secondary default', () => <Development.Secondary value={234234} />);
