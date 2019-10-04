import React from 'react';
import styled from 'styled-components';
import R from 'ramda';

const CleanLegend = React.forwardRef((props: any, ref: React.Ref<HTMLLegendElement>) => (
  <legend ref={ref} {...R.omit(['styleType'], props)} />
));

/** From Normalize.css v8.0.1 */
export const Legend = styled(CleanLegend)`
  box-sizing: border-box;
  color: inherit;
  display: table;
  max-width: 100%;
  padding: 0;
  white-space: normal;
`;
