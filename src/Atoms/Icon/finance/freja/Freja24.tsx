import React from 'react';

import {IconBase} from '../../IconBase';
import {IconProps} from '../../IconBase.types';

const Freja24: React.FC<IconProps> = (props) => {
    return (
        <IconBase {...props} width={24} height={24}>
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM17.654 6.214L16.994 7.974C16.95 8.062 16.84 8.128 16.73 8.15H11.186C11.054 8.15 10.922 8.26 10.922 8.414V10.724C10.922 10.856 11.032 10.988 11.186 10.988H15.388C15.608 10.988 15.718 11.186 15.652 11.362L14.948 13.1C14.904 13.21 14.794 13.276 14.684 13.276H11.164C11.032 13.276 10.9 13.386 10.9 13.54V18.072C10.9 18.204 10.79 18.336 10.636 18.336H8.524C8.392 18.336 8.26 18.204 8.26 17.918V8.326C8.26 8.282 8.282 8.238 8.282 8.238L9.184 6.016C9.228 5.906 9.316 5.84 9.426 5.84H17.412C17.61 5.84 17.742 6.016 17.654 6.214Z"
                fill="currentColor"
            />
        </IconBase>
    );
};

Freja24.displayName = 'Icon.Freja';

export default Freja24;
