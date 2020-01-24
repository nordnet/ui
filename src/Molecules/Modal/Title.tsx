import React from 'react';
import styled from 'styled-components';
import { TitleProps } from './Title.types';
import { isElement } from '../../common/utils';
import { Typography } from '../..';

const H2 = styled.h2`
  padding-right: ${p => p.theme.spacing.unit(4)}px;
`;

export const Title: React.FC<TitleProps> = ({ title, uid }) => {
  return (
    <span id={uid}>
      {isElement(title) ? (
        title
      ) : (
        <Typography as={H2} type="title2">
          {title}
        </Typography>
      )}
    </span>
  );
};
