import React from 'react';
import { FlagPathProps } from './flagPath.types';

export default function FlagDk({ title }: FlagPathProps) {
  return (
    <>
      <g clipPath="url(#clip0_1042_149)">
        <path d="M7 14c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7Z" fill="#F5F5F5" />
        <path
          d="M5.4783 6.087h8.4625C13.4933 2.6524 10.5565 0 7 0a7.0247 7.0247 0 0 0-1.5217.1664V6.087ZM3.6522 6.087V.851C1.73 1.9.3542 3.8235.0592 6.087h3.593ZM3.6521 7.913H.0593c.2948 2.2635 1.6708 4.1871 3.5929 5.2358V7.913ZM5.4783 7.913v5.9206c.49.1086.999.1664 1.5217.1664 3.5565 0 6.4933-2.6524 6.9408-6.087H5.4783Z"
          fill="#CC3929"
        />
      </g>
      <defs>
        <clipPath id="clip0_1042_149">
          <path fill="#fff" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
      <title>{title ?? 'Denmark'}</title>
    </>
  );
}
