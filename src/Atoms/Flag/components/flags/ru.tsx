import React from 'react';
import { FlagPathProps } from './flagPath.types';

export default function FlagRu({ borderColor, title }: FlagPathProps) {
  return (
    <>
      <g clipPath="url(#clip0_1042_325)">
        <path
          d="M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14Z"
          fill="#F5F5F5"
        />
        <path
          d="M13.5646 9.43477C13.846 8.67645 14 7.85624 14 7C14 6.14376 13.846 5.32356 13.5646 4.56523H0.435395C0.154027 5.32356 0 6.14376 0 7C0 7.85624 0.154027 8.67645 0.435395 9.43477L7 10.0435L13.5646 9.43477Z"
          fill="#2650BF"
        />
        <path
          d="M7.00003 14C10.0098 14 12.5756 12.1004 13.5646 9.43477H0.435425C1.42448 12.1004 3.99028 14 7.00003 14Z"
          fill="#CC3929"
        />
        {borderColor ? (
          <circle cx="7" cy="7" r="6.5" stroke={borderColor} strokeWidth="1" fill="none"></circle>
        ) : null}
      </g>
      <defs>
        <clipPath id="clip0_1042_325">
          <rect width="14" height="14" fill="white" />
        </clipPath>
      </defs>
      <title>{title ?? 'Russia'}</title>
    </>
  );
}
