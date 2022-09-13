import React from 'react';
import { FlagPathProps } from './flagPath.types';

export default function FlagIn({ title }: FlagPathProps) {
  return (
    <>
      <g clipPath="url(#clip0_1042_303)">
        <path d="M7 14c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7Z" fill="#F5F5F5" />
        <path
          d="M7 0C4.2248 0 1.8268 1.615.6946 3.9565h12.6108C12.1732 1.6151 9.7752 0 7 0Z"
          fill="#FF9811"
        />
        <path
          d="M7 14c2.7752 0 5.1732-1.6151 6.3054-3.9565H.6946C1.8268 12.3849 4.2248 14 7 14Z"
          fill="#41A21A"
        />
        <path
          d="M7 9.4348c1.3447 0 2.4348-1.0901 2.4348-2.4348S8.3447 4.5652 7 4.5652 4.5652 5.6553 4.5652 7 5.6554 9.4348 7 9.4348Z"
          fill="#2650BF"
        />
        <path
          d="M7 8.5217c.8404 0 1.5217-.6813 1.5217-1.5217S7.8404 5.4783 7 5.4783 5.4783 6.1596 5.4783 7 6.1596 8.5217 7 8.5217Z"
          fill="#F5F5F5"
        />
        <path
          d="m7 5.1222.4695 1.0647 1.1567-.1258L7.939 7l.6873.9389-1.1567-.1258L7 8.8778l-.4695-1.0647-1.1567.1258L6.061 7l-.6873-.939 1.1567.1259L7 5.1222Z"
          fill="#2650BF"
        />
      </g>
      <defs>
        <clipPath id="clip0_1042_303">
          <path fill="#fff" d="M0 0h14v14H0z" />
        </clipPath>
      </defs>
      <title>{title ?? 'India'}</title>
    </>
  );
}
