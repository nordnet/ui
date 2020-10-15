import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Props, LabelAddonProp } from './FormField.types';
import {
  Flexbox,
  Icon,
  VisuallyHidden,
  FormLabel,
  Typography,
  Fieldset,
  Legend,
  Tooltip,
} from '../..';
import { assert } from '../../common/utils';

const hasError = (error?: Props['error']) => error && error !== '';

const Wrapper = styled.div<{ width?: string | number }>`
  ${(p) => (p.width ? `width: ${p.width};` : 'width: 200px;')}
  display: inline-block;
`;

const TooltipIcon = styled(Icon.Questionmark)`
  margin-left: ${(p) => p.theme.spacing.unit(1)}px;
`;

const BottomWrapper = styled(motion.div)``;

const WithOptionalAddon: React.FC<LabelAddonProp> = ({
  children,
  labelTooltip,
  labelTooltipPosition,
  hideLabel,
}) =>
  hideLabel ? (
    <>{children}</>
  ) : (
    <Flexbox container alignItems="center">
      {children}
      {labelTooltip && (
        <Tooltip position={labelTooltipPosition} label={labelTooltip}>
          <TooltipIcon size={4} />
        </Tooltip>
      )}
    </Flexbox>
  );

export const FormField = React.forwardRef<HTMLDivElement, Props>(
  (
    {
      children,
      className,
      error,
      extraInfo,
      fieldId,
      forId,
      group,
      hideLabel,
      label,
      labelTooltip,
      labelTooltipPosition,
      required = false,
      showRequired = false,
      width,
      disabled,
    },
    ref,
  ) => {
    const labelText = label && `${label} ${required || showRequired ? '*' : ''}`;
    let field;

    if (label) {
      field = (
        <FormLabel disabled={disabled}>
          <WithOptionalAddon
            labelTooltip={labelTooltip}
            labelTooltipPosition={labelTooltipPosition}
            hideLabel={hideLabel}
          >
            {hideLabel ? <VisuallyHidden>{labelText}</VisuallyHidden> : labelText}
          </WithOptionalAddon>
          {children}
        </FormLabel>
      );

      if (group) {
        field = (
          <Fieldset>
            <WithOptionalAddon
              labelTooltip={labelTooltip}
              labelTooltipPosition={labelTooltipPosition}
              hideLabel={hideLabel}
            >
              <Legend styleType="label">{labelText}</Legend>
            </WithOptionalAddon>
            {children}
          </Fieldset>
        );
      } else if (fieldId || forId) {
        field = (
          <>
            <FormLabel hideLabel={hideLabel} forId={fieldId || forId}>
              <WithOptionalAddon
                labelTooltip={labelTooltip}
                labelTooltipPosition={labelTooltipPosition}
                hideLabel={hideLabel}
              >
                {labelText}
              </WithOptionalAddon>
            </FormLabel>
            {children}
          </>
        );
      }
    }

    if (forId) {
      assert(false, `FormField: the prop forId is deprecated, please use fieldId instead.`, {
        level: 'warn',
      });
    }
    if (showRequired) {
      assert(
        false,
        `FormField: the prop showRequired is deprecated, please use required instead.`,
        {
          level: 'warn',
        },
      );
    }

    return (
      <Wrapper width={width} className={className} ref={ref}>
        {label ? field : children}
        <AnimatePresence>
          {hasError(error) ? (
            <BottomWrapper
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 0, opacity: 0 }}
              aria-live="polite"
            >
              <Typography type="tertiary" color={(t) => t.color.negative}>
                <VisuallyHidden>Error: </VisuallyHidden>
                {error}
              </Typography>
            </BottomWrapper>
          ) : (
            extraInfo && (
              <BottomWrapper
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 0, opacity: 0 }}
                aria-live="polite"
              >
                <Typography
                  type="tertiary"
                  color={(t) => (disabled ? t.color.disabled : t.color.label)}
                >
                  {extraInfo}
                </Typography>
              </BottomWrapper>
            )
          )}
        </AnimatePresence>
      </Wrapper>
    );
  },
);
