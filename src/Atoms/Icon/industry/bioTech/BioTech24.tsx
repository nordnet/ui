import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const BioTech24: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={24} height={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.218 6.455c-2.16-.23-4.592-.139-6.747 2.015-2.154 2.155-2.246 4.588-2.015 6.748-2.095-.257-4.459-.274-6.456 1.723l1.412 1.412c.254-.254.514-.461.783-.629l4.081 4.081a4.4 4.4 0 01-.628.783L7.06 24c1.996-1.997 1.98-4.36 1.723-6.455 2.16.23 4.592.139 6.747-2.016 2.154-2.154 2.246-4.587 2.015-6.747 2.095.257 4.459.274 6.456-1.724l-1.412-1.411a4.396 4.396 0 01-.783.628l-4.081-4.08a4.4 4.4 0 01.628-.783L16.942 0c-1.997 1.997-1.98 4.36-1.724 6.455zm-8.32 13.15c.028-.711-.053-1.483-.168-2.334-.851-.115-1.623-.197-2.333-.169l2.502 2.502zm10.204-15.21l2.503 2.503c-.71.028-1.483-.054-2.334-.169-.115-.851-.197-1.623-.169-2.334zM8.501 15.5c1.012.128 1.947.195 2.824.06l-2.884-2.884c-.135.877-.068 1.812.06 2.824zm.737-4.851l4.113 4.113c.26-.18.515-.393.767-.644.252-.252.465-.508.645-.767L10.65 9.237c-.26.18-.515.394-.767.645a5.575 5.575 0 00-.645.767zm6.322.675c.135-.877.068-1.812-.06-2.824-1.012-.128-1.947-.195-2.824-.06l2.884 2.884z"
        fill="currentColor"
      />
    </IconBase>
  );
};

BioTech24.displayName = 'Icon.BioTech';

export default BioTech24;
