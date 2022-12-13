import React, { MutableRefObject, useCallback, useRef, useState } from 'react';
import { usePopper } from 'react-popper';
import { mergeRefs } from '../utils';
import { Portal, theme } from '../..';
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
  mobileBottomSheet = false,
  ...htmlSpanProps
}) => {
  const [popperElement, setPopperElement] = useState(null);
  const [arrowElement, setArrowElement] = useState(null);

  const overrideStyles = useCallback((args: any) => {
    const { state } = args;
    const isMobile = state.scrollParents.popper[1].width < theme.breakpoints.sm.size;
    const popperStyles = isMobile ? bottomSheetStyles : state.styles.popper;
    return {
      ...state,
      styles: {
        ...state.styles,
        popper: popperStyles,
        arrow: isMobile ? hideArrowStyles : state.styles.arrow,
      },
    };
  }, []);

  const modifiers = [
    {
      name: 'overrideMobileStyles',
      enabled: mobileBottomSheet,
      phase: 'write' as any,
      fn: overrideStyles,
    },
    { name: 'offset', options: { offset }, enabled: !!offset },
    {
      enabled: !!customBoundary,
      name: 'preventOverflow',
      options: { boundary: customBoundary },
    },
    {
      enabled: !!customBoundary,
      name: 'flip',
      options: { boundary: customBoundary },
    },
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
      $inModal={inModal}
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
      <StyledTooltipContent
        label={label}
        mobileBottomSheet={mobileBottomSheet}
        ariaLabel={ariaLabel}
        maxWidth={maxWidth}
        backgroundColor={backgroundColor}
        borderColor={borderColor}
      />
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
