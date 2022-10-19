import React, { FC, ReactElement } from 'react';
import { isArray } from '../../common/utils';
import { Box, Flexbox, Typography, Icon } from '../..';
import { StyledButton, HiddenText, CompletionBar } from './ProgressIndicator.styled';
import { Props } from './ProgressIndicator.types';

const ProgressIndicator: FC<Props> = ({
  numberOfSteps,
  currentStep,
  title,
  closeCallback,
  backCallback,
  infoCallback,
  exitText = 'Exit',
  backText = 'Back',
  infoText = 'Info',
  infoIcon = 'info',
}): ReactElement => {
  const isFirstStep = isArray(currentStep) ? [...currentStep][0] === 1 : currentStep === 1;
  const noButtons = !closeCallback && !backCallback && !infoCallback;
  const noBackButton = !backCallback;
  const handleBackAndCloseClick = () => {
    if (isFirstStep && closeCallback) return closeCallback();
    if (backCallback) return backCallback();
    return null;
  };

  return (
    <Box
      px={5}
      py={3}
      lg={{ pt: 4, pb: 3 }}
      backgroundColor={(t) => t.color.progressIndicatorBackground}
    >
      <Flexbox container justifyContent="space-between" gap={6} alignItems="center">
        <StyledButton
          onClick={handleBackAndCloseClick}
          visible={
            (!isFirstStep && !!backCallback) || (isFirstStep && !!closeCallback) || noBackButton
          }
          $hide={noButtons || (!backCallback && !isFirstStep && !noBackButton)}
          charWidth={isFirstStep || noBackButton ? exitText.length : backText.length + 0.5}
        >
          {isFirstStep || noBackButton ? <Icon.Cross16 /> : <Icon.ChevronLeft16 />}
          <HiddenText ml={3}>
            <Typography
              type="secondary"
              weight="bold"
              lineHeight="inherit"
              color={(t) => t.color.cta}
            >
              {isFirstStep || noBackButton ? exitText : backText}
            </Typography>
          </HiddenText>
        </StyledButton>
        <Flexbox
          item
          container
          justifyContent="space-between"
          gap={2}
          alignItems="center"
          width="100%"
        >
          {isArray(numberOfSteps) ? (
            [...numberOfSteps].map((steps, index) => {
              return (
                <CompletionBar
                  key={`completion_bar_${index + 1}`}
                  completion={currentStep[index] / Number(steps)}
                  noButtons={noButtons}
                />
              );
            })
          ) : (
            <CompletionBar
              completion={Number(currentStep) / Number(numberOfSteps)}
              noButtons={noButtons}
            />
          )}
        </Flexbox>

        <StyledButton
          onClick={infoCallback}
          visible={!!infoCallback}
          $hide={noButtons}
          charWidth={infoText.length + 0.5}
        >
          <HiddenText mr={3}>
            <Typography
              type="secondary"
              weight="bold"
              lineHeight="inherit"
              color={(t) => t.color.cta}
            >
              {infoText}
            </Typography>
          </HiddenText>

          {infoIcon === 'info' ? <Icon.Information16 /> : <Icon.Help16 />}
        </StyledButton>
      </Flexbox>
      {title && (
        <Box pt={3}>
          <Typography type="title1">{title}</Typography>
        </Box>
      )}
    </Box>
  );
};
export default ProgressIndicator;
