import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';

export const BankDeposit = (props: BaseProps) => {
  return (
    <IconBase {...props} viewBox="0 0 34 36">
      <path d="M24.076 23.25l2.829 2.828-1.061 1.06-1.768-1.767-5.655 5.655 2.827 2.826 2.477-2.477 1.064 1.064-3.538 3.538-4.951-4.951 7.776-7.776zm4.95-4.95l4.947 4.947-7.778 7.779-2.826-2.827 1.058-1.058 1.769 1.77 5.66-5.66-2.827-2.827-2.474 2.473-1.063-1.063 3.534-3.534zM18.484 26l-2 2H1v-2h17.484zM5 11v13H3V11h2zm15 0v13h-2V11h2zm-5 0v13h-2V11h2zm-5 0v13H8V11h2zm15 0v8.484l-2 2V11h2zM14 0l.707.353L27.999 7H28v2H0V7l.34-.17L12.903.549 14 0v.001V0zM14 2.236L4.472 7h19.054l-9.527-4.764z" />
    </IconBase>
  );
};

BankDeposit.displayName = 'Icon.BankDeposit';
