import { AccountBadgeStackComponent } from '../AccountBadgeStack/AccountBadgeStack.types';
import { ColorFn, HtmlProps } from '../BaseBadge/BaseBadge.types';
import { Typography } from '../../../..';

export type AccountBadgeProps = HtmlProps & {
  children: React.ReactNode;
  badgeColor?: ColorFn;
  badgeSize?: 's' | 'm' | 'l' | number;
};

export type AccountBadgeComponent = React.ForwardRefExoticComponent<
  React.RefAttributes<HTMLSpanElement> & AccountBadgeProps
>;
export interface AccountBadgeCompoundComponent extends AccountBadgeComponent {
  Stack: AccountBadgeStackComponent;
}

export type AccountBadgeContentProps = {
  typographyType: React.ComponentProps<typeof Typography>['type'];
  children?: React.ReactNode;
};
