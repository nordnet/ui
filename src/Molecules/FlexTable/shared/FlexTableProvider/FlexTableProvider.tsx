import React from 'react';
import { FlexTableContextProps, FlexTableProviderComponent } from './FlexTableProvider.types';

export const FlexTableContext = React.createContext<FlexTableContextProps>(undefined);

export const FlexTableProvider: FlexTableProviderComponent = ({
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
}) => (
  <FlexTableContext.Provider
    // eslint-disable-next-line react/jsx-no-constructed-context-values
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
