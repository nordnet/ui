import React from 'react';
import { action } from '@storybook/addon-actions';
import { Icon, Typography } from '../..';
import { CheckList as CheckListType, Task, TaskInfoMap } from './CheckList.types';

export const defaultCheckList: CheckListType = {
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
      percentage: 30,
    },
    {
      taskId: 'TASK_3',
      taskState: 'COMPLETED',
      percentage: 20,
    },
  ],
};

export const completedCheckList: CheckListType = {
  summary: {
    ...defaultCheckList.summary,
    percentageCompleted: 100,
  },
  tasks: defaultCheckList.tasks?.map((task) => ({ ...task, taskState: 'COMPLETED' })),
};

export const defaultTaskInfoMap: TaskInfoMap = {
  TASK_1: {
    icon: <Icon.Search24 />,
    title: 'Find investments',
    description: 'Discover stocks and funds to invest in.',
    startAction: {
      label: 'Start guide',
      onClick: action('startAction: Find investments'),
    },
    onDismiss: action('dismiss: Find investments'),
  },
  TASK_2: {
    icon: <Icon.Book24 />,
    title: 'Deposit money',
    description: 'Transfer money to your account.',
    startAction: {
      label: 'Deposit now',
      to: '/deposit-money',
    },
    onDismiss: action('dismiss: Deposit money'),
  },
};

export const generateCheckList = (taskCount: number): CheckListType => {
  const tasks: Task[] = [...Array(taskCount).keys()].map((i) => ({
    taskId: `TASK_${i + 1}`,
    taskState: i < taskCount / 2 ? 'COMPLETED' : 'INCOMPLETE',
    percentage: 5 * (i + 1),
  }));

  const percentageCompleted = tasks.reduce(
    (prev, curr) => (curr.taskState === 'COMPLETED' ? prev + curr.percentage : prev),
    0,
  );

  return {
    summary: {
      maxPercentage: 100,
      percentageCompleted,
    },
    tasks,
  };
};

export const generateTaskInfoMap = (taskCount: number): TaskInfoMap => {
  const iconArray = Object?.entries(Icon)
    .filter(([iconName, _]) => iconName.endsWith('24'))
    .map(([key, IconComponent]: [string, React.ComponentType<any>]) => <IconComponent key={key} />);

  return [...Array(taskCount).keys()].reduce(
    (obj, i) => ({
      ...obj,
      [`TASK_${i + 1}`]: {
        icon: iconArray[i],
        title: `This is the title for task ${i + 1}`,
        description: `This is the description for task ${i + 1}. `.repeat(i + 1),
        startAction: {
          label: i % 2 ? `Link to step ${i + 1}` : `Open step ${i + 1}`,
          onClick: action(`startAction (${i % 2 ? 'link' : 'button'}) task ${i + 1}`),
          to: i % 2 ? `/route${i + 1}` : undefined,
        },
        onDismiss: action(`onDismiss task ${i + 1}`),
      },
    }),
    {},
  );
};

export const header = {
  title: 'Get started checklist',
  description: (
    <span>
      <Typography type="secondary">Your account is </Typography>
      <Typography type="secondary" color={(t) => t.colorTokens.action.text_default}>
        {`${defaultCheckList.summary.percentageCompleted}% complete`}
      </Typography>
    </span>
  ),
  viewAllLabel: 'View all',
  onViewAll: action('onViewAll'),
  onClose: action('onClose'),
};

export const labels = {
  completedLabel: 'Completed',
  todoLabel: 'To do',
  dismissLabel: 'Dismiss',
  dismissQuestion: 'Mark task as done?',
  dismissConfirmLabel: 'Mark as Done',
  dismissCancelLabel: 'No keep it',
};

export const completedHeader = {
  ...header,
  title: 'Congratulations!',
  description: 'You are all set.',
};
