import React from 'react';
import styled from 'styled-components';
import CssGridCell from './CssGrid';
import FlexBoxCell from './Flexbox';
import { Props } from './Item.types';

const Item: React.FC<Props> = props => {
  const { area } = props;

  return typeof area !== 'undefined' ? (
    <CssGridCell area={area} {...props} />
  ) : (
    <FlexBoxCell {...props} />
  );
};

export const StyledItem = styled(Item)<Props>`
  height: 100%;
  background: rgba(255, 0, 0, 0.1);
`;
