import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const StarFill24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path
        d="M12 1.5l3.807 6.35L23 9.52l-4.84 5.596.638 7.383L12 19.61 5.202 22.5l.638-7.383L1 9.521 8.193 7.85 12 1.5z"
        fill="currentColor"
      />
    </IconBase>
  );
};

StarFill24.displayName = 'Icon.StarFill';

export default StarFill24;
