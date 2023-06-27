import React, { useState } from 'react';
import styled from 'styled-components';
import { Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Box, Card, Icon, Drawer, PageWrapper, theme, Typography, useMedia } from '../..';
import TaskList from '.';
import { TaskList as TaskListType } from './TaskList.types';

export default {
  title: 'Molecules / TaskList',
  component: TaskList,
} as Meta;

const NarrowContainer = styled.div`
  width: ${(t) => t.theme.spacing.unit(100)}px;
`;

const WideContainer = styled.div`
  width: ${(t) => t.theme.spacing.unit(150)}px;
`;

const defaultTaskList: TaskListType = {
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
      taskState: 'INCOMPLETE',
      percentage: 35,
    },
    {
      taskId: 'TASK_3',
      taskState: 'INCOMPLETE',
      percentage: 5,
    },
    {
      taskId: 'TASK_4',
      taskState: 'COMPLETED',
      percentage: 10,
    },
    {
      taskId: 'TASK_5',
      taskState: 'COMPLETED',
      percentage: 20,
    },
  ],
};

const taskList: TaskListType = {
  summary: {
    ...defaultTaskList.summary,
    title: 'Get started checklist',
    description: (
      <span>
        <Typography type="secondary">Your account is </Typography>
        <Typography type="secondary" color={(t) => t.colorTokens.action.text_default}>
          30% complete
        </Typography>
      </span>
    ),
    viewAllLabel: 'View all',
    onViewAll: action('onViewAll'),
    onClose: action('onClose'),
  },
  tasks: defaultTaskList.tasks?.map((task, i) => ({
    ...task,
    icon: Object?.entries(Icon)
      .filter(([iconName, _]) => iconName.endsWith('24'))
      .slice(i, i + 1)
      .map(([_, IconComponent]: [string, React.ComponentType<any>]) => <IconComponent />),
    title: `This is the title for task ${i + 1}`,
    description: `This is the description for task ${i + 1}. `.repeat(i + 1),
    startLabel: `Go to guide ${i + 1}`,
    onStart: action(`onStart task ${i + 1}`),
    onDismiss: action(`onDismiss task ${i + 1}`),
  })),
  labels: {
    completedLabel: 'Completed',
    todoLabel: 'To do',
    dismissLabel: 'Dismiss',
    dismissQuestion: 'Mark task as done?',
    dismissConfirmLabel: 'Mark as Done',
    dismissCancelLabel: 'No keep it',
  },
};

const completedTaskList: TaskListType = {
  summary: {
    ...taskList.summary,
    percentageCompleted: 100,
    title: 'Congratulations!',
    description: 'You are all set.',
  },
  tasks: taskList.tasks?.map((task) => ({ ...task, taskState: 'COMPLETED' })),
};

export const Default = () => {
  return <TaskList taskList={defaultTaskList} />;
};

export const Empty = () => {
  return <TaskList />;
};

export const CompletedWithProgress = () => {
  return <TaskList taskList={completedTaskList} />;
};

export const CompletedSummaryOnly = () => {
  return <TaskList taskList={completedTaskList} showProgress={false} />;
};

export const CardNarrowMode = () => {
  return (
    <NarrowContainer>
      <TaskList taskList={taskList} displayMode="CARD_NARROW" />
    </NarrowContainer>
  );
};

export const CardWideMode = () => {
  return (
    <WideContainer>
      <TaskList taskList={taskList} displayMode="CARD_WIDE" />
    </WideContainer>
  );
};

export const DrawerNarrowMode = () => {
  return (
    <NarrowContainer>
      <TaskList taskList={taskList} displayMode="DRAWER_NARROW" />
    </NarrowContainer>
  );
};

export const DrawerWideMode = () => {
  return (
    <WideContainer>
      <TaskList taskList={taskList} displayMode="DRAWER_WIDE" />
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
          30% complete
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
              <TaskList
                taskList={{ ...taskList, summary: { ...taskList.summary, onViewAll: toggleOpen } }}
                displayMode={isMobile ? 'CARD_NARROW' : 'CARD_WIDE'}
              />
            </Box>
          </Card>
        </Box>
        <Drawer
          onClose={onClose}
          open={open}
          title={
            <TaskList.DrawerTitle
              title={taskList.summary?.title}
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
            <TaskList
              taskList={{ ...taskList, summary: { ...taskList.summary, description } }}
              displayMode={isMobile ? 'DRAWER_WIDE' : 'DRAWER_NARROW'}
            />
          )}
        </Drawer>
      </PageWrapper>
    );
  };
  return <Example />;
};
