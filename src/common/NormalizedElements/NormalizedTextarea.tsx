import React from 'react';
import styled from 'styled-components';
import R from 'ramda';

const CleanTextarea = React.forwardRef((props: any, ref: React.Ref<HTMLTextAreaElement>) => (
  <textarea
    ref={ref}
    {...R.omit(
      [
        'color',
        'colorFn',
        'display',
        'error',
        'fullWidth',
        'hasError',
        'size',
        'sizeProp',
        'success',
      ],
      props,
    )}
  />
));

/** From Normalize.css v8.0.1 */
export const Textarea = styled(CleanTextarea)`
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
  overflow: auto;
`;
