import React, { useLayoutEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import styled from 'styled-components';
import { RemoveScroll } from 'react-remove-scroll';
import FocusLock from 'react-focus-lock';
import { Bubble, Button, Icon, Flexbox, Media, Typography } from '../..';
import { Component, ColsTrimmerProps } from './CoachMarks.types';
import {
  getElement,
  makeBackdropPath,
  positionBubbleAfter,
  positionBubbleBefore,
  positionBubbleOver,
  positionBubbleUnder,
} from './utils';
import { useClientRectWithCbRef, useWindowSize } from '../../common/Hooks';
import { Placement } from '../Bubble/Bubble.types';
import messages from './CoachMarks.messages';

const CLOSE_ICON_SIZE = 4;

const getBubblePositionStyles = (
  position: Placement,
  targetRect: ClientRect,
  bubbleRect: ClientRect,
) => {
  switch (position) {
    case 'top':
      return positionBubbleOver(targetRect, bubbleRect);
    case 'right':
      return positionBubbleAfter(targetRect);
    case 'left':
      return positionBubbleBefore(targetRect, bubbleRect);
    case 'bottom':
    default:
      return positionBubbleUnder(targetRect);
  }
};

const SVG = styled.svg`
  overflow: hidden;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  fill: ${(p) => p.theme.color.modalBackdrop};
  z-index: ${(p) => p.theme.zIndex.modal};
  transition: all 0.3s ease-out, height 0s 0s, opacity 0.3s 0s;
`;

const TitleWrapper = styled.div<ColsTrimmerProps>`
  padding-right: ${(p) => (p.$hasIcon ? 0 : p.theme.spacing.unit(CLOSE_ICON_SIZE + 5))}px;
`;

const FooterFlex = styled(Flexbox)`
  margin-top: auto;
`;

const IconFlex = styled(Flexbox)`
  margin-bottom: ${(p) => p.theme.spacing.unit(1)}px;
`;

const NavigationButtonsContainer = styled(Flexbox)<{ $hasSingleButton?: boolean }>`
  margin-left: auto;
  min-width: ${(p) =>
    p.$hasSingleButton ? `${p.theme.spacing.unit(25)}px` : `${p.theme.spacing.unit(50)}px`};
`;

const Content = styled.div`
  color: ${(p) => p.theme.color.bubbleSecondaryText};
`;

const CloseButton = styled(Button)`
  position: absolute;
  top: ${(p) => p.theme.spacing.unit(5)}px;
  right: ${(p) => p.theme.spacing.unit(5)}px;
`;

const CoachMarks: Component = ({ steps, onClose, onDone, onNext, onPrev }) => {
  const { formatMessage } = useIntl();
  const [currentStep, setCurrentStep] = useState(0);
  const [targetRect, setTargetRect] = useState(null);
  const windowSize = useWindowSize();
  const [bubbleRect, bubbleRef] = useClientRectWithCbRef(currentStep);
  const { body, content, icon, position = 'left', target, title } = steps[currentStep];
  const hasMultipleSteps = steps.length > 1;
  const hasPrevStep = currentStep > 0;
  const hasNextStep = currentStep + 1 < steps.length;
  const path = targetRect
    ? makeBackdropPath({
        width: targetRect.width,
        height: targetRect.height,
        x: targetRect.left,
        y: targetRect.top,
        r: 0,
      })
    : ({} as string);
  const bubblePositionStyles = getBubblePositionStyles(position, targetRect, bubbleRect);

  useLayoutEffect(() => {
    if (target) {
      const targetEl = getElement(target);
      setTargetRect(targetEl?.getBoundingClientRect());
    }
  }, [target, windowSize]);

  const handleStepBackwards = () => {
    if (hasPrevStep) {
      setCurrentStep(currentStep - 1);
    }

    if (onPrev) {
      onPrev(currentStep);
    }
  };

  const handleStepForward = () => {
    if (hasNextStep) {
      setCurrentStep(currentStep + 1);
    }

    if (onNext) {
      onNext(currentStep);
    }
  };

  const handleDone = () => {
    if (onDone) {
      onDone();
    }
  };

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  return targetRect ? (
    <Media query={(t) => t.media.greaterThan(t.breakpoints.lg)}>
      <FocusLock>
        <RemoveScroll>
          <Bubble position={position} style={bubblePositionStyles} ref={bubbleRef}>
            <Flexbox container item direction="column" flex="1" gutter={5}>
              {body || (
                <Flexbox container direction="column" gutter={1}>
                  {icon && <IconFlex item>{icon}</IconFlex>}
                  {title && (
                    <Flexbox item>
                      <TitleWrapper $hasIcon={Boolean(icon)}>
                        <Typography as="h2" type="primary" weight="bold">
                          {title}
                        </Typography>
                      </TitleWrapper>
                    </Flexbox>
                  )}
                  {content && (
                    <Flexbox item>
                      <Content>
                        {typeof content === 'string' ? (
                          <Typography as="p" type="secondary" color="inherit">
                            {content}
                          </Typography>
                        ) : (
                          content
                        )}
                      </Content>
                    </Flexbox>
                  )}
                </Flexbox>
              )}
              <FooterFlex container item alignItems="baseline" gutter={5}>
                {hasMultipleSteps && (
                  <Flexbox item>
                    <Typography type="secondary" color={(t) => t.color.bubbleSecondaryText}>
                      {`${currentStep + 1} of ${steps.length}`}
                    </Typography>
                  </Flexbox>
                )}
                <NavigationButtonsContainer container gutter={1} $hasSingleButton={!hasPrevStep}>
                  {hasPrevStep && (
                    <Flexbox item flex="1 0 50%">
                      <Button variant="secondary" onClick={handleStepBackwards} fullWidth>
                        {formatMessage(messages.previous)}
                      </Button>
                    </Flexbox>
                  )}
                  <Flexbox item flex="1 0 50%">
                    {hasNextStep ? (
                      <Button variant="primary" onClick={handleStepForward} fullWidth>
                        {formatMessage(messages.next)}
                      </Button>
                    ) : (
                      <Button variant="primary" onClick={handleDone} fullWidth>
                        {formatMessage(messages.done)}
                      </Button>
                    )}
                  </Flexbox>
                </NavigationButtonsContainer>
              </FooterFlex>
            </Flexbox>
            <CloseButton variant="neutral" onClick={handleClose}>
              <Icon.CrossMedium size={CLOSE_ICON_SIZE} />
            </CloseButton>
          </Bubble>
          <SVG>
            <path d={path} />
          </SVG>
        </RemoveScroll>
      </FocusLock>
    </Media>
  ) : null;
};

export default CoachMarks;
