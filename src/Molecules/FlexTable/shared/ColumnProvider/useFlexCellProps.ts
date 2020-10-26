import { useContext } from 'react';
import { FlexPropsType } from '../shared.types';
import { ColumnLayoutContext } from './ColumnProvider';

export const useFlexCellProps = (props: { columnId: string } & Partial<FlexPropsType>) => {
  const { getColumnFlexProps } = useContext(ColumnLayoutContext);
  return getColumnFlexProps(props);
};
