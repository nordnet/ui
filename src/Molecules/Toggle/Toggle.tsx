import React, { useState } from 'react';
import styled from 'styled-components';
import { Flexbox, Typography, VisuallyHidden } from '../..';
import { isBoolean, isElement } from '../../common/utils';
import NormalizedElements from '../../common/NormalizedElements';
import { Props, SizeProp } from './Toggle.types';

const TRACK_HEIGHT = { s: 4, m: 5, l: 4 };
const TRACK_WIDTH = { s: 7, m: 9, l: 10 };
const KNOB_SIZE = { s: 3, m: 4, l: 6 };

const Label = styled.label`
  display: inline-block;
`;

const Knob = styled.span<{ $size: SizeProp }>`
  background: ${(p) => p.theme.color.toggleKnobEnabledOffBg};
  display: block;
  height: ${(p) => p.theme.spacing.unit(KNOB_SIZE[p.$size])}px;
  width: ${(p) => p.theme.spacing.unit(KNOB_SIZE[p.$size])}px;
  position: absolute;
  left: ${(p) => (p.$size === 'l' ? 0 : 2)}px;
  border: 1px solid ${(p) => p.theme.color.inputBorder};
  margin-top: ${(p) => (p.$size === 'l' ? -4 : 2)}px;
  border-radius: ${(p) => p.theme.spacing.unit(KNOB_SIZE[p.$size] / 2)}px;
  box-sizing: border-box;
  box-shadow: 0px 1px 3px 1px ${(p) => p.theme.color.shadowSwitch};
  transition: transform 0.2s cubic-bezier(0.18, 0.9, 0.35, 1.15);
`;

const Track = styled.span<{ $size: SizeProp }>`
  display: block;
  height: ${(p) => p.theme.spacing.unit(TRACK_HEIGHT[p.$size])}px;
  width: ${(p) => p.theme.spacing.unit(TRACK_WIDTH[p.$size])}px;
  margin: ${(p) => p.theme.spacing.unit((KNOB_SIZE[p.$size] - TRACK_HEIGHT[p.$size]) / 2)}px 0;
  background-color: ${(p) => p.theme.color.toggleTrackEnabledOffBg};
  border-radius: ${(p) => p.theme.spacing.unit(TRACK_HEIGHT[p.$size] / 2)}px;
  transition: background-color 0.2s ease-out;
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
      background-color: ${(p) => p.theme.color.toggleTrackEnabledOnBg};
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
      background-color: ${(p) => p.theme.color.toggleTrackDisabledOffBg};
    }

    ${Knob} {
      border: 1px solid ${(p) => p.theme.color.disabledBackground};
      background-color: ${(p) => p.theme.color.toggleKnobDisabledOffBg};
    }
  }

  &[aria-checked='true'][disabled] {
    ${Track} {
      background-color: ${(p) => p.theme.color.toggleTrackDisabledOnBg};
    }
    ${Knob} {
      border: 1px solid ${(p) => p.theme.color.disabledBackground};
      background-color: ${(p) => p.theme.color.toggleKnobDisabledOnBg};
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
    <Label>
      <Flexbox container gutter={2} alignItems="center" as="span">
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
              <Knob $size={size} />
              <Track $size={size} />
            </ButtonContent>
          </Button>
        </Flexbox>
      </Flexbox>
    </Label>
  );
};
