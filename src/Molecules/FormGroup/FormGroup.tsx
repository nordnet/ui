import React, { forwardRef } from 'react';
import styled from 'styled-components';

import { Props } from './FormGroup.types';
import { Fieldset, Legend } from '../../..';
import { Tooltip as FormFieldTooltip } from '../FormField/Tooltip';
import { After as FormFieldAfter } from '../FormField/After';

const Root = styled.div<{ $width?: string | number }>`
  ${(p) => (p.$width ? `width: ${p.$width};` : 'width: 200px;')}
  max-width: 100%;
  display: inline-block;
`;

export const FormGroup = forwardRef<HTMLDivElement, Props>(
  (
    {
      children,
      className,
      disabled,
      error,
      extraInfo,
      label,
      labelTooltip,
      labelTooltipInModal,
      labelTooltipPosition,
      width,
    },
    ref,
  ) => {
    const componentWidth = typeof width === 'number' ? `${width}px` : width;

    return (
      <Root className={className} $width={componentWidth} ref={ref}>
        <Fieldset>
          <FormFieldTooltip
            labelTooltip={labelTooltip}
            labelTooltipInModal={labelTooltipInModal}
            labelTooltipPosition={labelTooltipPosition}
          >
            {label && <Legend styleType="label">{label}</Legend>}
          </FormFieldTooltip>
          {children}
        </Fieldset>
        <FormFieldAfter error={error} extraInfo={extraInfo} disabled={disabled} />
      </Root>
    );
  },
);
