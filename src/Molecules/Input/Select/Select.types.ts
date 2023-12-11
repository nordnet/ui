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
  labelTooltipInModal?: boolean;
  placeholder?: string;
  label: string;
  name?: string;
  /**
   * @default 'bottom'
   */
  placement?: 'top' | 'bottom';

  /**
   * @default 'm'
   */
  size?: 's' | 'm';
  /*
   * Height in 4x pixels e.g 4 equals 16px
   */
  height?: number;
  disabled?: boolean;
  onChange?: (newValue: OptionItem[]) => void;
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
   * Set a specific with for the dropdown list.
   */
  listWidth?: string;
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
  listPosition?: 'left' | 'right' | 'center';
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
  /**
   * When using external options, for example a search result use this prop to filter out disabled options
   * You need to provide placeholder options to make input.select behave properly, this can filter that out.
   */
  hideDisabledOptions?: boolean;
  multiselect?: boolean;
  /**
   * Wraps options into columns with number of items per column, only multiselect.
   * columnWidth is optional, "auto" if not set.
   */
  itemsPerColumn?: number;
  columnWidth?: string;
  actions?: Array<Action>;
  /**
   * Controlled mode for search field
   * Use with showSearch only
   */
  searchQuery?: string;
  /**
   * Will use React Portal to render the dropdown if set to true
   */
  withPortal?: boolean;
  /**
   * Controlled mode for search field
   * Use with showSearch only
   */
  onSearchQueryChange?: (e: { type: string; payload: string }) => void;
  /**
   * @default false
   * Disables the possibility to filter options by typing
   */
  disableSearchComponent?: boolean;
  /**
   * @default false
   * possibility to display list items(options) in Modal
   */
  fullscreenOnMobile?: boolean;
  /**
   * @default false
   * possibility to prevent input scroll on focus behaviour
   */
  preventScroll?: boolean;
  invertedColors?: boolean;
};

export type OptionItem = {
  [K: string]: any;
  label: string | JSX.Element;
  value: any;
  disabled?: boolean;
  count?: number;
  country?: string;
  showFlag?: boolean;
  [SYMBOL_ALL]?: boolean;
};

type GroupOptionItem = {
  label: string;
  value?: never;
  disabled?: boolean;
  count?: number;
  country?: string;
  showFlag?: boolean;
  options?: Array<OptionItem>;
};

export type Option = OptionItem | GroupOptionItem;
