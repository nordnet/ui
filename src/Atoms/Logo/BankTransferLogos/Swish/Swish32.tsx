import React from 'react';

import { LogoProps } from '../../LogoBase.types';
import { LogoBase } from '../../LogoBase';

const Swish32: React.FC<LogoProps> = (props) => {
  return (
    <LogoBase {...props} viewBox="0 0 32 32" width={32} height={32}>
      <svg fill="none">
        <mask id="mask0_1021_258" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
          <circle cx="16" cy="16" r="16" fill="white" />
        </mask>
        <g mask="url(#mask0_1021_258)">
          <circle cx="16" cy="16" r="16" fill="white" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.96338 28.6367C15.588 31.3268 22.5299 29.9955 26.7236 24.9986C31.6943 19.0759 30.9223 10.2464 24.9992 5.2774L21.0617 9.96916C25.6889 13.8511 26.2922 20.7493 22.4089 25.3764C19.3122 29.0655 14.2139 30.2975 9.96338 28.6365"
            fill="url(#paint0_linear_1021_258)"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.96338 28.6366C15.588 31.3268 22.5299 29.9955 26.7236 24.9986C27.2288 24.397 27.6829 23.7542 28.081 23.077C28.7433 18.9616 27.2868 14.6115 23.8609 11.7374C23.0122 11.0244 22.0707 10.4298 21.0621 9.96979C25.6891 13.8518 26.2918 20.7494 22.4087 25.3762C19.3123 29.0658 14.2142 30.2976 9.96338 28.6366Z"
            fill="url(#paint1_linear_1021_258)"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22.0367 3.36309C16.4121 0.673236 9.47032 2.00455 5.27653 7.00142C0.305776 12.9242 1.07781 21.7537 7.00087 26.7227L10.9386 22.0309C6.31117 18.1489 5.70794 11.2508 9.59135 6.62369C12.6878 2.93408 17.7859 1.70229 22.0366 3.36325"
            fill="url(#paint2_linear_1021_258)"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22.0367 3.36315C16.4121 0.673297 9.47031 2.00461 5.27652 7.00148C4.77127 7.60307 4.31721 8.24586 3.91909 8.92313C3.25678 13.0386 4.71326 17.3884 8.13916 20.2627C8.98789 20.9757 9.92939 21.5703 10.9379 22.0303C6.31115 18.1483 5.70824 11.2507 9.59134 6.62375C12.6878 2.93414 17.7859 1.70236 22.0365 3.36331"
            fill="url(#paint3_linear_1021_258)"
          />
          <circle cx="16" cy="16" r="15.5" stroke="black" strokeOpacity="0.1" />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_1021_258"
            x1="26.1561"
            y1="20.0212"
            x2="20.2076"
            y2="8.17137"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#EF2131" />
            <stop offset="1" stopColor="#FECF2C" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_1021_258"
            x1="20.7115"
            y1="9.96961"
            x2="10.2838"
            y2="28.0218"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FBC52C" />
            <stop offset="0.264" stopColor="#F87130" />
            <stop offset="0.561" stopColor="#EF52E2" />
            <stop offset="1" stopColor="#661EEC" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_1021_258"
            x1="6.12145"
            y1="12.1406"
            x2="11.8227"
            y2="23.7358"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#78F6D8" />
            <stop offset="0.266" stopColor="#77D1F6" />
            <stop offset="0.554" stopColor="#70A4F3" />
            <stop offset="1" stopColor="#661EEC" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_1021_258"
            x1="11.5187"
            y1="22.0303"
            x2="21.8651"
            y2="4.04006"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#536EED" />
            <stop offset="0.247" stopColor="#54C3EC" />
            <stop offset="0.564" stopColor="#64D769" />
            <stop offset="1" stopColor="#FECF2C" />
          </linearGradient>
        </defs>
      </svg>
    </LogoBase>
  );
};

Swish32.displayName = 'Logo.Swish';

export default Swish32;
