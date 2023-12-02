import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import Card from '../../Atoms/Card';
import { TopLevel } from './TopLevel';
import { Props } from './MultiStepProgress.types';
import { useIntersect } from '../../common/Hooks';
import { Drawer, Media, Flexbox, Typography } from '../..';

const StyledDrawer = styled(Drawer)`
  ${Drawer.components.Content} {
    padding: 0;
  }
`;

const StyledCard = styled(Card)<{ $isSticky: boolean }>`
  background: transparent;
  ${(p) => p.theme.media.lessThan(p.theme.breakpoints.md)} {
    position: ${(p) => (p.$isSticky ? 'fixed' : 'static')};
    top: 0;
    left: 0;
    width: 100%;
    z-index: ${(p) => p.theme.zIndex.header};
    background: ${(p) => p.theme.color.card};
  }
`;

const StyledPlaceholderDiv = styled.div<{ $isSticky: boolean; $elementHeight: number }>`
  ${(p) => p.theme.media.lessThan(p.theme.breakpoints.md)} {
    padding-top: ${(p) => (p.$isSticky ? p.$elementHeight : 0)}px;
  }
`;

const IntersectionTop = styled.div`
  ${(p) => p.theme.media.lessThan(p.theme.breakpoints.md)} {
    height: 1px;
    width: 1px;
    pointer-events: none;
  }
`;

export const MultiStepProgress = ({
  onStepClick,
  onSubStepClick,
  steps,
  title = '',
  titleDone = '',
  titleNotDone = '',
  mobileDrawerTitle = '',
  closeDrawerOnStepClick = false,
  sticky = false,
}: Props) => {
  // TODO: use context to pass these lovely props down the rabbit hole
  const [open, setOpen] = useState(false);
  const [setIntersectionTopRef, intersectionTopRatio] = useIntersect<HTMLDivElement>();
  const styledCard = useRef<HTMLDivElement>(null);

  const isSticky = intersectionTopRatio === 0 && sticky;

  const elementHeight = styledCard?.current?.getBoundingClientRect()?.height || 0;

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const onDrawerClose = () => {
    setOpen(false);
  };

  const onStepClickDrawerClose = (value: string) => {
    if (closeDrawerOnStepClick) onDrawerClose();
    if (onStepClick) onStepClick(value);
  };

  return (
    <>
      {sticky && <IntersectionTop ref={setIntersectionTopRef} />}

      {sticky && <StyledPlaceholderDiv $elementHeight={elementHeight} $isSticky={isSticky} />}
      <StyledCard $isSticky={isSticky} ref={styledCard}>
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
      </StyledCard>
      <Media query={(t) => t.media.lessThan(t.breakpoints.md)}>
        <StyledDrawer
          onClose={onDrawerClose}
          title={
            <Flexbox container gap={2} alignItems="center">
              <Typography type="title2" as="h2">
                {mobileDrawerTitle}
              </Typography>
            </Flexbox>
          }
          open={open}
        >
          <div role="group" aria-label={title}>
            <TopLevel
              onStepClick={onStepClickDrawerClose}
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
