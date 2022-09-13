import React from 'react';
import { FlagPathProps } from './flagPath.types';

export default function FlagFr({ title }: FlagPathProps) {
  return (
    <>
      <g clipPath="url(#clip0_1042_311)">
        <path d="M7 14c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7Z" fill="#F5F5F5" />
        <path
          d="M14 7c0-3.0097-1.8996-5.5755-4.5653-6.5646v13.1292C12.1004 12.5756 14 10.0098 14 7Z"
          fill="#CC3929"
        />
        <path
          d="M0 7c0 3.0098 1.8997 5.5756 4.5652 6.5646V.4354C1.8997 1.4244 0 3.9903 0 7Z"
          fill="#2650BF"
        />
      </g>
      <defs>
        <clipPath id="clip0_1042_311">
          <path fill="#fff" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
      <title>{title ?? 'France'}</title>
    </>
  );
}
