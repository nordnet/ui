import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CssGrid } from '../../../index';
import { Props } from './Bar.types';

const calculateBarWidth = (value: number, maxValue: number): number => {
  if (!Number.isFinite(value) || !Number.isFinite(maxValue)) return 0;

  if (value === 0 || maxValue === 0) {
    return 0;
  }

  return Math.min((value / maxValue) * 100, 100);
};

const BarFill = styled.div<{ $barWidth: number }>`
  min-width: ${(p) => p.theme.spacing.unit(8)}px;
  width: ${(p) => p.$barWidth}%;
  height: ${(p) => p.theme.spacing.unit(8)}px;
  background-color: ${(p) => p.theme.color.switchReadOnlyTrackBg};
  border-radius: ${(p) => p.theme.spacing.unit(8)}px;
  background-repeat: no-repeat;
  transition: width 800ms cubic-bezier(0.11, 0, 0.5, 0);
`;

const StyledGridContainer = styled(CssGrid.Container)`
  width: 100%;
  > * {
    display: flex;
    align-items: center;
  }
`;

const Bar: React.FC<Props> = ({ children, value = 0, maxValue = 0 }) => {
  const [backgroundWidth, setBackgroundWidth] = useState<number>(0);

  const barWidth = calculateBarWidth(value, maxValue);

  useEffect(() => {
    setBackgroundWidth(barWidth);
  }, []);

  return (
    <StyledGridContainer areas={[['content']]}>
      <CssGrid.Item area="content">
        <BarFill $barWidth={backgroundWidth} />
      </CssGrid.Item>
      <CssGrid.Item area="content" place="left" align="center">
        {children}
      </CssGrid.Item>
    </StyledGridContainer>
  );
};
export default Bar;
