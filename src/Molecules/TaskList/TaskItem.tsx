import React, { FC, ReactElement, useState } from 'react';
import styled from 'styled-components';
import { Button, Flexbox, Icon, Typography } from '../..';
import { Task, TaskListLabels, DisplayMode } from './TaskList.types';
import TextButtonCard from './TextButtonCard';

// const StyledBox = styled(Box)`
//   border: 1px solid ${(t) => t.theme.colorTokens.neutral.border_weak};
//   border-radius: ${(t) => t.theme.spacing.unit(1)}px;
// `;

const NoWrap = styled.span`
  white-space: nowrap;
`;

// const StyledButton = styled(Button)`
//   border: 1px solid ${(t) => t.theme.colorTokens.neutral.border_weak};
//   border-radius: ${(t) => t.theme.spacing.unit(1)}px;
//   justify-content: flex-start;
//   text-align: left;
// `;

// const RelativeFlexbox = styled(Flexbox)`
//   outline: 1px solid red;
//   position: relative;
// `;

// const AbsoluteBox = styled(Box)`
//   left: 0;
//   right: 0;
//   top: 0;
//   bottom: 0;
//   border-radius: ${(t) => t.theme.spacing.unit(1)}px;
//   background: ${(t) => t.theme.colorTokens.neutral.background_default};
//   position: absolute;
//   display: flex;
// `;

const AbsoluteFlexbox = styled(Flexbox)`
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  border-radius: ${(t) => t.theme.spacing.unit(1)}px;
  background: ${(t) => t.theme.colorTokens.neutral.background_default};
  position: absolute;
  padding: ${(t) => t.theme.spacing.unit(3)}px;
`;

const TaskItem: FC<{ task: Task } & TaskListLabels & { displayMode?: DisplayMode }> = ({
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
    <Flexbox
      container
      item
      gap={3}
      alignItems="center"
      {...(displayMode === 'DRAWER_WIDE'
        ? { shrink: 0, basis: '40%', justifyContent: 'flex-end' }
        : { grow: 1, justifyContent: 'space-between' })}
    >
      <Flexbox item basis="50%" grow={displayMode === 'DRAWER_NARROW' ? 1 : 0}>
        <Button variant="neutral" size="m" fullWidth onClick={() => setDismissMode(true)}>
          <NoWrap>{dismissLabel}</NoWrap>
        </Button>
      </Flexbox>

      {startLabel && onStart && (
        <Flexbox item basis="50%">
          <Button.Pill variant="secondary" size="m" fullWidth onClick={onStart}>
            <NoWrap>{startLabel}</NoWrap>
          </Button.Pill>
        </Flexbox>
      )}
    </Flexbox>
  );

  const dismissalDialog = isDrawer && dismissMode && (
    <AbsoluteFlexbox
      container
      wrap="wrap"
      gap={3}
      justifyContent="space-between"
      alignItems={displayMode === 'DRAWER_WIDE' ? 'center' : 'flex-end'}
    >
      <Flexbox item basis="55%" grow={displayMode === 'DRAWER_NARROW' ? 1 : 0}>
        <Typography
          type="primary"
          weight="bold"
          textAlign={displayMode === 'DRAWER_NARROW' ? 'center' : 'left'}
          as="div"
        >
          {dismissQuestion}
        </Typography>
      </Flexbox>

      <Flexbox
        container
        item
        basis="40%"
        gap={3}
        shrink={0}
        grow={displayMode === 'DRAWER_WIDE' ? 0 : 1}
      >
        <Flexbox item basis="50%">
          <Button.Pill variant="secondary" size="m" fullWidth onClick={() => setDismissMode(false)}>
            <NoWrap>{dismissCancelLabel}</NoWrap>
          </Button.Pill>
        </Flexbox>
        <Flexbox item basis="50%">
          <Button.Pill variant="negative" size="m" fullWidth onClick={onDismiss}>
            <NoWrap>{dismissConfirmLabel}</NoWrap>
          </Button.Pill>
        </Flexbox>
      </Flexbox>
    </AbsoluteFlexbox>
  );

  return (
    <TextButtonCard
      titleIcon={task.icon}
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
