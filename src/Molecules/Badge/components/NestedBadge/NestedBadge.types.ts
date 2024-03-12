export type BadgeSize = 'm' | 'l' | 'xl';

export type NestedBadgeProps = {
  alt?: string;
  badgeSize?: BadgeSize;
  className?: string;
  country?: string;
  fallback?: string;
  logoUrl?: string;
};

export type NestedBadgeComponent = React.FC<NestedBadgeProps>;
