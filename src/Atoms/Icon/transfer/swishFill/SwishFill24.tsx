import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const SwishFill24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path
        d="M16.849 7.55l-.009-.008-.008-.007-.26-.212-.016-.013-.016-.013-.254-.19-.017-.013-.018-.012-.008-.006L18.4 4.315c4.136 3.441 4.815 9.571 1.48 13.84a9.978 9.978 0 01-3.785 2.97 8.567 8.567 0 001.924-1.806c2.832-3.625 2.285-8.817-1.17-11.77zM7.15 16.448l.009.007.008.007.26.213.016.013.016.012.254.19.017.013.018.012.008.006L5.6 19.683c-4.136-3.441-4.815-9.57-1.48-13.84h0a9.967 9.967 0 013.782-2.967A8.568 8.568 0 005.98 4.679c-2.832 3.625-2.285 8.817 1.17 11.77z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={2}
      />
    </IconBase>
  );
};

SwishFill24.displayName = 'Icon.SwishFill';

export default SwishFill24;
