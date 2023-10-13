/* eslint-disable react/require-default-props */
import React from 'react';
import styled from 'styled-components';
import { Typography } from '../../..';
import { Props } from './Group.types';

const NormalizedUl = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const StyledTypography = styled(Typography)`
  padding: ${(p) =>
    `${p.theme.spacing.unit(2)}px
    ${p.theme.spacing.unit(3)}px
    ${p.theme.spacing.unit(1)}px
    ${p.theme.spacing.unit(3)}px
    `};
  display: inline-block;
`;

export function Group(props: Props) {
  const { label, children } = props;

  return (
    <li>
      <StyledTypography type="tertiary" color={(t) => t.colorTokens.neutral.text_weak}>
        {label}
      </StyledTypography>
      <NormalizedUl>{children}</NormalizedUl>
    </li>
  );
}
