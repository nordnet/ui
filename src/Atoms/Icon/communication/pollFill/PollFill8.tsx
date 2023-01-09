import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const PollFill8: React.FC<IconProps> = props => {
  return (
    <IconBase {...props} width={8} height={8}>
      <path d="M6 0H0V2H6V0Z" fill="currentColor" />
      <path d="M0 3H8V5H0V3Z" fill="currentColor" />
      <path d="M0 6H4V8H0V6Z" fill="currentColor" />
    </IconBase>
  );
};

PollFill8.displayName = 'Icon.PollFill';

export default PollFill8;
