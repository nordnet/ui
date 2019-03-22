import React from 'react';
import styled from 'styled-components';
import { Props } from './Container.types';
import CssGrid from './CssGrid/index';
import FlexBox from './Flexbox/index';

const Grid = (props: Props) => {
  const { twoDimension } = props;

  return twoDimension ? <CssGrid {...props} /> : <FlexBox {...props} />;
};

export const StyledGrid = styled(Grid)<Props>`
  box-sizing: border-box;
  ${({ height }) => height && `height: ${height}`};
`;
