import React from 'react';
import { IconBase } from '../IconBase';
import { BaseProps } from '../IconBase.types';

export const AddWithCircle = (props: BaseProps) => {
  return (
    <IconBase {...props}>
      <path d="M12,0 C18.627417,0 24,5.372583 24,12 C24,18.627417 18.627417,24 12,24 C5.372583,24 0,18.627417 0,12 C0,5.372583 5.372583,0 12,0 Z M12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 Z M13,4 L13,11 L20,11 L20,13 L13,13 L13,20 L11,20 L11,12.999 L4,13 L4,11 L11,10.999 L11,4 L13,4 Z" />
    </IconBase>
  );
};

AddWithCircle.displayName = 'Icon.AddWithCircle';
