import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const WatchlistFill24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 20c7.418 0 12-8 12-8s-4.582-8-12-8-12 8-12 8 4.582 8 12 8zm0-5a3 3 0 100-6 3 3 0 000 6z"
        fill="currentColor"
      />
    </IconBase>
  );
};

WatchlistFill24.displayName = 'Icon.WatchlistFill';

export default WatchlistFill24;
