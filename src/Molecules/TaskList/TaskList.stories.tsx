import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Box, Card, Icon, Drawer, PageWrapper, Typography } from '../..';
import TaskList from '.';
import { TaskList as TaskListType } from './TaskList.types';

export default {
  title: 'Molecules / TaskList',
  component: TaskList,
} as Meta;

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
  },
  tasks: defaultTaskList.tasks?.map((task, i) => ({
    ...task,
    icon: <Icon.Book24 />,
    title: `This is the title for task ${i + 1}`,
    description: `This is the description for task ${i + 1}. `.repeat(i + 1),
    onStart: action(`onStart task ${i + 1}`),
    onDismiss: action(`onDismiss task ${i + 1}`),
    startLabel: `Go to guide ${i + 1}`,
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

export const Default = () => {
  return <TaskList taskList={defaultTaskList} />;
};

export const Empty = () => {
  return <TaskList />;
};

export const Completed = () => {
  return <TaskList taskList={{ summary: { percentageCompleted: 100 } }} />;
};

export const DrawerModeNarrow = () => {
  return (
    <Box p={10} style={{ width: '395px' }}>
      <TaskList taskList={taskList} displayMode="DRAWER_NARROW" />
    </Box>
  );
};

export const DrawerModeWide = () => {
  return (
    <Box p={10} style={{ width: '768px' }}>
      <TaskList taskList={taskList} displayMode="DRAWER_WIDE" />
    </Box>
  );
};

export const InCardNarrow = () => {
  return (
    <Box p={10} style={{ width: '360px' }}>
      <Card>
        <TaskList taskList={taskList} displayMode="CARD_NARROW" />
      </Card>
    </Box>
  );
};

export const InCardWide = () => {
  return (
    <Box p={10} style={{ width: '620px' }}>
      <Card>
        <TaskList taskList={taskList} displayMode="CARD_WIDE" />
      </Card>
    </Box>
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

    const description = (
      <>
        <Typography type="secondary">Your account is </Typography>
        <Typography
          type="title3"
          weight="bold"
          as="div"
          color={(t) => t.colorTokens.action.text_default}
        >
          30% complete
        </Typography>
        <Box pt={2}>
          <Typography type="secondary" as="div" color={(t) => t.colorTokens.neutral.text_weak}>
            Good job! Keep going.
          </Typography>
        </Box>
      </>
    );

    return (
      <PageWrapper background={(t) => t.colorTokens.neutral.background_medium}>
        <Box p={10} style={{ width: '620px' }}>
          <Card>
            <TaskList
              taskList={{ ...taskList, summary: { ...taskList.summary, onViewAll: toggleOpen } }}
              displayMode="CARD_WIDE"
            />
          </Card>
        </Box>
        {/* 
          <button type="button" onClick={toggleOpen}>
            Toggle drawer
          </button> */}
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
        >
          {showHelp ? (
            'Showing help here'
          ) : (
            <TaskList
              taskList={{ ...taskList, summary: { ...taskList.summary, description } }}
              displayMode="DRAWER_NARROW"
            />
          )}
        </Drawer>
      </PageWrapper>
    );
  };
  return <Example />;
};
