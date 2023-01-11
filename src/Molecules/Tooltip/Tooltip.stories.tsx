import React, { useState } from 'react';
import styled from 'styled-components';
import { Box, Drawer, Flexbox, Modal, Button as UIButton, Icon, Typography, PopOver } from '../..';
import Tooltip from '.';
import { Display } from '../../common/Display';

export default {
  title: 'Molecules / Tooltip',
  parameters: {
    component: Tooltip,
  },
};

const label = 'Information in a Tooltip should not be vital for the user to complete a task';

const Button = styled.button`
  display: block;
`;

const StyledDiv = styled.div`
  margin: 20px 0 20px 20px;
`;

export const defaultStory = () => (
  <>
    <StyledDiv>
      Default delays
      <Tooltip label={label} position="top">
        <Button type="button">Hover me</Button>
      </Tooltip>
    </StyledDiv>
    <StyledDiv>
      Open delay: 2000ms; Close delay: 3000ms
      <Tooltip label={label} position="top" openDelay={2000} closeDelay={3000}>
        <Button type="button">Hover me</Button>
      </Tooltip>
    </StyledDiv>
    <StyledDiv>
      Open delay: 10ms; Close delay: 10ms
      <Tooltip label={label} position="top" openDelay={10} closeDelay={10}>
        <Button type="button">Hover me</Button>
      </Tooltip>
    </StyledDiv>
    <StyledDiv>
      Open delay: 0ms; Close delay: 0ms
      <Tooltip label={label} position="top" openDelay={0} closeDelay={0}>
        <Button type="button">Hover me</Button>
      </Tooltip>
    </StyledDiv>
  </>
);

defaultStory.story = {
  name: 'Default',
};

export const withMode = () => (
  <Tooltip label={label} mode="click">
    <Button type="button">Click me</Button>
  </Tooltip>
);

withMode.story = {
  name: 'With On Click Mode',
};

const veryLongLabel = 'Llanfairpwllgwyngyllgogerychwyrndrob';

export const withVeryLongWord = () => (
  <Tooltip label={veryLongLabel}>
    <Button type="button">Hover me</Button>
  </Tooltip>
);

withVeryLongWord.story = {
  name: 'With Very Long Word',
};

export const withPosition = () => (
  <Display
    items={[
      {
        component: (
          <Tooltip label={label} position="bottom">
            <Button type="button">Hover me</Button>
          </Tooltip>
        ),
        title: 'bottom',
      },
      {
        component: (
          <Tooltip label={label} position="left">
            <Button type="button">Hover me</Button>
          </Tooltip>
        ),
        title: 'left',
      },
      {
        component: (
          <Tooltip label={label} position="top">
            <Button type="button">Hover me</Button>
          </Tooltip>
        ),
        title: 'top',
      },
      {
        component: (
          <Tooltip label={label} position="right">
            <Button type="button">Hover me</Button>
          </Tooltip>
        ),
        title: 'right',
      },
      {
        component: (
          <Tooltip label={label} position="right-start">
            <Button type="button">Hover me</Button>
          </Tooltip>
        ),
        title: 'right-start',
      },
      {
        component: (
          <Tooltip label={label} position="right-end">
            <Button type="button">Hover me</Button>
          </Tooltip>
        ),
        title: 'right-end',
      },
      {
        component: (
          <Tooltip label={label} position="top-start">
            <Button type="button">Hover me</Button>
          </Tooltip>
        ),
        title: 'top-start',
      },
      {
        component: (
          <Tooltip label={label} position="top-end">
            <Button type="button">Hover me</Button>
          </Tooltip>
        ),
        title: 'top-end',
      },
      {
        component: (
          <Tooltip label={label} position="left-start">
            <Button type="button">Hover me</Button>
          </Tooltip>
        ),
        title: 'left-start',
      },
      {
        component: (
          <Tooltip label={label} position="left-end">
            <Button type="button">Hover me</Button>
          </Tooltip>
        ),
        title: 'left-end',
      },
      {
        component: (
          <Tooltip label={label} position="bottom-start">
            <Button type="button">Hover me</Button>
          </Tooltip>
        ),
        title: 'bottom-start',
      },
      {
        component: (
          <Tooltip label={label} position="bottom-end">
            <Button type="button">Hover me</Button>
          </Tooltip>
        ),
        title: 'bottom-end',
      },
    ]}
  />
);

withPosition.story = {
  name: 'With position defined',
};

export const zindexWars = () => {
  const Example = () => {
    const [open, setOpen] = useState(false);

    const openModal = () => {
      setOpen(true);
    };

    const closeModal = () => {
      setOpen(false);
    };

    return (
      <Drawer>
        <Box mb={4}>
          <Tooltip label={label}>
            <Button>Hover me</Button>
          </Tooltip>
        </Box>
        <Button onClick={openModal}>Open modal</Button>
        <Modal open={open} onClose={closeModal}>
          <Tooltip label={label} inModal>
            <Button>Hover me</Button>
          </Tooltip>
        </Modal>
      </Drawer>
    );
  };

  return <Example />;
};

zindexWars.story = {
  name: 'Integration: With Drawer and Modal',
};

export const customMaxWidth = () => (
  <Tooltip label={label} maxWidth={100}>
    <Button type="button">Hover me</Button>
  </Tooltip>
);

customMaxWidth.story = {
  name: 'Custom max-width',
};

export const ControlledOpen = () => {
  const [isOpen, setOpen] = useState(true);

  return (
    <>
      <Button onClick={() => setOpen(!isOpen)}>Toogle Tooltip</Button>
      <Flexbox container>
        <Box mt={10}>
          <Tooltip isOpen={isOpen} label="This is a controlled tooltip." position="right">
            <div>
              <Icon.Edit16 />
            </div>
          </Tooltip>
        </Box>
      </Flexbox>
    </>
  );
};

export const WrapChild = () => {
  const [isOpen] = useState(true);

  return (
    <>
      <Flexbox container>
        <Box mt={20}>
          <Tooltip
            isOpen={isOpen}
            label="With the wrapChiild prop, a DOM element of type span wraps the children, this guarantees a element in the DOM to work properly with ref (and thus positioning)."
            position="right"
            wrapChild
          >
            <Icon.Edit16 />
          </Tooltip>
        </Box>
      </Flexbox>

      <Flexbox container>
        <Box mt={40}>
          <Tooltip
            isOpen={isOpen}
            label="This tooltip doesn't use the wrapChild prop, but has a children that correctly handles refs"
            position="right"
          >
            <div>
              <Icon.Edit16 />
            </div>
          </Tooltip>
        </Box>
      </Flexbox>
    </>
  );
};

export const BrokenPositioning = () => {
  const [isOpen] = useState(true);

  return (
    <Flexbox container>
      <Box mt={40}>
        <Tooltip
          isOpen={isOpen}
          label="This tooltip has children which doesn't handle refs correctly. Thus, it's positioning doesn't work properly. See wrapChild for examples of how to fix this."
          position="right"
        >
          <Icon.Edit16 />
        </Tooltip>
      </Box>
    </Flexbox>
  );
};

export const WithClickableContent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Flexbox container>
      <Box mt={40}>
        <Tooltip
          isOpen={isOpen}
          label={<Button onClick={() => alert('You clicked me!')}>Try to click me</Button>}
          position="right"
          pointerEvents
          wrapChild
        >
          <UIButton variant="neutral" onClick={() => setIsOpen(!isOpen)}>
            <Icon.Edit16 />
          </UIButton>
        </Tooltip>
      </Box>
    </Flexbox>
  );
};

export const WithOffset = () => (
  <Box p={20}>
    <Flexbox container gutter={4} alignItems="center">
      <Typography type="primary">Hover the pen!</Typography>
      <Tooltip label="This tooltip has offset" wrapChild offset={[-20, 40]}>
        <Icon.Edit16 />
      </Tooltip>
    </Flexbox>
  </Box>
);

export const WithOffsetAsAFunction = () => (
  <Box p={20}>
    <Flexbox container gutter={4} alignItems="center">
      <Typography type="primary">Hover the pen!</Typography>
      <Tooltip
        position="bottom"
        label="This tooltip has offset"
        wrapChild
        offset={
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          ({ placement, reference, popper }) => {
            if (placement === 'bottom') {
              return [0, popper.height * 4];
            }
            return [];
          }
        }
      >
        <Icon.Edit16 />
      </Tooltip>
    </Flexbox>
  </Box>
);

const OverflowBox = styled(Box)`
  border: 5px solid red;
  height: 50vh;
  width: 400px;
  overflow: scroll;
`;

export const CustomBoundary = () => {
  const [boundaryElement, setBoundaryElement] = useState();

  return (
    <Flexbox container alignItems="center" justifyContent="space-around">
      <OverflowBox pb={40} pt={0} my={40} ref={setBoundaryElement as any}>
        <div style={{ height: '80vh', background: 'orange' }} />
        <Tooltip
          label="This tooltip is positioned bottom but it flips to the top because when there's no portal we have better control over what the container is."
          position="bottom"
          pointerEvents
          customBoundary={boundaryElement}
        >
          <span>custom boundary</span>
        </Tooltip>
        <div style={{ height: '80vh', background: 'orange' }} />
      </OverflowBox>
      <OverflowBox pb={40} pt={0}>
        <Tooltip
          label={
            <span>
              This tooltip is positioned bottom, and as its portal wrapped, it will only reposition
              when outside the border of the page
            </span>
          }
          position="bottom"
          pointerEvents
        >
          <span>Default with portal</span>
        </Tooltip>
      </OverflowBox>
    </Flexbox>
  );
};

const StyledTooltip = styled(Tooltip)`
  ${PopOver.components.TooltipContent} {
    background: red;
  }
`;

export const StyledPopOver = () => (
  <Box py={20}>
    <StyledTooltip label="label" position="top" wrapChild>
      <Typography type="primary">hover me</Typography>
    </StyledTooltip>
  </Box>
);

export const BottomSheet = () => {
  return (
    <Box py={20}>
      <Tooltip
        // eslint-disable-next-line react/button-has-type
        label={<button onClick={() => alert('clicked')}>label</button>}
        position="top"
        wrapChild
        pointerEvents
        bottomSheetQuery={(t) => t.media.lessThan(t.breakpoints.sm)}
      >
        <Typography type="primary">hover me</Typography>
      </Tooltip>
    </Box>
  );
};
