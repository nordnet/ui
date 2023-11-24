import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const CommentFill8: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={8} height={8}>
      <path fillRule="evenodd" clipRule="evenodd" d="M0 0H8V6H2.66667L0 8V0Z" fill="currentColor" />
    </IconBase>
  );
};

CommentFill8.displayName = 'Icon.CommentFill';

export default CommentFill8;
