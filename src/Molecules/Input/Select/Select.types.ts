import { SYMBOL_ALL } from './lib/constants';

export type ComponentTypes = 'ListItem' | 'List' | 'SelectedValue' | 'Search' | 'Action';
export type Action = {
  label: string;
  icon?: React.ReactNode; // maybe keyof typeof Icon?
  onSelect: () => void;
  disabled?: boolean;
};

export type Props = {
  /**
   * Required for proper functioning
   * If omitted will lead to buggy onClick
   */
  id: string;
  options: Option[];
  value?: any;
  error?: string;
  extraInfo?: string;
  success?: boolean;
  hideLabel?: boolean;
  labelTooltip?: string;
  labelTooltipPosition?: 'top' | 'left' | 'bottom' | 'right';
  placeholder?: string;
  label: string;
  name?: string;

  /**
   * @default 'm'
   */
  size?: 's' | 'm';
  disabled?: boolean;
  onChange?: (newValue: Option[]) => void;
  onFocus?: React.FocusEventHandler;
  onBlur?: React.FocusEventHandler;
  fullWidth?: boolean;
  /**
   * For a simple Input.Select
   * width represents both FormField width and DropdownBubble width.
   * If you pass noFormField, then it's gonna be used only for DropdownBubble
   */
  width?: string;
  /**
   * Maximum height that list can be.
   */
  listMaxHeight?: string;
  /**
   * @default 'right'
   * Corresponds to where list should be related to SelectedValue component.
   * 'left' means list gonna be to the left-bottom from SelectedValue.
   * Makes sense only if noFormField is 'true'
   */
  listPosition?: 'left' | 'right';
  className?: string;
  components?: Partial<Record<ComponentTypes, React.ComponentType<any>>>;
  /**
   * Removes FormField styles from SelectedValue wrapper.
   * Use this flag if you
   * are using dropdown not
   * within form
   * e.g. a link with dropdown
   */
  noFormField?: boolean;
  /**
   * Auto focus this field on mount
   */
  autoFocus?: boolean;

  /**
   * Show search input before items
   */
  showSearch?: boolean;
  multiselect?: boolean;
  actions?: Array<Action>;
  /**
   * Controlled mode for search field
   * Use with showSearch only
   */
  searchQuery?: string;
  /**
   * Controlled mode for search field
   * Use with showSearch only
   */
  onSearchQueryChange?: (e: { type: string; payload: string }) => void;
};

export type Option = {
  [K: string]: any;
  label: string;
  value: any;
  disabled?: boolean;
  [SYMBOL_ALL]?: boolean;
};
