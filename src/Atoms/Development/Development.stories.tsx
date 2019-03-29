import React from 'react';
import { storiesOf } from '@storybook/react';
import Development from './index';

const stories = storiesOf('Atoms/Development', module);

stories.add('Primary', () => (
  <>
    <div>
      <Development.Primary value={5.4} />
    </div>
    <div>
      <Development.Primary value={0} />
    </div>
    <div>
      <Development.Primary value={-2.1} />
    </div>
  </>
));

stories.add('Secondary', () => (
  <>
    <div>
      <Development.Secondary value={5.4} />
    </div>
    <div>
      <Development.Secondary value={0} />
    </div>
    <div>
      <Development.Secondary value={-2.1} />
    </div>
  </>
));

stories.add('Tertiary', () => (
  <>
    <div>
      <Development.Tertiary value={5.4} />
    </div>
    <div>
      <Development.Tertiary value={0} />
    </div>
    <div>
      <Development.Tertiary value={-2.1} />
    </div>
  </>
));
