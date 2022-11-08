import React, { cloneElement, FC, useRef, useState } from 'react';
import styled from 'styled-components';
import { isElement, mergeRefs } from '../../common/utils';
import { Box, Button, Flexbox, OldIcon, Typography } from '../..';
import { PopOver } from '../../common/PopOver';
import { Props as PersistentTooltipProps } from './PersistentTooltip.types';
import { useGeneratedId } from '../../common/Hooks';

const StyledPopOver = styled(PopOver)`
  ${PopOver.components.TooltipContent} {
    padding: ${(p) => p.theme.spacing.unit(3)}px;
  }
`;

const StyledButton = styled(Button)`
  margin-left: ${(p) => p.theme.spacing.unit(5)}px;
`;

const StyledCrossIcon = styled(OldIcon.CrossMedium)``; // styled to allow consumers to use it as styling-identifier directly from PopOver.components.TooltipContent

const components = {
  TooltipContent: PopOver.components.TooltipContent,
  CloseButtonIcon: StyledCrossIcon,
};

export const PersistentTooltip: FC<PersistentTooltipProps> & {
  components: typeof components;
} = ({
  className,
  children,
  id: idProp,
  position = 'bottom',
  positionCallback: positionCallbackProp,
  isOpen,
  onClose,
  title: titleProp,
  description: descriptionProp,
  closeButtonTitle,
  backgroundColor: backgroundColorProp,
  borderColor: borderColorProp,
  maxWidth = 79,
  ariaLabel,
  inModal,
  wrapChild,
  ...htmlDivProps
}) => {
  const child = React.Children.only(children) as any;
  const [triggerElement, setTriggerElement] = useState(undefined);
  const triggerElementRef = useRef(null);

  const positionCallback = (finalPosition: NonNullable<PersistentTooltipProps['position']>) => {
    if (positionCallbackProp) {
      positionCallbackProp(finalPosition);
    }
  };

  const generatedId = useGeneratedId('nn-persistent-tooltip-');
  const id = idProp || generatedId;

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
      <Flexbox container justifyContent="space-between" alignItems="flex-start">
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
      {cloneElement(wrapChild ? <span>{child}</span> : child, {
        'aria-describedby': isOpen ? id : undefined,
        ref: mergeRefs([setTriggerElement, triggerElementRef]),
      })}
      {isOpen && (
        <StyledPopOver
          className={className}
          id={id}
          label={label}
          position={position}
          positionCallback={positionCallback}
          triggerElement={triggerElement}
          maxWidth={maxWidth === 'auto' ? undefined : maxWidth} // Let PopOver handle default maxWidth if auto.
          backgroundColor={(t) => {
            return backgroundColorProp ? backgroundColorProp(t) : t.color.backgroundDark;
          }}
          borderColor={(t) => (borderColorProp ? borderColorProp(t) : 'transparent')}
          ariaLabel={ariaLabel}
          inModal={inModal}
          {...htmlDivProps}
        />
      )}
    </>
  );
};

PersistentTooltip.components = components;
