import React, { useCallback, useRef, useState } from 'react';
import { usePopper } from 'react-popper';
import FocusLock from 'react-focus-lock';
import { Button, Flexbox, Icon, Typography } from '../..';
import { Component } from './CoachMarks.types';
import { makeBackdropPath } from './utils';
import { useOnClickOutside, useWindowSize, useSafeLayoutEffect } from '../../common/Hooks';
import useScrollPosition from './hooks/useScrollPosition';
import Bubble from './Bubble';
import BubbleArrow from './BubbleArrow';
import { OFFSET_AWAY_FROM_REFERENCE } from './Bubble/consts';
import { BACKDROP_PADDING } from './consts';
import {
  CloseButton,
  Content,
  FooterFlex,
  IconFlex,
  NavigationButtonsContainer,
  SVG,
  TitleWrapper,
} from './CoachMarks.styled';

export const CoachMarks: Component = ({
  steps,
  onClose,
  onDone,
  onNext,
  onPrev,
  prevText = 'Previous',
  nextText = 'Next',
  doneText = 'Done',
  multiStepIndicatorText = 'of',
  closeOnClickOutside = true,
  bottomSheet = false,
  barColor,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [referenceElementRect, setReferenceElementRect] = useState<ClientRect | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null);
  const [arrowElement, setArrowElement] = useState<HTMLElement | null>(null);
  const scrollPosition = useScrollPosition();

  const {
    body,
    content,
    icon,
    placement = 'left',
    title,
    referenceElement,
    isCircular,
    backdropPadding,
    px,
    py,
  } = steps[currentStep];

  const highlightBoxPadding = backdropPadding || BACKDROP_PADDING;
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    // @ts-ignore
    placement: `${placement}-start`,
    modifiers: [
      { name: 'arrow', options: { element: arrowElement } },
      {
        name: 'offset',
        options: {
          offset: [-highlightBoxPadding, OFFSET_AWAY_FROM_REFERENCE + Number(highlightBoxPadding)],
        },
      },
    ],
  });

  const internalCoachMarkRef = useRef<HTMLDivElement>(null);
  const windowSize = useWindowSize();
  const hasMultipleSteps = steps.length > 1;
  const hasPrevStep = currentStep > 0;
  const hasNextStep = currentStep + 1 < steps.length;
  const path = referenceElementRect
    ? makeBackdropPath(referenceElementRect, Number(highlightBoxPadding), isCircular, px, py)
    : '';

  useSafeLayoutEffect(() => {
    if (referenceElement) {
      setReferenceElementRect(referenceElement.getBoundingClientRect());
    }
  }, [referenceElement, windowSize, scrollPosition]);

  const handleStepBackwards = useCallback(() => {
    if (hasPrevStep) {
      setCurrentStep(currentStep - 1);
    }
    onPrev?.(currentStep);
  }, [currentStep, hasPrevStep, onPrev]);

  const handleStepForward = useCallback(() => {
    if (hasNextStep) setCurrentStep(currentStep + 1);
    onNext?.(currentStep);
  }, [currentStep, hasNextStep, onNext]);

  const handleDone = () => onDone?.();

  const handleClose = () => onClose?.();

  useOnClickOutside(internalCoachMarkRef, () => {
    if (closeOnClickOutside) {
      handleClose();
    }
  });

  return (
    <FocusLock>
      <Bubble
        ref={setPopperElement}
        {...attributes.popper}
        barColor={barColor}
        bottomSheet={bottomSheet}
      >
        <BubbleArrow
          ref={setArrowElement}
          style={styles.arrow}
          bubblePlacement={placement}
          bottomSheet={bottomSheet}
        />
        <Flexbox container item direction="column" flex="1" gutter={5} ref={internalCoachMarkRef}>
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
                  {`${currentStep + 1} ${multiStepIndicatorText} ${steps.length}`}
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
          <Icon.Cross16 />
        </CloseButton>
      </Bubble>
      <SVG>
        <path d={path} />
      </SVG>
    </FocusLock>
  );
};
