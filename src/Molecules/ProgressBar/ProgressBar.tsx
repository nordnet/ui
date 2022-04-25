import React, { FC } from 'react';
import * as R from 'ramda';
import styled, { useTheme } from 'styled-components';
import { Badge, Flexbox, Icon, Typography } from '../..';
import { Props } from './ProgressBar.types';

const StyledContainer = styled(Flexbox)<{ hasLabels: boolean | undefined }>`
  width: 100%;
  ${(p) => p.theme.media.greaterThan(p.theme.breakpoints.md)} {
    padding-bottom: ${({ theme, hasLabels }) => (hasLabels ? theme.spacing.unit(8) : 0)}px;
  }
`;

const Bubble = styled(Badge.Icon)`
  position: relative;
`;

const StyledTypography = styled(Typography)`
  display: none;
  text-align: center;
  white-space: nowrap;
  ${(p) => p.theme.media.greaterThan(p.theme.breakpoints.md)} {
    display: block;
    position: absolute;
    top: ${({ theme }) => theme.spacing.unit(10)}px;
  }
`;

const StyledLine = styled.div<{
  lineColor: () => string | string[];
}>`
  width: 100%;
  height: 2px;
  background-color: ${(p) => p.lineColor};
`;

const ProgressBar: FC<Props> = ({
  numberOfSteps,
  currentStep,
  stepLabels,
  failed = false,
  warning = false,
  colorDone,
  colorActive,
  colorNext,
  colorFailure,
  colorText,
  colorLabel,
  titleContainer,
  titleDone,
  titleActive,
  titleNext,
  titleFailure,
}) => {
  const theme = useTheme();
  const stepBubble = (stepNumber: number) => {
    const stepDone = stepNumber < currentStep;
    const stepActive = stepNumber === currentStep;
    const lineActive = stepNumber + 1 === currentStep;

    const titleProgress = () => {
      if (stepDone) {
        return titleDone || 'step done';
      }
      if (stepActive) {
        return titleActive || 'active step';
      }
      if (failed) {
        return titleFailure || 'failure step';
      }
      if (warning) {
        return titleFailure || 'warning step';
      }
      return titleNext || 'step not done';
    };

    const title = `${
      stepLabels ? stepLabels[stepNumber - 1] : stepNumber.toString()
    } - ${titleProgress()}`;

    const getStepIcon = () => {
      if (stepDone) {
        return <Icon.Check16 color={(t) => (colorText ? colorText(t) : t.color.progressBarText)} />;
      }
      if (stepActive && failed) {
        return <Icon.Cross16 color={(t) => (colorText ? colorText(t) : t.color.progressBarText)} />;
      }
      if (stepActive && warning) {
        return (
          <Icon.Warning16 color={(t) => (colorText ? colorText(t) : t.color.progressBarText)} />
        );
      }
      return stepNumber;
    };

    const getColor = (active: boolean) => {
      if (active && failed) {
        return colorFailure ? colorFailure(theme) : theme.color.progressBarFailure;
      }
      if (active && warning) {
        return colorFailure ? colorFailure(theme) : theme.color.progressBarWarning;
      }
      if (active) {
        return colorActive ? colorActive(theme) : theme.color.progressBarActive;
      }
      if (stepDone) {
        return colorDone ? colorDone(theme) : theme.color.progressBarDone;
      }
      return colorNext ? colorNext(theme) : theme.color.progressBarNext;
    };

    return (
      <React.Fragment key={stepNumber}>
        <Bubble title={title} badgeColor={() => getColor(stepActive)} badgeSize={8}>
          <Typography
            type="secondary"
            color={(t) => (colorText ? colorText(t) : t.color.progressBarText)}
            weight="bold"
            aria-hidden
          >
            {getStepIcon()}
          </Typography>
          <StyledTypography
            type="secondary"
            weight={stepActive ? 'bold' : 'regular'}
            color={(t) => (colorLabel ? colorLabel(t) : t.color.progressBarText)}
            aria-hidden
          >
            {stepLabels && stepLabels[stepNumber - 1]}
          </StyledTypography>
        </Bubble>
        {stepNumber < numberOfSteps && <StyledLine lineColor={() => getColor(lineActive)} />}
      </React.Fragment>
    );
  };

  const generateSteps = () => {
    const steps = R.range(1, numberOfSteps + 1);
    return steps?.map((step: number) => stepBubble(step));
  };

  return (
    <StyledContainer
      container
      alignItems="center"
      title={titleContainer || 'progress bar'}
      hasLabels={stepLabels && stepLabels.length > 0}
    >
      {generateSteps()}
    </StyledContainer>
  );
};

export default ProgressBar;
