import React from 'react';

import { LogoProps } from '../../LogoBase.types';
import { LogoBase } from '../../LogoBase';

const Swish20: React.FC<LogoProps> = (props) => {
  return (
    <LogoBase {...props} width={20} height={20}>
      <svg fill="none">
        <mask id="a" width="20" height="20" x="0" y="0" maskUnits="userSpaceOnUse">
          <circle cx="10" cy="10" r="10" fill="#fff" />
        </mask>
        <g mask="url(#a)">
          <circle cx="10" cy="10" r="10" fill="#fff" />
          <path
            fill="url(#b)"
            fillRule="evenodd"
            d="M6.407 17.522a8.339 8.339 0 0 0 9.976-2.166 8.331 8.331 0 0 0-1.026-11.738L13.013 6.41a6.509 6.509 0 0 1 .802 9.171c-1.843 2.196-4.878 2.93-7.408 1.94"
            clipRule="evenodd"
          />
          <path
            fill="url(#c)"
            fillRule="evenodd"
            d="M6.407 17.522a8.339 8.339 0 0 0 10.784-3.31 7.286 7.286 0 0 0-2.512-6.75 7.296 7.296 0 0 0-1.666-1.051 6.509 6.509 0 0 1 .802 9.17c-1.843 2.196-4.878 2.93-7.408 1.94Z"
            clipRule="evenodd"
          />
          <path
            fill="url(#d)"
            fillRule="evenodd"
            d="M13.593 2.478a8.34 8.34 0 0 0-9.976 2.166 8.331 8.331 0 0 0 1.026 11.739l2.344-2.793a6.509 6.509 0 0 1-.802-9.171c1.843-2.196 4.878-2.93 7.408-1.94"
            clipRule="evenodd"
          />
          <path
            fill="url(#e)"
            fillRule="evenodd"
            d="M13.593 2.478A8.34 8.34 0 0 0 2.81 5.788a7.286 7.286 0 0 0 2.512 6.75 7.298 7.298 0 0 0 1.666 1.051 6.509 6.509 0 0 1-.802-9.17c1.843-2.196 4.878-2.93 7.408-1.94"
            clipRule="evenodd"
          />
          <circle cx="10" cy="10" r="9.5" stroke="#000" strokeOpacity=".1" />
        </g>
        <defs>
          <linearGradient
            id="b"
            x1="16.045"
            x2="12.505"
            y1="12.394"
            y2="5.34"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#EF2131" />
            <stop offset="1" stopColor="#FECF2C" />
          </linearGradient>
          <linearGradient
            id="c"
            x1="12.805"
            x2="6.598"
            y1="6.411"
            y2="17.156"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FBC52C" />
            <stop offset=".264" stopColor="#F87130" />
            <stop offset=".561" stopColor="#EF52E2" />
            <stop offset="1" stopColor="#661EEC" />
          </linearGradient>
          <linearGradient
            id="d"
            x1="4.12"
            x2="7.513"
            y1="7.703"
            y2="14.605"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#78F6D8" />
            <stop offset=".266" stopColor="#77D1F6" />
            <stop offset=".554" stopColor="#70A4F3" />
            <stop offset="1" stopColor="#661EEC" />
          </linearGradient>
          <linearGradient
            id="e"
            x1="7.332"
            x2="13.491"
            y1="13.589"
            y2="2.881"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#536EED" />
            <stop offset=".247" stopColor="#54C3EC" />
            <stop offset=".564" stopColor="#64D769" />
            <stop offset="1" stopColor="#FECF2C" />
          </linearGradient>
        </defs>
      </svg>
    </LogoBase>
  );
};

Swish20.displayName = 'Logo.Swish';

export default Swish20;
