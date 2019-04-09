import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { BrowserRouter } from 'react-router-dom';
import { Link } from '../..';
import Typography from '../../Atoms/Typography';

storiesOf('Molecules | Link', module)
  .add('Default usage', () => (
    <BrowserRouter>
      <Typography type="secondary" color={t => t.color.cta} weight="bold">
        <Link to="startpage" onClick={action('clicked')}>
          Link
        </Link>
      </Typography>
    </BrowserRouter>
  ))
  .add('Link with _blank target', () => (
    <BrowserRouter>
      <Typography type="secondary" color={t => t.color.cta} weight="bold">
        <Link to="www.google.com" target="_blank" onClick={action('clicked')}>
          Link
        </Link>
      </Typography>
    </BrowserRouter>
  ));
