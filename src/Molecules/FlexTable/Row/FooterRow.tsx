import React from 'react';
import styled from 'styled-components';
import Row from './Row';
import { ColorFn } from '../../../common/Types';
import { FooterProps } from './Row.types';

const StyledRow = styled(Row)<{ $separatorColor: ColorFn; $hideSeparator: boolean }>`
  ${(p) => (!p.$hideSeparator ? `border-top: 1px solid ${p.$separatorColor(p.theme)};` : '')}
  border-bottom: 0;
`;

export const FooterRow = ({
  className,
  hideSeparator = false,
  separatorColor = (theme) => theme.color.text,
  children,
  ...htmlProps
}: FooterProps) => {
  return (
    <StyledRow
      className={className}
      hoverHighlight={false}
      $hideSeparator={hideSeparator}
      $separatorColor={separatorColor}
      rowType="footer"
      {...htmlProps}
    >
      {children}
    </StyledRow>
  );
};
