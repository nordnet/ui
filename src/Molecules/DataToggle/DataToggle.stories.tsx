import React, { useState } from 'react';
import { Box, Flexbox, Typography } from '../..';
import DataToggle from '.';

export default {
  title: 'Molecules / DataToggle ',
  parameters: {
    component: [DataToggle],
  },
};

const DefaultDataToggleComponent = () => {
  const toggleOptions = {
    left: 'SEK',
    right: '%',
  };

  const [toggled, setToggled] = useState<boolean>(false);
  const toggledValue = toggled ? toggleOptions.right : toggleOptions.left;

  return (
    <Box p={3} backgroundColor={(t) => t.color.bubbleBackground}>
      <Flexbox container gap={2}>
        <Flexbox container item>
          <DataToggle
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

export const DefaultDataToggle = {
  render: () => <DefaultDataToggleComponent />,
};

const AugmentedWidthDataToggleComponent = () => {
  const toggleOptions = {
    left: 'Swedish',
    right: 'Finnish',
  };

  const [toggled, setToggled] = useState<boolean>(false);
  const toggledValue = toggled ? toggleOptions.right : toggleOptions.left;

  return (
    <Box p={3} backgroundColor={(t) => t.color.bubbleBackground}>
      <Flexbox container gap={2}>
        <Flexbox container item>
          <DataToggle
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

export const AugmentedWidthDataToggle = {
  render: () => <AugmentedWidthDataToggleComponent />,
};
