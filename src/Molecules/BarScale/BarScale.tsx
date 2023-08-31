import React from 'react';
import R from 'ramda';
import styled from 'styled-components';
import { isNumber } from '../../common/utils';
import { BarProps, Props } from './BarScale.types';
import { Box, Flexbox } from '../..';

const Indicator = styled(Box)<BarProps>`
  height: ${(p) => p.theme.spacing.unit(p.$barHeight)}px;
  background: ${(p) =>
    p.$isActive
      ? p.theme.colorTokens.action.background_data_risk
      : p.theme.colorTokens.neutral.background_strong};
  border-radius: ${(p) => p.theme.borderRadius2};
`;

export const BarScale: React.FC<Props> = ({
  value = 0,
  max = 7,
  axisLabel = null,
  barHeight = 3,
  gutter = 1,
}) => {
  const verifiedMaxRating = isNumber(max) ? max : 7;
  const clampedValue = isNumber(value) ? Math.max(0, Math.min(value, max)) : 0;
  const isActive = (bar: number) => bar <= clampedValue;

  return (
    <>
      <Flexbox container gutter={gutter}>
        {R.range(1, verifiedMaxRating + 1)?.map((bar) => (
          <Flexbox key={bar} item flex="1 1 auto">
            <Indicator $isActive={isActive(bar)} $barHeight={barHeight} />
          </Flexbox>
        ))}
      </Flexbox>
      {axisLabel}
    </>
  );
};

export default BarScale;
