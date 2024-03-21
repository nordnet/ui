import React, { useState } from 'react';
import styled from 'styled-components';
import { Flexbox, Typography, VisuallyHidden } from '../..';
import { isBoolean, isElement } from '../../common/utils';
import NormalizedElements from '../../common/NormalizedElements';
import { Props, SizeProp } from './Toggle.types';

const TRACK_HEIGHT = { s: 4, m: 5, l: 4 };
const TRACK_WIDTH = { s: 7, m: 9, l: 10 };
const KNOB_SIZE = { s: 3, m: 4, l: 6 };

const Label = styled.label<{ $disabled?: boolean }>`
  display: inline-block;
  cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'pointer')};
`;

const Knob = styled.span<{ $size: SizeProp; $disabled?: boolean }>`
  background: ${(p) => p.theme.colorTokens.neutral.background_brand_white};
  display: block;
  height: ${(p) => p.theme.spacing.unit(KNOB_SIZE[p.$size])}px;
  width: ${(p) => p.theme.spacing.unit(KNOB_SIZE[p.$size])}px;
  position: absolute;
  left: ${(p) => (p.$size === 'l' ? 0 : 2)}px;
  border: 1px solid ${(p) => p.theme.colorTokens.neutral.border_medium};
  margin-top: ${(p) => (p.$size === 'l' ? -4 : 2)}px;
  border-radius: ${(p) => p.theme.spacing.unit(KNOB_SIZE[p.$size] / 2)}px;
  box-sizing: border-box;
  box-shadow: ${(p) => p.theme.shadow.medium};
  transition: transform 0.2s cubic-bezier(0.18, 0.9, 0.35, 1.15);
  cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'pointer')};
`;

const Track = styled.span<{ $size: SizeProp; $disabled?: boolean }>`
  display: block;
  height: ${(p) => p.theme.spacing.unit(TRACK_HEIGHT[p.$size])}px;
  width: ${(p) => p.theme.spacing.unit(TRACK_WIDTH[p.$size])}px;
  margin: ${(p) => p.theme.spacing.unit((KNOB_SIZE[p.$size] - TRACK_HEIGHT[p.$size]) / 2)}px 0;
  background-color: ${(p) => p.theme.colorTokens.neutral.background_inactive};
  border-radius: ${(p) => p.theme.spacing.unit(TRACK_HEIGHT[p.$size] / 2)}px;
  transition: background-color 0.2s ease-out;
  cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'pointer')};
`;

const ButtonContent = styled.div`
  position: relative; /* IE fix for nudge on click */
`;

const Button = styled(NormalizedElements.Button)<{ $size: SizeProp }>`
  display: block;
  background: none;
  padding: 0;
  border: 0;

  &[aria-checked='true'] {
    ${Track} {
      background-color: ${(p) => p.theme.colorTokens.action.background_default};
    }

    ${Knob} {
      transform: translate(
        ${(p) =>
          p.theme.spacing.unit(
            TRACK_WIDTH[p.$size] - KNOB_SIZE[p.$size] - (p.$size === 'l' ? 0 : 1),
          )}px
      );
    }
  }

  &[disabled],
  &[aria-readonly] {
    ${Track} {
      background-color: ${(p) => p.theme.colorTokens.neutral.background_inactive};
    }

    ${Knob} {
      border: 1px solid transparent;
      background-color: ${(p) => p.theme.colorTokens.neutral.background_medium};
    }
  }

  &[aria-checked='true'][disabled],
  &[aria-checked='true'][aria-readonly] {
    ${Track} {
      background-color: ${(p) => p.theme.colorTokens.action.background_disabled};
    }
    ${Knob} {
      border: 1px solid transparent;
      background-color: ${(p) => p.theme.colorTokens.neutral.background_medium}};
    }
  }
`;

export const Toggle: React.FC<Props> = ({
  className,
  label,
  hiddenLabel,
  disabled,
  onClick,
  checkedInitially = false,
  checked: checkedControlled,
  readOnly,
  size = 'l',
}) => {
  const isControlled = isBoolean(checkedControlled);
  const titleNode = isElement(label) ? label : <Typography type="secondary">{label}</Typography>;
  const [checkedInternal, setCheckedInternal] = useState(checkedInitially);
  const checked = isControlled ? checkedControlled : checkedInternal;

  const internalClickHandler = (e: React.MouseEvent) => {
    const nextCheckedState = !checked;

    if (!readOnly) {
      setCheckedInternal(nextCheckedState);
    }

    if (onClick) {
      // setTimout from previous commit for animation reasons
      setTimeout(() => onClick(e, readOnly ? checked : nextCheckedState));
    }
  };

  return (
    <Label $disabled={disabled || hiddenLabel}>
      <Flexbox container gap={2} alignItems="center" as="span">
        {hiddenLabel ? (
          <VisuallyHidden>{titleNode}</VisuallyHidden>
        ) : (
          <Flexbox item as="span">
            {titleNode}
          </Flexbox>
        )}
        <Flexbox item as="span">
          <Button
            className={className}
            type="button"
            role="switch"
            aria-checked={checked}
            onClick={isControlled ? onClick : internalClickHandler}
            disabled={disabled}
            aria-readonly={readOnly}
            $size={size}
          >
            <ButtonContent>
              <Knob $size={size} $disabled={disabled} />
              <Track $size={size} $disabled={disabled} />
            </ButtonContent>
          </Button>
        </Flexbox>
      </Flexbox>
    </Label>
  );
};
