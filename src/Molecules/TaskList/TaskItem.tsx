import React, { FC, ReactElement, useState } from 'react';
import styled from 'styled-components';
import { Badge, Box, Button, Flexbox, Icon, Typography } from '../..';
import { Task } from './TaskList.types';

const StyledBox = styled(Box)`
  border: 1px solid ${(t) => t.theme.colorTokens.neutral.border_weak};
  border-radius: ${(t) => t.theme.spacing.unit(1)}px;
`;

const TaskItem: FC<Task & { inDrawer?: boolean }> = ({
  taskState,
  percentage,
  inDrawer,
  title = 'Task title',
  description = 'Task description',
  icon = <Icon.Lightbulb24 />,
}): ReactElement => {
  const [dismissMode, setDismissMode] = useState(false);

  return (
    <StyledBox p={3}>
      <Flexbox container gap={4} alignItems="center" wrap="wrap" justifyContent="center">
        {/* Task info */}
        {!dismissMode && (
          <Flexbox container item gap={4} alignItems="center" wrap="nowrap" grow={1}>
            {/* Icon */}
            <Flexbox item>
              <Badge.Icon badgeColor={(t) => t.colorTokens.neutral.background_weak}>
                {icon}
              </Badge.Icon>
            </Flexbox>

            {/* Title and description */}
            <Flexbox container item gap={1} grow={1} direction="column" basis="288px">
              <Flexbox container item gap={2} alignItems="center">
                <Typography type={inDrawer ? 'primary' : 'secondary'} weight="bold">
                  {title}
                </Typography>
                <Badge.Label
                  type="secondary"
                  badgeColor={(t) => t.colorTokens.action.background_weak}
                  color={(t) => t.colorTokens.action.text_default}
                >
                  +{percentage}%
                </Badge.Label>
              </Flexbox>
              <Typography type="secondary" color={(t) => t.colorTokens.neutral.text_weak}>
                {description}
              </Typography>
            </Flexbox>

            {/* Button */}
            {!inDrawer && <Button.Pill variant="secondary">{taskState}</Button.Pill>}

            {/* Completion marker in drawer */}
            {inDrawer && taskState === 'COMPLETED' && <Icon.CheckCircleFill24 />}
          </Flexbox>
        )}

        {/* Dismissal dialog in drawer */}
        {inDrawer && dismissMode && (
          <>
            <Flexbox container item alignItems="center" grow={1}>
              <Box py={3}>
                <Typography type="primary" weight="bold">
                  Mark task as completed?
                </Typography>
              </Box>
            </Flexbox>
            <Flexbox container item gap={3} basis="331px" alignItems="center">
              <Flexbox item flex="1 1 50%">
                <Button.Pill
                  variant="secondary"
                  size="m"
                  fullWidth
                  onClick={() => setDismissMode(false)}
                >
                  Cancel
                </Button.Pill>
              </Flexbox>
              <Flexbox item flex="1 1 50%">
                <Button.Pill variant="negative" size="m" fullWidth>
                  Mark as Done
                </Button.Pill>
              </Flexbox>
            </Flexbox>
          </>
        )}

        {/* Buttons in drawer */}
        {inDrawer && taskState !== 'COMPLETED' && !dismissMode && (
          <Flexbox container item gap={3} basis="331px" alignItems="center">
            <Flexbox item flex="1 1 50%">
              <Button variant="neutral" size="m" fullWidth onClick={() => setDismissMode(true)}>
                Dismiss
              </Button>
            </Flexbox>
            <Flexbox item flex="1 1 50%">
              <Button.Pill variant="secondary" size="m" fullWidth>
                {taskState}
              </Button.Pill>
            </Flexbox>
          </Flexbox>
        )}
      </Flexbox>
    </StyledBox>
  );
};

export default TaskItem;
