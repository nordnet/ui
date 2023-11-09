import React from 'react';
import { LinkBuy } from '../..';
import { Provider } from '../../common/Links/ReactRouterLinkHelper';

export default {
  title: 'Molecules / LinkBuy',
  parameters: {
    component: LinkBuy,
  },
};

export const LinkBuyStory = {
  render: () => {
    return (
      <Provider>
        <LinkBuy to="somewhere">Buy</LinkBuy>
      </Provider>
    );
  },

  name: 'LinkBuy',
};

export const LinkBuyDisabled = {
  render: () => {
    return (
      <Provider>
        <LinkBuy disabled>Buy</LinkBuy>
      </Provider>
    );
  },

  name: 'LinkBuy disabled',
};

export const LinkBuyWithRelAsNofollow = {
  render: () => {
    return (
      <Provider>
        <LinkBuy to="somewhere" rel="nofollow">
          Buy
        </LinkBuy>
      </Provider>
    );
  },

  name: 'LinkBuy with rel as nofollow',
};
