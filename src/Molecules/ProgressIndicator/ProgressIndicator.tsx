import React, { FC, ReactElement } from 'react';
import { Box, Flexbox, Typography, Icon } from '../..';
import { Container, StyledButton, HiddenText, CompletionBar } from './ProgressIndicator.styled';
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
  const isFirstStep = currentStep === 1;

  return (
    <Container>
      <Flexbox container justifyContent="space-between" gap={6} alignItems="center">
        <StyledButton
          onClick={() => (isFirstStep ? closeCallback() : backCallback())}
          charWidth={isFirstStep ? exitText.length : backText.length + 0.5}
        >
          {isFirstStep ? <Icon.Cross16 /> : <Icon.ChevronLeft16 />}
          <HiddenText ml={3}>
            <Typography
              type="secondary"
              weight="bold"
              lineHeight="inherit"
              color={(t) => t.color.cta}
            >
              {isFirstStep ? exitText : backText}
            </Typography>
          </HiddenText>
        </StyledButton>
        <CompletionBar completion={currentStep / numberOfSteps} />
        <StyledButton
          onClick={infoCallback}
          visible={!infoCallback}
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
    </Container>
  );
};
export default ProgressIndicator;
