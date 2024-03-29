import React from 'react';
import { FlagPathProps } from './flagPath.types';

export default function FlagZa({ title }: FlagPathProps) {
  return (
    <>
      <g clipPath="url(#clip0_1042_381)">
        <path d="M7 14c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7Z" fill="#F5F5F5" />
        <path
          d="M2.0502 11.9498c-2.7336-2.7337-2.7336-7.1659 0-9.8996C2.05 2.0505 6.087 7 6.087 7l-4.0368 4.9498Z"
          fill="#000"
        />
        <path
          d="M6.087 7 .9284 3.514a6.975 6.975 0 0 0-.4222.8686L3.1178 7 .5063 9.6176c.1211.3002.262.5902.4218.868L6.087 7Z"
          fill="#FFCF00"
        />
        <path
          d="M13.9407 6.087h-7.854L2.0503 2.0504c-.435.435-.813.9269-1.1218 1.4637L4.4076 7 .9281 10.4854a7.0273 7.0273 0 0 0 1.122 1.4641L6.0869 7.913h7.8539a7.053 7.053 0 0 0 0-1.826Z"
          fill="#41A21A"
        />
        <path
          d="M2.7382 12.5529A6.969 6.969 0 0 0 7 14c3.2342 0 5.9556-2.1935 6.7589-5.1739h-7.294L2.7382 12.553Z"
          fill="#2650BF"
        />
        <path
          d="M13.7589 5.1739C12.9556 2.1935 10.2342 0 7 0a6.969 6.969 0 0 0-4.2618 1.4471L6.4649 5.174h7.294Z"
          fill="#CC3929"
        />
      </g>
      <defs>
        <clipPath id="clip0_1042_381">
          <path fill="#fff" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
      <title>{title ?? 'South Africa'}</title>
    </>
  );
}
