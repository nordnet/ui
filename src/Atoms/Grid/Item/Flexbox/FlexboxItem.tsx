import React from 'react';
import styled from 'styled-components';
import { Props, PropsWithGutter } from './FlexboxItem.types';

export const StyledItem: React.FC<Props> = styled.div<Props>`
  ${({ order }) => order && `order: ${order};`}
  ${({ grow }) => grow && `flex-grow: ${grow};`}
  ${({ shrink }) => shrink && `flex-shrink: ${shrink};`}
  ${({ basis }) => basis && `flex-basis: ${basis};`}
  ${({ flex }) => flex && `flex: ${flex};`}
  ${({ align }) => align && `align-self: ${align};`}
`;

const StyledItemWithHorisontalGutter = styled(StyledItem)<PropsWithGutter>`
  padding-left: ${props => props.theme.spacing.unit(props.gutter / 2)}px;
  padding-right: ${props => props.theme.spacing.unit(props.gutter / 2)}px;
`;

const StyledItemWithVerticalGutter = styled(StyledItem)<PropsWithGutter>`
  padding-top: ${props => props.theme.spacing.unit(props.gutter / 2)}px;
  padding-bottom: ${props => props.theme.spacing.unit(props.gutter / 2)}px;
`;

export const ItemWithHorisontalGutter: React.FunctionComponent<PropsWithGutter> = props => (
  <StyledItemWithHorisontalGutter {...props} />
);
export const ItemWithVerticalGutter: React.FunctionComponent<PropsWithGutter> = props => (
  <StyledItemWithVerticalGutter {...props} />
);
export const Item: React.FunctionComponent<Props> = props => <StyledItem {...props} />;

Item.displayName = 'Flexbox Grid Item';
