import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Freja24: React.FC<IconProps> = (props) => {
    return (
        <IconBase {...props} width={24} height={24}>
            <path fill="currentColor"
                  fillRule="evenodd" d="M23 12a11 11 0 1 1-22 0 11 11 0 0 1 22 0Zm-5.35-5.79L17 7.97c-.04.1-.15.16-.26.18h-5.54a.27.27 0 0 0-.27.26v2.31c0 .14.11.27.27.27h4.2c.22 0 .33.2.26.37l-.7 1.74a.29.29 0 0 1-.27.18h-3.52a.27.27 0 0 0-.26.26v4.53c0 .13-.11.27-.26.27H8.52c-.13 0-.26-.14-.26-.42v-9.6l.02-.08.9-2.22c.05-.11.14-.18.25-.18h7.98c.2 0 .33.18.24.37Z"
                  clipRule="evenodd"/>
        </IconBase>
    );
};

Freja24.displayName = 'Icon.Freja';

export default Freja24;
