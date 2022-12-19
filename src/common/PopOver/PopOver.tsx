import React, { MutableRefObject, useCallback, useRef, useState } from 'react';
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
  bottomSheet = false,
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
  const popper = usePopper(triggerElement, popperElement, {
    modifiers,
    placement: position,
  });

  const { state, styles, attributes } = popper;
  const { placement } = state || {};

  if (positionCallback && placement) {
    positionCallback(placement as NonNullable<Props['position']>);
  }

  const backgroundColor = backgroundColorProp || ((t) => t.color.bubbleBackground);
  const borderColor = borderColorProp || ((t) => t.color.bubbleBorder);

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
      <TooltipArrow
        ref={setArrowElement as any}
        position={state?.placement as any}
        style={styles.arrow}
        backgroundColor={backgroundColor}
        borderColor={borderColor}
      />
      <motion.div initial={bottomSheet ? { y: 100 } : false} exit={{ y: 100 }} animate={{ y: 0 }}>
        <StyledTooltipContent
          label={label}
          bottomSheet={bottomSheet}
          ariaLabel={ariaLabel}
          maxWidth={maxWidth}
          backgroundColor={backgroundColor}
          borderColor={borderColor}
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
