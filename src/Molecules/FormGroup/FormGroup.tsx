import React, { forwardRef } from 'react';
import styled from 'styled-components';

import { Props } from './FormGroup.types';
import { Fieldset, Legend, VisuallyHidden } from '../../..';
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
      hideLabel,
      label,
      labelTooltip,
      labelTooltipInModal,
      labelTooltipPosition,
      required,
      width,
    },
    ref,
  ) => {
    const labelText = label && `${label}${required ? ' *' : ''}`;
    const componentWidth = typeof width === 'number' ? `${width}px` : width;

    return (
      <Root className={className} $width={componentWidth} ref={ref}>
        <Fieldset>
          {label && (
            <FormFieldTooltip
              labelTooltip={hideLabel ? '' : labelTooltip}
              labelTooltipInModal={labelTooltipInModal}
              labelTooltipPosition={labelTooltipPosition}
            >
              {hideLabel ? (
                <VisuallyHidden>
                  <Legend styleType="label">{labelText}</Legend>
                </VisuallyHidden>
              ) : (
                <Legend styleType="label">{labelText}</Legend>
              )}
            </FormFieldTooltip>
          )}
          {children}
        </Fieldset>
        <FormFieldAfter error={error} extraInfo={extraInfo} disabled={disabled} />
      </Root>
    );
  },
);
