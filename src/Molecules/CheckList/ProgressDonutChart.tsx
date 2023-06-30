import React, { FC, ReactElement, useRef, useEffect } from 'react';
import styled from 'styled-components';

const R = 15.915494309189533; // 100 / (2 * Math.PI);

const C = 20;
const CIRCLE_PROPS = {
  cx: C,
  cy: C,
  r: R,
  fill: 'transparent',
  strokeWidth: 8,
};
const SIZES = { s: 64, l: 215 };

const StyledSvg = styled.svg<{ $initialStrokeDasharray?: string }>`
  transform: rotate(-90deg);

  circle:first-of-type {
    stroke: ${(t) => t.theme.colorTokens.neutral.background_medium};
  }
  circle:nth-of-type(2) {
    stroke: ${(t) => t.theme.colorTokens.action.background_default};
    animation: progress 0.5s ease-out forwards;
  }

  @keyframes progress {
    0% {
      stroke-dasharray: ${(p) => p?.$initialStrokeDasharray || '0 100'};
    }
  }
`;

type ProgressDonutChartProps = {
  completed: number;
  total?: number;
  size?: keyof typeof SIZES;
};

const ProgressDonutChart: FC<ProgressDonutChartProps> = ({
  completed,
  total = 100,
  size = 's',
}): ReactElement => {
  const sizePx = SIZES[size];
  const strokeDasharray = `${(100 * completed) / total} ${100 * (1 - completed / total)}`;
  const savedStrokeDasharray = useRef<string>();

  useEffect(() => {
    savedStrokeDasharray.current = strokeDasharray;
  }, [strokeDasharray]);

  return (
    <StyledSvg
      width={sizePx}
      height={sizePx}
      viewBox={`0 0 ${2 * C} ${2 * C}`}
      key={`${size}:${completed}`}
      $initialStrokeDasharray={
        savedStrokeDasharray.current && savedStrokeDasharray.current !== strokeDasharray
          ? savedStrokeDasharray.current
          : undefined
      }
    >
      <circle {...CIRCLE_PROPS}></circle>
      {completed > 0 && total > 0 && (
        <circle {...CIRCLE_PROPS} strokeDasharray={strokeDasharray}></circle>
      )}
    </StyledSvg>
  );
};

export default ProgressDonutChart;
