import React from 'react';
import { FlagPathProps } from './flagPath.types';

export default function FlagJp({ borderColor, title }: FlagPathProps) {
  return (
    <>
      <g clipPath="url(#clip0_1042_299)">
        <path
          d="M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14Z"
          fill="#F5F5F5"
        />
        <path
          d="M7.00001 10.0435C8.68087 10.0435 10.0435 8.68086 10.0435 7C10.0435 5.31914 8.68087 3.95653 7.00001 3.95653C5.31915 3.95653 3.95654 5.31914 3.95654 7C3.95654 8.68086 5.31915 10.0435 7.00001 10.0435Z"
          fill="#CC3929"
        />
        {borderColor ? (
          <circle cx="7" cy="7" r="6.5" stroke={borderColor} strokeWidth="1" fill="none" />
        ) : null}
      </g>
      <defs>
        <clipPath id="clip0_1042_299">
          <rect width="14" height="14" fill="white" />
        </clipPath>
      </defs>
      <title>{title ?? 'Japan'}</title>
    </>
  );
}
