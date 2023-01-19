import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const PlayFill32: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={32} height={32}>
      <path fillRule="evenodd" clipRule="evenodd" d="M6 2v28l24-14L6 2Z" fill="currentColor" />
    </IconBase>
  );
};

PlayFill32.displayName = 'Icon.PlayFill';

export default PlayFill32;
