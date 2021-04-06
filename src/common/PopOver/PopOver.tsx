import React, { forwardRef, useEffect, useState } from 'react';
import { usePopper } from 'react-popper';
import styled from 'styled-components';
import { Portal } from '../..';
import { TooltipArrow } from './TooltipArrow';
import { TooltipContent } from './TooltipContent';
import { Props } from './PopOver.types';
import { mergeRefs } from '../utils';

type StyledSpanProps = {
  $inModal: Props['inModal'];
  $pointerEvents?: Props['pointerEvents'];
};

const StyledSpan = styled.span<StyledSpanProps>`
  z-index: ${(p) => (p.$inModal ? p.theme.zIndex.overlayInModal : p.theme.zIndex.overlay)};

  ${(p) => (p.$pointerEvents ? '' : 'pointer-events: none;')}

  &[data-popper-placement^='top'] {
    padding-bottom: ${(p) => p.theme.spacing.unit(3)}px;
  }

  &[data-popper-placement^='bottom'] {
    padding-top: ${(p) => p.theme.spacing.unit(3)}px;
  }

  &[data-popper-placement^='left'] {
    padding-right: ${(p) => p.theme.spacing.unit(3)}px;
  }

  &[data-popper-placement^='right'] {
    padding-left: ${(p) => p.theme.spacing.unit(3)}px;
  }
`;

// styled to allow consumers to use it as styling-identifier directly from PopOver.components.TooltipContent
const StyledTooltipContent = styled(TooltipContent)``;

const displayName = 'Tooltip Popup';

const components = {
  TooltipContent: StyledTooltipContent,
};

const PopOver = (forwardRef<HTMLSpanElement, Props>(
  (
    {
      label,
      ariaLabel,
      position,
      positionCallback,
      inModal,
      maxWidth,
      triggerElement,
      pointerEvents = true,
      backgroundColor: backgroundColorProp,
      borderColor: borderColorProp,
      ...htmlSpanProps
    },
    ref,
  ) => {
    const [popperElement, setPopperElement] = useState(null);
    const [arrowElement, setArrowElement] = useState(null);

    /**
     We're using Popper.js for convenient tooltip placement.
     */

    const popper = usePopper(triggerElement, popperElement, {
      modifiers: [{ name: 'arrow', options: { element: arrowElement } }],
      placement: position,
    });

    const { state, styles, attributes } = popper;
    const { placement } = state || {};

    useEffect(() => {
      if (positionCallback && placement) {
        positionCallback(placement as NonNullable<Props['position']>);
      }
    }, [positionCallback, popper, placement]);

    const backgroundColor = backgroundColorProp || ((t) => t.color.bubbleBackground);
    const borderColor = borderColorProp || ((t) => t.color.bubbleBorder);

    return (
      <Portal>
        <StyledSpan
          ref={mergeRefs([setPopperElement, ref])}
          $inModal={inModal}
          style={styles.popper}
          $pointerEvents={pointerEvents}
          {...htmlSpanProps}
          {...attributes.popper}
        >
          <TooltipArrow
            ref={setArrowElement as any}
            position={state?.placement as any}
            style={styles.arrow}
            backgroundColor={backgroundColor}
            borderColor={borderColor}
          />
          <StyledTooltipContent
            label={label}
            ariaLabel={ariaLabel}
            maxWidth={maxWidth}
            backgroundColor={backgroundColor}
            borderColor={borderColor}
          />
        </StyledSpan>
      </Portal>
    );
  },
) as any) as React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLSpanElement>> & {
  components: typeof components;
};

PopOver.components = components;
PopOver.displayName = displayName;

export default PopOver;
