import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { BrowserRouter } from 'react-router-dom';
import { Link } from './Link';
import Text from '../../Atoms/Text';

const stories = storiesOf('Molecules/Link', module);

stories.add('Default usage', () => (
  <BrowserRouter>
    <Link to="startpage" onClick={action('clicked')}>
      <Text.Secondary color={t => t.color.cta} weight="bold">
        Link
      </Text.Secondary>
    </Link>
  </BrowserRouter>
));
stories.add('Link with _blank target', () => (
  <BrowserRouter>
    <Link to="www.google.com" target="_blank" onClick={action('clicked')}>
      <Text.Secondary color={t => t.color.cta} weight="bold">
        Link
      </Text.Secondary>
    </Link>
  </BrowserRouter>
));
