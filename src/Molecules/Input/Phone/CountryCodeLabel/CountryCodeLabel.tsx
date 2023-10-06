import React from 'react';
import { Flexbox, Flag, Typography } from '../../../..';

import { Props } from './types';

const CountryCodeLabel: React.FC<Props> = ({
  countryCode = 'se',
  prefixCode = '+46',
  noPrefix = false,
}) => (
  <Flexbox container alignItems="center" gap={2}>
    <Flexbox item>
      <Flag country={countryCode.toLowerCase()} size="s" />
    </Flexbox>
    {!noPrefix && (
      <Flexbox item>
        <Typography type="secondary">{prefixCode}</Typography>
      </Flexbox>
    )}
  </Flexbox>
);

export default CountryCodeLabel;
