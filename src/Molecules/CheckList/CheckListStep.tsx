import React, { FC, ReactElement, useState } from 'react';
import styled from 'styled-components';
import { Button, Flexbox, Icon, Typography, useMedia } from '../..';
import { CheckListStepProps } from './CheckList.types';
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

const StyledButton = styled(Button)`
  background-color: ${(t) => t.theme.colorTokens.error.background_default};
`;

const TwoButtonBox = styled.div`
  align-items: center;
  display: flex;
  flex-basis: ${(t) => t.theme.spacing.unit(55)}px;
  flex-grow: 1;
  gap: ${(t) => t.theme.spacing.unit(3)}px;
  justify-content: flex-end;
  padding-left: ${(t) => t.theme.spacing.unit(3)}px;
  & button,
  & a {
    flex-basis: 50%;
    flex-shrink: 0;
  }
`;

const CheckListStep: FC<CheckListStepProps> = ({
  task,
  taskInfo,
  dismissLabel = 'Dismiss',
  dismissQuestion = 'Dismiss?',
  dismissCancelLabel = 'Cancel',
  dismissConfirmLabel = 'Confirm',
  displayMode,
}): ReactElement => {
  const [dismissMode, setDismissMode] = useState(false);

  const isDrawer = displayMode === 'DRAWER';
  const isMobile = useMedia((theme) => theme.media.lessThan(theme.breakpoints.sm));
  const isCompleted = task.taskState === 'COMPLETED' || task.taskState === 'DISMISSED';
  const { taskState, percentage } = task;
  const { onDismiss, startAction, icon, title, description, customPercentage } = taskInfo || {};
  const getPercentage = percentage || customPercentage;

  /* Buttons in drawer */
  const buttons = isDrawer && taskState !== 'COMPLETED' && taskState !== 'DISMISSED' && (
    <TwoButtonBox>
      <Button
        variant="neutral"
        color={(t) => t.colorTokens.action.text_default}
        size="m"
        fullWidth
        onClick={() => setDismissMode(true)}
      >
        {dismissLabel}
      </Button>

      {startAction && (
        <Button.Pill variant="secondary" size="m" fullWidth {...startAction}>
          {startAction.label}
        </Button.Pill>
      )}
    </TwoButtonBox>
  );

  /* Dialog in drawer */
  const dialog = isDrawer && dismissMode && (
    <AbsoluteFlexbox container wrap="wrap" gap={3} alignContent="center" alignItems="center">
      <Flexbox
        item
        container
        justifyContent="center"
        alignItems="center"
        shrink={0}
        grow={1}
        basis="320px"
      >
        <Typography type="primary" weight="bold">
          {dismissQuestion}
        </Typography>
      </Flexbox>

      <TwoButtonBox>
        <Button variant="secondary" size="m" fullWidth onClick={() => setDismissMode(false)}>
          {dismissCancelLabel}
        </Button>

        <StyledButton variant="negative" size="m" fullWidth onClick={onDismiss}>
          {dismissConfirmLabel}
        </StyledButton>
      </TwoButtonBox>
    </AbsoluteFlexbox>
  );

  return (
    <TextButtonCard
      titleIcon={icon || <Icon.Lightbulb24 />}
      title={title || 'Default title'}
      titleBadgeText={!isCompleted ? `+${getPercentage}%` : undefined}
      description={description || 'Default description'}
      buttonText={!isDrawer && !isMobile && startAction ? startAction.label : ''}
      action={!isDrawer ? startAction : undefined}
      statusIcon={isDrawer && isCompleted && <Icon.CheckCircleFill24 />}
    >
      {buttons}
      {dialog}
    </TextButtonCard>
  );
};

export default CheckListStep;
