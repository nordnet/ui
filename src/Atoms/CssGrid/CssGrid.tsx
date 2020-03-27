import React from 'react';
import R from 'ramda';
import styled, { css, withTheme } from 'styled-components';
import { Theme } from '../../theme/theme.types';
import {
  Props,
  Gutter,
  TemplateColumn,
  TemplateRow,
  ItemProps,
  AreaInfo,
  Size,
} from './CssGrid.types';
import { isUndefined, assert } from '../../common/utils';
import { getAreasInfo, getMsRawTemplateColumnOrRowStyles } from './utils';

const formatAreas = (areas: Props['areas']) =>
  areas
    .map(areaRow => areaRow.join(' '))
    .map(area => `"${area}"`)
    .join(' ');

const isNumber = (x: any): x is number => x === parseInt(x, 10);
const isArrayOfStrings = (xs: any[]): xs is string[] => xs.every(x => typeof x === 'string');
const isSupportedCssValue = (s: string) => {
  const stringS = `${s}`;

  return !(stringS.includes('minmax') || stringS.includes('repeat') || stringS.includes('('));
};

const getGutterStyles = (props: { gutter: Gutter; theme: Theme }) => {
  const { gutter, theme } = props;
  const equalGaps = (value: number) => `grid-gap: ${theme.spacing.unit(value)}px;`;

  if (isNumber(gutter)) {
    return equalGaps(gutter);
  }

  const { col, row } = gutter;

  if (col && row && col === row) {
    return equalGaps(gutter.col);
  }

  return `
    ${col ? `column-gap: ${theme.spacing.unit(col)}px;` : ''};
    ${row ? `row-gap: ${theme.spacing.unit(row)}px;` : ''};
  `;
};

const getTemplateColumns = (props: { templateColumns?: TemplateColumn; size: Size }): string => {
  const { templateColumns, size } = props;
  const oneColSize = 100 / 12;

  if (isUndefined(templateColumns)) {
    assert(
      false,
      `CssGrid: It seems like you don't have templateColumns specified for '${size ||
        'default'}' size. This may lead to some weird IE11 bugs.`,
      { level: 'warn' },
    );
    return '';
  }

  if (isArrayOfStrings(templateColumns)) {
    assert(
      templateColumns.every(isSupportedCssValue),
      `CssGrid: Probably unsupported css value used in templateColumns for ${size ||
        'default'}. This will cause some IE11 bugs.`,
      { level: 'warn' },
    );
    return `grid-template-columns: ${templateColumns.join(' ')};`;
  }

  return `grid-template-columns: ${templateColumns
    .map((x: number) => `${x * oneColSize}fr`)
    .join(' ')};`;
};

const getTemplateRows = (props: { templateRows?: TemplateRow; size: Size }): string => {
  const { templateRows, size } = props;

  if (isUndefined(templateRows)) {
    assert(
      false,
      `CssGrid: It seems like you don't have templateRows specified for '${size ||
        'default'}' size. This will definitely cause some weird IE11 bugs. Please check and fix`,
      { level: 'warn' },
    );
    return '';
  }

  assert(
    templateRows.every(isSupportedCssValue),
    `CssGrid: Probably unsupported css value used in templateRows for ${size ||
      'default'}. This will cause some IE11 bugs.`,
    { level: 'warn' },
  );
  return `grid-template-rows: ${templateRows.join(' ')};`;
};

const generateMSGridStyles = ({
  gutter,
  columns,
  rows,
  areas,
  templateColumnStyles,
  templateRowsStyles,
  theme,
}: {
  gutter: Gutter;
  columns: TemplateColumn | undefined;
  rows: string[] | undefined;
  areas: string[][] | undefined;
  templateColumnStyles: string;
  templateRowsStyles: string;
  theme: Theme;
}): string => {
  const styles = [`display: -ms-grid;`];
  const columnsInAreas = R.path([0, 'length'], areas);
  const rowsInAreas = R.path(['length'], areas);
  const isGutterPresented = !isUndefined(gutter);
  const isColumnsPresented = !isUndefined(columns);
  const isRowsPresented = !isUndefined(rows);

  if (!isGutterPresented) {
    if (!isColumnsPresented && !isRowsPresented) {
      // Simplest case just return initial display: -ms-grid
      return styles.join('\n');
    }
    if (isColumnsPresented) {
      styles.push(`-ms-grid-columns: ${templateColumnStyles};`);
    }
    if (isRowsPresented) {
      styles.push(`-ms-grid-rows: ${templateRowsStyles};`);
    }
    return styles.join('\n');
  }

  if (isGutterPresented) {
    // eslint-disable-next-line no-nested-ternary
    const rowGutter = isNumber(gutter)
      ? `${theme.spacing.unit(gutter)}px`
      : isNumber(gutter.row)
      ? `${theme.spacing.unit(gutter.row)}px`
      : gutter.row;

    // eslint-disable-next-line no-nested-ternary
    const colGutter = isNumber(gutter)
      ? `${theme.spacing.unit(gutter)}px`
      : isNumber(gutter.col)
      ? `${theme.spacing.unit(gutter.col)}px`
      : gutter.col;

    if (isRowsPresented) {
      const rawTemplateRowsStyles = templateRowsStyles
        .replace('grid-template-rows: ', '')
        .replace(';', '');
      /**
       * Here we suppose that grid-template-rows value is
       * space-separated set of css units
       * @todo verify this hypothesis
       */
      const msGridRowsStyles = getMsRawTemplateColumnOrRowStyles(rawTemplateRowsStyles, rowGutter);
      const msGridRows = `-ms-grid-rows: ${msGridRowsStyles};`;
      styles.push(msGridRows);
    } else {
      const msGridRowsStyles = new Array(rowsInAreas).fill('1fr').join(` ${rowGutter} `);
      const msGridRows = `-ms-grid-rows: ${msGridRowsStyles};`;
      styles.push(msGridRows);
    }

    if (isColumnsPresented) {
      const rawTemplateColumnStyles = templateColumnStyles
        .replace('grid-template-columns: ', '')
        .replace(';', '');
      /**
       * Here we suppose that grid-template-rows value is
       * space-separated set of css units
       * @todo verify this hypothesis
       */
      const msGridColumnsStyles = getMsRawTemplateColumnOrRowStyles(
        rawTemplateColumnStyles,
        colGutter,
      );
      const msGridColumns = `-ms-grid-columns: ${msGridColumnsStyles};`;
      styles.push(msGridColumns);
    } else {
      const msGridColumnsStyles = new Array(columnsInAreas).fill('1fr').join(` ${rowGutter} `);
      const msGridColumns = `-ms-grid-columns: ${msGridColumnsStyles};`;
      styles.push(msGridColumns);
    }
    return styles.join('\n');
  }

  return styles.join('\n');
};

const StyledDiv = styled.div<Props>`
  display: grid;
  box-sizing: border-box;

  ${props => {
    const { sm, md, lg, xl } = props;
    const createStyles = (innerProps: Partial<Props>, size?: Size) => {
      const { height, areas, templateRows, templateColumns } = innerProps;
      const gutter = isUndefined(innerProps.gutter)
        ? props.theme.spacing.gutter
        : innerProps.gutter;
      const templateColumnStyles =
        getTemplateColumns({
          ...innerProps,
          templateColumns,
          size,
        }) || '';
      const templateRowsStyles =
        getTemplateRows({
          ...innerProps,
          templateRows,
          size,
        }) || '';
      const baseStyles = `
          ${height ? `height: ${height};` : ''}
          ${areas ? `grid-template-areas: ${formatAreas(areas)};` : ''}
          ${templateRowsStyles}
          ${templateColumnStyles}
          ${getGutterStyles({ ...innerProps, gutter, theme: props.theme }) || ''}
          ${generateMSGridStyles({
            gutter,
            columns: templateColumns,
            rows: templateRows,
            areas,
            templateColumnStyles,
            templateRowsStyles,
            theme: props.theme,
          })}
        `;

      return size
        ? `
            ${props.theme.media.greaterThan(props.theme.breakpoints[size])} {
              ${baseStyles}
            }
          `
        : `
            ${baseStyles}
          `;
    };

    const styles = Object.entries({ sm, md, lg, xl })
      .filter(([_, sizeProps]) => sizeProps !== undefined)
      .map(([size, sizeProps]) => createStyles(sizeProps!, size as Size));
    styles.unshift(createStyles(props, undefined));
    return styles.join('\n');
  }}
` as React.FC<Props>;

const getMsJustifySelfStyles = (justify: ItemProps['justify']) =>
  `-ms-grid-column-align: ${justify};`;

const getMsAlignSelfStyles = (align: ItemProps['align']) => `-ms-grid-row-align: ${align};`;

const getJustifySelfStyles = (justify: ItemProps['justify']) =>
  justify
    ? `
  justify-self: ${justify};
  ${getMsJustifySelfStyles(justify)}
`
    : '';

const getAlignSelfStyles = (align: ItemProps['align']) =>
  align
    ? `
  align-self: ${align};
  ${getMsAlignSelfStyles(align)}
`
    : '';

const getPlaceSelfStyles = (place: ItemProps['place']) => {
  const styles = [];
  if (typeof place === 'string' && place) {
    const [alignOrBoth, justify] = place.split(' ') as [ItemProps['align'], ItemProps['justify']];
    styles.push(`place-self: ${place};`);
    styles.push(getMsAlignSelfStyles(alignOrBoth));
    styles.push(getMsJustifySelfStyles(justify || alignOrBoth));
  }
  return styles.join('\n');
};

const getCssGridItemStylesFromProps = ({
  justify,
  align,
  place,
}: Pick<ItemProps, 'justify' | 'align' | 'place'>) => `
  ${getJustifySelfStyles(justify)}
  ${getAlignSelfStyles(align)}
  ${getPlaceSelfStyles(place)}
`;

const RawCssGridItem = styled.div<ItemProps & { css?: any }>`
  box-sizing: border-box;
  min-width: 0; /* prevents grid blowout */
  ${p => getCssGridItemStylesFromProps(p)}
  ${p =>
    Object.keys(p.theme.breakpoints)
      .filter(breakpoint => p[breakpoint])
      .map(
        breakpoint =>
          `${p.theme.media.greaterThan(p.theme.breakpoints[breakpoint])} {
          ${getCssGridItemStylesFromProps(p[breakpoint])}
        }`,
      )
      .join('\n')}
`;

export const CssGridItem: React.FC<ItemProps> = ({
  align,
  area,
  children,
  justify,
  place,
  sm,
  md,
  lg,
  xl,
}) => <RawCssGridItem {...{ align, area, children, justify, place, sm, md, lg, xl }} />;
CssGridItem.displayName = 'CssGrid.Item';

const generateChildStyles = (areasInfo: Record<string, AreaInfo>, size: Size, theme: Theme) => (
  areaName: string,
): string => {
  const styles = [];
  if (!areasInfo[areaName]) {
    styles.push('display: none; grid-area: none;');
  } else {
    const info = areasInfo[areaName];
    styles.push(`-ms-grid-row: ${info.rowStart};`, `-ms-grid-column: ${info.colStart};`);
    styles.push(`-ms-grid-column-span: ${info.colSpan};`);
    styles.push(`-ms-grid-row-span: ${info.rowSpan};`);
    styles.push(`display: block; grid-area: ${areaName};`);
  }

  // prettier-ignore
  return size
    ? `
    ${theme.media.greaterThan(theme.breakpoints[size])} {
      ${styles.join('\n')}
    }
    `
    : styles.join('\n');
};

const RawCSSGridContainer: React.FC<Props & { theme: Theme }> = ({ theme, children, ...props }) => {
  const { sm, md, lg, xl } = props;

  type SizeAreaTuple = [undefined | Size, { areas: Props['areas'] }];
  const stylesFnsForChild = React.useMemo(
    () =>
      ([
        [undefined, { areas: props.areas } as any],
        ['sm', sm],
        ['md', md],
        ['lg', lg],
        ['xl', xl],
      ] as SizeAreaTuple[])
        .filter(([_, sizeProps]) => sizeProps !== undefined)
        .map(([size], currentSizeIdx, allSizes) => {
          const currentAreas = allSizes
            .slice(0, currentSizeIdx + 1)
            .reverse()
            .find(([_, sizeProps]) => !isUndefined(sizeProps.areas));

          return generateChildStyles(
            getAreasInfo(currentAreas![1].areas, { col: true, row: true }),
            size as Size,
            theme,
          );
        }),
    [sm, md, lg, xl, props.areas, theme],
  );

  const stylesFnForChild = (areaName: string) => stylesFnsForChild.map(f => f(areaName)).join('\n');

  const renderedChildren = React.Children.map<JSX.Element | null, React.ReactElement<ItemProps>>(
    children as any,
    (child, childIndex) => {
      if (!child) {
        assert(
          false,
          `CssGrid: It seems like you have null-ish children[${childIndex}]. \nIf you wanted to do a conditional rendering, do so with areas prop on CssGrid.Container`,
          { level: 'warn' },
        );
        return null;
      }

      return (
        // @ts-ignore
        <RawCssGridItem
          {...child.props}
          css={
            css`
              ${stylesFnForChild(child.props.area)}
            ` as any
          }
        />
      );
    },
  );

  return <StyledDiv {...props}>{renderedChildren}</StyledDiv>;
};
export const CssGridContainer = withTheme(RawCSSGridContainer);
CssGridContainer.displayName = 'CssGrid.Container';

export const CssGrid = { Container: CssGridContainer, Item: CssGridItem };
