import React from 'react';

import { LogoProps } from '../../LogoBase.types';
import { LogoBase } from '../../LogoBase';

const Swish24: React.FC<LogoProps> = (props) => {
  return (
    <LogoBase {...props} viewBox="0 0 24 24" width={24} height={24}>
      <svg fill="none">
        <mask id="mask0_1021_297" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
          <circle cx="12" cy="12" r="12" fill="white" />
        </mask>
        <g mask="url(#mask0_1021_297)">
          <circle cx="12" cy="12" r="12" fill="white" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.68811 21.0262C11.7057 22.9477 16.6642 21.9968 19.6597 18.4276C23.2102 14.1971 22.6588 7.89029 18.428 4.341L15.6155 7.69226C18.9206 10.4651 19.3515 15.3923 16.5778 18.6974C14.3658 21.3325 10.7242 22.2125 7.68811 21.0261"
            fill="url(#paint0_linear_1021_297)"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.68811 21.0262C11.7057 22.9478 16.6642 21.9968 19.6597 18.4276C20.0206 17.9979 20.3449 17.5388 20.6293 17.055C21.1023 14.1154 20.062 11.0083 17.6149 8.95536C17.0087 8.44605 16.3362 8.02131 15.6158 7.69275C18.9208 10.4656 19.3513 15.3925 16.5777 18.6973C14.3659 21.3328 10.7244 22.2126 7.68811 21.0262Z"
            fill="url(#paint1_linear_1021_297)"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.3119 2.97364C12.2944 1.05231 7.33595 2.00325 4.34038 5.57244C0.78984 9.80297 1.34129 16.1098 5.57205 19.659L8.38471 16.3078C5.0794 13.5349 4.64853 8.60771 7.42239 5.30263C9.63412 2.6672 13.2757 1.78735 16.3118 2.97375"
            fill="url(#paint2_linear_1021_297)"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.3119 2.9737C12.2943 1.05237 7.33587 2.00331 4.34031 5.57251C3.97942 6.00221 3.65509 6.46135 3.37072 6.94511C2.89764 9.88471 3.93798 12.9917 6.38505 15.0448C6.99129 15.5541 7.66379 15.9788 8.38418 16.3074C5.07933 13.5345 4.64868 8.60765 7.42232 5.30269C9.63405 2.66726 13.2756 1.78741 16.3118 2.97381"
            fill="url(#paint3_linear_1021_297)"
          />
          <circle cx="12" cy="12" r="11.5" stroke="black" strokeOpacity="0.1" />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_1021_297"
            x1="19.2543"
            y1="14.8723"
            x2="15.0054"
            y2="6.40812"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#EF2131" />
            <stop offset="1" stopColor="#FECF2C" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_1021_297"
            x1="15.3653"
            y1="7.69262"
            x2="7.91697"
            y2="20.587"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FBC52C" />
            <stop offset="0.264" stopColor="#F87130" />
            <stop offset="0.561" stopColor="#EF52E2" />
            <stop offset="1" stopColor="#661EEC" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_1021_297"
            x1="4.94389"
            y1="9.24331"
            x2="9.01618"
            y2="17.5256"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#78F6D8" />
            <stop offset="0.266" stopColor="#77D1F6" />
            <stop offset="0.554" stopColor="#70A4F3" />
            <stop offset="1" stopColor="#661EEC" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_1021_297"
            x1="8.79898"
            y1="16.3074"
            x2="16.1893"
            y2="3.4572"
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

Swish24.displayName = 'Logo.Swish';

export default Swish24;
