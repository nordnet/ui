import React, { cloneElement, FC, ReactElement, useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import { Props } from './Tooltip.types';
import { BottomSheet, useMedia } from '../..';
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
    customBoundary,
    pointerArrow = true,
    bottomSheetQuery,
    bottomSheetHeight = 200,
    bottomSheetTitle,
    onBottomSheetClose,
    invertedColors,
  } = props;
  const child = React.Children.only(children) as ReactElement;

  const [triggerElement, setTriggerElement] = useState(undefined);
  const [bottomSheetOpen, setBottomSheetOpen] = useState(false);

  const shouldShowBottomSheet = useMedia((t) => bottomSheetQuery?.(t) || '__false') || false;

  const params = {
    mode,
    controlledIsOpen,
    openDelay,
    closeDelay,
  };

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
  } = useTooltip(params.mode, params.controlledIsOpen, params.openDelay, params.closeDelay);

  const handleOpenBottomSheet = (e: React.MouseEvent) => {
    if (controlledIsOpen === undefined) {
      setBottomSheetOpen(true);
      e.stopPropagation();
    }
  };

  const handleCloseBottomSheet = () => {
    if (typeof onBottomSheetClose === 'function') {
      onBottomSheetClose();
    }
    setBottomSheetOpen(false);
  };

  if (shouldShowBottomSheet) {
    return (
      <>
        {cloneElement(wrapChild ? <span>{child}</span> : child, {
          'aria-describedby': isOpen ? id : undefined,
          ref: mergeRefs([setTriggerElement, triggerElementRef]),
          onMouseDown: wrapEvent(child.props.onMouseDown, handleOpenBottomSheet),
        })}
        <BottomSheet
          closeOnClickOutside
          height={bottomSheetHeight}
          invertedColors={invertedColors}
          onClose={handleCloseBottomSheet}
          open={controlledIsOpen || bottomSheetOpen}
          title={bottomSheetTitle}
        >
          {label}
        </BottomSheet>
      </>
    );
  }

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
      <AnimatePresence>
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
            pointerArrow={pointerArrow}
            pointerEvents={pointerEvents}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            customBoundary={customBoundary}
            invertedColors={invertedColors}
          />
        )}
      </AnimatePresence>
    </>
  );
};

Tooltip.displayName = 'Tooltip';
