import { AreaName } from '../../Container/CssGrid/CssGridContainer.types';

export type Props = {
  area: AreaName;
  justify?: 'start' | 'end' | 'center' | 'stretch';
  align?: 'start' | 'end' | 'center' | 'stretch';
  place?: string;
};
