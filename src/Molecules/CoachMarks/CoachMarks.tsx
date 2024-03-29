import React, { useCallback, useEffect, useRef, useState } from 'react';
import { usePopper } from 'react-popper';
import { BottomSheet, Button, Flexbox, Icon, Portal, Typography, useMedia } from '../..';
import { Component } from './CoachMarks.types';
import { makeBackdropPath } from './utils';
import { useOnClickOutside, useWindowSize, useSafeLayoutEffect } from '../../common/Hooks';
import useScrollPosition from './hooks/useScrollPosition';
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
  StyledBubble,
} from './CoachMarks.styled';

export const CoachMarks: Component = ({
  barColor,
  bottomSheet = false,
  bottomSheetTitle,
  closeButton = false,
  closeOnClickOutside = true,
  closeText = 'Close',
  doneText = 'Done',
  feedbackWidgetMode = false,
  hideMultiStepIndicatorText = false,
  hidePreviousButton = false,
  multiStepIndicatorText = 'of',
  nextText: nextTextFromProps = 'Next',
  onClose,
  onDone,
  onNext,
  onPrev,
  overrideStep,
  prevText: prevTextFromProps = 'Previous',
  steps,
}) => {
  const [currentStep, setCurrentStep] = useState(overrideStep ?? 0);
  const [referenceElementRect, setReferenceElementRect] = useState<ClientRect | null>(null);
  const [bottomSheetOpen, setBottomSheetOpen] = useState(true);

  useEffect(() => {
    if (overrideStep && overrideStep !== currentStep) {
      setCurrentStep(overrideStep);
    }
  }, [overrideStep, currentStep]);

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
    prevText = prevTextFromProps,
    nextText = nextTextFromProps,
    nextDisabled = false,
    hideNextButton = false,
    hideDoneButton = false,
  } = steps[currentStep];

  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null);
  const [arrowElement, setArrowElement] = useState<HTMLElement | null>(null);
  const scrollPosition = useScrollPosition();
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
  const hasPrevStep = currentStep > 0 && !hidePreviousButton;
  const hasNextStep = currentStep + 1 < steps.length;
  const path = referenceElementRect
    ? makeBackdropPath(referenceElementRect, Number(highlightBoxPadding), isCircular, px, py)
    : undefined;
  const isMobile = useMedia((t) => t.media.lessThan(t.breakpoints.sm));
  const shouldShowBottomSheet = bottomSheet && !feedbackWidgetMode && isMobile;

  useSafeLayoutEffect(() => {
    if (referenceElement) {
      setReferenceElementRect(referenceElement.getBoundingClientRect());
    }
  }, [referenceElement, windowSize, scrollPosition]);

  const handleStepBackwards = useCallback(() => {
    if (hasPrevStep) {
      setCurrentStep(currentStep - 1);
    }

    if (onPrev) {
      onPrev(currentStep);
    }
  }, [currentStep, hasPrevStep, onPrev]);

  const handleStepForward = useCallback(() => {
    if (hasNextStep) {
      setCurrentStep(currentStep + 1);
    }

    if (onNext) {
      onNext(currentStep);
    }
  }, [currentStep, hasNextStep, onNext]);

  const handleDone = useCallback(() => {
    if (onDone) {
      onDone();
    }
  }, [onDone]);

  const handleClose = () => {
    if (shouldShowBottomSheet) {
      // This is to mitigate for the bottomSheet animation to close smoothly
      setBottomSheetOpen(false);
      setTimeout(() => {
        if (typeof onClose === 'function') {
          onClose();
        }
      }, 1000);
    } else if (typeof onClose === 'function') {
      onClose();
    }
  };

  useOnClickOutside(internalCoachMarkRef, () => {
    if (closeOnClickOutside) {
      handleClose();
    }
  });

  if (typeof isMobile === 'undefined' || isMobile === null) {
    return null;
  }

  const getContent = (
    <Flexbox container item direction="column" flex="1" gap={5} ref={internalCoachMarkRef}>
      <Flexbox container direction="column" gap={1}>
        {icon && <IconFlex item>{icon}</IconFlex>}
        {title && (
          <Flexbox item>
            <TitleWrapper $hasIcon={Boolean(icon) || closeButton}>
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
      <FooterFlex container item alignItems="baseline" gap={5}>
        {closeButton ? (
          <Flexbox item>
            <Button variant="neutral" color={(t) => t.color.link} onClick={onClose}>
              {closeText}
            </Button>
          </Flexbox>
        ) : (
          hasMultipleSteps &&
          !hideMultiStepIndicatorText && (
            <Flexbox item>
              <Typography type="secondary" color={(t) => t.color.bubbleSecondaryText}>
                {`${currentStep + 1} ${multiStepIndicatorText} ${steps.length}`}
              </Typography>
            </Flexbox>
          )
        )}
        <NavigationButtonsContainer container gap={1} $hasSingleButton={!hasPrevStep}>
          {hasPrevStep && (
            <Flexbox item flex="1 1 50%">
              <Button variant="secondary" onClick={handleStepBackwards} fullWidth>
                {prevText}
              </Button>
            </Flexbox>
          )}
          <Flexbox item flex="1 1 50%">
            {hasNextStep && !hideNextButton ? (
              <Button
                variant="primary"
                onClick={handleStepForward}
                fullWidth
                disabled={nextDisabled}
              >
                {nextText}
              </Button>
            ) : (
              !hideDoneButton && (
                <Button variant="primary" onClick={handleDone} fullWidth>
                  {doneText}
                </Button>
              )
            )}
          </Flexbox>
        </NavigationButtonsContainer>
      </FooterFlex>
    </Flexbox>
  );

  if (shouldShowBottomSheet) {
    return (
      <BottomSheet
        closeOnClickOutside
        onClose={handleClose}
        title={bottomSheetTitle}
        open={bottomSheetOpen}
      >
        {body || getContent}
      </BottomSheet>
    );
  }

  return (
    <Portal>
      <StyledBubble
        ref={setPopperElement}
        style={feedbackWidgetMode ? undefined : styles.popper}
        {...attributes.popper}
        barColor={barColor}
        feedbackWidgetMode={feedbackWidgetMode}
      >
        {!feedbackWidgetMode && (
          <BubbleArrow
            ref={setArrowElement}
            style={styles.arrow}
            bubblePlacement={placement}
            bottomSheet={bottomSheet}
            noBorder={!!barColor}
          />
        )}
        {body || getContent}
        {!closeButton && (
          <CloseButton variant="secondary" onClick={handleClose}>
            <Icon.Cross16 />
          </CloseButton>
        )}
      </StyledBubble>
      {path && (
        <SVG>
          <path d={path} />
        </SVG>
      )}
    </Portal>
  );
};
