import React from 'react';
import { Props as LinkProps } from '../Link/Link.types';

export type Props = {
  disabled?: boolean;
  as?: string;
};

export type LinkBuyComponent = React.FunctionComponent<LinkProps & Props>;
