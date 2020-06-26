import { useContext } from 'react';
import { FlexTableContext } from './FlexTableProvider';
import { FlexTableState } from './FlexTableProvider.types';

export const useFlexTable = (): FlexTableState => {
  const contextData = useContext(FlexTableContext);
  if (contextData === undefined) {
    throw Error('No FlexTable provider, FlexTable rows can only be children of a FlexTable');
  }

  return contextData;
};
