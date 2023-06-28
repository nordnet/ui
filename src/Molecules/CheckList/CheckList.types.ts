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

export type CheckListCompletion = {
  maxPercentage?: number;
  percentageCompleted: number;
};

export type CheckListLabels = {
  todoLabel?: string;
  completedLabel?: string;
  dismissLabel?: string;
  dismissQuestion?: string;
  dismissCancelLabel?: string;
  dismissConfirmLabel?: string;
};

export type CheckListActions = {
  onViewAll?: React.MouseEventHandler;
  onClose?: React.MouseEventHandler;
  viewAllLabel?: string;
};

export type CheckListSummary = {
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
};

export type CheckList = {
  summary: CheckListSummary & CheckListCompletion & CheckListActions;
  tasks?: Task[];
  labels?: CheckListLabels;
};

export type DisplayMode = 'CARD' | 'DRAWER';

export type CheckListProps = {
  checkList?: CheckList;
  displayMode?: DisplayMode;
  showProgress?: boolean;
};
