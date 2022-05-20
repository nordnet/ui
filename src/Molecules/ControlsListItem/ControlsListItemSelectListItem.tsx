import React from 'react';
import styled from 'styled-components';
import { Flexbox, Input, Typography, Icon, Button, Box } from '../..';

export const StyledButton = styled(Button)`
  background: ${(t) => t.theme.color.background};
`;

export const StyledBox = styled(Box)<{
  disabled?: boolean;
  focused: boolean;
  isKeyboardNavigation: boolean;
}>`
  cursor: ${(p) => (p.disabled ? 'not-allowed' : 'pointer')};
  color: ${(p) => (p.disabled ? p.theme.color.disabledText : 'inherit')};
  background: ${(p) => (p.focused ? p.theme.color.background : p.theme.color.card)};
  &:hover {
    background: ${(p) =>
      !p.isKeyboardNavigation && !p.disabled ? p.theme.color.background : 'inherit'};
  }
`;

const StyledFlexbox = styled(Flexbox)`
  padding-left: ${(p) => p.theme.spacing.unit(2)}px;
  width: 100%;
`;

const ControlsListItemSelectListItem = ({
  index,
  selectedItem,
}: {
  index: number;
  selectedItem: string | React.ReactElement;
}) => {
  const [state] = Input.Select.useSelectMachineFromContext();
  const option = state.context.visibleOptions[index];
  const isKeyboardNavigation = state.matches('interaction.enabled.active.navigation.keyboard');
  const { disabled } = state.context.options[index];
  const focused = isKeyboardNavigation && !disabled && state.context.itemFocusIdx === index;

  return (
    <StyledButton variant="neutral" fullWidth as={StyledBox}>
      <StyledBox
        px={3}
        py={1}
        focused={focused}
        disabled={disabled}
        isKeyboardNavigation={isKeyboardNavigation}
      >
        <Flexbox container alignItems="center">
          <StyledFlexbox item container justifyContent="space-between" alignItems="center">
            <Flexbox item>
              <Typography
                type="secondary"
                color={(t) =>
                  option.value === selectedItem?.[0]?.value
                    ? t.color.quickFilterSelectedText
                    : t.color.quickFilterText
                }
              >
                {option.label}
              </Typography>
            </Flexbox>
            <Flexbox item>
              {option.value === selectedItem?.[0]?.value && (
                <Icon.Check16 color={(t) => t.color.quickFilterSelectedText} />
              )}
            </Flexbox>
          </StyledFlexbox>
        </Flexbox>
      </StyledBox>
    </StyledButton>
  );
};

export default ControlsListItemSelectListItem;
