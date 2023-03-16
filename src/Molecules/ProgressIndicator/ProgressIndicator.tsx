import React, { FC, ReactElement } from 'react';
import { Box, Flexbox, Typography, Icon } from '../..';
import { StyledButton, CompletionBar, StyledButtonPill } from './ProgressIndicator.styled';
import { Props } from './ProgressIndicator.types';
import { useMedia } from '../../Atoms/Media';

const ProgressIndicator: FC<Props> = ({
  numberOfSteps,
  currentStep,
  title,
  closeCallback,
  backCallback,
  infoCallback,
  exitText = 'Exit',
  infoText = 'Info',
  infoIcon = 'info',
  buttonCallback = false,
}): ReactElement => {
  const isMobile = useMedia((theme) => theme.media.lessThan(theme.breakpoints.sm));
  const isFirstStep = currentStep === 1;
  const noCloseAndBack = !closeCallback && !backCallback;
  const noButtons = noCloseAndBack && !infoCallback;
  const noBackButton = !backCallback;
  const handleBackAndCloseClick = () => {
    if ((isFirstStep || noBackButton) && closeCallback) return closeCallback();
    if (backCallback) return backCallback();
    return null;
  };

  return (
    <Box
      px={3}
      pt={3}
      pb={2}
      md={{ p: 5 }}
      backgroundColor={(t) => t.color.progressIndicatorBackground}
    >
      <Flexbox container justifyContent="space-between" gap={6} alignItems="center">
        <StyledButton
          size="l"
          variant="secondary"
          onClick={handleBackAndCloseClick}
          $visible={
            (!isFirstStep && !!backCallback) || (isFirstStep && !!closeCallback) || noBackButton
          }
          $hide={
            (buttonCallback && !isMobile) ||
            noButtons ||
            (!backCallback && !isFirstStep && !noBackButton) ||
            noCloseAndBack
          }
        >
          {isFirstStep || noBackButton ? (
            <Icon.Cross16 color="currentColor" />
          ) : (
            <Icon.ChevronLeft16 color="currentColor" />
          )}
        </StyledButton>

        <Flexbox
          item
          container
          justifyContent="space-between"
          gap={2}
          alignItems="center"
          width="auto"
          flex="1"
        >
          <CompletionBar
            completion={Number(currentStep) / Number(numberOfSteps)}
            noButtons={noButtons}
          />
        </Flexbox>
        {typeof infoCallback === 'function' ? (
          <StyledButton
            size="l"
            variant="secondary"
            onClick={() => infoCallback()}
            $visible={!!infoCallback}
            $hide={noButtons || (buttonCallback && !isMobile)}
          >
            {infoIcon === 'info' ? (
              <Icon.Information16 color="currentColor" />
            ) : (
              <Icon.Help16 color="currentColor" />
            )}
          </StyledButton>
        ) : (
          buttonCallback && isMobile && infoCallback
        )}
      </Flexbox>
      <Box pt={3}>
        <Flexbox container justifyContent="space-between" alignItems="center">
          {title && (
            <Box pr={2}>
              <Typography type="title2">{title}</Typography>
            </Box>
          )}
          {buttonCallback && !isMobile && (
            <Flexbox item container justifyContent="flex-end" flex="1">
              <Flexbox container gap={3} direction="row" alignItems="center">
                {typeof infoCallback === 'function' ? (
                  <StyledButtonPill
                    variant="secondary"
                    icon={
                      infoIcon === 'info' ? (
                        <Icon.Information16 color="currentColor" />
                      ) : (
                        <Icon.Help16 color="currentColor" />
                      )
                    }
                    onClick={() => infoCallback()}
                    size="s"
                  >
                    {infoText}
                  </StyledButtonPill>
                ) : (
                  infoCallback
                )}
                {closeCallback && (
                  <StyledButtonPill
                    variant="secondary"
                    icon={<Icon.Cross16 color="currentColor" />}
                    onClick={closeCallback}
                    size="s"
                  >
                    {exitText}
                  </StyledButtonPill>
                )}
              </Flexbox>
            </Flexbox>
          )}
        </Flexbox>
      </Box>
    </Box>
  );
};
export default ProgressIndicator;
