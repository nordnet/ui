import React, { useState } from 'react';
import styled from 'styled-components';
import Color from 'color';
import { Typography, Flexbox, VisuallyHidden } from '../..';
import { isElement } from '../../common/utils';
import NormalizedElements from '../../common/NormalizedElements';
import { Props } from './Switch.types';

const TRACK_HEIGHT = 4;
const TRACK_WIDTH = 10;
const KNOB_SIZE = 6;

const Label = styled.label`
  display: inline-block;
`;

const Knob = styled.span`
  background: white;
  display: block;
  height: ${p => p.theme.spacing.unit(KNOB_SIZE)}px;
  width: ${p => p.theme.spacing.unit(KNOB_SIZE)}px;
  position: absolute;
  top: 50%;
  left: 0;
  border: 1px solid ${p => p.theme.color.inputBorder};
  margin-top: -${p => p.theme.spacing.unit(KNOB_SIZE / 2)}px;
  border-radius: ${p => p.theme.spacing.unit(KNOB_SIZE / 2)}px;
  box-sizing: border-box;
  box-shadow: 0px 1px 3px 1px
    ${p =>
      Color(p.theme.color.shadow)
        .alpha(0.05)
        .rgb()
        .string()};
  transition: transform 0.2s cubic-bezier(0.18, 0.9, 0.35, 1.15);
`;

const Track = styled.span`
  display: block;
  height: ${p => p.theme.spacing.unit(TRACK_HEIGHT)}px;
  width: ${p => p.theme.spacing.unit(TRACK_WIDTH)}px;
  margin: ${p => p.theme.spacing.unit((KNOB_SIZE - TRACK_HEIGHT) / 2)}px 0;
  background-color: ${p => p.theme.color.inputBorder};
  border-radius: ${p => p.theme.spacing.unit(TRACK_HEIGHT / 2)}px;
  transition: background-color 0.2s ease-out;
`;

const Button = styled(NormalizedElements.Button)`
  display: block;
  position: relative;
  background: none;
  padding: 0;
  border: 0;

  &[aria-checked='true'] {
    ${Track} {
      background-color: ${p => p.theme.color.cta};
    }

    ${Knob} {
      transform: translate(${p => p.theme.spacing.unit(TRACK_WIDTH - KNOB_SIZE)}px);
    }
  }

  &[disabled] {
    ${Track} {
      background-color: ${p => p.theme.color.disabledBackground};
    }

    ${Knob} {
      border: 1px solid ${p => p.theme.color.disabledBackground};
    }
  }
`;

export const Switch: React.FC<Props> = ({
  className,
  label,
  hiddenLabel,
  disabled,
  onClick,
  checkedInitially = false,
  checked: checkedControlled,
}) => {
  const isControlled = typeof checkedControlled !== 'undefined';
  const titleNode = isElement(label) ? label : <Typography type="secondary">{label}</Typography>;
  const [checked, setChecked] = useState(checkedInitially);
  const clickHandler = (e: React.MouseEvent) => {
    const nextState = !checked;

    setChecked(nextState);

    if (onClick) {
      onClick(e, nextState);
    }
  };

  return (
    <Label>
      <Flexbox container gutter={2} alignItems="center" as="span">
        <Flexbox item as="span">
          {hiddenLabel ? <VisuallyHidden>{titleNode}</VisuallyHidden> : titleNode}
        </Flexbox>
        <Flexbox item as="span">
          <Button
            className={className}
            type="button"
            role="switch"
            aria-checked={isControlled ? checkedControlled : checked}
            onClick={isControlled ? onClick : clickHandler}
            disabled={disabled}
          >
            <Knob />
            <Track />
          </Button>
        </Flexbox>
      </Flexbox>
    </Label>
  );
};
