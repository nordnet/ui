import React, { useState } from 'react';
import styled from 'styled-components';
import { Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Box, Card, Icon, Drawer, PageWrapper, theme, Typography, useMedia } from '../..';
import CheckList from '.';
import { CheckList as CheckListType, Task } from './CheckList.types';

export default {
  title: 'Molecules / CheckList',
  component: CheckList,
} as Meta;

const NarrowContainer = styled.div`
  width: ${(t) => t.theme.spacing.unit(100)}px;
`;

const WideContainer = styled.div`
  width: ${(t) => t.theme.spacing.unit(150)}px;
`;

const defaultCheckList: CheckListType = {
  summary: {
    maxPercentage: 100,
    percentageCompleted: 30,
  },
  tasks: [
    {
      taskId: 'TASK_1',
      taskState: 'INCOMPLETE',
      percentage: 30,
    },
    {
      taskId: 'TASK_2',
      taskState: 'COMPLETED',
      percentage: 20,
    },
  ],
};

const TASK_COUNT = 5;

const tasks: Task[] = [...Array(TASK_COUNT).keys()].map((i) => ({
  taskId: `TASK_${i + 1}`,
  taskState: i < TASK_COUNT / 2 ? 'COMPLETED' : 'INCOMPLETE',
  percentage: 5 * (i + 1),
  icon: Object?.entries(Icon)
    .filter(([iconName, _]) => iconName.endsWith('24'))
    .slice(i, i + 1)
    .map(([_, IconComponent]: [string, React.ComponentType<any>]) => <IconComponent />),
  title: `This is the title for task ${i + 1}`,
  description: `This is the description for task ${i + 1}. `.repeat(i + 1),
  startLabel: `Go to guide ${i + 1}`,
  onStart: action(`onStart task ${i + 1}`),
  onDismiss: action(`onDismiss task ${i + 1}`),
}));

const percentageCompleted = tasks.reduce(
  (prev, curr) => (curr.taskState === 'COMPLETED' ? prev + curr.percentage : prev),
  0,
);

const checkList: CheckListType = {
  summary: {
    maxPercentage: 100,
    percentageCompleted,
    title: 'Get started checklist',
    description: (
      <span>
        <Typography type="secondary">Your account is </Typography>
        <Typography type="secondary" color={(t) => t.colorTokens.action.text_default}>
          {`${percentageCompleted}% complete`}
        </Typography>
      </span>
    ),
    viewAllLabel: 'View all',
    onViewAll: action('onViewAll'),
    onClose: action('onClose'),
  },
  tasks,
  labels: {
    completedLabel: 'Completed',
    todoLabel: 'To do',
    dismissLabel: 'Dismiss',
    dismissQuestion: 'Mark task as done?',
    dismissConfirmLabel: 'Mark as Done',
    dismissCancelLabel: 'No keep it',
  },
};

const completedCheckList: CheckListType = {
  summary: {
    ...checkList.summary,
    percentageCompleted: 100,
    title: 'Congratulations!',
    description: 'You are all set.',
  },
  tasks: checkList.tasks?.map((task) => ({ ...task, taskState: 'COMPLETED' })),
};

export const Default = () => {
  return <CheckList checkList={defaultCheckList} />;
};

export const Empty = () => {
  return <CheckList />;
};

export const CompletedWithProgress = () => {
  return <CheckList checkList={completedCheckList} />;
};

export const CompletedSummaryOnly = () => {
  return <CheckList checkList={completedCheckList} showProgress={false} />;
};

export const CardNarrowMode = () => {
  return (
    <NarrowContainer>
      <CheckList checkList={checkList} displayMode="CARD_NARROW" />
    </NarrowContainer>
  );
};

export const CardWideMode = () => {
  return (
    <WideContainer>
      <CheckList checkList={checkList} displayMode="CARD_WIDE" />
    </WideContainer>
  );
};

export const DrawerNarrowMode = () => {
  return (
    <NarrowContainer>
      <CheckList checkList={checkList} displayMode="DRAWER_NARROW" />
    </NarrowContainer>
  );
};

export const DrawerWideMode = () => {
  return (
    <WideContainer>
      <CheckList checkList={checkList} displayMode="DRAWER_WIDE" />
    </WideContainer>
  );
};

export const RealisticExample = () => {
  const Example = () => {
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

    const isMobile = useMedia((t) => t.media.lessThan(theme.breakpoints.sm));

    const description = (
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

    return (
      <PageWrapper background={(t) => t.colorTokens.neutral.background_medium}>
        <Box p={10}>
          <Card>
            <Box p={5}>
              <CheckList
                checkList={{
                  ...checkList,
                  summary: { ...checkList.summary, onViewAll: toggleOpen },
                }}
                displayMode={isMobile ? 'CARD_NARROW' : 'CARD_WIDE'}
              />
            </Box>
          </Card>
        </Box>
        <Drawer
          onClose={onClose}
          open={open}
          title={
            <CheckList.DrawerTitle
              title={checkList.summary?.title}
              helpTitle="What's this?"
              showHelpTitle={showHelp}
              onHelpClick={toggleHelp}
            />
          }
          preventOnClickOutsideDataAttributes={['data-custom-prevent-click-outside']}
        >
          {showHelp ? (
            <Typography>Showing help here</Typography>
          ) : (
            <CheckList
              checkList={{ ...checkList, summary: { ...checkList.summary, description } }}
              displayMode={isMobile ? 'DRAWER_WIDE' : 'DRAWER_NARROW'}
            />
          )}
        </Drawer>
      </PageWrapper>
    );
  };
  return <Example />;
};
