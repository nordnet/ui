import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import scrollIntoView from 'scroll-into-view-if-needed';
import { ContextType } from './context';
import { Context } from '../machine';

export const useAutofocus = (ref: React.RefObject<any>, enable?: boolean) => {
  useEffect(() => {
    if (enable && ref && ref.current) ref.current.focus();
  }, [enable, ref]);
};

export const useFocusFromMachine = (
  machineState: ContextType[0],
  buttonRef: React.RefObject<HTMLButtonElement>,
  itemRefs: Array<HTMLElement>,
  searchRef: React.RefObject<HTMLInputElement>,
  preventScroll?: boolean,
) => {
  const isInButtonFocusState = machineState.matches('interaction.enabled.active.focus.button');
  useEffect(() => {
    if (
      machineState.matches('interaction.enabled.active.focus.listItem') &&
      machineState.matches({ open: 'on' })
    ) {
      if (searchRef.current) {
        searchRef.current.focus({
          preventScroll: true,
        });
        if (
          machineState.context.itemFocusIdx !== null &&
          itemRefs[machineState.context.itemFocusIdx] &&
          itemRefs[machineState.context.itemFocusIdx].scrollIntoView &&
          !preventScroll
        ) {
          scrollIntoView(itemRefs[machineState.context.itemFocusIdx!], {
            behavior: 'auto',
            block: 'center',
            inline: 'center',
          });
        }
      }
    } else if (isInButtonFocusState) {
      if (buttonRef.current)
        buttonRef.current.focus({
          preventScroll: true,
        });
    }
  }, [machineState.context.itemFocusIdx, isInButtonFocusState]); // eslint-disable-line react-hooks/exhaustive-deps
};

export const useIsFirstRender = () => {
  const isFirstRender = useRef(true);
  useEffect(() => {
    isFirstRender.current = false;
  }, []);
  return isFirstRender.current;
};

/**
 *
 * Batching actions together using setTimeout
 * Storing all actions in array
 * Then pass array to send function
 * Which in turn, will batch them inside machine
 */
export const useBatchedSend = (send: Function) => {
  const accumulatedArrowActions = useRef([] as any[]);
  const currentTimeoutId = useRef<NodeJS.Timeout | null>(null);

  return useCallback(
    (actionTypes: any[]) => {
      accumulatedArrowActions.current.push(...actionTypes);
      // If previous send wasn't invoked, clear timeout and try one more time
      if (currentTimeoutId.current) clearTimeout(currentTimeoutId.current);
      // Deferring send to next tick
      currentTimeoutId.current = setTimeout(() => {
        currentTimeoutId.current = null;
        // Sending array of actions enables batching
        const actions = [...accumulatedArrowActions.current];
        accumulatedArrowActions.current = [];
        send(actions);
      }, 0);
    },
    [send],
  );
};

export const useSyncPropsWithMachine = (propsToSync: Partial<Context>, deps: Array<any>) => {
  const send = deps[0];
  useEffect(() => {
    send({
      type: 'SYNC',
      payload: propsToSync,
    });
  }, deps); // eslint-disable-line react-hooks/exhaustive-deps
};

export const useMultiRef = () => {
  const itemRefs = useMemo(() => [] as Array<HTMLElement>, []);
  const setItemRef = useCallback(
    (index: number) => (ref: HTMLElement) => {
      if (ref) itemRefs[index] = ref;
    },
    [],
  );
  return [itemRefs, setItemRef] as [typeof itemRefs, typeof setItemRef];
};

export const useDelegateKeyDownToMachine = (send: Function, selectOnSpace: boolean) => {
  const sendBatched = useBatchedSend(send);
  const SPACE = ' ';
  const keyActionMap = new Map([
    ['ArrowDown', 'FOCUS_NEXT_ITEM'],
    ['ArrowUp', 'FOCUS_PREV_ITEM'],
    // TODO: investigate why CLOSE makes test fail
    ['Escape', 'TOGGLE'],
    ['Enter', 'SELECT_FOCUSED_ITEM'],
    ['Tab', ''],
  ]);

  if (selectOnSpace) {
    keyActionMap.set(SPACE, 'SELECT_FOCUSED_ITEM');
  }

  return (e: React.KeyboardEvent) => {
    if (keyActionMap.has(e.key)) {
      sendBatched(['KEY_PRESS', keyActionMap.get(e.key)]);
      e.preventDefault();
      return false;
    }
    sendBatched(['KEY_PRESS']);
    return undefined;
  };
};

export const usePropagateChangesThroughOnChange = (
  machineState: ContextType[0],
  send: ContextType[1],
  onChange?: Function,
  isFirstRender?: boolean,
) => {
  const isChangeUncommitted =
    machineState.matches('selection.controlled.changeUncommitted') ||
    machineState.matches('selection.uncontrolled.changeUncommitted');

  useEffect(() => {
    // Don't want to grab first onChange
    // Why is it happening though 🤔
    if (isFirstRender) return;
    if (isChangeUncommitted) {
      const changes = machineState.context.uncommittedSelectedItems;

      const action = changes.find((x) => typeof x.onSelect === 'function');
      if (action) {
        action.onSelect();
        send(['CHANGE_COMMIT_ABORT', 'CLOSE']);
        // Action shouldn't trigger the real onChange
        return;
      }

      if (onChange) onChange(changes);

      send('CHANGE_COMMIT');
    }
  }, [isChangeUncommitted, onChange]);
};

export const useOnBlurAndOnFocus = (
  machineState: ContextType[0],
  send: ContextType[1],
  onBlur: Function | undefined,
  onFocus: Function | undefined,
  formFieldRef: React.RefObject<any>,
  isFirstRender: boolean,
  selectRef: React.RefObject<any>,
  listRef: React.RefObject<any>,
) => {
  const isPassive = machineState.matches('interaction.enabled.idle');
  useEffect(() => {
    // Using the real select ref here
    // for the name and id to be on it
    if (!isFirstRender && isPassive && onBlur) onBlur({ target: selectRef.current });
  }, [isPassive]); // eslint-disable-line react-hooks/exhaustive-deps

  const isActive = machineState.matches('interaction.enabled.active');
  useEffect(() => {
    // Using the real select ref here
    // for the name and id to be on it
    if (isActive && onFocus) onFocus({ target: selectRef.current });
  }, [isActive]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleFocus = useCallback(
    (_) => {
      send('FOCUS');
    },
    [send],
  );

  const handleBlur = useCallback(
    (_) => {
      setTimeout(() => {
        // Need setTimeout for activeElement to be correct
        // Using formFieldRef to check if the blur event's target
        // is within the whole component subtree
        if (
          formFieldRef.current &&
          !formFieldRef.current.contains(document.activeElement) &&
          // needed for when list is rendered inside of Portal
          !listRef.current?.contains(document.activeElement)
        ) {
          send('BLUR');
        }
      }, 1);
    },
    [send, formFieldRef, listRef],
  );

  return { handleFocus, handleBlur };
};
