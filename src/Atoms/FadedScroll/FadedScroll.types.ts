export type InternalProps = {
  intersectionTopRatio: number | null;
  intersectionBottomRatio: number | null;
  fadeTopPercentage: number | null;
  fadeBottomPercentage: number | null;
};

export type Props = {
  className?: string;
  /** You can provide a maxHeight to the component or let this component take all available space of parent and if the content exceeds that height then the scrollbar will appear.
   */
  maxHeight?: string | number;
  /** @default 15 */
  fadeHeight?: number;
  /** ⚠️Warning, you will most likely have double scrollbars on the page which is bad UX. This could still be valid in cases like Modal where the page scrollbar is locked when open,
   * @default false
   */
  enableMobileFade?: boolean;
  disableTopFade?: boolean;
  ref?: React.Ref<HTMLDivElement>;
  children?: React.ReactNode;
};

export type Component = React.FC<Props>;
