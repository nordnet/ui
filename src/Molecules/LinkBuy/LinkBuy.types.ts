import React from 'react';
import { Props as LinkProps } from '../Link/Link.types';

export type Props = {
  disabled?: boolean;
};

export type LinkBuy = React.FunctionComponent<LinkProps & Props>;
