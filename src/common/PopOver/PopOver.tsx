import React, { MutableRefObject, useCallback, useEffect, useRef, useState } from 'react';
import { usePopper } from 'react-popper';
import { motion } from 'framer-motion';
import { mergeRefs } from '../utils';
import { Portal } from '../..';
import { TooltipArrow } from './TooltipArrow';
import { Props } from './PopOver.types';
import {
  StyledSpan,
  StyledTooltipContent,
  bottomSheetStyles,
  hideArrowStyles,
} from './PopOver.styles';
import { useMouseEvents } from './hooks/useMouseEvents';

const displayName = 'Tooltip Popup';
const components = {
  TooltipContent: StyledTooltipContent,
};

const PopOver: React.FC<Props> & {
  components: typeof components;
} = ({
  className,
  id,
  label,
  ariaLabel,
  position,
  positionCallback,
  inModal,
  maxWidth,
  triggerElement,
  pointerEvents = true,
  offset,
  backgroundColor: backgroundColorProp,
  borderColor: borderColorProp,
  handleMouseEnter,
  handleMouseLeave,
  customBoundary,
  pointerArrow = true,
  bottomSheet = false,
  bottomSheetTitle,
  onBottomSheetClose = () => {},
  invertedColors,
  setPopoverElement,
  ...htmlSpanProps
}) => {
  const [popperElement, setPopperElement] = useState(null);
  const [arrowElement, setArrowElement] = useState(null);

  const overrideStyles = useCallback(
    (args: any) => {
      const { state } = args;

      const popperStyles = bottomSheet ? bottomSheetStyles : state.styles.popper;
      return {
        ...state,
        styles: {
          ...state.styles,
          popper: popperStyles,
          arrow: bottomSheet ? hideArrowStyles : state.styles.arrow,
        },
      };
    },
    [bottomSheet],
  );

  const flipMods = customBoundary
    ? [
        {
          name: 'preventOverflow',
          options: { boundary: customBoundary },
        },
        {
          name: 'flip',
          options: { boundary: customBoundary },
        },
      ]
    : [];

  const modifiers = [
    {
      name: 'overrideMobileStyles',
      enabled: bottomSheet,
      phase: 'write' as any,
      fn: overrideStyles,
    },
    { name: 'offset', options: { offset }, enabled: !!offset },
    ...flipMods,
    {
      name: 'arrow',
      options: {
        element: arrowElement,
      },
    },
  ];

  const ref = useRef() as MutableRefObject<HTMLElement>;

  useEffect(() => {
    if (setPopoverElement && ref && bottomSheet && pointerEvents) {
      setPopoverElement(ref);
    }
  }, [setPopoverElement, ref, bottomSheet, pointerEvents]);

  const popper = usePopper(triggerElement, popperElement, {
    modifiers,
    placement: position,
  });

  const { state, styles, attributes } = popper;
  const { placement } = state || {};

  if (positionCallback && placement) {
    positionCallback(placement as NonNullable<Props['position']>);
  }

  const backgroundColor =
    backgroundColorProp ||
    ((t) => (invertedColors ? t.color.bubbleBackgroundInverted : t.color.bubbleBackground));
  const borderColor =
    borderColorProp ||
    ((t) => (invertedColors ? t.color.bubbleBorderInverted : t.color.bubbleBorder));

  useMouseEvents(ref, pointerEvents, handleMouseEnter, handleMouseLeave);

  const content = (
    <StyledSpan
      className={className}
      id={id}
      ref={mergeRefs([setPopperElement, ref])}
      $inModal={inModal || bottomSheet}
      style={styles.popper}
      $pointerEvents={pointerEvents}
      {...htmlSpanProps}
      {...attributes.popper}
    >
      <motion.div
        key="bottomsheet"
        initial={bottomSheet ? { y: 100, opacity: 0 } : { opacity: 0 }}
        exit={bottomSheet ? { y: 100, opacity: 0 } : { opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { duration: 0.2 } }}
        transition={{ type: 'ease', duration: 0.2 }}
      >
        {pointerArrow && (
          <TooltipArrow
            ref={setArrowElement as any}
            position={state?.placement as any}
            style={styles.arrow}
            backgroundColor={backgroundColor}
            borderColor={borderColor}
          />
        )}

        <StyledTooltipContent
          label={label}
          bottomSheet={bottomSheet}
          bottomSheetTitle={bottomSheetTitle}
          onBottomSheetClose={onBottomSheetClose}
          ariaLabel={ariaLabel}
          maxWidth={maxWidth}
          backgroundColor={backgroundColor}
          borderColor={borderColor}
          invertedColors={invertedColors}
        />
      </motion.div>
    </StyledSpan>
  );

  if (!customBoundary) {
    return <Portal>{content}</Portal>;
  }
  return content;
};

PopOver.components = components;
PopOver.displayName = displayName;

export default PopOver;
