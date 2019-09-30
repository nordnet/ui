type UseKeyboardNavigationArgs = {
  itemsLength: number;
  onChange?: (n: number) => void;
  onEscape: () => void;
};

export const useKeyboardNavigation = ({
  itemsLength,
  onChange = (_: number) => null,
  onEscape = () => null,
}: UseKeyboardNavigationArgs) => {
  const itemsRefs: HTMLElement[] = [];
  const getActive = () =>
    Object.values(itemsRefs).findIndex(item => item === document.activeElement);

  const onKeyDown = (e: React.KeyboardEvent): void => {
    const active = getActive();
    // keyCode is deprecated so default to e.key
    const up = (e.key && e.key === 'ArrowUp') || e.keyCode === 38;
    const down = (e.key && e.key === 'ArrowDown') || e.keyCode === 40;
    const enter = (e.key && e.key === 'Enter') || e.keyCode === 13;
    const space = (e.key && e.key === 'Space') || e.keyCode === 32;
    const esc = (e.key && e.key === 'Escape') || e.keyCode === 27;

    if (esc) {
      e.preventDefault();
      onEscape();
      return;
    }

    if (enter || space) {
      e.preventDefault();
      itemsRefs[active].click();
      return;
    }
    if (up) {
      if (active === 0) {
        return;
      }
      const newSelected = active - 1;
      if (itemsRefs[newSelected]) itemsRefs[newSelected]!.focus();
      onChange(newSelected);
      return;
    }
    if (down) {
      if (active === itemsLength - 1) {
        return;
      }
      const newSelected = active + 1;
      if (itemsRefs[newSelected]) itemsRefs[newSelected].focus();
      onChange(newSelected);
    }
  };

  const setRef = (index: number) => <RefType extends HTMLElement>(ref: RefType | null) => {
    if (ref) itemsRefs[index] = ref;
  };

  return { setRef, onKeyDown, itemsRefs };
};
