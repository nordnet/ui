import React from 'react';
import styled, { css } from 'styled-components';
import { Box, Flag, Flexbox, Typography } from '../../../../..';
import { isNumber } from '../../../../../common/utils';

// Need to import it directly
// Otherwise causes circular deps problems
import { Checkbox } from '../../../Checkbox';

const FullHeightFlexbox = styled(Flexbox)`
  height: 100%;
`;

type OptionProps = {
  count?: number;
  country?: string;
  disabled?: boolean;
  focused?: boolean;
  fullscreenOnMobile?: boolean;
  isKeyboardNavigation?: boolean;
  label: React.ReactNode;
  selectAll?: boolean;
  selected?: boolean;
  showFlag?: boolean;
};

const hoverIfNotKeyboardNav = css<{ disabled?: boolean; isKeyboardNavigation?: boolean }>`
  ${(p) =>
    p.disabled || p.isKeyboardNavigation
      ? ''
      : `
&:hover {
  background: ${p.theme.color.inputHover};
  input + ${Checkbox.components.CheckmarkBox} {
    &::before {
      border: 1px solid ${p.theme.color.cta};
    }
  }
}
`}
`;

const StyledOption = styled.div<Partial<OptionProps>>`
  ${(p) =>
    !p.selectAll
      ? ''
      : `
border-bottom: 1px solid ${p.theme.color.divider};
box-sizing: border-box;
`}
  ${(p) =>
    !p.fullscreenOnMobile
      ? `  padding-right: ${p.theme.spacing.unit(3)}px;
  padding-left: ${p.theme.spacing.unit(3)}px;
	height: ${p.theme.spacing.unit(7)}px;`
      : `
			padding-right: ${p.theme.spacing.unit(1)}px;
  padding-left: ${p.theme.spacing.unit(1)}px;
	height: ${p.theme.spacing.unit(10)}px;
	border-bottom: 1px solid ${p.theme.color.divider};
`}

	white-space: nowrap;
  background: ${(p) => {
    if (p.focused && p.isKeyboardNavigation) return p.theme.color.inputBackground;
    return p.theme.color.selectOptionBackground;
  }};
  cursor: pointer;
  ${hoverIfNotKeyboardNav}
  ${(p) =>
    p.disabled
      ? `
        color: ${p.theme.color.disabledText};
        pointer-events: none;
      `
      : ``}
`;

const Checkbox16px = styled(Checkbox)`
  ${Checkbox.components.CheckmarkBox} {
    width: 16px;
    height: 16px;
  }
`;

const FlexboxWidth = styled(Flexbox)`
  /* FIXME: minus checkbox width and minus padding */
  flex: 1 1 100%;
  min-width: 0;
`;

const EllipsizingText = styled(Typography)`
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const Option = ({
  count,
  country,
  disabled,
  focused,
  fullscreenOnMobile,
  isKeyboardNavigation,
  label,
  selectAll,
  selected,
  showFlag,
}: OptionProps) => (
  <StyledOption
    selected={selected}
    disabled={disabled}
    selectAll={selectAll}
    focused={isKeyboardNavigation ? focused : false}
    isKeyboardNavigation={isKeyboardNavigation}
    fullscreenOnMobile={fullscreenOnMobile}
  >
    <FullHeightFlexbox container alignItems="center" gap={2}>
      <Flexbox item container alignItems="center" flex="0 0 auto" gap={2}>
        <Checkbox16px
          width="16px"
          name="example"
          label=""
          checked={selected}
          readOnly
          visuallyFocused={!disabled && isKeyboardNavigation ? focused : false}
        />
        {showFlag && (country ? <Flag size="m" country={country} /> : <Box p={1} />)}
      </Flexbox>
      <FlexboxWidth item container justifyContent="space-between" alignItems="center">
        <EllipsizingText
          type="secondary"
          color={disabled ? (t) => t.color.disabledText : (t) => t.color.text}
        >
          {label}
        </EllipsizingText>
        {isNumber(count) && (
          <Typography type="secondary" color={(t) => t.color.label}>
            {count}
          </Typography>
        )}
      </FlexboxWidth>
    </FullHeightFlexbox>
  </StyledOption>
);
