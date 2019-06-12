import React from 'react';
import { LinkProps, ButtonProps } from '../Link/Link.types';

export type Props = {
  as?: string;
};

export type LinkBuyComponent = React.FunctionComponent<LinkProps | ButtonProps & Props>;
