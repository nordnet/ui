// The space utility converts shorthand margin and padding props to margin and padding CSS declarations. The props are named using the format {property}{sides}.

// Where property is one of:

// m - for classes that set margin
// p - for classes that set padding

// Where sides is one of:

// t - for classes that set margin-top or padding-top
// b - for classes that set margin-bottom or padding-bottom
// l - for classes that set margin-left or padding-left
// r - for classes that set margin-right or padding-right
// x - for classes that set both *-left and *-right
// y - for classes that set both *-top and *-bottom
// blank - for classes that set a margin or padding on all 4 sides of the element
type Margins = {
  mt?: number | string;
  mb?: number | string;
  ml?: number | string;
  mr?: number | string;
  mx?: number | string;
  my?: number | string;
  m?: number | string;
};
type Paddings = {
  pt?: number | string;
  pb?: number | string;
  pl?: number | string;
  pr?: number | string;
  px?: number | string;
  py?: number | string;
  p?: number | string;
};

type MediaRelatedProps = {
  sm?: Partial<Paddings & Margins>;
  md?: Partial<Paddings & Margins>;
  xl?: Partial<Paddings & Margins>;
  lg?: Partial<Paddings & Margins>;
};

export type Props = {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  className?: string;
} & Paddings &
  Margins &
  MediaRelatedProps;
