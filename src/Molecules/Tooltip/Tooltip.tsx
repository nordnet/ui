import React, { cloneElement, FC, ReactElement, useState } from 'react';
import { Props } from './Tooltip.types';
import { PopOver } from '../../common/PopOver';
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

export const Tooltip: FC<Props> = (props) => {
  const {
    className,
    children,
    label,
    ariaLabel,
    position = 'bottom',
    mode = 'hover',
    inModal,
    maxWidth = 50,
    offset,
    openDelay = 100,
    closeDelay = 500,
    isOpen: controlledIsOpen,
    wrapChild,
    pointerEvents = false,
    pointerArrow = true,
    customBoundary,
  } = props;
  const child = React.Children.only(children) as ReactElement;

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
  } = useTooltip(mode, controlledIsOpen, openDelay, closeDelay);

  return (
    <>
      {cloneElement(wrapChild ? <span>{child}</span> : child, {
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
        <PopOver
          className={className}
          id={id}
          triggerElement={triggerElement}
          ariaLabel={ariaLabel}
          label={label}
          position={position}
          inModal={inModal}
          maxWidth={maxWidth}
          offset={offset}
          pointerEvents={pointerEvents}
          pointerArrow={pointerArrow}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
          customBoundary={customBoundary}
        />
      )}
    </>
  );
};

Tooltip.displayName = 'Tooltip';
