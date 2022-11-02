import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Test32: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={32} height={32}>
      <path d="M25 2H3V30H5V4H23V21H25V2Z" fill="currentColor" />
      <path d="M21 15H7V17H21V15Z" fill="currentColor" />
      <path d="M7 19H15V21H7V19Z" fill="currentColor" />
      <path d="M11 6H7V8H11V6Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.6379 30L9.43795 26.5L13.6379 23H29V30H13.6379ZM27 28H25V25H27V28ZM14.3621 25H23V28H14.362L12.562 26.5L14.3621 25Z"
        fill="currentColor"
      />
      <path d="M7 13H21V11H7V13Z" fill="currentColor" />
    </IconBase>
  );
};

Test32.displayName = 'Icon.Test';

export default Test32;
