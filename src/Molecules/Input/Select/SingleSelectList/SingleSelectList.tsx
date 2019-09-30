import * as React from 'react';
import styled, { css } from 'styled-components';
import { Flexbox, Typography, Icon, List as UIList, Box } from '../../../..';

const TRIANGLE_SIZE = 10;
type ListProps = {
  /**
   * @default 'right'
   */
  position?: 'left' | 'center' | 'right';
};
const leftAndRightCss = css<Pick<ListProps, 'position'>>`
  ${p => {
    switch (p.position) {
      case 'left':
        return 'left: 20px;';
      case 'center':
        return 'left: 50%;';
      case 'right':
      default:
        return 'right: 20px;';
    }
  }}
`;

const commonTriangleCss = css<any>`
  position: absolute;
  margin-left: -${TRIANGLE_SIZE}px;
  width: 0;
  height: 0;
  content: '';
  speak: none;
  border-left: ${TRIANGLE_SIZE}px solid transparent;
  border-right: ${TRIANGLE_SIZE}px solid transparent;
`;

const triangleCss = css`
  &:before {
    ${leftAndRightCss}
    ${commonTriangleCss}
  top: -${TRIANGLE_SIZE}px;
    border-bottom: ${TRIANGLE_SIZE}px solid;
    border-bottom-color: #ebebe8;
  }
  &:after {
    ${leftAndRightCss}
    ${commonTriangleCss}
  top: -${TRIANGLE_SIZE - 2}px;
    border-bottom: ${TRIANGLE_SIZE}px solid;
    border-bottom-color: #ffffff;
  }
`;

const StyledList = styled(UIList)<any>`
  display: flex;
  flex-direction: column;
  list-style: none;
  position: relative;
  top: 10px;
  border: 1px solid #ebebe8;
  background-color: #ffffff;
  padding-top: ${p => p.theme.spacing.unit(2)}px;
  padding-bottom: ${p => p.theme.spacing.unit(2)}px;
  box-shadow: 0 2px 4px 0 ${p => p.theme.color.shadowCard};
  ${triangleCss}
`;

export const OptionList: React.FC<ListProps> = ({ children, position }) => (
  <StyledList role="listbox" position={position}>
    {children}
  </StyledList>
);

const FullHeightFlexbox = styled(Flexbox)`
  height: 100%;
`;

type OptionProps = { selected?: boolean; disabled?: boolean; label: React.ReactNode; value: any };
const StyledOption = styled.div<Pick<OptionProps, 'selected' | 'disabled'>>`
  padding-right: ${p => p.theme.spacing.unit(2)}px;
  padding-left: ${p => p.theme.spacing.unit(2)}px;
  color: ${p => (p.selected ? p.theme.color.cta : p.theme.color.inputBorderHover)};
  height: ${p => p.theme.spacing.unit(6)}px;
  outline: none;

  white-space: nowrap;
  background: ${p =>
    p.disabled ? p.theme.color.disabledBackground : p.theme.color.selectOptionBackground};
  cursor: pointer;
  ${p =>
    p.disabled
      ? `
        color: ${p.theme.color.disabledText}
        pointer-events: none;
      `
      : ` &:hover {
          background: ${p.theme.color.background};
        }

        &:focus {
          background: ${p.theme.color.background};
        }

       
      `}
`;

export const Option = React.forwardRef<HTMLDivElement, OptionProps>(
  ({ label, disabled, selected }, ref) => (
    <StyledOption ref={ref} selected={selected} disabled={disabled} tabIndex={disabled ? -1 : 0}>
      <Typography type="tertiary" color="inherit">
        <FullHeightFlexbox justifyContent="space-between" container>
          <Flexbox item container alignItems="center">
            {label}
          </Flexbox>
          {selected && (
            <Flexbox item container alignItems="center">
              <Box pl={2}>
                <Icon.CheckMark color={t => t.color.cta} />
              </Box>
            </Flexbox>
          )}
        </FullHeightFlexbox>
      </Typography>
    </StyledOption>
  ),
);
