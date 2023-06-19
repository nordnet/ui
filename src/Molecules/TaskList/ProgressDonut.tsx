import React, { FC, ReactElement } from 'react';
import styled from 'styled-components';
import { TaskListCompletion } from './TaskList.types';

const R = 15.915494309189533; // 100 / (2 * Math.PI);

const C = 21;
const CIRCLE_PROPS = {
  cx: C,
  cy: C,
  r: R,
  fill: 'transparent',
  strokeWidth: 7,
};

const StyledSvg = styled.svg`
  circle:first-child {
    stroke: ${(t) => t.theme.colorTokens.neutral.background_disabled};
  }
  circle:nth-child(2) {
    stroke: ${(t) => t.theme.colorTokens.action.background_default};
    animation: progress 0.5s ease-out forwards;
  }

  @keyframes progress {
    0% {
      stroke-dasharray: 0 100;
    }
  }
`;

const ProgressDonut: FC<TaskListCompletion & { size?: number }> = ({
  percentageCompleted,
  maxPercentage = 100,
  size = 64,
}): ReactElement => (
  <StyledSvg width={size} height={size} viewBox={`0 0 ${2 * C} ${2 * C}`}>
    <circle {...CIRCLE_PROPS}></circle>
    <circle
      {...CIRCLE_PROPS}
      strokeDasharray={`${(100 * percentageCompleted) / maxPercentage} ${
        100 * (1 - percentageCompleted / maxPercentage)
      }`}
      strokeDashoffset={25}
    ></circle>
  </StyledSvg>
);

export default ProgressDonut;
