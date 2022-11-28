import React from 'react';
import { LinkProps } from '../Link/Link.types';

export type UsedLinkProps = Pick<
  LinkProps,
  'disabled' | 'onClick' | 'to' | 'target' | 'rel' | 'as' | 'className' | 'children'
>;

export type LinkSellComponent = React.FunctionComponent<UsedLinkProps>;
