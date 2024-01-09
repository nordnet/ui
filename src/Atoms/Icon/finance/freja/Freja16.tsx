import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Freja16: React.FC<IconProps> = (props) => {
    return (
        <IconBase {...props} width={16} height={16}>
            <svg width="16" height="16" fill="none">
                <path fill="currentColor"
                      fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-3.89-4.2-.48 1.27c-.03.07-.11.11-.19.13H7.41a.2.2 0 0 0-.2.2v1.67c0 .1.09.2.2.2h3.05a.2.2 0 0 1 .2.27l-.52 1.26a.2.2 0 0 1-.19.13H7.4a.2.2 0 0 0-.19.19v3.3c0 .1-.08.19-.2.19H5.48c-.1 0-.19-.1-.19-.3V5.32l.02-.07.65-1.61c.03-.08.1-.13.18-.13h5.8c.15 0 .25.13.18.27Z"
                      clipRule="evenodd"/>
            </svg>
        </IconBase>
    );
};

Freja16.displayName = 'Icon.BankId';

export default Freja16;
