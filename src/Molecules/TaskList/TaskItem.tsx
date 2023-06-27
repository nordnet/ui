import React, { FC, ReactElement, useState } from 'react';
import styled from 'styled-components';
import { Button, Flexbox, Icon, Typography } from '../..';
import { Task, TaskListLabels, DisplayMode } from './TaskList.types';
import TextButtonCard from './TextButtonCard';

const AbsoluteFlexbox = styled(Flexbox)`
  border-radius: ${(t) => t.theme.spacing.unit(1)}px;
  background: ${(t) => t.theme.colorTokens.neutral.background_default};
  padding: ${(t) => t.theme.spacing.unit(3)}px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

const TwoButtonBox = styled.div`
  align-items: center;
  display: flex;
  flex-basis: ${(t) => t.theme.spacing.unit(55)}px;
  flex-grow: 1;
  gap: ${(t) => t.theme.spacing.unit(3)}px;
  justify-content: flex-end;
  padding-left: ${(t) => t.theme.spacing.unit(3)}px;
  & button {
    flex-basis: 50%;
    flex-shrink: 0;
  }
`;

type TaskItemProps = { task: Task } & TaskListLabels & { displayMode?: DisplayMode };

const TaskItem: FC<TaskItemProps> = ({
  task,
  dismissLabel = 'Dismiss',
  dismissQuestion = 'Dismiss?',
  dismissCancelLabel = 'Cancel',
  dismissConfirmLabel = 'Confirm',
  displayMode,
}): ReactElement => {
  const [dismissMode, setDismissMode] = useState(false);

  const isDrawer = displayMode === 'DRAWER_NARROW' || displayMode === 'DRAWER_WIDE';

  const { startLabel, taskState, onDismiss, onStart } = task;

  /* Buttons in drawer */
  const buttons = isDrawer && taskState !== 'COMPLETED' && (
    <TwoButtonBox>
      <Button variant="neutral" size="m" fullWidth onClick={() => setDismissMode(true)}>
        {dismissLabel}
      </Button>

      {startLabel && onStart && (
        <Button.Pill variant="secondary" size="m" fullWidth onClick={onStart}>
          {startLabel}
        </Button.Pill>
      )}
    </TwoButtonBox>
  );

  const dismissalDialog = isDrawer && dismissMode && (
    <AbsoluteFlexbox container wrap="wrap" gap={3} alignContent="center" alignItems="center">
      <Flexbox item shrink={0} grow={1} basis="320px">
        <Typography type="primary" weight="bold">
          {dismissQuestion}
        </Typography>
      </Flexbox>

      <TwoButtonBox>
        <Button.Pill variant="secondary" size="m" fullWidth onClick={() => setDismissMode(false)}>
          {dismissCancelLabel}
        </Button.Pill>

        <Button.Pill variant="negative" size="m" fullWidth onClick={onDismiss}>
          {dismissConfirmLabel}
        </Button.Pill>
      </TwoButtonBox>
    </AbsoluteFlexbox>
  );

  return (
    <TextButtonCard
      titleIcon={task.icon || <Icon.Lightbulb24 />}
      title={task.title || 'Default title'}
      titleBadgeText={`+${task.percentage}%`}
      description={task.description || 'Default description'}
      buttonText={displayMode === 'CARD_WIDE' ? task.startLabel : ''}
      onClick={!isDrawer ? task.onStart : undefined}
      statusIcon={isDrawer && task.taskState === 'COMPLETED' && <Icon.CheckCircleFill24 />}
    >
      {buttons}
      {dismissalDialog}
    </TextButtonCard>
  );
};

export default TaskItem;
