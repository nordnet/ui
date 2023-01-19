import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const PlayFill16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path fillRule="evenodd" clipRule="evenodd" d="M3 1v14l12-7L3 1Z" fill="currentColor" />
    </IconBase>
  );
};

PlayFill16.displayName = 'Icon.PlayFill';

export default PlayFill16;
