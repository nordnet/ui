import React from 'react';
import styled from 'styled-components';
import Row from './Row';
import { HeaderRowComponent } from './Row.types';
import { ColorFn } from '../../../common/Types/sharedTypes';
import { useFlexTable } from '../shared/FlexTableProvider';

const StyledHeaderRow = styled(Row).withConfig({
  shouldForwardProp: prop => !['hideSeparator', 'separatorColor', 'sticky'].includes(prop),
})<{
  hideSeparator: boolean;
  separatorColor: ColorFn;
  sticky: boolean;
}>`
  ${p =>
    p.sticky
      ? `
        position: sticky;
        top: 0;
        background-color: ${p.theme.color.tableHeaderBackground}`
      : ''};
  ${p => (!p.hideSeparator ? `border-bottom: 1px solid ${p.separatorColor(p.theme)}` : '')};
`;

export const HeaderRow: HeaderRowComponent = ({
  className,
  hideSeparator = false,
  separatorColor = theme => theme.color.text,
  children,
  ...htmlProps
}) => {
  const { stickyHeader } = useFlexTable();

  return (
    <StyledHeaderRow
      className={className}
      hoverHighlight={false}
      hideSeparator={hideSeparator}
      isContent={false}
      separatorColor={separatorColor}
      sticky={stickyHeader}
      {...htmlProps}
    >
      {children}
    </StyledHeaderRow>
  );
};
