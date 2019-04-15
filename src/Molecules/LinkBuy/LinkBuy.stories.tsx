import React from 'react';
import { storiesOf } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { Typography } from '../..';
import LinkBuy from '.';

storiesOf('Molecules | LinkBuy', module)
  .add('LinkBuy', () => {
    return (
      <BrowserRouter>
        <Typography type="primary">
          <LinkBuy to="somewhere">Buy</LinkBuy>
        </Typography>
      </BrowserRouter>
    );
  })
  .add('LinkBuy disabled', () => {
    return (
      <BrowserRouter>
        <Typography type="primary">
          <LinkBuy disabled to="somewhere">
            Buy
          </LinkBuy>
        </Typography>
      </BrowserRouter>
    );
  });
