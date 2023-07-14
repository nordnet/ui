import React from 'react';
import { ButtonProps } from '../Button/components/BaseButton/Button.types';

type OnClickType = ButtonProps['onClick'];

type TaskState = 'COMPLETED' | 'PENDING' | 'INCOMPLETE';

type TaskId = string;

export type Task = { taskId: TaskId; taskState: TaskState; percentage: number };

type TaskSummary = {
  icon?: React.ReactNode;
  title?: string;
  description?: string;
};

type TaskActions = {
  onDismiss?: OnClickType;
  startAction?: ({ label: string } & Pick<ButtonProps, 'onClick' | 'to'>) | false;
};

export type TaskInfo = TaskSummary & TaskActions;

export type TaskInfoMap = Record<TaskId, TaskInfo>;

export type CheckListSummary = {
  maxPercentage?: number;
  percentageCompleted: number;
};

export type CheckList = {
  summary: CheckListSummary;
  tasks?: Task[];
};

export type CheckListHeader = {
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  onViewAll?: OnClickType;
  onClose?: OnClickType;
  viewAllLabel?: string;
};

export type CheckListLabels = {
  todoLabel?: string;
  completedLabel?: string;
  dismissLabel?: string;
  dismissQuestion?: string;
  dismissCancelLabel?: string;
  dismissConfirmLabel?: string;
};

export type DisplayMode = 'CARD' | 'DRAWER';

export type CheckListProps = {
  checkList?: CheckList;
  header?: CheckListHeader;
  labels?: CheckListLabels;
  taskInfoMap?: TaskInfoMap;
  displayMode?: DisplayMode;
  showProgress?: boolean;
};

export type TitleProps = CheckListSummary &
  CheckListHeader & { displayMode?: DisplayMode; showProgress?: boolean };

export type CheckListStepProps = { task: Task; taskInfo?: TaskInfo } & CheckListLabels & {
    displayMode?: DisplayMode;
  };
