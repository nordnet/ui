import React, { useState } from 'react';
import { Box, Flexbox, Typography } from '../..';
import DataToggle from '.';

export default {
  title: 'Molecules / DataToggle ',
  parameters: {
    component: [DataToggle],
  },
};

export const defaultDataToggle = () => {
  const DefaultDataToggle = () => {
    const toggleOptions = {
      left: 'SEK',
      right: '%',
    };

    const [toggled, setToggled] = useState<boolean>(false);
    const toggledValue = toggled ? toggleOptions.right : toggleOptions.left;

    return (
      <Box py={5} backgroundColor={(t) => t.color.bubbleBackground}>
        <Flexbox container gutter={2}>
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

  return <DefaultDataToggle />;
};

defaultDataToggle.story = {
  name: 'Default  Data Toggle',
};

export const augmentedWidthDataToggle = () => {
  const AugmentedWidthDataToggle = () => {
    const toggleOptions = {
      left: 'Swedish',
      right: 'Finnish',
    };

    const [toggled, setToggled] = useState<boolean>(false);
    const toggledValue = toggled ? toggleOptions.right : toggleOptions.left;

    return (
      <Box py={5} backgroundColor={(t) => t.color.bubbleBackground}>
        <Flexbox container gutter={2}>
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

  return <AugmentedWidthDataToggle />;
};

augmentedWidthDataToggle.story = {
  name: 'Augmented Width Data Toggle',
};
