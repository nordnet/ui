import React, { useLayoutEffect, useState } from 'react';
import styled from 'styled-components';
import { usePopper } from 'react-popper';
import { RemoveScroll } from 'react-remove-scroll';
import FocusLock from 'react-focus-lock';
import { Button, Icon, Flexbox, Media, Typography } from '../..';
import { Component, ColsTrimmerProps } from './CoachMarks.types';
import { makeBackdropPath } from './utils';
import Bubble from './Bubble';
import BubbleArrow from './BubbleArrow';
import { OFFSET_AWAY_FROM_REFERENCE } from './Bubble/consts';
import { BACKDROP_PADDING, CLOSE_ICON_SIZE } from './consts';

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
  padding-right: ${(p) => (p.$hasIcon ? 0 : p.theme.spacing.unit(CLOSE_ICON_SIZE))}px;
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

export const CoachMarks: Component = ({
  steps,
  onClose,
  onDone,
  onNext,
  onPrev,
  prevText = 'Previous',
  nextText = 'Next',
  doneText = 'Done',
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [referenceElementRect, setReferenceElementRect] = useState<ClientRect | null>(null);
  const { body, content, icon, placement = 'left', title, referenceElement } = steps[currentStep];

  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null);
  const [arrowElement, setArrowElement] = useState<HTMLElement | null>(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    // @ts-ignore
    placement: `${placement}-start`,
    modifiers: [
      { name: 'arrow', options: { element: arrowElement } },
      {
        name: 'offset',
        options: { offset: [-BACKDROP_PADDING, OFFSET_AWAY_FROM_REFERENCE + BACKDROP_PADDING] },
      },
    ],
  });

  const hasMultipleSteps = steps.length > 1;
  const hasPrevStep = currentStep > 0;
  const hasNextStep = currentStep + 1 < steps.length;
  const path = referenceElementRect ? makeBackdropPath(referenceElementRect, BACKDROP_PADDING) : '';

  useLayoutEffect(() => {
    if (referenceElement) {
      setReferenceElementRect(referenceElement.getBoundingClientRect());
    }
  }, [referenceElement]);

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

  return referenceElementRect ? (
    <Media query={(t) => t.media.greaterThan(t.breakpoints.lg)}>
      <FocusLock>
        <RemoveScroll>
          <Bubble ref={setPopperElement} style={styles.popper} {...attributes.popper}>
            <BubbleArrow ref={setArrowElement} style={styles.arrow} bubblePlacement={placement} />
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
                        {prevText}
                      </Button>
                    </Flexbox>
                  )}
                  <Flexbox item flex="1 0 50%">
                    {hasNextStep ? (
                      <Button variant="primary" onClick={handleStepForward} fullWidth>
                        {nextText}
                      </Button>
                    ) : (
                      <Button variant="primary" onClick={handleDone} fullWidth>
                        {doneText}
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
