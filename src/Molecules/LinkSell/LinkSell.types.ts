import React from 'react';
import { Props as LinkProps } from '../Link/Link.types';

export type Props = {
  disabled?: boolean;
  as?: string;
};

export type LinkSellComponent = React.FunctionComponent<LinkProps & Props>;
