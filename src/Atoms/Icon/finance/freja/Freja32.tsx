import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Freja32: React.FC<IconProps> = (props) => {
    return (
        <IconBase {...props} width={32} height={32}>
            <path fill="currentColor" fillRule="evenodd" d="M31 16c0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15C1 7.716 7.716 1 16 1c8.284 0 15 6.716 15 15Zm-7.29-7.89-.9 2.4c-.06.12-.21.21-.36.24h-7.56c-.18 0-.36.15-.36.36v3.15c0 .18.15.36.36.36h5.73c.3 0 .45.27.36.51l-.96 2.37a.39.39 0 0 1-.36.24h-4.8c-.18 0-.36.15-.36.36v6.18c0 .18-.15.36-.36.36h-2.88c-.18 0-.36-.18-.36-.57V10.99c0-.06.03-.12.03-.12l1.23-3.03c.06-.15.18-.24.33-.24h10.89c.27 0 .45.24.33.51Z" clipRule="evenodd"/>
        </IconBase>
    );
};

Freja32.displayName = 'Icon.Freja';

export default Freja32;
