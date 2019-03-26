import { Theme } from '../../theme/theme.types';

export type Props = {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  query: string | ((theme: Theme) => string);
  /** Only CSS-based children for now,
   * which means no function as a children
   */
  children?: ChildrenForCssApproach;
};

type ChildForCssApproach = React.ReactElement | string | number | null | undefined;
type ChildrenForCssApproach = ChildForCssApproach | ChildForCssApproach[];
