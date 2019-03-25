import React from 'react';
import styled, { ThemedStyledProps } from 'styled-components';
import {
  ItemWithHorisontalGutter,
  ItemWithVerticalGutter,
} from 'Atoms/Grid/Item/Flexbox/FlexboxItem';
import { Props as ChildProps } from 'Atoms/Grid/Item/Flexbox/FlexboxItem.types';
import { Props } from './FlexboxContainer.types';
import { Theme } from 'theme';

const isHorizontalGrid = (dir: Props['direction']) => {
  return dir !== 'column' && dir !== 'column-reverse';
};

const getContainerMargins =  (props: ThemedStyledProps<Props, Theme>) => {
  const { theme, direction, gutter = 5 } = props;
  const negativeGutter = `-${theme.spacing.unit(gutter / 2)}px`;

  if (isHorizontalGrid(direction)) {
    return `
      margin-left: ${negativeGutter};
      margin-right: ${negativeGutter}
    `;
  }

  return `
    margin-top: ${negativeGutter};
    margin-bottom: ${negativeGutter}
`;
};

const StyledFlexbox = styled.div<Props>`
  box-sizing: border-box;
  display: flex;
  ${props => getContainerMargins(props)}
  ${({ height }) => height && `height: ${height};`}
  ${({ direction }) => direction && `flex-direction: ${direction};`}
  ${({ wrap }) => wrap && `flex-wrap: ${wrap};`}
  ${({ justifyContent }) => justifyContent && `justify-content: ${justifyContent};`}
  ${({ alignItems }) => alignItems && `align-items: ${alignItems};`}
  ${({ alignContent }) => alignContent && `align-content: ${alignContent};`}
`;

export const Flexbox = (props: Props) => {
  const { gutter = 5, direction} = props;

  return (
    <StyledFlexbox {...props}>
      {React.Children.map(props.children, (child: any) =>
        isHorizontalGrid(direction) ? (
          <ItemWithHorisontalGutter {...child.props as ChildProps} gutter={gutter} />
          ) : (
          <ItemWithVerticalGutter {...child.props as ChildProps} gutter={gutter} />
        ),
      )}
    </StyledFlexbox>
  );
};

Flexbox.displayName = 'Flexbox Grid Container';
