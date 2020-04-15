import React from 'react';
import { LinkProps } from '../Link/Link.types';

export type UsedLinkProps = Pick<LinkProps, 'disabled' | 'onClick' | 'to' | 'target' | 'rel'>;

type InternalProps = {
  as?: string;
};

export type Props = {
  className?: string;
};

export type LinkBuyComponent = React.FunctionComponent<Props & InternalProps & UsedLinkProps>;
