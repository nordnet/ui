import React from 'react';

export type TaskState = 'COMPLETED' | 'PENDING' | 'INCOMPLETE';

export type TaskSummary = {
  icon?: React.ReactNode;
  title?: string;
  description?: string;
};

export type TaskStatus = { taskId: string; taskState: TaskState; percentage: number };

export type TaskActions = {
  onStart?: React.MouseEventHandler;
  onDismiss?: React.MouseEventHandler;
  startLabel?: string;
};

export type Task = TaskStatus & TaskSummary & TaskActions;

export type TaskListCompletion = {
  maxPercentage?: number;
  percentageCompleted: number;
};

export type TaskListLabels = {
  todoLabel?: string;
  completedLabel?: string;
  dismissLabel?: string;
  dismissQuestion?: string;
  dismissCancelLabel?: string;
  dismissConfirmLabel?: string;
};

export type TaskListSummary = {
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  onViewAll?: React.MouseEventHandler;
  viewAllLabel?: string;
  onClose?: React.MouseEventHandler;
};

export type TaskList = {
  summary: TaskListSummary & TaskListCompletion;
  tasks?: Task[];
  labels?: TaskListLabels;
};

export type DisplayMode = 'CARD_NARROW' | 'CARD_WIDE' | 'DRAWER_NARROW' | 'DRAWER_WIDE';

export type Props = {
  taskList?: TaskList;
  displayMode?: DisplayMode;
  showProgress?: boolean;
};
