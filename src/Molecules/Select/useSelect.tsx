import React, { createContext, useContext } from 'react';
import { UseSelectReturnValue } from '@mui/base/useSelect';

type UseMuiSelectReturnValue = UseSelectReturnValue<string, boolean>;
type GetButtonProps = UseMuiSelectReturnValue['getButtonProps'];
type GetOptionMetadata = UseMuiSelectReturnValue['getOptionMetadata'];
type Value = UseMuiSelectReturnValue['value'];
type UseSelectProps = {
  children: React.ReactNode;
  getButtonProps: GetButtonProps;
  getOptionMetadata: GetOptionMetadata;
  value?: Value;
};

const SelectContext = createContext<
  | {
      getButtonProps: GetButtonProps;
      getOptionMetadata: GetOptionMetadata;
      value?: Value;
    }
  | undefined
>(undefined);

function SelectProvider({ children, getButtonProps, getOptionMetadata, value }: UseSelectProps) {
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <SelectContext.Provider value={{ getButtonProps, getOptionMetadata, value }}>
      {children}
    </SelectContext.Provider>
  );
}

function useSelect() {
  const context = useContext(SelectContext);
  if (context === undefined) {
    throw new Error('useSelect must be used within a SelectProvider');
  }
  return context;
}

export { SelectProvider, useSelect };
export type { UseSelectProps };
