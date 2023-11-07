import React, { useEffect, useState } from 'react';
import { StoryObj, Meta } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import { Box, Card, Drawer, PageWrapper, Typography, useMedia } from '../..';
import { Provider } from '../../common/Links/ReactRouterLinkHelper';

import CheckList from '.';

import {
  defaultCheckList,
  completedCheckList,
  defaultTaskInfoMap,
  header,
  labels,
  completedHeader,
  completedHeaderWithClose,
  useFakeCheckList,
  useFakeCheckListV2,
  getPercentage,
} from './mocks';

const meta: Meta<typeof CheckList> = {
  component: CheckList,
  title: 'Molecules / CheckList',
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
};

export default meta;
type Story = StoryObj<typeof CheckList>;

const CardContainer = ({ children }: { children: React.ReactNode }) => (
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

export const CompletedWithProgressAndClose = () => (
  <CardContainer>
    <CheckList
      checkList={completedCheckList}
      header={completedHeaderWithClose}
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

  const TASK_COUNT = 5;
  const { checkList, taskInfoMap } = useFakeCheckList(TASK_COUNT);
  const isMobile = useMedia((theme) => theme.media.lessThan(theme.breakpoints.sm));
  const isCompleted = checkList.summary.percentageCompleted === checkList.summary.maxPercentage;

  useEffect(() => {
    const percentageCompleted = checkList.tasks.reduce(
      (pre: any, cur: any) =>
        cur.taskState === 'COMPLETED' ? pre + cur.percentage : cur.percentage + 0,
      0,
    );
    checkList.summary.percentageCompleted = percentageCompleted;
  }, [checkList]);

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
          {isCompleted
            ? `${completedHeader.title} ${completedHeader.description}`
            : 'Good job! Keep going.'}
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
              title: isCompleted ? completedHeader.title : cardTitle,
              description: isCompleted ? completedHeader.description : cardDescription,
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

export const FullExampleMobile: Story = {
  render: () => <FullExample />,

  parameters: {
    viewport: {
      defaultViewport: 'iphone5',
    },
  },
};

export const FullExampleTablet: Story = {
  render: () => <FullExample />,

  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
};

export const CustomTaskInfoPercentage = () => {
  const [open, setOpen] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const { checkList, taskInfoMap } = useFakeCheckListV2(5);
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
  const completedPercentage = getPercentage(checkList?.tasks, taskInfoMap);

  const isCompleted = completedPercentage === 100;

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
        {`${completedPercentage}% complete`}
      </Typography>
      <Box pt={2}>
        <Typography type="secondary" color={(t) => t.colorTokens.neutral.text_weak}>
          {isCompleted
            ? `${completedHeader.title} ${completedHeader.description}`
            : 'Good job! Keep going.'}
        </Typography>
      </Box>
    </>
  );

  const cardTitle = isMobile ? 'Get started' : 'Get started checklist';

  const cardDescription = (
    <span>
      {!isMobile && <Typography type="secondary">Your account is </Typography>}
      <Typography type="secondary" color={(t) => t.colorTokens.action.text_default}>
        {`${completedPercentage}% complete`}
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
              title: isCompleted ? completedHeader.title : cardTitle,
              description: isCompleted ? completedHeader.description : cardDescription,
              onViewAll: toggleOpen,
            }}
            labels={labels}
            taskInfoMap={taskInfoMap}
            displayMode="CARD"
            summary={{ percentageCompleted: completedPercentage, maxPercentage: 100 }}
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
