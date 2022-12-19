import React from 'react';
import styled from 'styled-components';
import { Box, Flexbox, Icon, TruncateWithTooltip, Typography } from '../../index';
import Flag from '../../Atoms/Flag';
import { Bar } from './Bar';
import Link from '../Link';
import Number from '../Number';
import { PartialNumberProps, Props } from './DistributionBar.types';

const SpacingSpan = styled.span`
  width: ${(p) => p.theme.spacing.unit(4)}px;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const StyledTypography = styled(Typography)`
  display: flex;
  min-width: 0;
`;

const StyledAlignedTypography = styled(Typography)<{ $numberWidth: number }>`
  width: ${(p) => p.$numberWidth}px;
`;

const calculateNumberComponentWidth = (
  maxValue: number,
  numberProps: PartialNumberProps | undefined,
) => {
  const maxValueSpace = maxValue.toString().length * 8;

  if (!numberProps) {
    return maxValueSpace;
  }

  const { currency, decimals } = numberProps;
  const currencySpace = currency ? currency.length * 8 : 0;
  const decimalSpace = decimals ? decimals * 8 : 0;
  const virtualWidth = maxValueSpace + currencySpace + decimalSpace;

  return virtualWidth;
};

export const DistributionBar: React.FC<Props> = ({ maxWeight, bar, numberProps, hideWeight }) => {
  const { symbol, name, link, weight } = bar;
  const reservedSpacing = calculateNumberComponentWidth(maxWeight, numberProps);
  return (
    <Flexbox container item gap={2} justifyContent="space-between" flex="1">
      <Bar value={weight} maxValue={maxWeight}>
        <Box mx={2}>
          {/* TODO add support for Icon */}
          {!symbol && <SpacingSpan></SpacingSpan>}
          {symbol?.type === 'Country' && <Flag size="m" country={symbol.country} />}
          {symbol?.type === 'Bullet' && (
            <SpacingSpan>
              <Icon.Dot8 {...symbol.iconProps} />
            </SpacingSpan>
          )}
        </Box>

        <StyledTypography type="tertiary" weight="bold">
          {link ? (
            <TruncateWithTooltip label={name} position="top">
              <Link color="inherit" to={link}>
                {name}
              </Link>
            </TruncateWithTooltip>
          ) : (
            <TruncateWithTooltip label={name} position="top">
              {name}
            </TruncateWithTooltip>
          )}
        </StyledTypography>
      </Bar>

      {hideWeight ? null : (
        <Flexbox item container alignItems="center">
          <StyledAlignedTypography type="tertiary" $numberWidth={reservedSpacing} textAlign="right">
            <Number value={weight} {...numberProps} />
          </StyledAlignedTypography>
        </Flexbox>
      )}
    </Flexbox>
  );
};
