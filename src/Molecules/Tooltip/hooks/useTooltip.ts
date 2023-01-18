import React, { useCallback, useEffect, useRef, useState } from 'react';

import { Props as TooltipProps } from '../Tooltip.types';
import { State, store } from './useTooltip.store';
import { useOnClickOutside, useGeneratedId } from '../../../common/Hooks';

export const useTooltip = (
  mode: TooltipProps['mode'],
  controlledIsOpen: TooltipProps['isOpen'],
  openDelay?: number,
  closeDelay?: number,
  isBottomSheet?: boolean,
  popoverElement?: React.RefObject<HTMLSpanElement>,
) => {
  const id = useGeneratedId('nn-tooltip-');
  const [isOpen, setIsOpen] = useState(false);
  const triggerElementRef = useRef(null);

  useEffect(() => {
    return store.subscribe(() => {
      if (
        store.contextId === id &&
        (store.state === State.VISIBLE || store.state === State.LEAVING_VISIBLE)
      ) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    });
  }, [id]);

  const handleMouseEnter = useCallback(() => {
    if (mode !== 'hover') return;

    if (!store.isVisible()) {
      store.startBecomingVisibleTimeout(id, openDelay);
    } else if (store.state === State.LEAVING_VISIBLE) {
      store.setState(State.VISIBLE, id);
    }
  }, [id, mode, openDelay]);

  const handleMouseMove = useCallback(() => {
    if (mode !== 'hover') return;

    if (!store.isVisible()) {
      store.startBecomingVisibleTimeout(id, openDelay);
    } else if (store.state === State.LEAVING_VISIBLE) {
      store.setState(State.VISIBLE, id);
    }
  }, [id, mode, openDelay]);

  const handleMouseLeave = useCallback(() => {
    if (mode !== 'hover') return;
    store.clearBecomingVisibleTimeout();

    if (store.isVisible()) {
      store.startLeavingVisibleTimeout(closeDelay);
    }
  }, [mode, closeDelay]);

  const handleFocus = useCallback(() => {
    store.setState(State.VISIBLE, id);
  }, [id]);

  const handleBlur = useCallback(() => {
    if (store.isVisible()) {
      store.startLeavingVisibleTimeout(closeDelay);
    }
  }, [closeDelay]);

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (
      store.isVisible() &&
      (event.key === 'Escape' || event.key === 'Esc' || event.key === 'Enter')
    ) {
      store.setState(State.IDLE);
    }
  }, []);

  const handleMouseDown = useCallback(() => {
    if (store.isVisible()) {
      store.setState(State.IDLE);
    } else {
      store.setState(State.VISIBLE, id);
    }
  }, [id]);

  useOnClickOutside(triggerElementRef, () => {
    if (id === store.contextId) store.setState(State.IDLE);
  });

  useOnClickOutside(popoverElement || [], () => {
    if (popoverElement !== null && id === store.contextId && isBottomSheet && isOpen) {
      store.setState(State.IDLE);
    }
  });

  return {
    id,
    triggerElementRef,
    isOpen: typeof controlledIsOpen === 'undefined' ? isOpen : controlledIsOpen,
    handleMouseEnter,
    handleMouseMove,
    handleFocus,
    handleBlur,
    handleMouseLeave,
    handleKeyDown,
    handleMouseDown,
  };
};
