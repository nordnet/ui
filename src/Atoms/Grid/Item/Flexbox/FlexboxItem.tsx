import React from 'react';
import styled from 'styled-components';
import * as R from 'ramda';
import { Props, PropsWithGutter } from './FlexboxItem.types';

const StyledItem = styled.div<Props>`
  box-sizing: border-box;
  ${({ order }) => (order ? `order: ${order};` : '')}
  ${({ grow }) => (grow ? `flex-grow: ${grow};` : '')}
  ${({ shrink }) => (shrink ? `flex-shrink: ${shrink};` : '')}
  ${({ basis }) => (basis ? `flex-basis: ${basis};` : '')}
  ${({ flex }) => (flex ? `flex: ${flex};` : '')}
  ${({ align }) => (align ? `align-self: ${align};` : '')}
`;

const StyledItemWithHorisontalGutter = styled(StyledItem)<PropsWithGutter>`
  ${props => {
    const { gutter = props.theme.spacing.gutter } = props;
    return `
      padding-left: ${props.theme.spacing.unit(gutter / 2)}px;
      padding-right: ${props.theme.spacing.unit(gutter / 2)}px;
    `;
  }}
`;

const StyledItemWithVerticalGutter = styled(StyledItem)<PropsWithGutter>`
  ${props => {
    const { gutter = props.theme.spacing.gutter } = props;
    return `
      padding-top: ${props.theme.spacing.unit(gutter / 2)}px;
      padding-bottom: ${props.theme.spacing.unit(gutter / 2)}px;
    `;
  }}
`;

const withoutSCProps = R.omit(['css', 'as']);

export const ItemWithHorisontalGutter: React.FunctionComponent<PropsWithGutter> = props => (
  <StyledItemWithHorisontalGutter {...withoutSCProps(props)} />
);
ItemWithHorisontalGutter.displayName = 'Grid.Item.Flex';
export const ItemWithVerticalGutter: React.FunctionComponent<PropsWithGutter> = props => (
  <StyledItemWithVerticalGutter {...withoutSCProps(props)} />
);
ItemWithVerticalGutter.displayName = 'Grid.Item.Flex';

export const Item: React.FunctionComponent<Props> = props => (
  <StyledItem {...withoutSCProps(props)} />
);
Item.displayName = 'Grid.Item.Flex';
