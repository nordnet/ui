import React, { useState } from 'react';
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
      taskState: 'DISMISSED',
      percentage: 20,
    },
    {
      taskId: 'TASK_4',
      taskState: 'DISMISSED',
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
    icon: <Icon.Account24 />,
    title: 'Second task money',
    description: 'Transfer money to your account.',
    startAction: {
      label: 'Deposit now',
      to: '/deposit-money',
    },
    onDismiss: action('dismiss: Deposit money'),
  },
  TASK_3: {
    icon: <Icon.Deposit24 />,
    title: 'Third task money',
    description: 'Transfer money to your account.',
    startAction: {
      label: 'Deposit now',
      to: '/deposit-money',
    },
    onDismiss: action('dismiss: Deposit money'),
  },
  TASK_4: {
    icon: <Icon.Book24 />,
    title: 'Fourth task money',
    description: 'Transfer money to your account.',
    startAction: {
      label: 'Deposit now',
      to: '/deposit-money',
    },
    onDismiss: action('dismiss: Deposit money'),
  },
};

export const defaultCheckListV2: CheckListType = {
  onboardingCompletedAt: '2023-10-03T07:01:57.702Z',
  tasks: [
    {
      taskId: 'TASK_1',
      taskState: 'COMPLETED',
      completedAt: '2023-10-03T07:01:57.702Z',
    },
    {
      taskId: 'TASK_2',
      taskState: 'COMPLETED',
      completedAt: '2023-10-03T07:01:57.702Z',
    },
    {
      taskId: 'TASK_3',
      taskState: 'INCOMPLETE',
      completedAt: '2023-10-03T07:01:57.702Z',
    },
    {
      taskId: 'TASK_4',
      taskState: 'INCOMPLETE',
      completedAt: '2023-10-03T07:01:57.702Z',
    },
  ],
  customerProgress: 'LEVEL_1',
};

export const customPercentageTaskInfoMap: TaskInfoMap = {
  TASK_1: {
    icon: <Icon.Search24 />,
    title: 'Find investments',
    description: 'Discover stocks and funds to invest in.',
    customPercentage: 25,
    startAction: {
      label: 'Start guide',
      onClick: action('startAction: Find investments'),
    },
    onDismiss: action('dismiss: Find investments'),
  },
  TASK_2: {
    icon: <Icon.Account24 />,
    title: 'Second task',
    description: 'Transfer money to your account.',
    customPercentage: 25,
    startAction: {
      label: 'Deposit now',
      to: '/deposit-money',
    },
    onDismiss: action('dismiss: Deposit money'),
  },
  TASK_3: {
    icon: <Icon.Deposit24 />,
    title: 'Third task',
    description: 'Transfer money to your account.',
    customPercentage: 25,
    startAction: {
      label: 'Deposit now',
      to: '/deposit-money',
    },
    onDismiss: action('dismiss: Deposit money'),
  },
  TASK_4: {
    icon: <Icon.Book24 />,
    title: 'Fourth task',
    description: 'Transfer money to your account.',
    customPercentage: 25,
    startAction: {
      label: 'Deposit now',
      to: '/deposit-money',
    },
    onDismiss: action('dismiss: Deposit money'),
  },
};

const generateNumSeries = (ratio: number, n: number, total: number) => {
  let x = (total * (1 - 1 / ratio)) / (ratio ** n - 1);
  const arr = [...new Array(n)].map((_) => {
    x *= ratio;
    return Math.round(x);
  });
  arr[n - 1] = total - arr.slice(0, -1).reduce((a, c) => a + c);
  return arr;
};

const generateTasks = (taskCount: number): Task[] => {
  const percentages = generateNumSeries(1.5, taskCount, 100);
  const tasks: Task[] = [...Array(taskCount).keys()].map((i) => ({
    taskId: `TASK_${i + 1}`,
    taskState: i < taskCount / 3 ? 'COMPLETED' : 'INCOMPLETE',
    percentage: i < taskCount / 3 ? percentages.shift() || 0 : percentages.pop() || 0,
  }));
  return tasks;
};

const generateV2Tasks = (taskCount: number): Task[] => {
  const tasks: Task[] = [...Array(taskCount).keys()].map((i) => ({
    taskId: `TASK_${i + 1}`,
    taskState: i < taskCount / 3 ? 'COMPLETED' : 'INCOMPLETE',
    completedAt: '2023-10-03T07:01:57.702Z',
  }));
  return tasks;
};

export const generateCheckList = (taskCount: number): CheckListType => {
  const tasks = generateTasks(taskCount);
  const percentageCompleted = tasks.reduce(
    (prev, curr) =>
      curr.taskState === 'COMPLETED' && curr.percentage ? prev + curr.percentage : prev,
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

export const useFakeCheckListV2 = (taskCount: number) => {
  const initialTasks = generateV2Tasks(taskCount);

  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const dismissTask = (taskId: string) => {
    const updatedTasks: Task[] = tasks.map((task) => {
      if (task.taskId === taskId) {
        return { ...task, taskState: 'COMPLETED' };
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  const taskInfoMap = generateTaskInfoMap(taskCount, dismissTask);
  const percentageCompleted = getPercentage(tasks, taskInfoMap);

  const checkList = {
    onboardingCompletedAt: percentageCompleted === 100 ? '2023-10-03T07:01:57.702Z' : undefined,
    tasks,
    customerProgress: percentageCompleted === 100 ? 'ONBOARDED' : 'LEVEL_1',
  };

  return { checkList, taskInfoMap };
};

export const useFakeCheckList = (taskCount: number) => {
  const initialTasks = generateTasks(taskCount);

  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const dismissTask = (taskId: string) => {
    const updatedTasks: Task[] = tasks.map((task) => {
      if (task.taskId === taskId) {
        return { ...task, taskState: 'COMPLETED' };
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  const percentageCompleted = tasks.reduce(
    (prev, curr) =>
      curr.taskState === 'COMPLETED' && curr.percentage ? prev + curr.percentage : prev,
    0,
  );

  const taskInfoMap = generateTaskInfoMap(taskCount, dismissTask);

  const checkList = {
    summary: {
      maxPercentage: 100,
      percentageCompleted,
    },
    tasks,
  };

  return { checkList, taskInfoMap };
};

export const generateTaskInfoMap = (
  taskCount: number,
  dismissTask?: (taskId: string) => void,
): TaskInfoMap => {
  const iconArray = Object?.entries(Icon)
    .filter(([iconName, _]) => iconName.endsWith('24'))
    .map(([key, IconComponent]: [string, React.ComponentType<any>]) => <IconComponent key={key} />);

  return [...Array(taskCount).keys()].reduce(
    (obj, i) => ({
      ...obj,
      [`TASK_${i + 1}`]: {
        icon: iconArray[i],
        title: `This is the title for task ${i + 1}`,
        description: `This is the description for task ${i + 1}. `.repeat((i % 3) + 1),
        customPercentage: i + 1 ? 20 : undefined,
        startAction: {
          label: i % 2 ? `Link to step ${i + 1}` : `Open step ${i + 1}`,
          onClick: action(`startAction (${i % 2 ? 'link' : 'button'}) task ${i + 1}`),
          to: i % 2 ? `/route${i + 1}` : undefined,
        },
        onDismiss: dismissTask
          ? () => dismissTask(`TASK_${i + 1}`)
          : action(`onDismiss task ${i + 1}`),
      },
    }),
    {},
  );
};

export const getPercentage = (tasks: Task[], taskInfoMap: TaskInfoMap) => {
  // find percentage from taskInfoMap using taskId
  const taskInfo = tasks.map((task) =>
    task.taskState === 'COMPLETED' ? taskInfoMap[task.taskId] : undefined,
  );
  const customPercentage = taskInfo.map((info) => info?.customPercentage || 0);
  const sum = customPercentage.reduce((accumulator, currentValue) => {
    if (accumulator !== undefined && currentValue !== undefined) {
      return accumulator + currentValue;
    }
    return accumulator || 0 + currentValue || 0;
  }, 0);
  return sum;
};

export const header = {
  title: 'Get started checklist',
  description: (
    <span>
      <Typography type="secondary">Your account is </Typography>
      <Typography type="secondary" color={(t) => t.colorTokens.action.text_default}>
        {`${defaultCheckList?.summary?.percentageCompleted}% complete`}
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
  dismissConfirmLabel: 'Mark as done',
  dismissCancelLabel: 'Cancel',
};

export const completedHeader = {
  ...header,
  title: 'Congratulations!',
  description: 'You are all set.',
  onClose: undefined,
};

export const completedHeaderWithClose = {
  ...header,
  title: 'Congratulations!',
  description: 'You are all set.',
};
