import React from 'react';
import { FlagComponent } from './Flag.types';
import { assert } from '../../common/utils';
import { FlagBase } from './components/FlagBase';

/**
 *
 * @param {string} [className] - For styled-components support
 * @param {string} [title] - Used for title tag in SVG. Will fall back to english country name
 * @param {string} country - Country code
 * @param {boolean} [inline] - Will give the svg display: inline-block and vertical-align: sub
 * @param {string} size - The diameter of the flag
 * - "s" = 14px
 * - "m" = 16px
 * - "l" = 24px
 */
export const Flag: FlagComponent = ({ size, country, ...rest }) => {
  assert(Boolean(country), 'Flag: You need to supply a country code');
  switch (size) {
    case 's':
      return <FlagBase country={country} $height={14} $width={14} {...rest} />;
    case 'm':
      return <FlagBase country={country} $height={16} $width={16} {...rest} />;
    case 'l':
      return <FlagBase country={country} $height={24} $width={24} {...rest} />;
    default:
      return null;
  }
};
