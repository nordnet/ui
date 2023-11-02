import React from 'react';
import { LinkSell } from '../..';
import { Provider } from '../../common/Links/ReactRouterLinkHelper';

export default {
  title: 'Molecules / LinkSell',
  parameters: {
    component: LinkSell,
  },
};

export const linkSell = {
  render: () => {
    return (
      <Provider>
        <LinkSell to="somewhere">Sell</LinkSell>
      </Provider>
    );
  },

  name: 'LinkSell',
};

export const linkSellDisabled = {
  render: () => {
    return (
      <Provider>
        <LinkSell disabled>Sell</LinkSell>
      </Provider>
    );
  },

  name: 'LinkSell disabled',
};

export const linkSellWithRelAsNofollow = {
  render: () => {
    return (
      <Provider>
        <LinkSell to="somewhere" rel="nofollow">
          Sell
        </LinkSell>
      </Provider>
    );
  },

  name: 'LinkSell with rel as nofollow',
};
