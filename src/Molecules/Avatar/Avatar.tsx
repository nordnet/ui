import React from 'react';
import styled from 'styled-components';
import { Props } from './Avatar.types';

import Text from '../../Atoms/Text';

const StyledDiv = styled.div`
  background-color: ${p => p.theme.color.backgroundDark};
  width: ${p => p.theme.spacing.unit(8)}px;
  height: ${p => p.theme.spacing.unit(8)}px;
  border-radius: 50%;
  line-height: ${p =>
    p.theme.spacing.unit(8) - 1}px; /* FIXME: font is buggy, so baseline is 1px off */
  text-align: center;
`;
// eslint-disable-next-line react/prop-types
export const Avatar: React.FunctionComponent<Props> = ({ children }) => (
  <StyledDiv>
    <Text.Tertiary color={t => t.color.textLight}>{children}</Text.Tertiary>
  </StyledDiv>
);
