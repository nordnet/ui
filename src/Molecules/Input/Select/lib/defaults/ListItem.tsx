import React from 'react';
import { useSelectMachineFromContext } from '../context';
import { Option } from '../SingleSelectList/SingleSelectList';
import { OptionGroup } from '../OptionGroup';

export const ListItem: React.FC<{
  index: number;
}> = ({ index }) => {
  const [state] = useSelectMachineFromContext();
  const { fullscreenOnMobile } = state.context;
  const isKeyboardNavigation = state.matches('interaction.enabled.active.navigation.keyboard');

  const option = state.context.visibleOptions[index];
  const focused = state.context.itemFocusIdx === index;

  const selected = option.options
    ? false
    : state.context.selectedItems.includes(option) ||
      state.context.selectedItems.some(
        (x) => x.value === option.value || x.options?.some((y: any) => y.value === option.value),
      );

  return option.options ? (
    <OptionGroup label={option.label} index={index} />
  ) : (
    <Option
      selected={selected}
      disabled={option.disabled}
      label={option.label}
      focused={focused}
      isKeyboardNavigation={isKeyboardNavigation}
      fullscreenOnMobile={fullscreenOnMobile}
    />
  );
};
