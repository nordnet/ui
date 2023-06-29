import React, { useState } from 'react';
import { StoryObj, Meta } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import { Box, Card, Drawer, PageWrapper, Typography, useMedia } from '../..';
import { Provider } from '../../common/Links/ReactRouterLinkHelper';

import CheckList from '.';

import {
  defaultCheckList,
  completedCheckList,
  defaultTaskInfoMap,
  generateCheckList,
  generateTaskInfoMap,
  header,
  labels,
  completedHeader,
} from './mocks';

export default {
  title: 'Molecules / CheckList',
  component: CheckList,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
  decorators: [
    (Story) => (
      <Provider>
        <Story />
      </Provider>
    ),
  ],
} as Meta<typeof CheckList>;

type CheckListComponentStory = StoryObj<typeof CheckList>;

const CardContainer: React.FC<React.PropsWithChildren<{}>> = ({ children }) => (
  <Card>
    <Box px={3} py={5} sm={{ p: 5 }}>
      {children}
    </Box>
  </Card>
);

export const Default = () => <CheckList checkList={defaultCheckList} />;

export const Empty = () => <CheckList />;

export const MinimalExampleInCard = () => (
  <CardContainer>
    <CheckList
      checkList={defaultCheckList}
      header={header}
      labels={labels}
      taskInfoMap={defaultTaskInfoMap}
      displayMode="CARD"
    />
  </CardContainer>
);

export const MinimalExampleInDrawer = () => (
  <Drawer>
    <CheckList
      checkList={defaultCheckList}
      header={header}
      labels={labels}
      taskInfoMap={defaultTaskInfoMap}
      displayMode="DRAWER"
    />
  </Drawer>
);

export const CompletedWithProgress = () => (
  <CardContainer>
    <CheckList
      checkList={completedCheckList}
      header={completedHeader}
      labels={labels}
      taskInfoMap={defaultTaskInfoMap}
      displayMode="CARD"
    />
  </CardContainer>
);

export const CompletedSummaryOnly = () => (
  <CardContainer>
    <CheckList
      checkList={completedCheckList}
      header={completedHeader}
      labels={labels}
      taskInfoMap={defaultTaskInfoMap}
      showProgress={false}
      displayMode="CARD"
    />
  </CardContainer>
);

export const FullExample = () => {
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

  const TASK_COUNT = 5;
  const checkList = generateCheckList(TASK_COUNT);
  const taskInfoMap = generateTaskInfoMap(TASK_COUNT);

  const drawerTitle = (
    <CheckList.DrawerTitle
      title={header?.title}
      helpTitle="What's this?"
      showHelpTitle={showHelp}
      onHelpClick={toggleHelp}
    />
  );

  const drawerDescription = (
    <>
      <Typography type="secondary">Your account is </Typography>
      <Typography type="title3" weight="bold" color={(t) => t.colorTokens.action.text_default}>
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
            checkList={checkList}
            header={{
              ...header,
              title: cardTitle,
              description: cardDescription,
              onViewAll: toggleOpen,
            }}
            labels={labels}
            taskInfoMap={taskInfoMap}
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
            checkList={checkList}
            header={{ ...header, description: drawerDescription }}
            labels={labels}
            taskInfoMap={taskInfoMap}
            displayMode="DRAWER"
          />
        )}
      </Drawer>
    </PageWrapper>
  );
};

export const FullExampleMobile: CheckListComponentStory = () => <FullExample />;
FullExampleMobile.parameters = {
  viewport: {
    defaultViewport: 'iphone5',
  },
};

export const FullExampleTablet: CheckListComponentStory = () => <FullExample />;
FullExampleTablet.parameters = {
  viewport: {
    defaultViewport: 'tablet',
  },
};
