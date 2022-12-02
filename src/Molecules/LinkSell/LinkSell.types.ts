import React from 'react';
import { LinkProps } from '../Link/Link.types';

export type UsedLinkProps = Pick<
  LinkProps,
  'disabled' | 'onClick' | 'to' | 'target' | 'rel' | 'as' | 'className'
>;

export type LinkSellComponent = React.FunctionComponent<UsedLinkProps>;
