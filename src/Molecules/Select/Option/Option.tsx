/* eslint-disable react/require-default-props */
import React from 'react';
import { useOption } from '@mui/base/useOption';
import styled from 'styled-components';
import { Flexbox, Icon, Typography } from '../../..';
import { Props } from './Option.types';
import { ellipsis } from '../Select.styles';

const StyledTypography = styled(Typography)`
  display: inline-block;
  white-space: nowrap;
  width: 100%;
  ${ellipsis}
`;

const StyledFlex = styled(Flexbox)`
  min-width: 0;
`;

const Item = styled.li<{ $highlighted: boolean }>`
  padding: ${(p) =>
    `${p.theme.spacing.unit(1)}px
    ${p.theme.spacing.unit(3)}px
    `};
  color: ${({ theme }) => theme.colorTokens.neutral.text_default};

  ${({ $highlighted, theme }) =>
    $highlighted ? `background-color: ${theme.colorTokens.neutral.background_hover};` : ''}

  &:hover {
    background-color: ${({ theme }) => theme.colorTokens.neutral.background_hover};
  }

  &[aria-selected='true'] {
    color: ${({ theme }) => theme.colorTokens.action.text_default};
  }
`;

const CheckmarkBox = styled.div<{ $selected?: boolean }>`
  width: ${(p) => p.theme.spacing.unit(4)}px;
  height: ${(p) => p.theme.spacing.unit(4)}px;
  border: 1px solid
    ${({ $selected, theme }) =>
      $selected
        ? theme.colorTokens.action.background_default
        : theme.colorTokens.neutral.border_default};
  background: ${({ $selected, theme }) =>
    $selected ? theme.colorTokens.action.background_default : 'transparent'};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export function Option(props: Props) {
  const { children, className, disabled = false, label, value, multiple, ...rest } = props;
  const { getRootProps, highlighted, selected } = useOption({
    value,
    disabled,
    label,
  });

  return (
    <Item
      {...getRootProps()}
      $highlighted={highlighted}
      className={className}
      data-testid={value}
      {...rest}
    >
      <Flexbox
        container
        alignItems="center"
        alignContent="center"
        gap={2}
        justifyContent="space-between"
      >
        <StyledFlex item>
          {children || <StyledTypography type="secondary">{label}</StyledTypography>}
        </StyledFlex>
        <Flexbox item>
          {multiple ? (
            <CheckmarkBox $selected={selected}>
              {selected && <Icon.Check12 color={(t) => t.colorTokens.neutral.icon_strong} />}
            </CheckmarkBox>
          ) : (
            selected && <Icon.CheckCircleFill16 color={(t) => t.colorTokens.action.icon_default} />
          )}
        </Flexbox>
      </Flexbox>
    </Item>
  );
}
