import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import { Box, Card, Drawer, PageWrapper, Typography, useMedia } from '../..';
import CheckList from '.';

import { defaultCheckList, checkList, completedCheckList } from './mocks';

export default {
  title: 'Molecules / CheckList',
  component: CheckList,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as ComponentMeta<typeof CheckList>;

type CheckListComponentStory = ComponentStory<typeof CheckList>;

const mobileViewportParams = {
  viewport: {
    defaultViewport: 'iphone5',
  },
};

const CardContainer: React.FC<React.PropsWithChildren<{}>> = ({ children }) => (
  <Card>
    <Box px={3} py={5} sm={{ p: 5 }}>
      {children}
    </Box>
  </Card>
);

export const Default = () => <CheckList checkList={defaultCheckList} />;

export const Empty = () => <CheckList />;

export const CompletedWithProgress = () => <CheckList checkList={completedCheckList} />;

export const CompletedSummaryOnly = () => (
  <CheckList checkList={completedCheckList} showProgress={false} />
);

export const CardDesktop: CheckListComponentStory = () => (
  <CardContainer>
    <CheckList checkList={checkList} displayMode="CARD" />
  </CardContainer>
);

export const CardMobile: CheckListComponentStory = () => (
  <CardContainer>
    <CheckList checkList={checkList} displayMode="CARD" />
  </CardContainer>
);
CardMobile.parameters = mobileViewportParams;

export const DrawerDesktop: CheckListComponentStory = () => (
  <Drawer>
    <CheckList checkList={checkList} displayMode="DRAWER" />
  </Drawer>
);

export const DrawerMobile: CheckListComponentStory = () => (
  <Drawer>
    <CheckList checkList={checkList} displayMode="DRAWER" />
  </Drawer>
);
DrawerMobile.parameters = mobileViewportParams;

const RealisticExample = () => {
  const [open, setOpen] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  const onClose = () => {
    setOpen(false);
  };

  const toggleHelp = () => {
    setShowHelp(!showHelp);
  };

  const isMobile = useMedia((theme) => theme.media.lessThan(theme.breakpoints.sm));

  const drawerTitle = (
    <CheckList.DrawerTitle
      title={checkList.summary?.title}
      helpTitle="What's this?"
      showHelpTitle={showHelp}
      onHelpClick={toggleHelp}
    />
  );

  const drawerDescription = (
    <>
      <Typography type="secondary">Your account is </Typography>
      <Typography type="title3" color={(t) => t.colorTokens.action.text_default}>
        {`${checkList.summary.percentageCompleted}% complete`}
      </Typography>
      <Box pt={2}>
        <Typography type="secondary" color={(t) => t.colorTokens.neutral.text_weak}>
          Good job! Keep going.
        </Typography>
      </Box>
    </>
  );

  const cardTitle = isMobile ? 'Get started' : 'Get started checklist';

  const cardDescription = (
    <span>
      {!isMobile && <Typography type="secondary">Your account is </Typography>}
      <Typography type="secondary" color={(t) => t.colorTokens.action.text_default}>
        {`${checkList.summary.percentageCompleted}% complete`}
      </Typography>
    </span>
  );

  return (
    <PageWrapper background={(t) => t.colorTokens.neutral.background_medium}>
      <Box sm={{ p: 10 }}>
        <CardContainer>
          <CheckList
            checkList={{
              ...checkList,
              summary: {
                ...checkList.summary,
                title: cardTitle,
                description: cardDescription,
                onViewAll: toggleOpen,
              },
            }}
            displayMode="CARD"
          />
        </CardContainer>
      </Box>
      <Drawer
        onClose={onClose}
        open={open}
        title={drawerTitle}
        preventOnClickOutsideDataAttributes={['data-custom-prevent-click-outside']}
      >
        {showHelp ? (
          <Typography>Showing help here</Typography>
        ) : (
          <CheckList
            checkList={{
              ...checkList,
              summary: { ...checkList.summary, description: drawerDescription },
            }}
            displayMode="DRAWER"
          />
        )}
      </Drawer>
    </PageWrapper>
  );
};

export const RealisticExampleDesktop: CheckListComponentStory = () => <RealisticExample />;

export const RealisticExampleMobile: CheckListComponentStory = () => <RealisticExample />;
RealisticExampleMobile.parameters = mobileViewportParams;
