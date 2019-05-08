import React from 'react';
import { storiesOf } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { Typography, LinkSell } from '../..';

storiesOf('Molecules | LinkSell', module)
  .add('LinkSell', () => {
    return (
      <BrowserRouter>
        <Typography type="primary">
          <LinkSell to="somewhere">Sell</LinkSell>
        </Typography>
      </BrowserRouter>
    );
  })
  .add('LinkSell disabled', () => {
    return (
      <BrowserRouter>
        <Typography type="primary">
          <LinkSell to="somewhere" disabled>
            Sell
          </LinkSell>
        </Typography>
      </BrowserRouter>
    );
  })
  .add('LinkSell with rel as nofollow', () => {
    return (
      <BrowserRouter>
        <Typography type="primary">
          <LinkSell to="somewhere" rel="nofollow">
            Sell
          </LinkSell>
        </Typography>
      </BrowserRouter>
    );
  });
