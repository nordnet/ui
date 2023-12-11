import React from 'react';
import { Option } from '../MultiSelectList/MultiSelectList';
import { OptionGroup } from '../OptionGroup';

import { useSelectMachineFromContext } from '../context';
import { SYMBOL_ALL } from '../constants';

export const ListItem = ({ index }: { index: number }) => {
  const [state] = useSelectMachineFromContext();
  const { fullscreenOnMobile } = state.context;
  const isKeyboardNavigation = state.matches('interaction.enabled.active.navigation.keyboard');
  const option = state.context.visibleOptions[index];

  if (!option) {
    return null;
  }

  const selected =
    state.context.selectedItems.includes(option) ||
    state.context.selectedItems.some((x) => x.value === option.value);
  const focused = state.context.itemFocusIdx === index;
  const selectAll = option[SYMBOL_ALL];

  return option.options ? (
    <OptionGroup label={option.label} index={index} />
  ) : (
    <Option
      selected={selected}
      disabled={option.disabled}
      label={option.label}
      focused={focused}
      selectAll={selectAll}
      isKeyboardNavigation={isKeyboardNavigation}
      fullscreenOnMobile={fullscreenOnMobile}
      showFlag={option.showFlag}
      count={option.count}
      country={option.country}
    />
  );
};
