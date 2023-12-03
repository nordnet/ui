import React from 'react';
import styled from 'styled-components';
import FlexTable from '../..';
import { ExpandAreaProps } from '../Row.types';
import { ExpandCell } from '../../Cell/ExpandCell';
import { COLUMN_ID_EXPAND, ICON_COLUMN_DEFAULT_FLEX_PROPS } from '../../shared/constants';
import { useFlexTable } from '../../shared/FlexTableProvider';
import { getStylesForSizes } from '../../shared';
import { Theme } from '../../../../theme/theme.types';

type ScreenSizeConfigurableProps = {
  expandable: boolean;
  columnDistance: number;
};

type StyledExpandCellProps = {
  $xs: ScreenSizeConfigurableProps;
  $sm: Partial<ScreenSizeConfigurableProps>;
  $md: Partial<ScreenSizeConfigurableProps>;
  $lg: Partial<ScreenSizeConfigurableProps>;
  $xl: Partial<ScreenSizeConfigurableProps>;
};

type ExpandItemsProps = ExpandAreaProps & {
  rowType: 'header' | 'content' | 'footer';
  disabled?: boolean;
  setExpand: (expanded: boolean) => void;
};

const getExpandableStyles = ({ expandable }: ScreenSizeConfigurableProps) => {
  if (expandable) {
    return 'display: flex;';
  }
  return 'display: none;';
};

// this negative left margin is to compensate for the padding (right) on the previous cell to prevent misalignment
const getColumnDistanceStyles = (p: ScreenSizeConfigurableProps & { theme: Theme }) => `
  margin-left: ${p.theme.spacing.unit(-p.columnDistance / 2)}px;
`;

const StyledExpandCell = styled(ExpandCell)<StyledExpandCellProps>`
  ${getStylesForSizes<{}, ScreenSizeConfigurableProps>(
    (p: StyledExpandCellProps) => ({
      xs: p.$xs,
      sm: p.$sm,
      md: p.$md,
      lg: p.$lg,
      xl: p.$xl,
    }),
    {
      expandable: getExpandableStyles,
      columnDistance: getColumnDistanceStyles,
    },
  )};
  flex: 0 ${(p) => p.theme.spacing.unit(5)}px;
  ${(p) => p.theme.media.greaterThan(p.theme.breakpoints.md)} {
    flex: 0 ${(p) => p.theme.spacing.unit(10)}px;
  }
`;

export const ExpandElement = ({
  rowType,
  expanded = false,
  onExpandToggle,
  setExpand,
  disabled,
}: ExpandItemsProps) => {
  const { xs, sm, md, lg, xl } = useFlexTable<'expandable' | 'columnDistance'>(
    'expandable',
    'columnDistance',
  );

  const expandProps =
    rowType === 'content'
      ? {
          expanded,
          onClick: () => (onExpandToggle ? onExpandToggle(!expanded) : setExpand(!expanded)),
          disabled,
        }
      : {
          expanded: false,
          as: rowType === 'header' ? FlexTable.Header : FlexTable.Footer,
          onClick: () => {},
        };

  return (
    <StyledExpandCell
      columnId={COLUMN_ID_EXPAND}
      $xs={xs}
      $sm={sm}
      $md={md}
      $lg={lg}
      $xl={xl}
      {...expandProps}
      {...ICON_COLUMN_DEFAULT_FLEX_PROPS}
    />
  );
};
