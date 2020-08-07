import React, { useState } from 'react';

import Card from '../../Atoms/Card';
import { LevelOne } from './LevelOne';
import { MultiStepProgressComponent } from './MultiStepProgress.types';
import { Drawer, Media, Flexbox, Typography } from '../..';

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
          <LevelOne
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
        <Drawer
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
            <LevelOne
              onStepClick={onStepClick}
              onSubStepClick={onSubStepClick}
              steps={steps}
              titleDone={titleDone}
              titleNotDone={titleNotDone}
              isInDrawer
            />
          </div>
        </Drawer>
      </Media>
    </>
  );
};

MultiStepProgress.displayName = 'MultiStepProgress';
