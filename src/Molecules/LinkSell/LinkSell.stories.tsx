import React from 'react';
import { LinkSell } from '../..';
import { Provider } from '../../common/Links/ReactRouterLinkHelper';

export default {
  title: 'Molecules / LinkSell',
  parameters: {
    component: LinkSell,
  },
};

export const LinkSellStory = {
  render: () => {
    return (
      <Provider>
        <LinkSell to="somewhere">Sell</LinkSell>
      </Provider>
    );
  },

  name: 'LinkSell',
};

export const LinkSellDisabled = {
  render: () => {
    return (
      <Provider>
        <LinkSell disabled>Sell</LinkSell>
      </Provider>
    );
  },

  name: 'LinkSell disabled',
};

export const LinkSellWithRelAsNofollow = {
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
