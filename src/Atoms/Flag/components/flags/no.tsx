import React from 'react';
import { FlagPathProps } from './flagPath.types';

export default function FlagNo({ title }: FlagPathProps) {
  return (
    <>
      <g clipPath="url(#clip0_1042_339)">
        <path d="M7 14c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7Z" fill="#F5F5F5" />
        <path
          d="M.241 8.8261c.4051 1.5028 1.2977 2.8053 2.498 3.7276V8.8261H.241ZM6.3912 13.9734C6.592 13.9906 6.7948 14 7 14c3.2342 0 5.9556-2.1935 6.7589-5.1739H6.3912v5.1473ZM13.7588 5.1739C12.9555 2.1935 10.2341 0 6.9999 0c-.2051 0-.408.0094-.6087.0266V5.174h7.3676ZM2.739 1.4464C1.5388 2.3687.6462 3.671.241 5.1738h2.498V1.4464Z"
          fill="#CC3929"
        />
        <path
          d="M13.9407 6.087H5.4783V.1664A6.9523 6.9523 0 0 0 3.6522.851V6.087H.0592a7.0603 7.0603 0 0 0 0 1.8261h3.593v5.2358a6.9506 6.9506 0 0 0 1.826.6848V7.9131h8.4625a7.054 7.054 0 0 0 0-1.8261Z"
          fill="#2650BF"
        />
      </g>
      <defs>
        <clipPath id="clip0_1042_339">
          <path fill="#fff" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
      <title>{title ?? 'Norway'}</title>
    </>
  );
}
