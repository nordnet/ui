import React, { useMemo } from 'react';
import R from 'ramda';
import styled, { css, withTheme } from 'styled-components';
import { motion } from 'framer-motion';
import { Theme } from '../../theme/theme.types';
import {
  AreaInfo,
  Gutter,
  GridItemProps,
  Size,
  GridContainerAnimatedProps,
  TemplateColumn,
  TemplateRow,
  GridItemAnimatedProps,
  GridContainerProps,
} from './CssGrid.types';
import { assert, isUndefined } from '../../common/utils';
import { getAreasInfo, getMsRawTemplateColumnOrRowStyles, getPosition } from './utils';

const formatAreas = (areas: GridContainerAnimatedProps['areas']) =>
  areas
    ?.map((areaRow) => areaRow.join(' '))
    ?.map((area) => `"${area}"`)
    .join(' ');

const isNumber = (x: any): x is number => x === parseInt(x, 10);
const isArrayOfStrings = (xs: any[]): xs is string[] => xs.every((x) => typeof x === 'string');

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
    column-gap: ${theme.spacing.unit(col)}px;
    row-gap: ${theme.spacing.unit(row)}px;
  `;
};

const getTemplateColumns = (props: { templateColumns?: TemplateColumn; size: Size }): string => {
  const { templateColumns } = props;
  const oneColSize = 100 / 12;

  if (isUndefined(templateColumns)) {
    return '';
  }

  if (isArrayOfStrings(templateColumns)) {
    return `grid-template-columns: ${templateColumns.join(' ')};`;
  }

  return `grid-template-columns: ${templateColumns
    ?.map((x: number) => `${x * oneColSize}fr`)
    .join(' ')};`;
};

const getTemplateRows = (props: { templateRows?: TemplateRow; size: Size }): string => {
  const { templateRows } = props;

  if (isUndefined(templateRows)) {
    return '';
  }

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

const styledDivCss = css<GridContainerAnimatedProps | GridContainerProps>`
  display: grid;
  box-sizing: border-box;

  ${(props) => {
    const { sm, md, lg, xl } = props;
    const createStyles = (innerProps: Partial<GridContainerAnimatedProps>, size?: Size) => {
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
      ?.map(([size, sizeProps]) => createStyles(sizeProps!, size as Size));
    styles.unshift(createStyles(props, undefined));
    return styles.join('\n');
  }}
`;

const StyledMotionDiv = styled(motion.div)<GridContainerAnimatedProps>`
  ${styledDivCss}
`;

const StyledDiv = styled.div<GridContainerProps>`
  ${styledDivCss}
`;

const getMsJustifySelfStyles = (justify: GridItemProps['justify']) =>
  `-ms-grid-column-align: ${justify};`;

const getMsAlignSelfStyles = (align: GridItemProps['align']) => `-ms-grid-row-align: ${align};`;

const getJustifySelfStyles = (justify: GridItemProps['justify']) =>
  justify
    ? `
  justify-self: ${justify};
  ${getMsJustifySelfStyles(justify)}
`
    : '';

const getAlignSelfStyles = (align: GridItemProps['align']) =>
  align
    ? `
  align-self: ${align};
  ${getMsAlignSelfStyles(align)}
`
    : '';

const getPlaceSelfStyles = (place: GridItemProps['place']) => {
  const styles = [];
  if (typeof place === 'string' && place) {
    const [alignOrBoth, justify] = place.split(' ') as [
      GridItemProps['align'],
      GridItemProps['justify'],
    ];
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
}: Pick<GridItemProps, 'justify' | 'align' | 'place'>) => `
  ${getJustifySelfStyles(justify)}
  ${getAlignSelfStyles(align)}
  ${getPlaceSelfStyles(place)}
`;

const hasAnimatedProps = (props: any): props is GridContainerAnimatedProps => {
  return (
    (props as GridContainerAnimatedProps).staggerChildren !== undefined ||
    (props as GridContainerAnimatedProps).staggerDirection !== undefined ||
    (props as GridContainerAnimatedProps).variants !== undefined
  );
};

const hasRegularContainerProps = (props: any): props is GridContainerProps => {
  return (props as GridContainerProps).areas !== undefined;
};

const GridItemCss = css<GridItemProps & { css?: any }>`
  box-sizing: border-box;
  min-width: 0; /* prevents grid blowout */
  ${(p) => getCssGridItemStylesFromProps(p)}
  ${(p) =>
    Object.keys(p.theme.breakpoints)
      .filter((breakpoint) => p[breakpoint])
      ?.map(
        (breakpoint) =>
          `${p.theme.media.greaterThan(p.theme.breakpoints[breakpoint])} {
          ${getCssGridItemStylesFromProps(p[breakpoint])}
        }`,
      )
      .join('\n')}
`;

const RawCssGridItemMotion = styled(motion.div)`
  ${GridItemCss}
`;

const RawCssGridItemDiv = styled.div`
  ${GridItemCss}
`;

export const CssGridItem: React.FC<GridItemAnimatedProps> = ({
  align,
  area,
  children,
  variants,
  duration,
  justify,
  isStaggered,
  place,
  sm,
  md,
  lg,
  xl,
}) => {
  let itemVariants = variants;
  if (isStaggered && !variants) {
    itemVariants = {
      hidden: { opacity: 0 },
      show: { opacity: 1, transition: { duration: duration ?? 0.5 } },
    };
  }

  return itemVariants ? (
    <RawCssGridItemMotion
      variants={itemVariants}
      {...{
        align,
        area,
        children,
        justify,
        place,
        sm,
        md,
        lg,
        xl,
      }}
    >
      {children}
    </RawCssGridItemMotion>
  ) : (
    <RawCssGridItemDiv
      {...{
        align,
        area,
        children,
        justify,
        place,
        sm,
        md,
        lg,
        xl,
      }}
    >
      {children}
    </RawCssGridItemDiv>
  );
};

CssGridItem.displayName = 'CssGrid.Item';

const generateChildStyles =
  (areasInfo: Record<string, AreaInfo>, size: Size, theme: Theme) =>
  (areaName: string): string => {
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

const RawCSSGridContainer: React.FC<
  (GridContainerAnimatedProps | GridContainerProps) & { theme: Theme }
> = ({ children, theme, ...props }) => {
  const { sm, md, lg, xl } = props;
  const hasAnimatedContainerProps = hasAnimatedProps(props);

  type SizeAreaTuple = [undefined | Size, { areas: GridContainerAnimatedProps['areas'] }];
  const stylesFnsForChild = useMemo(
    () =>
      (
        [
          [undefined, { areas: props.areas } as any],
          ['sm', sm],
          ['md', md],
          ['lg', lg],
          ['xl', xl],
        ] as SizeAreaTuple[]
      )
        .filter(([_, sizeProps]) => sizeProps !== undefined)
        ?.map(([size], currentSizeIdx, allSizes) => {
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

  const stylesFnForChild = (areaName: string) =>
    stylesFnsForChild?.map((f) => f(areaName)).join('\n');
  let variants;

  if (hasAnimatedContainerProps) {
    if (props.staggerChildren) {
      variants = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: props.staggerChildren,
          },
        },
      };
    } else if (props.variants) {
      variants = props.variants;
    }
  }
  // Flatten the props.areas array into a 1D array
  const areaOrder = props.areas.flat();

  const sortedChildren = hasAnimatedContainerProps
    ? React.Children.toArray(children).sort((a, b) => {
        if (React.isValidElement(a) && React.isValidElement(b)) {
          let aIndex;
          let bIndex;

          if (props.staggerDirection === 'column') {
            const aPosition = getPosition(a.props.area, props.areas);
            const bPosition = getPosition(b.props.area, props.areas);
            aIndex = aPosition ? aPosition.column * props.areas.length + aPosition.row : -1;
            bIndex = bPosition ? bPosition.column * props.areas.length + bPosition.row : -1;
          } else {
            aIndex = areaOrder.indexOf(a.props.area);
            bIndex = areaOrder.indexOf(b.props.area);
          }

          return aIndex - bIndex;
        }
        return 0;
      })
    : React.Children.toArray(children);

  const renderedChildren = sortedChildren.map<React.ReactElement<GridItemProps> | null>(
    (child, childIndex) => {
      if (!React.isValidElement(child)) {
        assert(
          false,
          `CssGrid: It seems like you have null-ish children[${childIndex}]. \nIf you wanted to do a conditional rendering, do so with areas prop on CssGrid.Container`,
          { level: 'warn' },
        );
        return null;
      }

      let itemVariants = child.props.variants;
      if (hasAnimatedContainerProps && props.staggerChildren && !child.props.variants) {
        itemVariants = {
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { duration: child.props.duration ?? 0.5 } },
        };
      }

      return itemVariants ? (
        <RawCssGridItemMotion
          {...child.props}
          variants={itemVariants}
          isStaggered={hasAnimatedContainerProps && props.staggerChildren}
          css={
            css`
              ${stylesFnForChild(child.props.area)}
            ` as any
          }
        />
      ) : (
        <RawCssGridItemDiv
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

  return hasAnimatedProps(props) ? (
    <StyledMotionDiv initial="hidden" animate="show" variants={variants} {...props}>
      {renderedChildren}
    </StyledMotionDiv>
  ) : (
    hasRegularContainerProps(props) && <StyledDiv {...props}>{renderedChildren}</StyledDiv>
  );
};

export const CssGridContainer: React.FC<GridContainerAnimatedProps | GridContainerProps> =
  withTheme(RawCSSGridContainer);
CssGridContainer.displayName = 'CssGrid.Container';

export const CssGrid = { Container: CssGridContainer, Item: CssGridItem };
