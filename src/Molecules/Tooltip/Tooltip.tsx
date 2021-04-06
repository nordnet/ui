import React, { cloneElement, forwardRef, useState } from 'react';
import { TooltipComponent } from './Tooltip.types';
import { TooltipPopup } from '../../common/TooltipPopup';
import { mergeRefs, wrapEvent } from '../../common/utils';
import { useTooltip } from './hooks';

/**
 There are a few features that are important to understand.

 1. Tooltips don't show up until the user has rested on one, we don't
 want tooltips popping up as you move your mouse around the page.

 2. Once any tooltip becomes visible, other tooltips nearby should skip
 resting and display immediately.

 3. Tooltips stick around for a little bit after blur/mouseleave.
 */

export const Tooltip: TooltipComponent = forwardRef(
  (
    {
      children,
      label,
      ariaLabel,
      position = 'bottom',
      mode = 'hover',
      inModal,
      maxWidth = 50,
      openDelay = 100,
      closeDelay = 500,
      open: controlledOpen,
    },
    ref,
  ) => {
    const child = React.Children.only(children) as any;
    const [triggerElement, setTriggerElement] = useState(undefined);
    const {
      id,
      triggerElementRef,
      isOpen,
      handleMouseEnter,
      handleMouseMove,
      handleFocus,
      handleBlur,
      handleMouseLeave,
      handleKeyDown,
      handleMouseDown,
    } = useTooltip(mode, controlledOpen, openDelay, closeDelay);

    return (
      <>
        {cloneElement(child, {
          'aria-describedby': isOpen ? id : undefined,
          ref: mergeRefs([setTriggerElement, triggerElementRef]),
          onMouseEnter: wrapEvent(child.props.onMouseEnter, handleMouseEnter),
          onMouseMove: wrapEvent(child.props.onMouseMove, handleMouseMove),
          onFocus: wrapEvent(child.props.onFocus, handleFocus),
          onBlur: wrapEvent(child.props.onBlur, handleBlur),
          onMouseLeave: wrapEvent(child.props.onMouseLeave, handleMouseLeave),
          onKeyDown: wrapEvent(child.props.onKeyDown, handleKeyDown),
          onMouseDown: wrapEvent(child.props.onMouseDown, handleMouseDown),
        })}

        {isOpen && (
          <TooltipPopup
            ref={ref as any}
            triggerElement={triggerElement}
            ariaLabel={ariaLabel}
            label={label}
            position={position}
            inModal={inModal}
            maxWidth={maxWidth}
            pointerEvents={false}
          />
        )}
      </>
    );
  },
);

Tooltip.displayName = 'Tooltip';
