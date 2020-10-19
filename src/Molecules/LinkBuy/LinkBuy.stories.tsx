import React from 'react';
import { LinkBuy } from '../..';
import { Provider } from '../../common/Links/ReactRouterLinkHelper';

export default {
  title: 'Molecules / LinkBuy',
  parameters: {
    component: LinkBuy,
  },
};

export const linkBuy = () => {
  return (
    <Provider>
      <LinkBuy to="somewhere">Buy</LinkBuy>
    </Provider>
  );
};

linkBuy.story = {
  name: 'LinkBuy',
};

export const linkBuyDisabled = () => {
  return (
    <Provider>
      <LinkBuy disabled>Buy</LinkBuy>
    </Provider>
  );
};

linkBuyDisabled.story = {
  name: 'LinkBuy disabled',
};

export const linkBuyWithRelAsNofollow = () => {
  return (
    <Provider>
      <LinkBuy to="somewhere" rel="nofollow">
        Buy
      </LinkBuy>
    </Provider>
  );
};

linkBuyWithRelAsNofollow.story = {
  name: 'LinkBuy with rel as nofollow',
};
