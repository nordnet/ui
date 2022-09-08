import React from 'react';
import styled, { css, useTheme } from 'styled-components';
import flags from './flags';
import { assert } from '../../../common/utils';
import { CleanSvg } from './CleanSvg';
import { PropsWithDimensions } from './FlagBase.types';

const FLAGS_WITH_WHITE_BACKGROUND = ['fi', 'jp', 'ru'];

export const StyledSvg = styled(CleanSvg)<{
  inline?: boolean;
  $height: number;
  $width: number;
}>`
  ${({ inline, $height, $width }) => {
    return css`
      height: ${$height}px;
      width: ${$width}px;
      user-select: none;
      flex-shrink: 0;
      display: ${inline ? 'inline-block' : 'block'};
      ${inline ? 'vertical-align: sub;' : ''}
    `;
  }}
`;

export const FlagBase: React.FunctionComponent<PropsWithDimensions> = ({
  className,
  country,
  inline,
  title,
  ...rest
}) => {
  assert(Boolean(country), 'Flag: You need to supply a country code');
  const FlagPathComponent = country ? flags[country.toLowerCase()] : null;
  const theme = useTheme();

  if (!FlagPathComponent) {
    return null;
  }

  const grayBorder =
    FLAGS_WITH_WHITE_BACKGROUND.includes(country.toLowerCase()) && !theme.isDarkMode;

  return (
    <StyledSvg
      className={className}
      preserveAspectRatio="xMidYMid meet"
      focusable="false"
      aria-hidden={title ? 'false' : 'true'}
      role={title ? 'img' : 'presentation'}
      inline={inline}
      viewBox="0 0 14 14" /* inherent size of the flag svgs */
      {...rest}
    >
      <FlagPathComponent borderColor={grayBorder ? theme.color.flagBorder : null} />
    </StyledSvg>
  );
};
