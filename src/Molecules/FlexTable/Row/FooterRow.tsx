import React from 'react';
import styled from 'styled-components';
import Row from './Row';
import { ColorFn } from '../../../common/Types/sharedTypes';
import { FooterRowComponent } from './Row.types';

const StyledRow = styled(Row).withConfig({
  shouldForwardProp: prop => !['hideSeparator', 'separatorColor'].includes(prop),
})<{ separatorColor: ColorFn; hideSeparator: boolean }>`
  ${p => (!p.hideSeparator ? `border-top: 1px solid ${p.separatorColor(p.theme)}` : '')};
  border-bottom: 0;
`;

export const FooterRow: FooterRowComponent = ({
  className,
  hideSeparator = false,
  separatorColor = theme => theme.color.text,
  children,
  ...htmlProps
}) => {
  return (
    <StyledRow
      className={className}
      hoverHighlight={false}
      hideSeparator={hideSeparator}
      separatorColor={separatorColor}
      isContent={false}
      {...htmlProps}
    >
      {children}
    </StyledRow>
  );
};
