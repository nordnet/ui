import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const LikeFill8: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={8} height={8}>
      <path
        fill="currentColor"
        d="m3.212 2.667-.666.666v3.334L3.879 8h2.275c.642 0 1.193-.457 1.31-1.088l.5-2.666a1.333 1.333 0 0 0-1.31-1.58H4.88V2c0-1.105-.562-2-1.667-2v2.667ZM0 4c0-.368.298-.667.667-.667h1.212v4A.667.667 0 0 1 1.212 8H0V4Z"
      />
    </IconBase>
  );
};

LikeFill8.displayName = 'Icon.LikeFill';

export default LikeFill8;
