import React from 'react';

type FlagSize = {
  /**
   * @param {string} size The diameter of the flag
   * - "s" = 14px
   * - "m" = 16px
   * - "l" = 24px
   */
  size: 's' | 'm' | 'l';
};

export type PropsWithSize = {
  /**
   * @param {string} [className] For styled-components support
   */
  className?: string;
  /**
   * @param {string} [title] Used for title tag in SVG. Will fall back to english country name
   */
  title?: string;
  /**
   * @param {string} country Country code
   */
  country: string;
  /**
   * @param {boolean} [inline] Will give the svg display: inline-block and vertical-align: sub
   */
  inline?: boolean;
} & FlagSize;

export type FlagComponent = React.FunctionComponent<PropsWithSize>;
