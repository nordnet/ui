import React, { useState } from 'react';
import styled from 'styled-components';
import { Flexbox, Typography, VisuallyHidden } from '../..';
import { isBoolean, isElement } from '../../common/utils';
import NormalizedElements from '../../common/NormalizedElements';
import { DataToggleProps, KnobWidth } from './DataToggle.types';

const TOGGLE_HEIGHT = 7 - 1; // 28px - 2px top and bottom paddings
const TRACK_HEIGHT = TOGGLE_HEIGHT;
const TRACK_WIDTH = 22.5 - 1; // 90px - 2px left and right paddings
const TRACK_PADDING = 0.5;
const TRACK_TO_KNOB_RATIO = 2; // How many times is track wider than the knob
const KNOB_HEIGHT = TOGGLE_HEIGHT;
const KNOB_WIDTH = TRACK_WIDTH / TRACK_TO_KNOB_RATIO;

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
  border-radius: ${(p) => p.theme.spacing.unit(TRACK_HEIGHT)}px;
  box-sizing: border-box;
  transition: transform 0.6s cubic-bezier(0.18, 0.9, 0.35, 1.15);
  background-color: ${(p) => p.theme.color.bubbleBackground};
  box-shadow: 0 2px 2px rgb(0 0 0 / 3%);
`;

const Track = styled.span<Pick<DataToggleProps, 'width'>>`
  display: block;
  position: relative;
  height: ${(p) => p.theme.spacing.unit(TRACK_HEIGHT)}px;
  width: ${(p) => {
    return p.width ? p.theme.spacing.unit(p.width) : p.theme.spacing.unit(TRACK_WIDTH);
  }}px;
  padding: ${(p) => p.theme.spacing.unit(TRACK_PADDING)}px;
  border-radius: ${(p) => p.theme.spacing.unit(TRACK_HEIGHT)}px;
  line-height: ${(p) => p.theme.spacing.unit(TOGGLE_HEIGHT)}px;
  background-color: ${(p) => p.theme.color.background};
`;

const InnerTrack = styled(Flexbox)`
  position: absolute;
  z-index: 2;
  top: 0;
  height: ${(p) => p.theme.spacing.unit(TRACK_HEIGHT + 1)}px;
`;

const ButtonContent = styled.div`
  position: relative; /* IE fix for nudge on click */
`;

const Button = styled(NormalizedElements.Button)<Pick<DataToggleProps, 'width'> & KnobWidth>`
  display: block;
  background: none;
  padding: 0;
  border: 0;

  &[aria-checked='true'] {
    ${Knob} {
      transform: translate(
        ${(p) => {
          if (p.knobwidth && p.width) {
            return p.theme.spacing.unit(p.width - p.knobwidth);
          }
          return p.theme.spacing.unit(TRACK_WIDTH - KNOB_WIDTH);
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

const StyledTypography = styled(Typography)<Pick<DataToggleProps, 'width'>>`
  padding-top: 1px;
  width: ${(p) => {
    if (p.width) {
      return p.theme.spacing.unit(p.width / 2);
    }
    return p.theme.spacing.unit(TRACK_WIDTH / 2);
  }}px;
`;

export const DataToggle: React.FC<DataToggleProps> = ({
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
  const adjustWidthForXPaddings = width ? width - 1 : undefined;
  const knobwidth = width ? width / TRACK_TO_KNOB_RATIO : KNOB_WIDTH;

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
      <Flexbox container alignItems="center" as="span">
        {hiddenLabel ? <VisuallyHidden>{titleNode}</VisuallyHidden> : titleNode}
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
            width={adjustWidthForXPaddings}
          >
            <ButtonContent>
              <Track width={adjustWidthForXPaddings}>
                <Knob
                  knobwidth={knobwidth}
                  container
                  item
                  justifyContent="center"
                  alignItems="center"
                  alignContent="center"
                />
                <InnerTrack
                  container
                  item
                  justifyContent="space-between"
                  alignItems="center"
                  alignContent="center"
                >
                  <StyledTypography
                    type="secondary"
                    weight="bold"
                    width={adjustWidthForXPaddings}
                    color={!checked ? (p) => p.color.cta : (p) => p.color.disabledText}
                  >
                    {valueLeft}
                  </StyledTypography>
                  <StyledTypography
                    type="secondary"
                    weight="bold"
                    width={adjustWidthForXPaddings}
                    color={checked ? (p) => p.color.cta : (p) => p.color.disabledText}
                  >
                    {valueRight}
                  </StyledTypography>
                </InnerTrack>
              </Track>
            </ButtonContent>
          </Button>
        </Flexbox>
      </Flexbox>
    </Label>
  );
};
