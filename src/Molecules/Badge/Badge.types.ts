import { BaseBadgeComponent } from './components/BaseBadge/BaseBadge.types';
import { LabelBadgeComponent } from './components/LabelBadge/LabelBadge.types';
import { IconBadgeComponent } from './components/IconBadge/IconBadge.types';
import { StatusBadgeComponent } from './components/StatusBadge/StatusBadge.types';
import { NestedBadgeComponent } from './components/NestedBadge/NestedBadge.types';
import { NumberBadgeComponent } from './components/NumberBadge/NumberBadge.types';
import { AccountBadgeCompoundComponent } from './components/AccountBadge/AccountBadge.types';
import { TooltipBadgeComponent } from './components/TooltipBadge/TooltipBadge.types';

type BadgeVariants = {
  Base: BaseBadgeComponent;
  Label: LabelBadgeComponent;
  Icon: IconBadgeComponent;
  Status: StatusBadgeComponent;
  Nested: NestedBadgeComponent;
  Number: NumberBadgeComponent;
  Account: AccountBadgeCompoundComponent;
  Tooltip: TooltipBadgeComponent;
};

export type BadgeComponent = BadgeVariants;
