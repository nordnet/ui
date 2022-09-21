import React, { useState } from 'react';

import { Box, Flexbox, Typography } from '../..';
import { SwitchToggle } from '.';

export default {
  title: 'Molecules / SwitchToggle ',
  parameters: {
    component: [SwitchToggle],
  },
};

export const defaultSwitchToggle = () => {
  const DefaultSwitchToggle = () => {
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

  return <DefaultSwitchToggle />;
};

defaultSwitchToggle.story = {
  name: 'Default  Switch Toggle',
};

export const augmentedWidthSwitchToggle = () => {
  const AugmentedWidthSwitchToggle = () => {
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

  return <AugmentedWidthSwitchToggle />;
};

augmentedWidthSwitchToggle.story = {
  name: 'Augmented Width Switch Toggle',
};
