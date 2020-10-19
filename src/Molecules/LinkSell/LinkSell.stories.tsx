import React from 'react';
import { LinkSell } from '../..';
import { Provider } from '../../common/Links/ReactRouterLinkHelper';

export default {
  title: 'Molecules / LinkSell',
  parameters: {
    component: LinkSell,
  },
};

export const linkSell = () => {
  return (
    <Provider>
      <LinkSell to="somewhere">Sell</LinkSell>
    </Provider>
  );
};

linkSell.story = {
  name: 'LinkSell',
};

export const linkSellDisabled = () => {
  return (
    <Provider>
      <LinkSell disabled>Sell</LinkSell>
    </Provider>
  );
};

linkSellDisabled.story = {
  name: 'LinkSell disabled',
};

export const linkSellWithRelAsNofollow = () => {
  return (
    <Provider>
      <LinkSell to="somewhere" rel="nofollow">
        Sell
      </LinkSell>
    </Provider>
  );
};

linkSellWithRelAsNofollow.story = {
  name: 'LinkSell with rel as nofollow',
};
