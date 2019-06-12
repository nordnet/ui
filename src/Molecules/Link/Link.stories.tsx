import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { BrowserRouter } from 'react-router-dom';
import { Link, Typography } from '../..';

storiesOf('Molecules | Link', module)
  .add('Default usage', () => (
    <BrowserRouter>
      <Typography type="secondary" weight="bold">
        <Link to="startpage" onClick={action('clicked')}>
          Link
        </Link>
      </Typography>
    </BrowserRouter>
  ))
  .add('With typography primary as type', () => (
    <BrowserRouter>
      <Typography type="primary" weight="bold">
        <Link to="startpage" onClick={action('clicked')}>
          Link
        </Link>
      </Typography>
    </BrowserRouter>
  ))
  .add('Link with _blank target', () => (
    <BrowserRouter>
      <Typography type="secondary" weight="bold">
        <Link to="www.google.com" target="_blank" onClick={action('clicked')}>
          Link
        </Link>
      </Typography>
    </BrowserRouter>
  ))
  .add('Link with rel as nofollow', () => (
    <BrowserRouter>
      <Typography type="secondary" weight="bold">
        <Link to="www.google.com" rel="nofollow" onClick={action('clicked')}>
          Link
        </Link>
      </Typography>
    </BrowserRouter>
  ))
  .add('With disabled prop results in a disabled button looking like a link', () => (
    <BrowserRouter>
      <Typography type="secondary" weight="bold">
        <Link onClick={action('clicked')} disabled>
          Link
        </Link>
      </Typography>
    </BrowserRouter>
  ))
  .add('Without to prop results in a button looking like a link', () => (
    <BrowserRouter>
      <Typography type="secondary" weight="bold">
        <Link onClick={action('clicked')}>Link</Link>
      </Typography>
    </BrowserRouter>
  ));
