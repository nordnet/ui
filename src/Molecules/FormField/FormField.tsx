import React from 'react';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import { Props } from './FormField.types';
import { Fieldset, FormLabel, Legend, Typography, VisuallyHidden } from '../..';
import { Tooltip } from './Tooltip';

const Wrapper = styled.div<{ $width?: string | number }>`
  ${(p) => (p.$width ? `width: ${p.$width};` : 'width: 200px;')}
  max-width: 100%;
  display: inline-block;
`;

const BottomWrapper = styled(motion.div)``;

export const FormField = React.forwardRef<HTMLDivElement, Props>(
  (
    {
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
    },
    ref,
  ) => {
    const labelText = label && `${label}${required ? ' *' : ''}`;

    return (
      <Wrapper $width={width} className={className} ref={ref}>
        {!group && !fieldId && (
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
        )}
        {!group && fieldId && (
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
        )}
        {group && (
          <Fieldset>
            <Tooltip
              labelTooltip={hideLabel ? '' : labelTooltip}
              labelTooltipInModal={labelTooltipInModal}
              labelTooltipPosition={labelTooltipPosition}
            >
              {hideLabel ? (
                <VisuallyHidden>
                  <Legend styleType="label">{label}</Legend>
                </VisuallyHidden>
              ) : (
                <Legend styleType="label">{label}</Legend>
              )}
            </Tooltip>
            {children}
          </Fieldset>
        )}
        <AnimatePresence>
          {(error || extraInfo) && (
            <BottomWrapper
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 0, opacity: 0 }}
              aria-live="polite"
            >
              {error ? (
                <Typography type="tertiary" color={(t) => t.color.danger}>
                  {error}
                </Typography>
              ) : null}
              {extraInfo ? (
                <Typography
                  type="tertiary"
                  color={(t) => (disabled ? t.color.disabled : t.color.label)}
                >
                  {extraInfo}
                </Typography>
              ) : null}
            </BottomWrapper>
          )}
        </AnimatePresence>
      </Wrapper>
    );
  },
);
