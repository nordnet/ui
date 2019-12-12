import React from 'react';
import styled from 'styled-components';
import { Tooltip, Typography, Box } from '../..';

export default {
  title: 'Molecules | Tooltip',
  parameters: {
    component: Tooltip,
  },
};

const Button = styled.button`
  margin: 0 auto;
  display: block;
`;

export const defaultStory = () => (
  <>
    <Box mb={2}>
      <Typography type="primary" as="p">
        Modals should be used with care as they are quite intrusive on the user experience and
        demand immediate attention (while also blocking all other actions on the site). Always
        consider if you can solve a problem in another way first before you choose to go with the
        modal.
      </Typography>
    </Box>
    <Box mb={2}>
      <Typography type="primary" as="p">
        That being said they are a good tool if you need to grab the users attention, either to
        communicate something very important or make them take an action before proceeding.
      </Typography>
    </Box>
    <Box mb={2}>
      <Typography type="primary" as="p">
        Nielsen/Norman has an excellent article about their usage here
      </Typography>
    </Box>
    <Typography type="primary" as="p">
      <a href="https:// www.nngroup.com/articles/modal-nonmodal-dialog/">
        https:// www.nngroup.com/articles/modal-nonmodal-dialog/
      </a>
    </Typography>
    <Tooltip
      label="Modals should be used with care as they are quite intrusive on the user"
      position="bottom"
    >
      <Button type="button">hmm</Button>
    </Tooltip>
  </>
);

defaultStory.story = {
  name: 'Default',
};
