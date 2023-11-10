import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { RowComponent } from './Row.types';
import { Flexbox } from '../../..';
import { ColorFn } from '../../../common/Types';
import { useFlexTable } from '../shared/FlexTableProvider';
import { ExpandElement, ExpandItem, ExpandItems, ExpandRow } from './components';
import { Theme } from '../../../theme/theme.types';
import { getStylesForSizes } from '../shared';
import { assert } from '../../../common/utils';

const getExpandableStyles = (
  p: { expandable: boolean; expanded: boolean; hideSeparator: boolean; separatorColor: ColorFn } & {
    theme: Theme;
  },
) => `
  padding-left: ${p.expandable ? p.theme.spacing.unit(2) : 0}px;
  border-left: ${p.theme.spacing.unit(0.5)}px solid ${
  p.expanded && p.expandable ? p.theme.color.cta : 'transparent'
};
   
 ${(() => {
   if (p.hideSeparator) {
     return '';
   }
   if (p.expandable && p.expanded) {
     return '';
   }
   return `border-bottom: 1px solid ${p.separatorColor(p.theme)};`;
 })()}

 & > * {
  &:first-child {
    padding-left: 0;
  }
  ${!p.expandable ? '&:nth-last-child(2) { padding-right: 0; }' : ''}
 }
`;

type ScreenSizeConfigurableProps = { expandable: boolean };

type StyledRowProps = {
  $hideSeparator: boolean;
  $expanded: boolean;
  $separatorColor: ColorFn;
  $hoverHighlight: boolean;
  $clickRowToExpand: boolean;
  $xs: ScreenSizeConfigurableProps;
  $sm: Partial<ScreenSizeConfigurableProps>;
  $md: Partial<ScreenSizeConfigurableProps>;
  $lg: Partial<ScreenSizeConfigurableProps>;
  $xl: Partial<ScreenSizeConfigurableProps>;
};
/* the cells are padded by row gap 1 unit (4px) */
const StyledRow = styled(Flexbox)<StyledRowProps>`
  background: ${(p) => p.theme.color.tableRowBackground};
  ${(p) =>
    p.$hoverHighlight &&
    !p.$expanded &&
    `&:hover {
      background: ${p.theme.color.tableRowHover};
    }`}
  margin-right: 0;
  margin-left: 0;
  cursor: ${({ $clickRowToExpand }) => ($clickRowToExpand ? 'pointer' : 'auto')};

  ${getStylesForSizes<
    {
      expanded: StyledRowProps['$expanded'];
      hideSeparator: StyledRowProps['$hideSeparator'];
      separatorColor: StyledRowProps['$separatorColor'];
    },
    ScreenSizeConfigurableProps
  >(
    (p: StyledRowProps) => ({
      expanded: p.$expanded,
      hideSeparator: p.$hideSeparator,
      separatorColor: p.$separatorColor,
      xs: p.$xs,
      sm: p.$sm,
      md: p.$md,
      lg: p.$lg,
      xl: p.$xl,
    }),
    {
      expandable: getExpandableStyles,
    },
  )}
`;

const Row: RowComponent = ({
  className,
  expanded,
  initiallyExpanded = false,
  hoverHighlight = true,
  hideSeparator = false,
  clickRowToExpand = false,
  rowType = 'content',
  separatorColor = (theme) => theme.color.divider,
  onExpandToggle,
  expandChildren,
  expandItems,
  children,
  ...htmlProps
}) => {
  if (clickRowToExpand && 'onClick' in htmlProps) {
    assert(
      false,
      'FlexTable.Row: You can not use clickRowToExpand in combination with a custom onClick function',
    );
  }

  const {
    xs: xsRow,
    sm: smRow,
    md: mdRow,
    lg: lgRow,
    xl: xlRow,
  } = useFlexTable<'expandable'>('expandable');
  const {
    xs: xsFlexbox,
    sm: smFlexbox,
    md: mdFlexbox,
    lg: lgFlexbox,
    xl: xlFlexbox,
  } = useFlexTable<'columnDistance'>('columnDistance');

  const controlledExpand = expanded !== undefined;
  const [expand, setExpand] = useState(controlledExpand ? expanded : initiallyExpanded);

  const onExpandToggleClick = () => {
    if (onExpandToggle) {
      onExpandToggle(!expand);
    }
    if (!controlledExpand) {
      setExpand(!expand);
    }
  };

  useEffect(() => {
    if (controlledExpand) {
      setExpand(expanded);
    }
  }, [controlledExpand, expanded]);

  return (
    <>
      <StyledRow
        container
        role="row"
        className={className}
        alignItems="center"
        $expanded={!!expand}
        $hideSeparator={hideSeparator}
        $hoverHighlight={hoverHighlight}
        $separatorColor={separatorColor}
        $clickRowToExpand={clickRowToExpand}
        $xs={xsRow}
        $sm={smRow}
        $md={mdRow}
        $lg={lgRow}
        $xl={xlRow}
        gap={xsFlexbox?.columnDistance}
        sm={{ gap: smFlexbox?.columnDistance }}
        md={{ gap: mdFlexbox?.columnDistance }}
        lg={{ gap: lgFlexbox?.columnDistance }}
        xl={{ gap: xlFlexbox?.columnDistance }}
        onClick={clickRowToExpand ? onExpandToggleClick : undefined}
        {...htmlProps}
      >
        {children}
        <ExpandElement
          rowType={rowType}
          expanded={expand}
          onExpandToggle={onExpandToggleClick}
          disabled={!expandChildren && !expandItems}
          setExpand={setExpand}
        />
      </StyledRow>
      {expand && (
        <ExpandRow
          expandItems={expandItems}
          expandChildren={expandChildren}
          separatorColor={separatorColor}
        />
      )}
    </>
  );
};

Row.ExpandItem = ExpandItem;
Row.ExpandItems = ExpandItems;
Row.ExpandRow = ExpandRow;

export default Row;
