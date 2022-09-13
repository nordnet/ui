import React from 'react';
import styled from 'styled-components';
import { DateTime, Flag, Flexbox, Number } from '../../..';
import { FlexPropsType } from '../shared/shared.types';
import FlexTable from '../FlexTable';
import docs from '../FlexTable.mdx';

export default {
  title: 'Molecules / FlexTable / With Custom Cells',
  parameters: {
    component: FlexTable,
    docs: {
      page: docs,
    },
  },
};

const StyledFlexboxContainer = styled(Flexbox)`
  justify-content: inherit;
`;

export const CustomCells = () => {
  const Story = () => {
    const TruncateStartHeader: React.FC<{
      currency: string;
      columnId: string;
      flex: string;
      justifyContent?: FlexPropsType['justifyContent'];
    }> = ({ children, columnId, flex, currency, justifyContent }) => (
      <FlexTable.Header columnId={columnId} flex={flex} justifyContent={justifyContent} sortable>
        {({ sortable, sorted, onSortClick, sortOrder }) => (
          <FlexTable.Header.SortButton onClick={onSortClick}>
            <StyledFlexboxContainer container>
              <FlexTable.CellInlineContainer item>
                <FlexTable.Header.TextWrapper sorted={sorted}>
                  {children}
                </FlexTable.Header.TextWrapper>
              </FlexTable.CellInlineContainer>
              <Flexbox item>
                <FlexTable.Header.TextWrapper sorted={sorted} truncate={false}>
                  {currency}
                </FlexTable.Header.TextWrapper>
              </Flexbox>
              {sortable && (
                <Flexbox item>
                  <FlexTable.Header.SortIcon sortOrder={sortOrder} />
                </Flexbox>
              )}
            </StyledFlexboxContainer>
          </FlexTable.Header.SortButton>
        )}
      </FlexTable.Header>
    );

    const NumberCell: React.FC<
      {
        columnId: string;
        value: number;
        percentage?: boolean;
      } & FlexPropsType
    > = React.memo(({ columnId, value, percentage = false, ...cellProps }) => (
      <FlexTable.Cell columnId={columnId} {...cellProps}>
        <FlexTable.Cell.TextWrapper>
          <Number value={value} percentage={percentage} />
        </FlexTable.Cell.TextWrapper>
      </FlexTable.Cell>
    ));

    const NumberFooter: React.FC<
      {
        columnId: string;
        value: number;
        percentage?: boolean;
      } & FlexPropsType
    > = React.memo(({ columnId, value, percentage = false, ...cellProps }) => (
      <FlexTable.Footer columnId={columnId} {...cellProps}>
        <FlexTable.Footer.TextWrapper>
          <Number value={value} percentage={percentage} />
        </FlexTable.Footer.TextWrapper>
      </FlexTable.Footer>
    ));

    const DateCell: React.FC<{ columnId: string; value: number } & FlexPropsType> = React.memo(
      ({ columnId, value, ...cellProps }) => (
        <FlexTable.Cell columnId={columnId} {...cellProps}>
          <FlexTable.Cell.TextWrapper>
            <DateTime value={value} />
          </FlexTable.Cell.TextWrapper>
        </FlexTable.Cell>
      ),
    );

    const FlagCell: React.FC<{ columnId: string; country: string } & FlexPropsType> = React.memo(
      ({ columnId, country, ...cellProps }) => (
        <FlexTable.Cell columnId={columnId} {...cellProps}>
          <FlexTable.Cell.TextWrapper>
            <Flag country={country} />
          </FlexTable.Cell.TextWrapper>
        </FlexTable.Cell>
      ),
    );

    return (
      <FlexTable>
        <FlexTable.HeaderRow>
          <FlexTable.Header columnId="date">Date</FlexTable.Header>
          <TruncateStartHeader
            columnId="transferable-quantity"
            flex="0 0 150px"
            justifyContent="flex-end"
            currency="USD"
          >
            Transferable quantity
          </TruncateStartHeader>
          <FlexTable.Header columnId="country">Country</FlexTable.Header>
          <FlexTable.Header columnId="percentage" justifyContent="flex-end">
            Percentage
          </FlexTable.Header>
        </FlexTable.HeaderRow>
        <FlexTable.Row>
          <DateCell columnId="date" value={1594385610185} />
          <NumberCell
            columnId="transferable-quantity"
            value={300}
            justifyContent="flex-end"
            flex="0 0 150px"
          />
          <FlagCell columnId="country" country="SE" />
          <NumberCell columnId="percentage" value={75} percentage justifyContent="flex-end" />
        </FlexTable.Row>
        <FlexTable.Row>
          <DateCell columnId="date" value={1594385610000} />
          <NumberCell
            columnId="transferable-quantity"
            value={100}
            justifyContent="flex-end"
            flex="0 0 150px"
          />
          <FlagCell columnId="country" country="NO" />
          <NumberCell columnId="percentage" value={25} percentage justifyContent="flex-end" />
        </FlexTable.Row>
        <FlexTable.FooterRow>
          <FlexTable.Footer columnId="date" />
          <NumberFooter
            columnId="transferable-quantity"
            value={400}
            justifyContent="flex-end"
            flex="0 0 150px"
          />
          <FlexTable.Footer columnId="country" />
          <NumberFooter columnId="percentage" value={25} percentage justifyContent="flex-end" />
        </FlexTable.FooterRow>
      </FlexTable>
    );
  };
  return <Story />;
};

export const BoldCells = () => {
  const Story = () => {
    const BoldCell: React.FC<{ columnId: string } & FlexPropsType> = React.memo(
      ({ columnId, children, ...cellProps }) => (
        <FlexTable.Cell columnId={columnId} {...cellProps}>
          <FlexTable.Cell.TextWrapper weight="bold">{children}</FlexTable.Cell.TextWrapper>
        </FlexTable.Cell>
      ),
    );

    return (
      <FlexTable>
        <FlexTable.HeaderRow>
          <FlexTable.Header columnId="column1">Column 1</FlexTable.Header>
          <FlexTable.Header columnId="column2">Column 2</FlexTable.Header>
          <FlexTable.Header columnId="column3">Column 3</FlexTable.Header>
        </FlexTable.HeaderRow>
        <FlexTable.Row>
          <FlexTable.Cell columnId="column1">123</FlexTable.Cell>
          <BoldCell columnId="column2">123</BoldCell>
          <FlexTable.Cell columnId="column3">123</FlexTable.Cell>
        </FlexTable.Row>
      </FlexTable>
    );
  };
  return <Story />;
};
