import React from 'react';
import { storiesOf } from '@storybook/react';
import { Avatar } from '../..';

const stories = storiesOf('Atoms/Avatar', module);

stories.add('Basic usage', () => <Avatar>ASK</Avatar>);
