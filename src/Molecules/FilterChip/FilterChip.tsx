import React, { useState } from 'react';
import styled from 'styled-components';

import { Flexbox, Typography } from '../..';
import { isBoolean, isFunction } from '../../common/utils';
import { Props } from './FilterChip.types';

const StyledInput = styled.input`
  opacity: 0;
  pointer-events: none;
  position: absolute;
`;

const StyledDiv = styled.div.withConfig({
  shouldForwardProp: (prop) => !['disabled', 'selected', 'hasLabel'].includes(prop),
})<{
  disabled: boolean;
  selected: boolean;
  hasLabel: boolean;
}>`
  border-radius: 50%;
  box-sizing: border-box;
  display: inline-block;

  background: ${(p) => p.theme.color.quickFilterBackground};
  color: ${(p) => p.theme.color.quickFilterText};
  cursor: ${(p) => (p.disabled ? 'not-allowed' : 'pointer')};
  padding: ${(p) => p.theme.spacing.unit(2)}px;
  height: ${(p) => p.theme.spacing.unit(8)}px;

  ${(p) => p.selected && `color: ${p.theme.color.quickFilterSelectedText}`};
  ${(p) => p.disabled && `color: ${p.theme.color.disabledText}`};

  ${(p) => p.selected && `background: ${p.theme.color.quickFilterSelectedBackground}`};
  ${(p) => p.disabled && `background: ${p.theme.color.disabledBackground}`};

  ${({ theme }) => theme.media.greaterThan(theme.breakpoints.md)} {
    ${(p) => p.hasLabel && `padding: 1px ${p.theme.spacing.unit(3)}px`};
    ${(p) => p.hasLabel && `height: ${p.theme.spacing.unit(6)}px`};
  }
  ${({ theme }) => theme.media.lessThan(theme.breakpoints.md)} {
    ${(p) => p.hasLabel && `padding: 5px ${p.theme.spacing.unit(3)}px`};
  }
  ${(p) => p.hasLabel && `border-radius: ${p.theme.spacing.unit(4)}px`};

  &:hover {
    ${(p) => !p.disabled && `color: ${p.theme.color.quickFilterSelectedText}`};
  }
`;

const StyledLabel = styled.label<{
  selected: boolean;
}>`
  cursor: inherit;
  &:focus-within {
    ${StyledDiv} {
      outline: 1px solid ${(p) => p.theme.color.quickFilterFocusOutline};
      background: ${(p) => p.theme.color.quickFilterBackground};
      color: ${(p) => p.theme.color.quickFilterText};

      ${(p) =>
        p.selected &&
        `outline: 1px solid ${p.theme.color.quickFilterFocusSelectedOutline};
      background: ${p.theme.color.quickFilterSelectedBackground};
      color: ${p.theme.color.quickFilterSelectedText};`};
    }
  }
`;

const StyledFlexbox = styled(Flexbox)`
  & > * {
    color: inherit;
  }
`;

const StyledFlexboxItem = styled(Flexbox)`
  padding-top: ${(p) =>
    p.theme.media.greaterThan(p.theme.breakpoints.md) ? '1px !important' : ''};
`;

export const FilterChip: React.FC<Props> = ({
  label,
  onChange = () => {},
  value = '',
  icon = null,
  disabled = false,
  selected: controlledSelected,
  selectedInitially = false,
  className,
}) => {
  const [selectedInternal, setSelectedInternal] = useState(selectedInitially);
  const isControlled = isBoolean(controlledSelected);
  const selected = Boolean(isControlled ? controlledSelected : selectedInternal);
  const hasLabel = Boolean(label);
  const hasIcon = Boolean(icon);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (isFunction(onChange)) onChange(event);
    if (!isControlled) setSelectedInternal(event?.target?.checked);
  };

  return (
    <StyledLabel selected={selected}>
      <StyledDiv className={className} disabled={disabled} selected={selected} hasLabel={hasLabel}>
        <StyledInput
          checked={selected}
          disabled={disabled}
          onChange={changeHandler}
          type="checkbox"
          value={value}
        />
        <Flexbox container direction="row" gutter={1} alignItems="center">
          {hasIcon && <StyledFlexbox item>{icon}</StyledFlexbox>}
          {hasLabel && (
            <StyledFlexboxItem item>
              <Typography color="inherit" type="secondary" weight="bold">
                {label}
              </Typography>
            </StyledFlexboxItem>
          )}
        </Flexbox>
      </StyledDiv>
    </StyledLabel>
  );
};
