import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const Freja32: React.FC<IconProps> = (props) => {
    return (
        <IconBase {...props} width={32} height={32}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M31 16C31 24.2843 24.2843 31 16 31C7.71573 31 1 24.2843 1 16C1 7.71573 7.71573 1 16 1C24.2843 1 31 7.71573 31 16ZM23.71 8.11L22.81 10.51C22.75 10.63 22.6 10.72 22.45 10.75H14.89C14.71 10.75 14.53 10.9 14.53 11.11V14.26C14.53 14.44 14.68 14.62 14.89 14.62H20.62C20.92 14.62 21.07 14.89 20.98 15.13L20.02 17.5C19.96 17.65 19.81 17.74 19.66 17.74H14.86C14.68 17.74 14.5 17.89 14.5 18.1V24.28C14.5 24.46 14.35 24.64 14.14 24.64H11.26C11.08 24.64 10.9 24.46 10.9 24.07V10.99C10.9 10.93 10.93 10.87 10.93 10.87L12.16 7.84C12.22 7.69 12.34 7.6 12.49 7.6H23.38C23.65 7.6 23.83 7.84 23.71 8.11Z" fill="#1C1C1C"/>
            </svg>
        </IconBase>
    );
};

Freja32.displayName = 'Icon.BankId';

export default Freja32;
