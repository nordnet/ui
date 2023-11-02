import React, { useState } from 'react';

import { Box, Flexbox, Typography } from '../..';
import { SwitchToggle } from '.';

export default {
  title: 'DEPRECATED / Molecules / SwitchToggle (use DataToggle instead)',
  parameters: {
    component: [SwitchToggle],
  },
};

const DefaultSwitchToggleComponent = () => {
  const toggleOptions = {
    left: 'SEK',
    right: '%',
  };

  const [toggled, setToggled] = useState<boolean>(false);
  const toggledValue = toggled ? toggleOptions.right : toggleOptions.left;

  return (
    <Box py={5} backgroundColor={(t) => t.color.bubbleBackground}>
      <Flexbox container gap={2}>
        <Flexbox container item>
          <SwitchToggle
            checked={toggled}
            label="finance toggle"
            onClick={() => setToggled((prevState) => !prevState)}
            valueLeft={toggleOptions.left}
            valueRight={toggleOptions.right}
            hiddenLabel
          />
        </Flexbox>
        <Flexbox container item>
          <Box pl={1}>
            <Typography>Active: {toggledValue}</Typography>
          </Box>
        </Flexbox>
      </Flexbox>
    </Box>
  );
};

export const DefaultSwitchToggle = {
  render: () => <DefaultSwitchToggleComponent />,
};

const AugmentedWidthSwitchToggleComponent = () => {
  const toggleOptions = {
    left: 'Swedish',
    right: 'Finnish',
  };

  const [toggled, setToggled] = useState<boolean>(false);
  const toggledValue = toggled ? toggleOptions.right : toggleOptions.left;

  return (
    <Box py={5} backgroundColor={(t) => t.color.bubbleBackground}>
      <Flexbox container gap={2}>
        <Flexbox container item>
          <SwitchToggle
            checked={toggled}
            label="language toggle"
            onClick={() => setToggled((prevState) => !prevState)}
            valueLeft={toggleOptions.left}
            valueRight={toggleOptions.right}
            hiddenLabel
            width={48}
          />
        </Flexbox>
        <Flexbox container item>
          <Box pl={1}>
            <Typography>Active: {toggledValue}</Typography>
          </Box>
        </Flexbox>
      </Flexbox>
    </Box>
  );
};

export const AugmentedWidthSwitchToggle = {
  render: <AugmentedWidthSwitchToggleComponent />,
};
