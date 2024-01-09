import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Freja16: React.FC<IconProps> = (props) => {
    return (
        <IconBase {...props} width={16} height={16}>
            <svg width="16" height="16" fill="none">
                <path fill="currentColor" fillRule="evenodd" d="M16 8c0 4.4183-3.5817 8-8 8s-8-3.5817-8-8 3.5817-8 8-8 8 3.5817 8 8Zm-3.888-4.208-.48 1.28c-.032.064-.112.112-.192.128H7.408c-.096 0-.192.08-.192.192v1.68c0 .096.08.192.192.192h3.056c.16 0 .24.144.192.272L10.144 8.8c-.032.08-.112.128-.192.128h-2.56c-.096 0-.192.08-.192.192v3.296c0 .096-.08.192-.192.192H5.472c-.096 0-.192-.096-.192-.304V5.328c0-.032.016-.064.016-.064l.656-1.616c.032-.08.096-.128.176-.128h5.808c.144 0 .24.128.176.272Z" clipRule="evenodd"/>
            </svg>
        </IconBase>
    );
};

Freja16.displayName = 'Icon.BankId';

export default Freja16;
