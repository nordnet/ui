import React from 'react';
import styled from 'styled-components';
import { withKnobs } from '@storybook/addon-knobs';
import FlexTable from './FlexTable';
import { Typography, Flag, Number, Flexbox, DateTime } from '../..';
import docs from './FlexTable.mdx';
import { FlexPropsType } from './shared/ColumnProvider/ColumnProvider.types';
import { StyledBackground } from './storiesShared';

export default {
  title: 'Molecules | FlexTable',
  decorators: [withKnobs],
  parameters: {
    component: FlexTable,
    ...docs.parameters,
  },
};

export const FlexTableWithDifferentRows = () => {
  const FlexTableWithDifferentRowsExample = () => (
    <FlexTable>
      <FlexTable.HeaderRow>
        <FlexTable.Header columnId="column1">Header 1</FlexTable.Header>
        <FlexTable.Header columnId="column2">Header 2</FlexTable.Header>
        <FlexTable.Header columnId="column3">Header 3</FlexTable.Header>
      </FlexTable.HeaderRow>
      <FlexTable.Row>
        <FlexTable.Cell columnId="column1">Default</FlexTable.Cell>
        <FlexTable.Cell columnId="column2">Default</FlexTable.Cell>
        <FlexTable.Cell columnId="column3">Default</FlexTable.Cell>
      </FlexTable.Row>
      <FlexTable.Row hoverHighlight={false}>
        <FlexTable.Cell columnId="column1">No highlight</FlexTable.Cell>
        <FlexTable.Cell columnId="column2">No highlight</FlexTable.Cell>
        <FlexTable.Cell columnId="column3">No highlight</FlexTable.Cell>
      </FlexTable.Row>
      <FlexTable.Row hideSeparator>
        <FlexTable.Cell columnId="column1">Separator hidden</FlexTable.Cell>
        <FlexTable.Cell columnId="column2">Separator hidden</FlexTable.Cell>
        <FlexTable.Cell columnId="column3">Separator hidden</FlexTable.Cell>
      </FlexTable.Row>
      <FlexTable.Row hoverHighlight={false} hideSeparator>
        <FlexTable.Cell columnId="column1">No highlight and separator hidden</FlexTable.Cell>
        <FlexTable.Cell columnId="column2">No highlight and separator hidden</FlexTable.Cell>
        <FlexTable.Cell columnId="column3">No highlight and separator hidden</FlexTable.Cell>
      </FlexTable.Row>
      <FlexTable.Row separatorColor={(t) => t.color.barChartColor1}>
        <FlexTable.Cell columnId="column1">Separator color set</FlexTable.Cell>
        <FlexTable.Cell columnId="column2">Separator color set</FlexTable.Cell>
        <FlexTable.Cell columnId="column3">Separator color set</FlexTable.Cell>
      </FlexTable.Row>
    </FlexTable>
  );

  return (
    <StyledBackground>
      <Typography type="title3">FlexTable With Different Rows</Typography>
      <FlexTableWithDifferentRowsExample />
    </StyledBackground>
  );
};

const StyledFlexboxContainer = styled(Flexbox)`
  justify-content: inherit;
`;

export const TableCustomDataCells = () => {
  const Story = () => {
    const TruncateStartHeader: React.FC<{
      currency: string;
      columnId: string;
      flex: string;
      justifyContent?: FlexPropsType['justifyContent'];
    }> = ({ children, columnId, flex, currency, justifyContent }) => (
      <FlexTable.Header columnId={columnId} flex={flex} justifyContent={justifyContent} sortable>
        {({ sortable, sorted, fontSize, onSortClick, sortOrder }) => (
          <FlexTable.Header.SortButton onClick={onSortClick}>
            <StyledFlexboxContainer container>
              <FlexTable.CellInlineContainer item>
                <FlexTable.Header.TextWrapper fontSize={fontSize} sorted={sorted}>
                  {children}
                </FlexTable.Header.TextWrapper>
              </FlexTable.CellInlineContainer>
              <Flexbox item>
                <FlexTable.Header.TextWrapper fontSize={fontSize} sorted={sorted} truncate={false}>
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
        {({ fontSize }) => (
          <FlexTable.Cell.TextWrapper fontSize={fontSize}>
            <Number value={value} percentage={percentage} />
          </FlexTable.Cell.TextWrapper>
        )}
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
        {({ fontSize }) => (
          <FlexTable.Footer.TextWrapper fontSize={fontSize}>
            <Number value={value} percentage={percentage} />
          </FlexTable.Footer.TextWrapper>
        )}
      </FlexTable.Footer>
    ));

    const DateCell: React.FC<{ columnId: string; value: number } & FlexPropsType> = React.memo(
      ({ columnId, value, ...cellProps }) => (
        <FlexTable.Cell columnId={columnId} {...cellProps}>
          {({ fontSize }) => (
            <FlexTable.Cell.TextWrapper fontSize={fontSize}>
              <DateTime value={value} />
            </FlexTable.Cell.TextWrapper>
          )}
        </FlexTable.Cell>
      ),
    );

    const FlagCell: React.FC<{ columnId: string; country: string } & FlexPropsType> = React.memo(
      ({ columnId, country, ...cellProps }) => (
        <FlexTable.Cell columnId={columnId} {...cellProps}>
          {({ fontSize }) => (
            <FlexTable.Cell.TextWrapper fontSize={fontSize}>
              <Flag country={country} />
            </FlexTable.Cell.TextWrapper>
          )}
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
            Transferable Quantity
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
          <FlagCell columnId="country" country="UK" />
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

export const FlexTableWithHiddenExpandItem = () => {
  const FlexTableWithHiddenExpandItemExample = () => (
    <FlexTable expandable>
      <FlexTable.HeaderRow>
        <FlexTable.Header columnId="column1">Header 1</FlexTable.Header>
        <FlexTable.Header columnId="column2">Header 2</FlexTable.Header>
        <FlexTable.Header columnId="column3">Header 3</FlexTable.Header>
      </FlexTable.HeaderRow>
      <FlexTable.Row
        expandItems={[
          { label: 'Always visible', value: 123 },
          { label: 'Hidden', value: 1000, hidden: true },
        ]}
      >
        <FlexTable.Cell columnId="column1">Value 1</FlexTable.Cell>
        <FlexTable.Cell columnId="column2">Value 2</FlexTable.Cell>
        <FlexTable.Cell columnId="column3">Value 3</FlexTable.Cell>
      </FlexTable.Row>
    </FlexTable>
  );

  return (
    <StyledBackground>
      <Typography type="title3">FlexTable With Hidden Expand Item</Typography>
      <FlexTableWithHiddenExpandItemExample />
    </StyledBackground>
  );
};
