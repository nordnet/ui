import { getAreasInfo } from './utils';

describe('getAreasInfo', () => {
  test('Areas #1 w/gap ', () => {
    const areas = [
      ['header', 'header', 'header'],
      ['menu', 'content', 'content'],
      ['footer', 'content', 'content'],
    ];

    const isGapPresented = { row: true, col: true };
    const result = getAreasInfo(areas, isGapPresented);
    expect(result).toEqual({
      header: { id: 1, colStart: 1, colSpan: 5, rowStart: 1, rowSpan: 1 },
      menu: { id: 2, colStart: 1, colSpan: 1, rowStart: 3, rowSpan: 1 },
      content: { id: 3, colStart: 3, colSpan: 3, rowStart: 3, rowSpan: 3 },
      footer: { id: 4, colStart: 1, colSpan: 1, rowStart: 5, rowSpan: 1 },
    });
  });

  test('Areas #1 w/o gap', () => {
    const areas = [
      ['header', 'header', 'header'],
      ['menu', 'content', 'content'],
      ['footer', 'content', 'content'],
    ];

    const isGapPresented = { row: false, col: false };
    const result = getAreasInfo(areas, isGapPresented);
    expect(result).toEqual({
      header: { id: 1, colStart: 1, colSpan: 3, rowStart: 1, rowSpan: 1 },
      menu: { id: 2, colStart: 1, colSpan: 1, rowStart: 2, rowSpan: 1 },
      content: { id: 3, colStart: 2, colSpan: 2, rowStart: 2, rowSpan: 2 },
      footer: { id: 4, colStart: 1, colSpan: 1, rowStart: 3, rowSpan: 1 },
    });
  });

  test('Areas #2 w/o gap', () => {
    const areas = [
      ['left', 'left', 'header'],
      ['left', 'left', 'content'],
      ['left', 'left', 'content'],
    ];

    const isGapPresented = { row: false, col: false };
    const result = getAreasInfo(areas, isGapPresented);
    expect(result).toEqual({
      left: { id: 1, colStart: 1, colSpan: 2, rowStart: 1, rowSpan: 3 },
      header: { id: 2, colStart: 3, colSpan: 1, rowStart: 1, rowSpan: 1 },
      content: { id: 3, colStart: 3, colSpan: 1, rowStart: 2, rowSpan: 2 },
    });
  });
  test('Areas #2 w/gap', () => {
    const areas = [
      ['left', 'left', 'header'],
      ['left', 'left', 'content'],
      ['left', 'left', 'content'],
    ];

    const isGapPresented = { row: true, col: true };
    const result = getAreasInfo(areas, isGapPresented);
    expect(result).toEqual({
      left: { id: 1, colStart: 1, colSpan: 3, rowStart: 1, rowSpan: 5 },
      header: { id: 2, colStart: 5, colSpan: 1, rowStart: 1, rowSpan: 1 },
      content: { id: 3, colStart: 5, colSpan: 1, rowStart: 3, rowSpan: 3 },
    });
  });
  test('Areas #3 w/gap', () => {
    const areas = [
      ['left', 'top', 'messages'],
      ['left', 'top', 'order'],
      ['left', 'top', 'sidebar'],
      ['left', 'top', 'sidebar'],
      ['left', 'content', 'sidebar'],
    ];
    const isGapPresented = { row: true, col: true };

    const result = getAreasInfo(areas, isGapPresented);
    expect(result).toEqual({
      left: { id: 1, colStart: 1, colSpan: 1, rowStart: 1, rowSpan: 9 },
      top: { id: 2, colStart: 3, colSpan: 1, rowStart: 1, rowSpan: 7 },
      messages: { id: 3, colStart: 5, colSpan: 1, rowStart: 1, rowSpan: 1 },
      order: { id: 4, colStart: 5, colSpan: 1, rowStart: 3, rowSpan: 1 },
      sidebar: { id: 5, colStart: 5, colSpan: 1, rowStart: 5, rowSpan: 5 },
      content: { id: 6, colStart: 3, colSpan: 1, rowStart: 9, rowSpan: 1 },
    });
  });
});
