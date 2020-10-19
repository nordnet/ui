import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';

export const StarAboveBars = (props: BaseProps) => {
  return (
    <IconBase {...props} viewBox="0 0 32 32">
      <path
        fillRule="evenodd"
        d="M25.208 14.441v17.443h-4.806V14.44h4.806zm-14.402 4.131v13.312H6V18.572h4.806zm7.202-8.54v21.852h-4.806V10.033h4.806zM15.606 0l.893 2.698 2.843.019-2.29 1.685.861 2.71-2.31-1.657-2.309 1.656.861-2.709-2.289-1.684 2.843-.02L15.606 0z"
      />
    </IconBase>
  );
};

StarAboveBars.displayName = 'Icon.StarAboveBars';
