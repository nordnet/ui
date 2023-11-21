import React, { useState } from 'react';
import styled from 'styled-components';
import { Flexbox, Typography, VisuallyHidden } from '../..';
import { isBoolean, isElement } from '../../common/utils';
import NormalizedElements from '../../common/NormalizedElements';
import { SwitchToggleProps, KnobWidth } from './Switch.types';

const TOGGLE_HEIGHT = 5;
const TRACK_HEIGHT = TOGGLE_HEIGHT;
const TRACK_WIDTH = 17.75;
const TRACK_PADDING = 0.5;
const TRACK_TO_KNOW_RATIO = 1.775;
const KNOB_HEIGHT = TOGGLE_HEIGHT;
const KNOB_WIDTH = TRACK_WIDTH / TRACK_TO_KNOW_RATIO; // 10 if no width is provided

const Label = styled.label`
  display: inline-block;
`;

const Knob = styled(Flexbox)<KnobWidth>`
  height: ${(p) => p.theme.spacing.unit(KNOB_HEIGHT)}px;
  width: ${(p) => {
    if (p.knobwidth) {
      return p.theme.spacing.unit(p.knobwidth);
    }
    return p.theme.spacing.unit(KNOB_WIDTH);
  }}px;
  position: absolute;

  /* this padding is to battle the typography not being centered properly */
  padding-top: 1px;
  top: ${(p) => p.theme.spacing.unit(TRACK_PADDING)}px;
  left: ${(p) => p.theme.spacing.unit(TRACK_PADDING)}px;
  border-radius: ${(p) => p.theme.spacing.unit(TRACK_HEIGHT)}px;
  box-sizing: border-box;
  transition: transform 0.6s cubic-bezier(0.18, 0.9, 0.35, 1.15);
  background-color: ${(p) => p.theme.color.bubbleBackground};
`;

const Track = styled.span<Pick<SwitchToggleProps, 'width'>>`
  display: block;
  height: ${(p) => p.theme.spacing.unit(TRACK_HEIGHT)}px;
  width: ${(p) => {
    return p.width ? p.theme.spacing.unit(p.width) : p.theme.spacing.unit(TRACK_WIDTH);
  }}px;
  padding: ${(p) => p.theme.spacing.unit(TRACK_PADDING)}px
    ${(p) => p.theme.spacing.unit(TRACK_PADDING * 2)}px;
  border-radius: ${(p) => p.theme.spacing.unit(TRACK_HEIGHT)}px;
  line-height: ${(p) => p.theme.spacing.unit(TOGGLE_HEIGHT)}px;
  background-color: ${(p) => p.theme.color.background};
  box-shadow: 0 1px 3px 1px ${(p) => p.theme.color.background};
`;

const ButtonContent = styled.div`
  position: relative; /* IE fix for nudge on click */
`;

const Button = styled(NormalizedElements.Button)<Pick<SwitchToggleProps, 'width'> & KnobWidth>`
  display: block;
  background: none;
  padding: 0;
  border: 0;

  &[aria-checked='true'] {
    ${Knob} {
      transform: translate(
        ${(p) => {
          if (p.knobwidth && p.width) {
            return p.theme.spacing.unit(p.width - p.knobwidth + 1);
          }
          return p.theme.spacing.unit(TRACK_WIDTH - KNOB_WIDTH + 1);
        }}px
      );
    }
  }

  &[disabled],
  &[aria-readonly] {
    ${Track} {
      background-color: ${(p) => p.theme.color.disabledBackground};
    }

    ${Knob} {
      background-color: ${(p) => p.theme.color.switchReadOnlyKnobBg};
    }
  }

  &[aria-checked='true'][aria-readonly] {
    ${Track} {
      background-color: ${(p) => p.theme.color.switchReadOnlyTrackBg};
    }
  }
`;

const StyledTypography = styled(Typography)<Pick<SwitchToggleProps, 'width'>>`
  width: ${(p) => {
    if (p.width) {
      return p.theme.spacing.unit(p.width / 2);
    }
    return p.theme.spacing.unit(TRACK_WIDTH / 2);
  }}px;
`;

export const SwitchToggle: React.FC<SwitchToggleProps> = ({
  className,
  label,
  hiddenLabel,
  valueLeft,
  valueRight,
  disabled,
  onClick,
  checkedInitially = false,
  checked: checkedControlled,
  readOnly,
  width,
}) => {
  const isControlled = isBoolean(checkedControlled);
  const titleNode = isElement(label) ? label : <Typography type="secondary">{label}</Typography>;
  const [checkedInternal, setCheckedInternal] = useState(checkedInitially);
  const checked = isControlled ? checkedControlled : checkedInternal;
  const knobwidth = width ? width / TRACK_TO_KNOW_RATIO : KNOB_WIDTH;

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
      <Flexbox container gap={2} alignItems="center" as="span">
        <Flexbox item as="span">
          {hiddenLabel ? <VisuallyHidden>{titleNode}</VisuallyHidden> : titleNode}
        </Flexbox>
        <Flexbox item as="span">
          <Button
            className={className}
            type="button"
            role="switch"
            aria-checked={checked}
            onClick={isControlled ? onClick : internalClickHandler}
            disabled={disabled}
            aria-readonly={readOnly}
            knobwidth={knobwidth}
            width={width}
          >
            <ButtonContent>
              <Knob
                knobwidth={knobwidth}
                container
                item
                justifyContent="center"
                alignItems="center"
                alignContent="center"
              >
                <Typography type="secondary" weight="bold" color={(p) => p.color.cta}>
                  {checked ? valueRight : valueLeft}
                </Typography>
              </Knob>
              <Track width={width}>
                <Flexbox
                  container
                  item
                  justifyContent="space-between"
                  alignItems="center"
                  alignContent="center"
                >
                  <StyledTypography
                    type="secondary"
                    width={width}
                    color={(p) => p.color.disabledText}
                  >
                    {valueLeft}
                  </StyledTypography>
                  <StyledTypography
                    type="secondary"
                    width={width}
                    color={(p) => p.color.disabledText}
                  >
                    {valueRight}
                  </StyledTypography>
                </Flexbox>
              </Track>
            </ButtonContent>
          </Button>
        </Flexbox>
      </Flexbox>
    </Label>
  );
};
