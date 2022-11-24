import React, { FC, ReactElement } from 'react';
import { Box, Flexbox, Typography, Icon, Button } from '../..';
import { StyledButton, HiddenText, CompletionBar } from './ProgressIndicator.styled';
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
  backText = 'Back',
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
          onClick={handleBackAndCloseClick}
          visible={
            (!isFirstStep && !!backCallback) || (isFirstStep && !!closeCallback) || noBackButton
          }
          $hide={
            (buttonCallback && !isMobile) ||
            noButtons ||
            (!backCallback && !isFirstStep && !noBackButton) ||
            noCloseAndBack
          }
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
          <CompletionBar
            completion={Number(currentStep) / Number(numberOfSteps)}
            noButtons={noButtons}
          />
        </Flexbox>
        {typeof infoCallback === 'function' ? (
          <StyledButton
            onClick={() => infoCallback()}
            visible={!!infoCallback}
            $hide={noButtons || (buttonCallback && !isMobile)}
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
        ) : (
          buttonCallback && isMobile && infoCallback
        )}
      </Flexbox>
      <Box pt={3}>
        <Flexbox container justifyContent="space-between" alignItems="center">
          {title && <Typography type="title1">{title}</Typography>}
          {buttonCallback && !isMobile && (
            <Flexbox item container justifyContent="flex-end" flex="1">
              <Flexbox container gap={3} direction="row" alignItems="center">
                {typeof infoCallback === 'function' ? (
                  <Button.Pill
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
                  </Button.Pill>
                ) : (
                  infoCallback
                )}
                {closeCallback && (
                  <Button.Pill
                    variant="secondary"
                    icon={<Icon.Cross16 color="currentColor" />}
                    onClick={closeCallback}
                    size="s"
                  >
                    {exitText}
                  </Button.Pill>
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
