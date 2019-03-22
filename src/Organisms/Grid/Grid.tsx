import React from 'react';
import styled from 'styled-components';
import { GridProps as Props } from './Grid.types';
import CssGrid from './CssGrid/index';
import FlexBox from './Flexbox/index';

const ChosenSystem = (props: Props) => {
  const { twoDimension } = props;

  return twoDimension ? <CssGrid {...props} /> : <FlexBox {...props} />;
};

const Grid = styled(ChosenSystem)<Props>`
  box-sizing: border-box;
  ${({ height }) => height && `height: ${height}`};
`;

export default Grid;
