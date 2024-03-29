import React from 'react';
import Badge from '../..';

type AccountBadgeSize = Pick<React.ComponentProps<typeof Badge.Account>, 'badgeSize'>;
type AccountBadgeColor = Pick<React.ComponentProps<typeof Badge.Account>, 'badgeColor'>;

export type Item = {
  label: React.ReactNode;
} & AccountBadgeColor;

interface Truncation {
  /**
   * The number of badges that will be rendered. If the length of @param items is larger than or equal to this number,
   * the number of rendered bagdes will be truncated by a badge with the label of how many badges were truncated.
   * Defaults to three elements - including truncation badge.
   */
  maxElementsInStack?: number;

  /**
   * Boolean that decides if stack should be truncated or not. Defaults to true.
   */
  truncated?: boolean;

  /**
   * The badge color of the badge that indicates the number of truncated items
   */
  truncationBadgeColor?: AccountBadgeColor['badgeColor'];

  /**
   * A function component that will be returned for the truncation item.
   * Takes list of truncated items as a prop.
   */
  truncationWrapper?: React.FC<{ truncatedItems: Item[] }>;
}

interface PropsWithoutTruncation extends Truncation {
  truncated: false;
  maxElementsInStack?: never;
  truncationBadgeColor?: never;
  truncationWrapper?: never;
}

interface PropsWithTruncation extends Truncation {
  truncated?: true;
}

type TruncationProps = PropsWithoutTruncation | PropsWithTruncation;

export type AccountBadgeStackProps = {
  /**
   * @property {React.ReactNode} label - Label text
   *
   * @property {ColorFn} badgeColor - Color function for the badge color
   */
  items: Item[];

  /**
   * Toggles the color for the badge background to the currentColor.
   * Can be used to inherit the color from, for example, a disabled state from a parent component.
   */
  useCurrentColor?: boolean;
  className?: string;
} & TruncationProps &
  AccountBadgeSize;

export type AccountBadgeStackComponent = React.ForwardRefExoticComponent<
  React.RefAttributes<HTMLDivElement> & AccountBadgeStackProps
>;
