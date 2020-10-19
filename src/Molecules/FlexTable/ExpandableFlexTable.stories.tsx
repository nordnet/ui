import React, { useState } from 'react';
import FlexTable from './FlexTable';
import docs from './FlexTable.mdx';
import { Button, Flexbox, Number } from '../..';
import { ICON_COLUMN_DEFAULT_FLEX_PROPS } from './shared/constants';

export default {
  title: 'Molecules / FlexTable / Expandable FlexTable',
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
      const value = 'This valuues is super long to also demonstrate truncation';
      return [...acc, { label, value }];
    }
    const keyName = `${itemIndex + 1}`;
    const labelText = `Label ${keyName}`;
    const label = renderComponent
      ? ({ fontSize }: any) => (
          <FlexTable.ExpandItem.TextWrapperLabel fontSize={fontSize}>
            {labelText}
          </FlexTable.ExpandItem.TextWrapperLabel>
        )
      : labelText;
    const valueText = Math.floor(10 ** (20 - Math.ceil(Math.random() * 20)) * Math.random());
    const value = renderComponent
      ? ({ fontSize }: any) => (
          <FlexTable.ExpandItem.TextWrapperValue fontSize={fontSize}>
            <Number value={valueText} />
          </FlexTable.ExpandItem.TextWrapperValue>
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
    <div>
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

        <FlexTable.Row expandItems={expandItemsText}>
          <FlexTable.Cell columnId="column1">Expandable</FlexTable.Cell>
          <FlexTable.Cell columnId="column2">Expandable</FlexTable.Cell>
          <FlexTable.Cell columnId="column3">Expandable</FlexTable.Cell>
        </FlexTable.Row>

        <FlexTable.Row expandItems={expandItemsText} initiallyExpanded>
          <FlexTable.Cell columnId="column1">Expandable with initial state</FlexTable.Cell>
          <FlexTable.Cell columnId="column2">Expandable with initial state</FlexTable.Cell>
          <FlexTable.Cell columnId="column3">Expandable with initial state</FlexTable.Cell>
        </FlexTable.Row>

        <FlexTable.Row expandItems={expandItemsComponents}>
          <FlexTable.Cell columnId="column1">Expandable component items</FlexTable.Cell>
          <FlexTable.Cell columnId="column2">Expandable component items</FlexTable.Cell>
          <FlexTable.Cell columnId="column3">Expandable component items</FlexTable.Cell>
        </FlexTable.Row>

        <FlexTable.Row expandItems={expandItemsText} expandChildren={expandChildrenComponents}>
          <FlexTable.Cell columnId="column1">Expandable with children</FlexTable.Cell>
          <FlexTable.Cell columnId="column2">Expandable with children</FlexTable.Cell>
          <FlexTable.Cell columnId="column3">Expandable with children</FlexTable.Cell>
        </FlexTable.Row>
      </FlexTable>
    </div>
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

      <FlexTable.Row expandItems={columnData} md={{ expandItems: [] }}>
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

const ExpandRow = ({ expandItems, expanded, expandChildren, children, toggleExpand }: any) => (
  <FlexTable.Row expanded={expanded} expandItems={expandItems} expandChildren={expandChildren}>
    {children}
    <FlexTable.ExpandCell
      columnId={FlexTable.CONSTANTS.COLUMN_ID_EXPAND}
      expanded={expanded}
      onClick={toggleExpand}
      disabled={!expandChildren && !expandItems}
      {...ICON_COLUMN_DEFAULT_FLEX_PROPS}
    />
  </FlexTable.Row>
);

export const ControlledExpandableTableWithCustomRow = () => {
  const expandItemsText = expandedItemsGenerator();
  const expandItemsComponents = expandedItemsGenerator(true);
  const ControlledExpandableTableWithCustomRowExample = () => {
    const [expandedRows, setExpandedRows] = useState<string[]>(['row3']);
    const toggleExpand = (rowId: string) => {
      const isAlreadyExpanded = expandedRows.includes(rowId);
      if (isAlreadyExpanded) {
        return setExpandedRows(expandedRows.filter((row) => row !== rowId));
      }
      return setExpandedRows([...expandedRows, rowId]);
    };
    return (
      <FlexTable>
        <FlexTable.HeaderRow>
          <FlexTable.Header columnId="column1">Header 1</FlexTable.Header>
          <FlexTable.Header columnId="column2">Header 2</FlexTable.Header>
          <FlexTable.Header columnId="column3">Header 3</FlexTable.Header>
          <FlexTable.Header
            columnId={FlexTable.CONSTANTS.COLUMN_ID_EXPAND}
            {...ICON_COLUMN_DEFAULT_FLEX_PROPS}
          />
        </FlexTable.HeaderRow>

        <ExpandRow>
          <FlexTable.Cell columnId="column1">Disabled</FlexTable.Cell>
          <FlexTable.Cell columnId="column2">Disabled</FlexTable.Cell>
          <FlexTable.Cell columnId="column3">Disabled</FlexTable.Cell>
        </ExpandRow>

        <ExpandRow
          expandItems={expandItemsText}
          expanded={expandedRows.includes('row2')}
          toggleExpand={() => toggleExpand('row2')}
        >
          <FlexTable.Cell columnId="column1">Expandable</FlexTable.Cell>
          <FlexTable.Cell columnId="column2">Expandable</FlexTable.Cell>
          <FlexTable.Cell columnId="column3">Expandable</FlexTable.Cell>
        </ExpandRow>

        <ExpandRow
          expandItems={expandItemsText}
          expanded={expandedRows.includes('row3')}
          toggleExpand={() => toggleExpand('row3')}
        >
          <FlexTable.Cell columnId="column1">Expandable with initial state</FlexTable.Cell>
          <FlexTable.Cell columnId="column2">Expandable with initial state</FlexTable.Cell>
          <FlexTable.Cell columnId="column3">Expandable with initial state</FlexTable.Cell>
        </ExpandRow>

        <ExpandRow
          expandItems={expandItemsComponents}
          expanded={expandedRows.includes('row4')}
          toggleExpand={() => toggleExpand('row4')}
        >
          <FlexTable.Cell columnId="column1">Expandable component items</FlexTable.Cell>
          <FlexTable.Cell columnId="column2">Expandable component items</FlexTable.Cell>
          <FlexTable.Cell columnId="column3">Expandable component items</FlexTable.Cell>
        </ExpandRow>

        <ExpandRow
          expandItems={expandItemsText}
          expandChildren={expandChildrenComponents}
          expanded={expandedRows.includes('row5')}
          toggleExpand={() => toggleExpand('row5')}
        >
          <FlexTable.Cell columnId="column1">Expandable with children</FlexTable.Cell>
          <FlexTable.Cell columnId="column2">Expandable with children</FlexTable.Cell>
          <FlexTable.Cell columnId="column3">Expandable with children</FlexTable.Cell>
        </ExpandRow>
      </FlexTable>
    );
  };

  return <ControlledExpandableTableWithCustomRowExample />;
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
