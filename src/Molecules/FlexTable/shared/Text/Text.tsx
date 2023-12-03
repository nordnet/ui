import React from 'react';
import styled from 'styled-components';
import { TextProps } from './Text.types';
import { FontSize } from '../shared.types';
import { Theme } from '../../../../theme/theme.types';
import { Typography } from '../../../../index';
import { useFlexTable } from '../FlexTableProvider';
import getStylesForSizes from '../getStylesForSizes';

type ScreenSizeConfigurableProps = {
  fontSize: FontSize;
};

type StyledTypographyProps = {
  $xs: ScreenSizeConfigurableProps;
  $sm: Partial<ScreenSizeConfigurableProps>;
  $md: Partial<ScreenSizeConfigurableProps>;
  $lg: Partial<ScreenSizeConfigurableProps>;
  $xl: Partial<ScreenSizeConfigurableProps>;
};

const getFontSizeStyles = ({ fontSize, theme }: ScreenSizeConfigurableProps & { theme: Theme }) => {
  if (fontSize === 's') {
    return `
      font-size: 12px;
      line-height: ${theme.spacing.unit(4)}px;
    `;
  }
  return `
    font-size: 14px;
    line-height: ${theme.spacing.unit(5)}px;
  `;
};

const StyledTypography = styled(Typography)<StyledTypographyProps>`
  ${getStylesForSizes<{}, ScreenSizeConfigurableProps>(
    (p: StyledTypographyProps) => ({
      xs: p.$xs,
      sm: p.$sm,
      md: p.$md,
      lg: p.$lg,
      xl: p.$xl,
    }),
    {
      fontSize: getFontSizeStyles,
    },
  )}
`;

const Text = ({ className, color, weight, children }: TextProps) => {
  const { xs, sm, md, lg, xl } = useFlexTable<'fontSize'>('fontSize');
  return (
    <StyledTypography
      className={className}
      color={color}
      weight={weight}
      $xs={xs}
      $sm={sm}
      $md={md}
      $lg={lg}
      $xl={xl}
    >
      {children}
    </StyledTypography>
  );
};

export default Text;
