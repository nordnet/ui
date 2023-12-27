import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { Props } from './Trigger.types';
import { useSelect } from '..';
import { Icon } from '../../..';
import NormalizedElements from '../../../common/NormalizedElements';

const StyledChevronDown8 = styled(Icon.ChevronDown8)`
  margin-left: auto;
`;

const CleanNormalizedButton = React.forwardRef((props: any, ref: React.Ref<any>) => (
  <NormalizedElements.Button ref={ref} {...props} />
));

const StyledButton = styled(CleanNormalizedButton)<{
  $size: Props['size'];
  $hasError: Props['hasError'];
}>`
  cursor: pointer;
  color: ${({ theme, $hasValue }) =>
    $hasValue ? theme.colorTokens.neutral.text_default : theme.colorTokens.neutral.text_weak};
  box-sizing: border-box;
  padding: ${({ theme }) => theme.spacing.unit(2.5)}px ${({ theme }) => theme.spacing.unit(2)}px;
  border: 1px solid
    ${({ theme, $hasError }) =>
      $hasError
        ? theme.colorTokens.error.border_default
        : theme.colorTokens.neutral.border_default};
  border-radius: ${({ theme }) => theme.spacing.unit(1)}px;
  height: ${({ theme, $size }) =>
    $size === 's' ? theme.spacing.unit(8) : theme.spacing.unit(10)}px;
  width: 100%;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colorTokens.neutral.background_default};

  &:hover {
    border-color: ${({ theme }) => theme.colorTokens.neutral.border_hover};
  }

  &:focus-within,
  &:focus {
    border-color: ${({ theme }) => theme.colorTokens.action.border_default};
  }

  &[disabled] {
    color: ${({ theme }) => theme.colorTokens.neutral.text_disabled};
    background: ${({ theme }) => theme.colorTokens.neutral.background_disabled};
    border-color: ${({ theme }) => theme.colorTokens.neutral.border_disabled};
    cursor: not-allowed;

    ${StyledChevronDown8} {
      color: ${({ theme }) => theme.colorTokens.neutral.icon_disabled};
    }
  }
`;

export const Trigger = forwardRef<HTMLButtonElement, Props>((props: Props, ref) => {
  const { children, size, hasError } = props;
  const { getButtonProps, value } = useSelect();

  return (
    <StyledButton
      $size={size}
      $hasError={hasError}
      $hasValue={!!value}
      {...getButtonProps()}
      ref={ref}
    >
      {children}
    </StyledButton>
  );
});
