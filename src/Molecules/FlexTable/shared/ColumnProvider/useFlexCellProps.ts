import { useContext } from 'react';
import { FlexPropsType } from '../shared.types';
import { FlexLayoutContext } from './ColumnProvider';

export const useFlexCellProps = (props: { columnId: string } & Partial<FlexPropsType>) => {
  const { getColumnFlexProps } = useContext(FlexLayoutContext);
  return getColumnFlexProps(props);
};
