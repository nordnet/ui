import React from 'react';
import { action } from '@storybook/addon-actions';
import { Icon, Typography } from '../..';
import { CheckList as CheckListType, Task } from './CheckList.types';

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
    .map(([key, IconComponent]: [string, React.ComponentType<any>]) => <IconComponent key={key} />),
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

export const checkList: CheckListType = {
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

export const completedCheckList: CheckListType = {
  ...checkList,
  summary: {
    ...checkList.summary,
    percentageCompleted: 100,
    title: 'Congratulations!',
    description: 'You are all set.',
  },
  tasks: checkList.tasks?.map((task) => ({ ...task, taskState: 'COMPLETED' })),
};
