import React, { useState } from 'react';
import styled from 'styled-components';
import { Typography, Flexbox } from '../..';
import NormalizedElements from '../../common/NormalizedElements';
import { Props } from './Switch.types';

const TRACK_HEIGHT = 4;
const TRACK_WIDTH = 10;
const KNOB_SIZE = 6;

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
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.05);
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

const generateSomewhatUniqueId = (str: string) => {
  const safeString = str.replace(/^[^a-z]+|[^\w:.-]+/gi, '').toLowerCase();

  return `switch-${safeString}`;
};

export const Switch: React.FC<Props> = ({
  className,
  labelText,
  disabled,
  onClick,
  defaultOn = false,
}) => {
  const [checked, setChecked] = useState(defaultOn);

  const clickHandler = (e: React.MouseEvent) => {
    setChecked(!checked);

    if (onClick) {
      onClick(e);
    }
  };

  const somewhatRandomId = generateSomewhatUniqueId(labelText);

  return (
    <Flexbox container gutter={2} alignItems="center">
      <Flexbox item>
        <Typography type="secondary">
          <span id={somewhatRandomId}>{labelText}</span>
        </Typography>
      </Flexbox>
      <Flexbox item>
        <Button
          className={className}
          type="button"
          role="switch"
          aria-checked={checked}
          aria-labelledby={somewhatRandomId}
          onClick={clickHandler}
          disabled={disabled}
        >
          <Knob />
          <Track />
        </Button>
      </Flexbox>
    </Flexbox>
  );
};
