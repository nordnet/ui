import React, { useState } from 'react';
import styled from 'styled-components';
import FlexTable from '../FlexTable';
import { RowComponent } from '../Row/Row.types';
import docs from '../FlexTable.mdx';
import { Button, Flexbox, Number } from '../../..';

export default {
  title: 'Molecules / FlexTable / With expandable rows',
  parameters: {
    component: FlexTable,
    docs: {
      page: docs,
    },
  },
};

const expandedItemsGenerator = (renderComponent = false) =>
  [...Array(20)].reduce((acc, _, itemIndex) => {
    // Make the first item really long
    if (itemIndex === 0) {
      const label = 'This is a reaaaallllyyy loooong label demonstrating truncation';
      const value = 'These values are super long to also demonstrate truncation';
      return [...acc, { label, value }];
    }
    const keyName = `${itemIndex + 1}`;
    const labelText = `Label ${keyName}`;
    const label = renderComponent
      ? () => (
          <FlexTable.ExpandItem.TextWrapper isLabel>{labelText}</FlexTable.ExpandItem.TextWrapper>
        )
      : labelText;
    const valueText = Math.floor(10 ** (20 - Math.ceil(Math.random() * 20)) * Math.random());
    const value = renderComponent
      ? () => (
          <FlexTable.ExpandItem.TextWrapper>
            <Number value={valueText} />
          </FlexTable.ExpandItem.TextWrapper>
        )
      : valueText.toString();
    return [...acc, { label, value }];
  }, []);

const expandChildrenComponents = (
  <Flexbox container justifyContent="center" gutter={2}>
    <Flexbox item>
      <Button size="l" variant="primary">
        Buy
      </Button>
    </Flexbox>
    <Flexbox item>
      <Button size="l" variant="secondary">
        Sell
      </Button>
    </Flexbox>
  </Flexbox>
);

export const ExpandedTable = () => {
  const expandItemsText = expandedItemsGenerator();
  const expandItemsComponents = expandedItemsGenerator(true);
  return (
    <FlexTable expandable>
      <FlexTable.HeaderRow>
        <FlexTable.Header columnId="column1">Header 1</FlexTable.Header>
        <FlexTable.Header columnId="column2">Header 2</FlexTable.Header>
        <FlexTable.Header columnId="column3" justifyContent="flex-end">
          Header 3
        </FlexTable.Header>
        <FlexTable.Header columnId="column4" hidden>
          Header 4
        </FlexTable.Header>
      </FlexTable.HeaderRow>

      <FlexTable.Row>
        <FlexTable.Cell columnId="column1">Disabled</FlexTable.Cell>
        <FlexTable.Cell columnId="column2">Disabled</FlexTable.Cell>
        <FlexTable.Cell columnId="column3" justifyContent="flex-end">
          Disabled
        </FlexTable.Cell>
        <FlexTable.Cell columnId="column4" hidden>
          Hidden
        </FlexTable.Cell>
      </FlexTable.Row>

      <FlexTable.Row expandItems={expandItemsText}>
        <FlexTable.Cell columnId="column1">Expandable</FlexTable.Cell>
        <FlexTable.Cell columnId="column2">Expandable</FlexTable.Cell>
        <FlexTable.Cell columnId="column3" justifyContent="flex-end">
          Expandable
        </FlexTable.Cell>
        <FlexTable.Cell columnId="column4" hidden>
          Hidden
        </FlexTable.Cell>
      </FlexTable.Row>

      <FlexTable.Row expandItems={expandItemsText} initiallyExpanded>
        <FlexTable.Cell columnId="column1">Expandable with initial state</FlexTable.Cell>
        <FlexTable.Cell columnId="column2">Expandable with initial state</FlexTable.Cell>
        <FlexTable.Cell columnId="column3" justifyContent="flex-end">
          Expandable with initial state
        </FlexTable.Cell>
        <FlexTable.Cell columnId="column4" hidden>
          Hidden
        </FlexTable.Cell>
      </FlexTable.Row>

      <FlexTable.Row expandItems={expandItemsComponents}>
        <FlexTable.Cell columnId="column1">Expandable component items</FlexTable.Cell>
        <FlexTable.Cell columnId="column2">Expandable component items</FlexTable.Cell>
        <FlexTable.Cell columnId="column3" justifyContent="flex-end">
          Expandable component items
        </FlexTable.Cell>
        <FlexTable.Cell columnId="column4" hidden>
          Hidden
        </FlexTable.Cell>
      </FlexTable.Row>

      <FlexTable.Row expandItems={expandItemsText} expandChildren={expandChildrenComponents}>
        <FlexTable.Cell columnId="column1">Expandable with children</FlexTable.Cell>
        <FlexTable.Cell columnId="column2">Expandable with children</FlexTable.Cell>
        <FlexTable.Cell columnId="column3" justifyContent="flex-end">
          Expandable with children
        </FlexTable.Cell>
        <FlexTable.Cell columnId="column4" hidden>
          Hidden
        </FlexTable.Cell>
      </FlexTable.Row>
    </FlexTable>
  );
};

export const OnlyExpandableOnMobileTable = () => {
  const columnData = [
    { label: 'Header 4', value: 'Expandable 4' },
    { label: 'Header 5', value: 'Expandable 5' },
    { label: 'Header 6', value: 'Expandable 6' },
    { label: 'Header 7', value: 'Expandable 7' },
  ];
  return (
    <FlexTable expandable md={{ expandable: false }}>
      <FlexTable.HeaderRow>
        <FlexTable.Header columnId="column1">Header 1</FlexTable.Header>
        <FlexTable.Header columnId="column2">Header 2</FlexTable.Header>
        <FlexTable.Header columnId="column3">Header 3</FlexTable.Header>
        <FlexTable.Header columnId="column4" hidden md={{ hidden: false }}>
          Header 4
        </FlexTable.Header>
        <FlexTable.Header columnId="column5" hidden md={{ hidden: false }}>
          Header 5
        </FlexTable.Header>
        <FlexTable.Header columnId="column6" hidden md={{ hidden: false }}>
          Header 6
        </FlexTable.Header>
        <FlexTable.Header columnId="column7" hidden md={{ hidden: false }}>
          Header 7
        </FlexTable.Header>
      </FlexTable.HeaderRow>

      <FlexTable.Row expandItems={columnData}>
        <FlexTable.Cell columnId="column1">Expandable</FlexTable.Cell>
        <FlexTable.Cell columnId="column2">Expandable</FlexTable.Cell>
        <FlexTable.Cell columnId="column3">Expandable</FlexTable.Cell>
        <FlexTable.Cell columnId="column4" hidden md={{ hidden: false }}>
          Expandable 4
        </FlexTable.Cell>
        <FlexTable.Cell columnId="column5" hidden md={{ hidden: false }}>
          Expandable 5
        </FlexTable.Cell>
        <FlexTable.Cell columnId="column6" hidden md={{ hidden: false }}>
          Expandable 6
        </FlexTable.Cell>
        <FlexTable.Cell columnId="column7" hidden md={{ hidden: false }}>
          Expandable 7
        </FlexTable.Cell>
      </FlexTable.Row>
    </FlexTable>
  );
};

export const ControlledExpandedTable = () => {
  const expandItemsText = expandedItemsGenerator();
  const expandItemsComponents = expandedItemsGenerator(true);
  const ControlledExpandedTableExample = () => {
    const [expandedRows, setExpandedRows] = useState<string[]>(['row3']);
    const isExpanded = (rowId: string) => expandedRows.includes(rowId);
    const onExpandClick = (rowId: string) => (newExpanded: boolean) =>
      newExpanded
        ? setExpandedRows([...expandedRows, rowId])
        : setExpandedRows(expandedRows.filter((row) => row !== rowId));
    return (
      <FlexTable expandable>
        <FlexTable.HeaderRow>
          <FlexTable.Header columnId="column1">Header 1</FlexTable.Header>
          <FlexTable.Header columnId="column2">Header 2</FlexTable.Header>
          <FlexTable.Header columnId="column3">Header 3</FlexTable.Header>
        </FlexTable.HeaderRow>

        <FlexTable.Row>
          <FlexTable.Cell columnId="column1">Disabled</FlexTable.Cell>
          <FlexTable.Cell columnId="column2">Disabled</FlexTable.Cell>
          <FlexTable.Cell columnId="column3">Disabled</FlexTable.Cell>
        </FlexTable.Row>

        <FlexTable.Row
          expandItems={expandItemsText}
          expanded={isExpanded('row2')}
          onExpandToggle={onExpandClick('row2')}
        >
          <FlexTable.Cell columnId="column1">Expandable</FlexTable.Cell>
          <FlexTable.Cell columnId="column2">Expandable</FlexTable.Cell>
          <FlexTable.Cell columnId="column3">Expandable</FlexTable.Cell>
        </FlexTable.Row>

        <FlexTable.Row
          expandItems={expandItemsText}
          expanded={isExpanded('row3')}
          onExpandToggle={onExpandClick('row3')}
        >
          <FlexTable.Cell columnId="column1">Expandable with initial state</FlexTable.Cell>
          <FlexTable.Cell columnId="column2">Expandable with initial state</FlexTable.Cell>
          <FlexTable.Cell columnId="column3">Expandable with initial state</FlexTable.Cell>
        </FlexTable.Row>

        <FlexTable.Row
          expandItems={expandItemsComponents}
          expanded={isExpanded('row4')}
          onExpandToggle={onExpandClick('row4')}
        >
          <FlexTable.Cell columnId="column1">Expandable component items</FlexTable.Cell>
          <FlexTable.Cell columnId="column2">Expandable component items</FlexTable.Cell>
          <FlexTable.Cell columnId="column3">Expandable component items</FlexTable.Cell>
        </FlexTable.Row>

        <FlexTable.Row
          expandItems={expandItemsText}
          expandChildren={expandChildrenComponents}
          expanded={isExpanded('row5')}
          onExpandToggle={onExpandClick('row5')}
        >
          <FlexTable.Cell columnId="column1">Expandable with children</FlexTable.Cell>
          <FlexTable.Cell columnId="column2">Expandable with children</FlexTable.Cell>
          <FlexTable.Cell columnId="column3">Expandable with children</FlexTable.Cell>
        </FlexTable.Row>
      </FlexTable>
    );
  };

  return <ControlledExpandedTableExample />;
};

export const ControlledExpandableTableWithClickableRows = () => {
  const RowWithPointer = styled(FlexTable.Row)`
    :hover {
      cursor: pointer;
    }
  `;
  const expandItems = [
    { label: 'Expand item 1', value: 123 },
    { label: 'Expand item 2', value: 456 },
    { label: 'Expand item 3', value: 789 },
  ];
  const ControlledExpandedTableExample = () => {
    const [expandedRows, setExpandedRows] = useState<string[]>([]);
    const isExpanded = (rowId: string) => expandedRows.includes(rowId);
    const onExpandClick = (rowId: string) => (newExpanded: boolean) =>
      newExpanded
        ? setExpandedRows([...expandedRows, rowId])
        : setExpandedRows(expandedRows.filter((row) => row !== rowId));
    return (
      <FlexTable expandable>
        <FlexTable.HeaderRow>
          <FlexTable.Header columnId="column1">Header 1</FlexTable.Header>
          <FlexTable.Header columnId="column2">Header 2</FlexTable.Header>
          <FlexTable.Header columnId="column3">Header 3</FlexTable.Header>
        </FlexTable.HeaderRow>

        <FlexTable.Row>
          <FlexTable.Cell columnId="column1">Disabled</FlexTable.Cell>
          <FlexTable.Cell columnId="column2">Disabled</FlexTable.Cell>
          <FlexTable.Cell columnId="column3">Disabled</FlexTable.Cell>
        </FlexTable.Row>

        <RowWithPointer
          expandItems={expandItems}
          expanded={isExpanded('row2')}
          onClick={() => onExpandClick('row2')(!isExpanded('row2'))}
        >
          <FlexTable.Cell columnId="column1">Entire...</FlexTable.Cell>
          <FlexTable.Cell columnId="column2">...row...</FlexTable.Cell>
          <FlexTable.Cell columnId="column3">...clickable</FlexTable.Cell>
        </RowWithPointer>
      </FlexTable>
    );
  };

  return <ControlledExpandedTableExample />;
};

export const ExpandedTableDifferentFontSizeOnMobile = () => {
  const expandItemsText = expandedItemsGenerator();
  return (
    <FlexTable fontSize="m" md={{ fontSize: 's' }} expandable>
      <FlexTable.HeaderRow>
        <FlexTable.Header columnId="column1">Header 1</FlexTable.Header>
        <FlexTable.Header columnId="column2">Header 2</FlexTable.Header>
        <FlexTable.Header columnId="column3">Header 3</FlexTable.Header>
      </FlexTable.HeaderRow>

      <FlexTable.Row expandItems={expandItemsText} initiallyExpanded>
        <FlexTable.Cell columnId="column1">Expandable</FlexTable.Cell>
        <FlexTable.Cell columnId="column2">Expandable</FlexTable.Cell>
        <FlexTable.Cell columnId="column3">Expandable</FlexTable.Cell>
      </FlexTable.Row>
    </FlexTable>
  );
};

export const HiddenExpandItemOnDesktop = () => {
  return (
    <FlexTable expandable>
      <FlexTable.HeaderRow>
        <FlexTable.Header columnId="column1">Header 1</FlexTable.Header>
        <FlexTable.Header columnId="column2">Header 2</FlexTable.Header>
        <FlexTable.Header columnId="column3">Header 3</FlexTable.Header>
      </FlexTable.HeaderRow>
      <FlexTable.Row
        initiallyExpanded
        expandItems={[
          { label: 'Always visible', value: 123 },
          { label: 'Hidden on desktop', value: 1000, md: { hidden: true } },
        ]}
      >
        <FlexTable.Cell columnId="column1">Value 1</FlexTable.Cell>
        <FlexTable.Cell columnId="column2">Value 2</FlexTable.Cell>
        <FlexTable.Cell columnId="column3">Value 3</FlexTable.Cell>
      </FlexTable.Row>
    </FlexTable>
  );
};

export const WholeRowExpandableTable = () => {
  const expandItemsText = expandedItemsGenerator();
  return (
    <FlexTable expandable>
      <FlexTable.HeaderRow>
        <FlexTable.Header columnId="column1">Header 1</FlexTable.Header>
        <FlexTable.Header columnId="column2">Header 2</FlexTable.Header>
        <FlexTable.Header columnId="column3">Header 3</FlexTable.Header>
      </FlexTable.HeaderRow>

      <FlexTable.Row expandItems={expandItemsText} clickRowToExpand>
        <FlexTable.Cell columnId="column1">Click anywhere</FlexTable.Cell>
        <FlexTable.Cell columnId="column2">on this row</FlexTable.Cell>
        <FlexTable.Cell columnId="column3">to toggle expand</FlexTable.Cell>
      </FlexTable.Row>

      <FlexTable.Row
        expandItems={expandItemsText}
        expandChildren={expandChildrenComponents}
        clickRowToExpand
      >
        <FlexTable.Cell columnId="column1">Click anywhere</FlexTable.Cell>
        <FlexTable.Cell columnId="column2">on this row</FlexTable.Cell>
        <FlexTable.Cell columnId="column3">to toggle expand</FlexTable.Cell>
      </FlexTable.Row>
      <FlexTable.Row expandItems={expandItemsText} clickRowToExpand>
        <FlexTable.Cell columnId="column1">Click anywhere</FlexTable.Cell>
        <FlexTable.Cell columnId="column2">on this row</FlexTable.Cell>
        <FlexTable.Cell columnId="column3">to toggle expand</FlexTable.Cell>
      </FlexTable.Row>

      <FlexTable.Row
        expandItems={expandItemsText}
        expandChildren={expandChildrenComponents}
        clickRowToExpand
      >
        <FlexTable.Cell columnId="column1">Click anywhere</FlexTable.Cell>
        <FlexTable.Cell columnId="column2">on this row</FlexTable.Cell>
        <FlexTable.Cell columnId="column3">to toggle expand</FlexTable.Cell>
      </FlexTable.Row>

      <FlexTable.Row expandItems={expandItemsText}>
        <FlexTable.Cell columnId="column1">This row is NOT clickable!</FlexTable.Cell>
        <FlexTable.Cell columnId="column2">Except for on</FlexTable.Cell>
        <FlexTable.Cell columnId="column3">the chevron...</FlexTable.Cell>
      </FlexTable.Row>

      <FlexTable.Row expandItems={expandItemsText} expandChildren={expandChildrenComponents}>
        <FlexTable.Cell columnId="column1">This row is NOT clickable!</FlexTable.Cell>
        <FlexTable.Cell columnId="column2">Except for on</FlexTable.Cell>
        <FlexTable.Cell columnId="column3">the chevron...</FlexTable.Cell>
      </FlexTable.Row>
    </FlexTable>
  );
};

export const ControlledWholeRowExpandableTable = () => {
  // @ts-ignore
  const ControlledRow: RowComponent = ({ children, ...rowProps }) => {
    const [expanded, setExpanded] = useState(false);

    return (
      // @ts-ignore
      <FlexTable.Row
        {...rowProps}
        expanded={expanded}
        onExpandToggle={() => setExpanded(!expanded)}
        clickRowToExpand
      >
        {children}
      </FlexTable.Row>
    );
  };

  const expandItemsText = expandedItemsGenerator();
  return (
    <FlexTable expandable>
      <FlexTable.HeaderRow>
        <FlexTable.Header columnId="column1">Header 1</FlexTable.Header>
        <FlexTable.Header columnId="column2">Header 2</FlexTable.Header>
        <FlexTable.Header columnId="column3">Header 3</FlexTable.Header>
      </FlexTable.HeaderRow>

      <ControlledRow expandItems={expandItemsText} expandChildren={expandChildrenComponents}>
        <FlexTable.Cell columnId="column1">This row is</FlexTable.Cell>
        <FlexTable.Cell columnId="column2">a controlled example</FlexTable.Cell>
        <FlexTable.Cell columnId="column3">that handles the expansion</FlexTable.Cell>
      </ControlledRow>

      <ControlledRow expandItems={expandItemsText}>
        <FlexTable.Cell columnId="column1">This row is</FlexTable.Cell>
        <FlexTable.Cell columnId="column2">a controlled example</FlexTable.Cell>
        <FlexTable.Cell columnId="column3">that handles the expansion</FlexTable.Cell>
      </ControlledRow>
    </FlexTable>
  );
};
