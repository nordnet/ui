import React, { cloneElement, forwardRef, useRef, useState } from 'react';
import styled from 'styled-components';
import { isElement, mergeRefs } from '../../common/utils';
import { Box, Button, Flexbox, Icon, Typography } from '../..';
import { TooltipPopup } from '../Tooltip/TooltipPopup';
import { Props as PersistentTooltipProps } from './PersistentTooltip.types';

const StyledTooltipPopup = styled(TooltipPopup)`
  ${TooltipPopup.components.TooltipContent} {
    padding: ${(p) => p.theme.spacing.unit(3)}px;
  }
`;

const StyledButton = styled(Button)`
  margin-left: ${(p) => p.theme.spacing.unit(5)}px;
`;

const StyledCrossIcon = styled(Icon.CrossMedium)``;

const components = {
  TooltipContent: TooltipPopup.components.TooltipContent,
  CloseButtonIcon: StyledCrossIcon,
};

export const PersistentTooltip = (forwardRef<HTMLDivElement, PersistentTooltipProps>(
  (
    {
      children,
      position = 'bottom',
      open,
      onClose,
      title: titleProp,
      description: descriptionProp,
      closeButtonTitle,
      maxWidth = 79,
      positionCallback: positionCallbackProp,
      borderColor: borderColorProp,
      backgroundColor: backgroundColorProp,
      ...htmlDivProps
    },
    ref,
  ) => {
    const child = React.Children.only(children) as any;
    const [triggerElement, setTriggerElement] = useState(undefined);
    const triggerElementRef = useRef(null);

    const positionCallback = (finalPosition: NonNullable<PersistentTooltipProps['position']>) => {
      if (positionCallbackProp) {
        positionCallbackProp(finalPosition);
      }
    };

    const title = isElement(titleProp) ? (
      titleProp
    ) : (
      <Typography type="primary" weight="bold" color={(t) => t.color.textLight}>
        {titleProp}
      </Typography>
    );

    const description = isElement(descriptionProp) ? (
      descriptionProp
    ) : (
      <Box mt={1}>
        <Typography type="secondary" color={(t) => t.color.textLight}>
          {descriptionProp}
        </Typography>
      </Box>
    );

    const label = (
      <Box>
        <Flexbox container justifyContent="space-between">
          {title}
          <StyledButton onClick={onClose} variant="neutral">
            <StyledCrossIcon size={4} color={(t) => t.color.textLight} title={closeButtonTitle} />
          </StyledButton>
        </Flexbox>
        {description}
      </Box>
    );

    return (
      <>
        {cloneElement(child, { ref: mergeRefs([setTriggerElement, triggerElementRef]) })}
        {open && (
          <StyledTooltipPopup
            ref={ref as any}
            label={label}
            position={position}
            positionCallback={positionCallback}
            triggerElement={triggerElement}
            maxWidth={maxWidth === 'auto' ? undefined : maxWidth} // Let TooltipPopup handle default maxWidth if auto.
            backgroundColor={(t) => {
              return backgroundColorProp ? backgroundColorProp(t) : t.color.backgroundDark;
            }}
            borderColor={(t) => (borderColorProp ? borderColorProp(t) : 'transparent')}
            {...htmlDivProps}
          />
        )}
      </>
    );
  },
) as any) as React.ForwardRefExoticComponent<
  PersistentTooltipProps & React.RefAttributes<HTMLDivElement>
> & {
  components: typeof components;
};

PersistentTooltip.components = components;
