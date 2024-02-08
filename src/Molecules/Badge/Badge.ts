import { BadgeComponent } from './Badge.types';
import {
  BaseBadge,
  LabelBadge,
  IconBadge,
  StatusBadge,
  NestedBadge,
  NumberBadge,
  AccountBadge,
  TooltipBadge,
} from './components';

// Typecasts to attach sub badge components below
export const Badge: BadgeComponent = {
  Base: BaseBadge,
  Icon: IconBadge,
  Status: StatusBadge,
  Label: LabelBadge,
  Nested: NestedBadge,
  Number: NumberBadge,
  Account: AccountBadge,
  Tooltip: TooltipBadge,
};
