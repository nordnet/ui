import React from 'react';
import { LogoProps } from '../LogoBase.types';
import { LogoBase } from '../LogoBase';
import { assert } from '../../../common/utils';

type Props = LogoProps & {
  /**
   * Needed to avoid gradient id collision
   * Which in turn creates a bug in chrome
   * See Spinner/regression bug for more info
   */
  id: string;
};

const SharevilleLogo24: React.FC<Props> = (props) => {
  assert(
    Boolean(props.id),
    'Logo.SharevilleLogo should have id provided because of Chrome being unable to differentiate between defs with same ids',
  );
  return (
    <LogoBase {...props} viewBox="0 0 166.54 203.5" width={24} height={24}>
      <defs>
        <linearGradient
          id={`linear-gradient-${props.id}`}
          x1="369.57"
          y1="38.34"
          x2="197.13"
          y2="222.06"
          gradientTransform="matrix(1 -.03 -.03 -1 -184.76 221.53)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".34" stopColor="#008c44" />
          <stop offset=".49" stopColor="#3aa34a" />
          <stop offset=".65" stopColor="#6db84e" />
          <stop offset=".79" stopColor="#92c752" />
          <stop offset=".9" stopColor="#a9d054" />
          <stop offset=".97" stopColor="#b1d355" />
        </linearGradient>
        <linearGradient
          id={`linear-gradient-${props.id}-2`}
          x1="354.93"
          y1="65.65"
          x2="238.52"
          y2="182.06"
          gradientTransform="matrix(1 0 0 -1 -196.51 227.12)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".02" stopColor="#008c44" />
          <stop offset=".09" stopColor="#289c48" />
          <stop offset=".17" stopColor="#4dab4b" />
          <stop offset=".26" stopColor="#6cb74e" />
          <stop offset=".35" stopColor="#85c151" />
          <stop offset=".46" stopColor="#99c953" />
          <stop offset=".58" stopColor="#a7cf54" />
          <stop offset=".73" stopColor="#afd255" />
          <stop offset="1" stopColor="#b1d355" />
        </linearGradient>
        <linearGradient
          id={`linear-gradient-${props.id}-3`}
          x1="385.8"
          y1="177.34"
          x2="318.7"
          y2="221.13"
          gradientTransform="matrix(.98 .2 .2 -.98 -270.31 252.11)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".15" stopColor="#b1d355" />
          <stop offset=".25" stopColor="#b7d662" />
          <stop offset=".46" stopColor="#c7e086" />
          <stop offset=".73" stopColor="#e2eebf" />
          <stop offset="1" stopColor="#fff" />
        </linearGradient>
      </defs>
      <path
        fill={`url(#linear-gradient-${props.id})`}
        d="M88.37 62.66c-.43.22 13.71-17.07 6.24-39.83C90.35 9.94 79.66 0 79.66 0L10.72 69c-32.13 32.73 13 103.61 67.44 71.85.44-.23-13.69 17.06-6.23 39.82 4.26 12.9 15 22.83 15 22.83l68.92-69c32.09-32.72-13.06-103.6-67.48-71.84z"
      />
      <path
        fill={`url(#linear-gradient-${props.id}-2)`}
        d="M89.06 98.06c-.25.09 8.77-8.58 6.13-21.74-1.5-7.47-6.78-13.7-6.78-13.7l-40.2 35.5c-20 17.78-1.37 55.52 30 42.76.26-.09-12.91 17.5 6.14 35.92l38.37-37.12c19-18.35-2.61-55.76-33.66-41.62z"
      />
      <path
        fill={`url(#linear-gradient-${props.id}-3)`}
        d="M87.07 117.8a14.37 14.37 0 0 0 4.86-11.68 19.52 19.52 0 0 0-2.87-8.06l-24.19 19.21c-10.38 7.12-3.56 28.17 13.29 23.58.16 0-7 10 2.44 19.8l22.32-21.3c10.66-8.74.34-29.67-15.85-21.55z"
      />
    </LogoBase>
  );
};

SharevilleLogo24.displayName = 'Logo.SharevilleLogo';

export default SharevilleLogo24;
