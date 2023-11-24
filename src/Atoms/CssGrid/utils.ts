import R from 'ramda';
import { AreaInfo } from './CssGrid.types';

const minimal = R.reduce(R.min, Infinity);
const maximal = R.reduce(R.max, -Infinity);
const spacesNotInsideParentheses = /\s+(?=[^)]*([(]|$))/g;

/**
 * Calculate info for areas:
 * id: unique id for area name
 * rowStart: on which row area starts (1...)
 * rowSpan: how many rows area takes (1...)
 * colStart: on which column area starts (1...)
 * colSpan: how many columns area takes (1...)
 * IE11 likes explicitness A LOT
 */
export const getAreasInfo = (
  areas: string[][],
  isGapPresented: { row: boolean; col: boolean },
): Record<string, AreaInfo> => {
  const size = {
    col: areas[0].length,
    row: areas.length,
  };
  const flatAreas = R.flatten(areas) as unknown as string[];

  const areaNames = R.uniq(flatAreas);

  const areaInfos = Object.values(
    flatAreas.reduce((acc, areaName, idx) => {
      if (!acc[areaName])
        acc[areaName] = {
          coordinates: [],
          id: R.indexOf(areaName, areaNames) + 1,
          name: areaName,
        };
      const row = Math.trunc(idx / size.col);
      const col = Math.trunc(idx % size.col);
      // 3 elements in column
      // idx = 3
      acc[areaName].coordinates.push({ row, col });

      return acc;
    }, {}),
  );

  return (areaInfos as any).reduce(
    (
      acc: Record<string, AreaInfo>,
      area: { coordinates: Array<{ row: number; col: number }>; name: string; id: number },
    ) => {
      const { coordinates, name, id } = area;
      const rows = coordinates?.map(R.prop('row'));
      const cols = coordinates?.map(R.prop('col'));
      let rowStart = minimal(rows) as number;
      let rowSpan = (maximal(rows) as number) - rowStart;
      if (isGapPresented.row) {
        rowSpan *= 2;
        rowStart *= 2;
      }
      let colStart = minimal(cols) as number;
      let colSpan = (maximal(cols) as number) - colStart;
      if (isGapPresented.col) {
        colSpan *= 2;
        colStart *= 2;
      }

      acc[name] = {
        id,
        rowStart: rowStart + 1,
        rowSpan: rowSpan + 1,
        colStart: colStart + 1,
        colSpan: colSpan + 1,
      };
      return acc;
    },
    {} as Record<string, AreaInfo>,
  );
};

export const getMsRawTemplateColumnOrRowStyles = (raw: string, gutter: string) => {
  return raw.replace(spacesNotInsideParentheses, ` ${gutter} `);
};
