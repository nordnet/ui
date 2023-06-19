import React, { useState } from 'react';
import { Meta } from '@storybook/react';

import { Box, Card, Icon, Drawer, PageWrapper } from '../..';
import TaskList from '.';
import { TaskList as TaskListType } from './TaskList.types';

export default {
  title: 'Molecules / TaskList',
  component: TaskList,
} as Meta;

const taskList: TaskListType = {
  summary: {
    maxPercentage: 100,
    percentageCompleted: 30,
    title: 'Get started checklist',
  },
  tasks: [
    {
      taskId: 'TASK_1',
      taskState: 'INCOMPLETE',
      percentage: 30,
      icon: <Icon.Book24 />,
      title: 'This is the title for task one',
      description: 'This is the description for task one',
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
      title: 'This is the title for task four',
      description: 'This is the description for task four',
    },
    {
      taskId: 'TASK_5',
      taskState: 'COMPLETED',
      percentage: 20,
    },
  ],
};

export const Default = () => {
  return <TaskList taskList={taskList} />;
};

export const Empty = () => {
  return <TaskList />;
};

export const Completed = () => {
  return <TaskList taskList={{ summary: { percentageCompleted: 100 } }} />;
};

export const DrawerMode = () => {
  return (
    <div style={{ width: '395px' }}>
      <TaskList taskList={taskList} inDrawer />
    </div>
  );
};

export const DrawerModeTablet = () => {
  return (
    <div style={{ width: '768px' }}>
      <TaskList taskList={taskList} inDrawer />
    </div>
  );
};

export const InCard = () => {
  return (
    <Box p={10}>
      <Card>
        <TaskList taskList={taskList} />
      </Card>
    </Box>
  );
};

export const InDrawer = () => {
  const Example = () => {
    const [open, setOpen] = useState(true);

    const toggle = () => {
      setOpen(!open);
    };

    const onClose = () => {
      setOpen(false);
    };

    return (
      <PageWrapper background={(t) => t.colorTokens.neutral.background_default}>
        <Box py={100}>
          <button type="button" onClick={toggle}>
            Toggle drawer
          </button>
          <Drawer
            onClose={onClose}
            open={open}
            title={<TaskList.DrawerTitle title={taskList.summary?.title} />}
          >
            <TaskList taskList={taskList} inDrawer />
          </Drawer>
        </Box>
      </PageWrapper>
    );
  };
  return <Example />;
};
