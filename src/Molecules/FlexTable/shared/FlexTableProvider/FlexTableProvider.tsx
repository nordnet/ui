import React from 'react';
import { FlexTableContextProps, FlexTableProviderProps } from './FlexTableProvider.types';

export const FlexTableContext = React.createContext<FlexTableContextProps>(undefined);

export const FlexTableProvider = ({
  children,
  id,
  density,
  columnDistance,
  expandable,
  fontSize,
  stickyHeader,
  persistSortingOrder,
  sm,
  md,
  lg,
  xl,
}: FlexTableProviderProps) => (
  <FlexTableContext.Provider
    value={{
      id,
      density,
      columnDistance,
      stickyHeader,
      fontSize,
      expandable,
      persistSortingOrder,
      sm,
      md,
      lg,
      xl,
    }}
  >
    {children}
  </FlexTableContext.Provider>
);
