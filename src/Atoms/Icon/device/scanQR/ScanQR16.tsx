import React from 'react';

import { IconBase } from '../../IconBase';
import { IconProps } from '../../IconBase.types';

const ScanQR16: React.FC<IconProps> = (props) => {
  return (
    <IconBase {...props} width={16} height={16}>
      <path
        d="M5.33342.667969H.666748V5.33464H2.00008V2.0013h3.33334V.667969ZM15.3334 5.33464V.667969h-4.6667V2.0013h3.3334v3.33334h1.3333ZM.666748 15.3346V10.668H2.00008v3.3333h3.33334v1.3333H.666748ZM10.6667 15.3346h4.6667V10.668h-1.3333v3.3333h-3.3334v1.3333ZM3.33342 10.0013V8.66797h4v1.33333H6.00008v1.3333H4.66675v-1.3333H3.33342Z"
        fill="currentColor"
      />
      <path
        d="M4.66675 11.3346v1.3334H3.33342v-1.3334h1.33333ZM6.00008 11.3346h1.33334v1.3334H6.00008v-1.3334ZM8.66675 6.0013v1.33334h3.99995V6.0013h-1.3333V4.66797h1.3333V3.33464h-1.3333v1.33333h-1.3333V3.33464H8.66675v1.33333h1.33335V6.0013H8.66675Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.33342 3.33464v4h4v-4h-4Zm2.66666 1.33333H4.66675V6.0013h1.33333V4.66797ZM8.66675 12.668V8.66797h3.99995V12.668H8.66675Zm1.33335-2.6667h1.3333v1.3333h-1.3333v-1.3333Z"
        fill="currentColor"
      />
    </IconBase>
  );
};

ScanQR16.displayName = 'Icon.ScanQR';

export default ScanQR16;
