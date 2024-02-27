import React, { MutableRefObject, useImperativeHandle, useRef, useState } from 'react';
import { usePopper } from 'react-popper';
import { mergeRefs } from '../utils';
import { Portal } from '../..';
import { TooltipArrow } from './TooltipArrow';
import { PopperUpdate, Props } from './PopOver.types';
import { StyledSpan, StyledTooltipContent } from './PopOver.styles';
import { useMouseEvents } from './hooks/useMouseEvents';

const displayName = 'Tooltip Popup';
const components = {
  TooltipContent: StyledTooltipContent,
};

const PopOver = React.forwardRef<{ update: PopperUpdate | null }, Props>(
  (
    {
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
      invertedColors,
      ...htmlSpanProps
    },
    ref,
  ) => {
    const [popperElement, setPopperElement] = useState(null);
    const [arrowElement, setArrowElement] = useState(null);

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
      { name: 'offset', options: { offset }, enabled: !!offset },
      ...flipMods,
      {
        name: 'arrow',
        options: {
          element: arrowElement,
        },
      },
    ];

    const elementRef = useRef<MutableRefObject<HTMLElement>>();

    const popper = usePopper(triggerElement, popperElement, {
      modifiers,
      placement: position,
    });

    const { state, styles, attributes } = popper;
    const { placement } = state || {};

    // exposes update function from popper to consumers
    useImperativeHandle(
      ref,
      () => ({
        update: popper?.update,
      }),
      [popper],
    );

    if (positionCallback && placement) {
      positionCallback(placement as NonNullable<Props['position']>);
    }

    const backgroundColor =
      backgroundColorProp ||
      ((t) => (invertedColors ? t.color.bubbleBackgroundInverted : t.color.bubbleBackground));
    const borderColor =
      borderColorProp ||
      ((t) => (invertedColors ? t.color.bubbleBorderInverted : t.color.bubbleBorder));

    useMouseEvents(elementRef, pointerEvents, handleMouseEnter, handleMouseLeave);

    const content = (
      <StyledSpan
        className={className}
        id={id}
        ref={mergeRefs([setPopperElement, elementRef])}
        $inModal={inModal}
        style={styles.popper}
        $pointerEvents={pointerEvents}
        {...htmlSpanProps}
        {...attributes.popper}
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
          ariaLabel={ariaLabel}
          maxWidth={maxWidth}
          backgroundColor={backgroundColor}
          borderColor={borderColor}
          invertedColors={invertedColors}
        />
      </StyledSpan>
    );

    if (!customBoundary) {
      return <Portal>{content}</Portal>;
    }

    return content;
  },
) as React.ForwardRefExoticComponent<Props> & {
  components: typeof components;
};

PopOver.components = components;
PopOver.displayName = displayName;

export default PopOver;
