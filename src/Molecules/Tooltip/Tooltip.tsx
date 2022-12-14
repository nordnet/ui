import React, { cloneElement, FC, ReactElement, useState } from 'react';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import { NumberOrObjectWithNumber, Props } from './Tooltip.types';
import { theme, useMedia } from '../..';
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

const Backdrop = styled.div`
  position: absolute;
  inset: 0 0 0 0;
  background: black;
  width: 100vw;
  height: 100vh;
`;

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
    bottomSheetBreakpoint,
  } = props;
  const child = React.Children.only(children) as ReactElement;

  let breakpoint: NumberOrObjectWithNumber = 0;
  if (typeof bottomSheetBreakpoint === 'function') {
    breakpoint = bottomSheetBreakpoint(theme);
  }
  const [triggerElement, setTriggerElement] = useState(undefined);
  const bottomSheet = useMedia((t) => t.media.lessThan(breakpoint)) || false;

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
    handleClick,
  } = useTooltip(bottomSheet ? 'click' : mode, controlledIsOpen, openDelay, closeDelay);

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
        onMouseDown: wrapEvent(child.props.onMouseDown, handleClick),
      })}
      <AnimatePresence>
        {isOpen && bottomSheet && (
          <motion.div initial={{ opacity: 0 }} exit={{ opacity: 0 }} animate={{ opacity: 0.1 }}>
            <Backdrop />
          </motion.div>
        )}
      </AnimatePresence>
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
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
          customBoundary={customBoundary}
          bottomSheet={bottomSheet}
        />
      )}
    </>
  );
};

Tooltip.displayName = 'Tooltip';
