import React, { cloneElement, FC, ReactElement, useState } from 'react';
import styled from 'styled-components';
import { Props } from './Tooltip.types';
import { useMedia } from '../..';
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
  position: fixed;
  inset: 0 0 0 0;
  width: 100vw;
  height: 100vh;
  background-color: ${p => p.theme.color.modalBackdrop};
  z-index: ${({ theme }) => theme.zIndex.modal};
`;

export const Tooltip: FC<Props> = props => {
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
    invertedColors,
  } = props;
  const child = React.Children.only(children) as ReactElement;

  const [triggerElement, setTriggerElement] = useState(undefined);

  const [popoverElement, setPopoverElement] = useState(undefined);

  const bottomSheet = useMedia(t => bottomSheetQuery?.(t) || '__false') || false;

  const params = {
    mode: bottomSheet ? 'click' : mode,
    controlledIsOpen,
    openDelay,
    closeDelay,
    isBottomSheet: bottomSheet,
    popoverElement,
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
  } = useTooltip(
    params.mode,
    params.controlledIsOpen,
    params.openDelay,
    params.closeDelay,
    params.isBottomSheet,
    params.popoverElement,
  );

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
      {isOpen && bottomSheet && <Backdrop />}
      {isOpen && (
        <PopOver
          setPopoverElement={bottomSheet ? setPopoverElement : undefined}
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
          pointerEvents={bottomSheet || pointerEvents}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
          customBoundary={customBoundary}
          bottomSheet={bottomSheet}
          invertedColors={invertedColors}
        />
      )}
    </>
  );
};

Tooltip.displayName = 'Tooltip';
