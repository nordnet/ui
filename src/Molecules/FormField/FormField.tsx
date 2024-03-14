import React from 'react';
import styled from 'styled-components';

import { Props } from './FormField.types';
import { FormGroup, FormLabel, VisuallyHidden } from '../..';
import { After } from './After';
import { Tooltip } from './Tooltip';

const Root = styled.div<{ $width?: string | number }>`
  ${(p) => (p.$width ? `width: ${p.$width};` : 'width: 200px;')}
  max-width: 100%;
  display: inline-block;
`;

export const FormField = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    children,
    className,
    error,
    extraInfo,
    fieldId,
    group,
    hideLabel,
    label,
    labelTooltip,
    labelTooltipPosition,
    labelTooltipInModal,
    required = false,
    width,
    disabled,
  } = props;
  const labelText = label && `${label}${required ? ' *' : ''}`;
  const componentWidth = typeof width === 'number' ? `${width}px` : width;

  if (group) {
    return <FormGroup {...props} />;
  }

  return (
    <Root className={className} $width={componentWidth} ref={ref}>
      {fieldId ? (
        <>
          <FormLabel hideLabel={hideLabel} forId={fieldId} disabled={disabled}>
            <Tooltip
              labelTooltip={hideLabel ? '' : labelTooltip}
              labelTooltipInModal={labelTooltipInModal}
              labelTooltipPosition={labelTooltipPosition}
            >
              {hideLabel ? <VisuallyHidden>{labelText}</VisuallyHidden> : labelText}
            </Tooltip>
          </FormLabel>
          {children}
        </>
      ) : (
        <>
          <FormLabel disabled={disabled}>
            <Tooltip
              labelTooltip={hideLabel ? '' : labelTooltip}
              labelTooltipInModal={labelTooltipInModal}
              labelTooltipPosition={labelTooltipPosition}
            >
              {hideLabel ? <VisuallyHidden>{labelText}</VisuallyHidden> : labelText}
            </Tooltip>
            {children}
          </FormLabel>
        </>
      )}
      <After error={error} extraInfo={extraInfo} disabled={disabled} />
    </Root>
  );
});
