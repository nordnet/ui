import { UseSelectReturnValue } from '@mui/base/useSelect';

export type Props = {
  placeholder?: string;
  value?: string | string[];
  getOptionMetadata: UseSelectReturnValue<string, boolean>['getOptionMetadata'];
};
