import React from 'react';
import { FlagPathProps } from './flagPath.types';

export default function FlagFi({ borderColor }: FlagPathProps) {
  return (
    <>
      <g clipPath="url(#clip0_1042_331)">
        <path d="M7 14c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7Z" fill="#F5F5F5" />
        <path
          d="M13.9407 6.087H5.4783V.1664A6.9523 6.9523 0 0 0 3.6522.851V6.087H.0592a7.0603 7.0603 0 0 0 0 1.8261h3.593v5.2358a6.9506 6.9506 0 0 0 1.826.6848V7.9131h8.4625a7.054 7.054 0 0 0 0-1.8261Z"
          fill="#2650BF"
        />
        {borderColor ? (
          <circle cx="7" cy="7" r="6.5" stroke={borderColor} strokeWidth="1" fill="none"></circle>
        ) : null}
      </g>
      <defs>
        <clipPath id="clip0_1042_331">
          <path fill="#fff" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
      <title>Finland</title>
    </>
  );
}
