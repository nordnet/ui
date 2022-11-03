import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Profile16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 4a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm-2 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M0 13a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v3h-2v-3c0-.6-.4-1-1-1H3a1 1 0 0 0-1 1v3H0v-3Z"
      />
    </IconBase>
  );
};

Profile16.displayName = 'Icon.Profile';

export default Profile16;
