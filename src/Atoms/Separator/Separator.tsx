import React from 'react';
import styled from 'styled-components';
import { SeparatorComponent, StyledProps } from './Separator.types';

const StyledSeparator = styled.div<StyledProps>`
  width: ${(p) => (p.vertical ? '1px' : '100%')};
  height: ${(p) => (p.vertical ? '100%' : '1px')};
  background-color: ${(p) => (p.colorFunction ? p.colorFunction(p.theme) : p.theme.color.divider)};
`;

const FullWidthSeparator = styled.div<StyledProps>`
  width: ${(p) => `calc(100% + ${p.theme.spacing.unit(10)}px)`};
  margin-left: ${(p) => `-${p.theme.spacing.unit(5)}px`};
  ${(p) => p.theme.media.lessThan(p.theme.breakpoints.sm)} {
    width: ${(p) => `calc(100% + ${p.theme.spacing.unit(6)}px)`};
    margin-left: ${(p) => `-${p.theme.spacing.unit(3)}px`};
  }
  height: 1px;
  background-color: ${(p) => (p.colorFunction ? p.colorFunction(p.theme) : p.theme.color.divider)};
`;

export const Separator: SeparatorComponent = (props) =>
  props.fullWidth ? (
    <FullWidthSeparator colorFunction={props.color} className={props.className} />
  ) : (
    <StyledSeparator
      colorFunction={props.color}
      vertical={props.vertical}
      className={props.className}
    />
  );
