export type ActionTypes =
  | 'Select.Open'
  | 'Select.Close'
  | 'Select.Toggle'
  | 'Select.SelectValue'
  | 'Select.DeselectValue'
  | 'Select.SyncState';

export type ComponentTypes = 'ListItem' | 'List' | 'SelectedValue';
export type Action = { type: ActionTypes; payload?: any };

export type Props = {
  options: Option[];
  value?: any;
  error?: React.ReactNode;
  extraInfo?: React.ReactNode;
  success?: boolean;
  hideLabel?: boolean;
  placeholder?: string;
  label: React.ReactNode;
  name?: string;
  size?: 's' | 'm';
  disabled?: boolean;
  onChange?: (newValue: Option[]) => void;
  onFocus?: React.FocusEventHandler;
  onBlur?: React.FocusEventHandler;
  fullWidth?: boolean;
  width?: string;
  className?: string;
  components?: Partial<
    Record<ComponentTypes, (props: any, ref: React.Ref<any>) => React.ReactNode>
  >;
  reducer?: (state: SelectState, action: Action) => SelectState;
  initialState?: any;
  /** use this flag if you
   * are using dropdown not
   * within form
   * e.g. a link with dropdown
   */
  noFormField?: boolean;
  /** focus first option on open */
  autoFocusFirstOption?: boolean;
};

export type OptionBase = {
  label: string;
  value: any;
  disabled?: boolean;
};

export type Option = OptionBase & Record<any, any>;

export type SelectState = {
  open: boolean;
  initialized: boolean;
  options: Array<Option>;
  placeholder: React.ReactNode;
  value: Array<Option>;
};
