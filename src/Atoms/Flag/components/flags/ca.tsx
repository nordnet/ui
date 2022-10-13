import React from 'react';
import { FlagPathProps } from './flagPath.types';

export default function FlagCa({ title }: FlagPathProps) {
  return (
    <>
      <g clipPath="url(#clip0_1042_215)">
        <path d="M7 14c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7Z" fill="#F5F5F5" />
        <path
          d="M14 7c0-2.7752-1.6151-5.1732-3.9565-6.3054v12.6108C12.3849 12.1732 14 9.7752 14 7ZM0 7c0 2.7752 1.615 5.1732 3.9565 6.3054V.6946C1.6151 1.8268 0 4.2248 0 7ZM8.2174 7.913l1.2174-.6087L8.826 7v-.6087L7.6087 7l.6087-1.2174h-.6087L7 4.8696l-.6087.913h-.6087L6.3913 7l-1.2174-.6087V7l-.6087.3043 1.2174.6087-.3043.6087h1.2174v.913h.6086v-.913h1.2174l-.3043-.6087Z"
          fill="#CC3929"
        />
      </g>
      <defs>
        <clipPath id="clip0_1042_215">
          <path fill="#fff" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
      <title>{title ?? 'Canada'}</title>
    </>
  );
}
