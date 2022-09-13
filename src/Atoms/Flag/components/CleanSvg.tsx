import React from 'react';
import * as R from 'ramda';

export const CleanSvg = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => <svg ref={ref} {...R.omit(['inline'])(props)} />,
);
