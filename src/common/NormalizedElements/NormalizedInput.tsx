import React from 'react';
import styled from 'styled-components';
import R from 'ramda';

const CleanInput = React.forwardRef((props: any, ref: React.Ref<HTMLInputElement>) => (
  // eslint-disable-next-line react/button-has-type
  <input
    ref={ref}
    {...R.omit(
      [
        'color',
        'colorFn',
        'display',
        'error',
        'fullWidth',
        'hasError',
        'leftAddon',
        'rightAddon',
        'size',
        'sizeProp',
      ],
      props,
    )}
  />
));

/** From Normalize.css v8.0.1 */
export const Input = styled(CleanInput)`
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
  overflow: visible;
`;
