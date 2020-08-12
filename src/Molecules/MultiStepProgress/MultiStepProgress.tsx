import React, { useState } from 'react';
import styled from 'styled-components';

import Card from '../../Atoms/Card';
import { TopLevel } from './TopLevel';
import { MultiStepProgressComponent } from './MultiStepProgress.types';
import { Drawer, Media, Flexbox, Typography } from '../..';

const StyledDrawer = styled(Drawer)`
  ${Drawer.components.Content} {
    padding: 0;
  }
`;

export const MultiStepProgress: MultiStepProgressComponent = ({
  onStepClick,
  onSubStepClick,
  steps,
  title = 'Progress',
  titleDone = 'Completed',
  titleNotDone = 'Not completed',
  mobileDrawerTitle = 'Start monthly savings',
}) => {
  // TODO: use context to pass these lovely props down the rabbit hole
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const onDrawerClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Card>
        <div role="group" aria-label={title}>
          <TopLevel
            drawerOpen={open}
            onStepClick={onStepClick}
            onSubStepClick={onSubStepClick}
            steps={steps}
            titleDone={titleDone}
            titleNotDone={titleNotDone}
            onMobileStepClick={toggleDrawer}
          />
        </div>
      </Card>

      <Media query={t => t.media.lessThan(t.breakpoints.md)}>
        <StyledDrawer
          onClose={onDrawerClose}
          title={
            <Flexbox container gutter={2} alignItems="center">
              <Typography type="title2" as="h2">
                {mobileDrawerTitle}
              </Typography>
            </Flexbox>
          }
          open={open}
        >
          <div role="group" aria-label={title}>
            <TopLevel
              onStepClick={onStepClick}
              onSubStepClick={onSubStepClick}
              steps={steps}
              titleDone={titleDone}
              titleNotDone={titleNotDone}
              isInDrawer
            />
          </div>
        </StyledDrawer>
      </Media>
    </>
  );
};

MultiStepProgress.displayName = 'MultiStepProgress';
