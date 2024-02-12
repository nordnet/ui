import React from 'react';
import styled, { css } from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import { LabelAddonProp, Props } from './FormField.types';
import {
  Fieldset,
  Flexbox,
  FormLabel,
  OldIcon,
  Legend,
  Tooltip,
  Typography,
  VisuallyHidden,
} from '../..';
import { assert } from '../../common/utils';

const hasError = (error?: Props['error']) => error && error !== '';

const Wrapper = styled.div<{ $width?: string | number }>`
  ${(p) => (p.$width ? `width: ${p.$width};` : 'width: 200px;')}
  max-width: 100%;
  display: inline-block;
  position: relative;
`;

const TooltipIcon = styled(OldIcon.Questionmark)`
  margin-left: ${(p) => p.theme.spacing.unit(1)}px;
`;

const BottomWrapper = styled(motion.div)``;

const StyledFlexbox = styled(Flexbox)<{ $animatedLabel?: boolean }>`
  ${(p) =>
    p.$animatedLabel &&
    css`
      position: absolute;
      z-index: 1000;
      top: 0;
      left: 0;
      transform: translate(2px, 40px);
      transition: transform 1s;

      &:focus {
        transform: translate(12px, 4px);
      }
    `};
`;

const WithOptionalAddon: React.FC<LabelAddonProp> = ({
  children,
  labelTooltip,
  labelTooltipPosition,
  hideLabel,
  labelTooltipInModal,
  animatedLabel,
}) =>
  hideLabel ? (
    <>{children}</>
  ) : (
    <StyledFlexbox container alignItems="center" $animatedLabel={animatedLabel}>
      {children}
      {labelTooltip && (
        <Tooltip
          position={labelTooltipPosition}
          label={labelTooltip}
          inModal={labelTooltipInModal}
          wrapChild={labelTooltipInModal}
        >
          <TooltipIcon size={4} />
        </Tooltip>
      )}
    </StyledFlexbox>
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
      labelTooltipInModal,
      required = false,
      showRequired = false,
      width,
      disabled,
      animatedLabel,
    },
    ref,
  ) => {
    const labelText = label && `${label} ${required || showRequired ? '*' : ''}`;
    let field;

    if (label) {
      field = (
        <FormLabel disabled={disabled} animatedLabel={animatedLabel}>
          <WithOptionalAddon
            hideLabel={hideLabel}
            labelTooltip={labelTooltip}
            labelTooltipInModal={labelTooltipInModal}
            labelTooltipPosition={labelTooltipPosition}
            animatedLabel={animatedLabel}
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
              hideLabel={hideLabel}
              labelTooltip={labelTooltip}
              labelTooltipInModal={labelTooltipInModal}
              labelTooltipPosition={labelTooltipPosition}
              animatedLabel={animatedLabel}
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
                hideLabel={hideLabel}
                labelTooltip={labelTooltip}
                labelTooltipInModal={labelTooltipInModal}
                labelTooltipPosition={labelTooltipPosition}
                animatedLabel={animatedLabel}
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
      <Wrapper $width={width} className={className} ref={ref}>
        {label ? field : children}
        <AnimatePresence>
          {hasError(error) ? (
            <BottomWrapper
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 0, opacity: 0 }}
              aria-live="polite"
            >
              <Typography type="tertiary" color={(t) => t.color.danger}>
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
