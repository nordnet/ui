/* eslint-disable react/require-default-props */
import React from 'react';
import useOption from '@mui/base/useOption';
import styled from 'styled-components';
import { Flexbox, Icon, Typography, units } from '../../..';
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
  padding: ${units(1)}px ${units(3)}px;
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

export function Option(props: Props) {
  const { children, className, disabled = false, label, value } = props;
  const { getRootProps, highlighted, selected } = useOption({
    value,
    disabled,
    label,
  });

  return (
    <Item {...getRootProps()} $highlighted={highlighted} className={className}>
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
        {selected && (
          <Flexbox item>
            <Icon.Check16 color={(t) => t.colorTokens.action.icon_default} />
          </Flexbox>
        )}
      </Flexbox>
    </Item>
  );
}
