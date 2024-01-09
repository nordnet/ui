import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Freja16: React.FC<IconProps> = (props) => {
    return (
        <IconBase {...props} width={16} height={16}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM12.112 3.792L11.632 5.072C11.6 5.136 11.52 5.184 11.44 5.2H7.408C7.312 5.2 7.216 5.28 7.216 5.392V7.072C7.216 7.168 7.296 7.264 7.408 7.264H10.464C10.624 7.264 10.704 7.408 10.656 7.536L10.144 8.8C10.112 8.88 10.032 8.928 9.952 8.928H7.392C7.296 8.928 7.2 9.008 7.2 9.12V12.416C7.2 12.512 7.12 12.608 7.008 12.608H5.472C5.376 12.608 5.28 12.512 5.28 12.304V5.328C5.28 5.296 5.296 5.264 5.296 5.264L5.952 3.648C5.984 3.568 6.048 3.52 6.128 3.52H11.936C12.08 3.52 12.176 3.648 12.112 3.792Z" fill="#1C1C1C"/>
            </svg>
        </IconBase>
    );
};

Freja16.displayName = 'Icon.BankId';

export default Freja16;
