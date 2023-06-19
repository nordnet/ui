import React from 'react';

export type TaskState = 'COMPLETED' | 'PENDING' | 'INCOMPLETE';

export type TaskSummary = { title?: string; description?: string; icon?: React.ReactNode };

export type TaskStatus = { taskId: string; taskState: TaskState; percentage: number };

export type Task = TaskStatus & TaskSummary;

export type TaskListCompletion = {
  maxPercentage?: number;
  percentageCompleted: number;
};

export type TaskListSummary = {
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
};

export type TaskList = {
  summary?: TaskListSummary & TaskListCompletion; // TODO: change prop name to summary
  tasks?: Task[];
};

export type Props = {
  taskList?: TaskList;
  inDrawer?: boolean;
};
