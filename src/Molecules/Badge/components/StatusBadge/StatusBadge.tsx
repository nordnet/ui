import React from 'react';
import { Icon } from '../../../..';
import { IconBadge } from '..';
import { ColorFn } from '../BaseBadge/BaseBadge.types';
import {
  StatusBadgeComponent,
  StatusVariant,
  StatusBadgeSize,
  StatusBadgeProps,
} from './StatusBadge.types';
import {
  MAP_BADGE_AND_ICON_SIZES,
  MAP_ICON_COMPONENT_NAME,
  VARIANT_CREATE,
  ICON_COLOR,
  VARIANT_COMPLETE,
  VARIANT_PENDING,
  VARIANT_ERROR,
  VARIANT_WARNING,
  VARIANT_INFORMATION,
} from './StatusBadge.constants';

const getStatusBadgeProps = (
  variant: StatusVariant,
  badgeSize: StatusBadgeSize,
): { icon: React.ReactElement; badgeColor: ColorFn; badgeSize: number } => {
  const sizes = MAP_BADGE_AND_ICON_SIZES[badgeSize];

  // Map icon component name and icon size dependent on badge size eg.
  const iconBaseName = MAP_ICON_COMPONENT_NAME[variant];
  const iconComponentName = `${iconBaseName}${sizes.iconSize}`;

  const IconComponent = Icon[iconComponentName];

  switch (variant) {
    case VARIANT_CREATE:
      return {
        icon: <IconComponent color={ICON_COLOR} />,
        badgeColor: (t) => t.colorTokens.action.background_default,
        badgeSize: sizes.badgeSize,
      };
    case VARIANT_COMPLETE:
      return {
        icon: <IconComponent color={ICON_COLOR} />,
        badgeColor: (t) => t.colorTokens.positive.icon_focus,
        badgeSize: sizes.badgeSize,
      };
    case VARIANT_PENDING:
      return {
        icon: <IconComponent color={ICON_COLOR} />,
        badgeColor: (t) => t.colorTokens.warning.background_strong,
        badgeSize: sizes.badgeSize,
      };
    case VARIANT_ERROR:
      return {
        icon: <IconComponent color={ICON_COLOR} />,
        badgeColor: (t) => t.colorTokens.error.background_default,
        badgeSize: sizes.badgeSize,
      };
    case VARIANT_WARNING:
      return {
        icon: <IconComponent color={ICON_COLOR} />,
        badgeColor: (t) => t.colorTokens.warning.background_strong,
        badgeSize: sizes.badgeSize,
      };
    case VARIANT_INFORMATION:
      return {
        icon: <IconComponent color={ICON_COLOR} />,
        badgeColor: (t) => t.colorTokens.action.background_default,
        badgeSize: sizes.badgeSize,
      };

    default:
      return {
        icon: <IconComponent color={ICON_COLOR} />,
        badgeColor: (t) => t.color.badgeBackground,
        badgeSize: sizes.badgeSize,
      };
  }
};

export const StatusBadge: StatusBadgeComponent = React.forwardRef<
  HTMLSpanElement,
  StatusBadgeProps
>(({ variant = 'information', badgeSize = 'l', ...htmlProps }, ref) => {
  const statusBadgeProps = getStatusBadgeProps(variant, badgeSize);

  return (
    <IconBadge
      {...htmlProps}
      ref={ref}
      badgeSize={statusBadgeProps.badgeSize}
      badgeColor={statusBadgeProps.badgeColor}
    >
      {statusBadgeProps.icon}
    </IconBadge>
  );
});
