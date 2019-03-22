import React from 'react';
import styled from 'styled-components';
import CssGridCell from '../CssGrid/Cell';
import FlexBoxCell from '../Flexbox/Cell';
import { Props } from './Cell.types';

const ChosenSystem: React.FC<Props> = props => {
  const { area } = props;

  return typeof area !== 'undefined' ? (
    <CssGridCell area={area} {...props} />
  ) : (
    <FlexBoxCell {...props} />
  );
};

const Cell = styled(ChosenSystem)<Props>`
  height: 100%;
  background: rgba(255, 0, 0, 0.1);
`;

export default Cell;
