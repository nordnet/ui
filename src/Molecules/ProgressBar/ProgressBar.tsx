import React, { FC } from 'react';
import * as R from 'ramda';
import styled from 'styled-components';

import { Flexbox, Icon, Typography } from '../..';
import { Props } from './ProgressBar.types';

const StyledContainer = styled(Flexbox).withConfig({
  shouldForwardProp: prop => !['hasLabels'].includes(prop),
})<{ hasLabels: boolean | undefined }>`
  width: 100%;
  padding-bottom: ${({ theme }) => theme.spacing.unit(0)}px;
  ${p => p.theme.media.greaterThan(p.theme.breakpoints.md)} {
    padding-bottom: ${({ theme, hasLabels }) => hasLabels && theme.spacing.unit(8)}px;
  }
`;

const StyledBubble = styled(Flexbox).withConfig({
  shouldForwardProp: prop =>
    !['done', 'active', 'colorDone', 'colorActive', 'colorNext'].includes(prop),
})<{
  done: boolean;
  active: boolean;
  colorDone: Props['colorDone'];
  colorActive: Props['colorActive'];
  colorNext: Props['colorNext'];
}>`
  position: relative;
  border-radius: 50%;
  width: ${({ theme }) => theme.spacing.unit(8)}px;
  height: ${({ theme }) => theme.spacing.unit(8)}px;
  color: ${({ theme }) => theme.color.progressBarText};
  background: ${({ theme, done, active, colorDone, colorActive, colorNext }) => {
    if (done) {
      return colorDone ? colorDone(theme) : theme.color.progressBarDone;
    }
    if (active) {
      return colorActive ? colorActive(theme) : theme.color.progressBarActive;
    }
    return colorNext ? colorNext(theme) : theme.color.progressBarNext;
  }};
`;

const StyledTypography = styled(Typography)`
  position: absolute;
  top: ${({ theme }) => theme.spacing.unit(10)}px;
  text-align: center;
  white-space: nowrap;
  display: none;
  ${p => p.theme.media.greaterThan(p.theme.breakpoints.md)} {
    display: block;
  }
`;

const StyledLine = styled.div.withConfig({
  shouldForwardProp: prop => !['done', 'colorDone', 'colorNext'].includes(prop),
})<{
  done: boolean;
  colorDone: Props['colorDone'];
  colorNext: Props['colorNext'];
}>`
  width: 100%;
  height: 2px;
  background: ${({ theme, done, colorDone, colorNext }) => {
    if (done) {
      return colorDone ? colorDone(theme) : theme.color.progressBarDone;
    }
    return colorNext ? colorNext(theme) : theme.color.progressBarNext;
  }};
`;

const ProgressBar: FC<Props> = ({
  numberOfSteps,
  currentStep,
  stepLabels,
  colorDone,
  colorActive,
  colorNext,
  colorText,
  colorLabel,
  titleContainer,
  titleDone,
  titleActive,
  titleNext,
}) => {
  const stepBubble = (stepNumber: number) => {
    const stepDone = stepNumber < currentStep;
    const stepActive = stepNumber === currentStep;

    const titleProgress = () => {
      if (stepDone) {
        return titleDone || 'step done';
      }
      if (stepActive) {
        return titleActive || 'active step';
      }
      return titleNext || 'step not done';
    };

    const title = `${
      stepLabels ? stepLabels[stepNumber - 1] : stepNumber.toString()
    } - ${titleProgress()}`;

    return (
      <React.Fragment key={stepNumber}>
        <StyledBubble
          container
          item
          shrink={0}
          alignItems="center"
          justifyContent="center"
          done={stepDone}
          active={stepActive}
          title={title}
          colorDone={colorDone}
          colorActive={colorActive}
          colorNext={colorNext}
        >
          <Typography
            type="secondary"
            color={t => (colorText ? colorText(t) : t.color.textLight)}
            aria-hidden
          >
            {stepDone ? (
              <Icon.CheckMark
                color={t => (colorText ? colorText(t) : t.color.textLight)}
                size={4}
              />
            ) : (
              stepNumber
            )}
          </Typography>
          <StyledTypography
            type="secondary"
            weight={stepActive ? 'bold' : 'regular'}
            color={t => (colorLabel ? colorLabel(t) : t.color.text)}
            aria-hidden
          >
            {stepLabels && stepLabels[stepNumber - 1]}
          </StyledTypography>
        </StyledBubble>
        {stepNumber < numberOfSteps && (
          <StyledLine done={stepDone} colorDone={colorDone} colorNext={colorNext} />
        )}
      </React.Fragment>
    );
  };

  const generateSteps = () => {
    const steps = R.range(1, numberOfSteps + 1);
    return steps.map((step: number) => stepBubble(step));
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
