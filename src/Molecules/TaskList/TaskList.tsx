import React, { FC, ReactElement } from 'react';
import { Box, Flexbox, List, ListItem, Typography } from '../..';
import { Props, Task, TaskListLabels, DisplayMode } from './TaskList.types';
import TaskItem from './TaskItem';
import Title from './Title';

const TaskListInner: FC<{
  tasks: Task[];
  header?: string;
  displayMode?: DisplayMode;
  labels?: TaskListLabels;
}> = ({ tasks, header, displayMode, labels }): ReactElement => {
  return (
    <Box px={displayMode === 'DRAWER_NARROW' || displayMode === 'DRAWER_WIDE' ? 0 : 5} pb={4}>
      {header && (
        <Box py={3}>
          <Typography type="primary" weight="extrabold">
            {header}
          </Typography>
        </Box>
      )}
      <List>
        <Flexbox container gap={3} direction="column">
          {tasks?.map((task) => (
            <ListItem key={task.taskId}>
              <TaskItem task={task} {...labels} displayMode={displayMode} />
            </ListItem>
          ))}
        </Flexbox>
      </List>
    </Box>
  );
};

const TaskList: FC<Props> = ({ taskList, displayMode = 'CARD_NARROW' }): ReactElement => {
  const tasksToDo = taskList?.tasks?.filter((t) => t.taskState !== 'COMPLETED');
  const tasksCompleted = taskList?.tasks?.filter((t) => t.taskState === 'COMPLETED');

  if (!taskList || !taskList?.summary) return <Typography type="primary">Empty</Typography>;

  const isDrawer = displayMode === 'DRAWER_NARROW' || displayMode === 'DRAWER_WIDE';

  return (
    <Box backgroundColor={(t) => t.colorTokens.neutral.background_default}>
      {/* {inDrawer && <Title {...taskList.summary} inDrawer />}

      {!inDrawer && <Title {...taskList.summary} />} */}

      <Title {...taskList.summary} displayMode={displayMode} />

      {isDrawer && (
        <>
          {tasksToDo && (
            <TaskListInner
              tasks={tasksToDo}
              header={taskList.labels?.todoLabel || 'To do'}
              labels={taskList.labels}
              displayMode={displayMode}
            />
          )}
          {tasksCompleted && (
            <TaskListInner
              tasks={tasksCompleted}
              header={taskList.labels?.completedLabel || 'Completed'}
              labels={taskList.labels}
              displayMode={displayMode}
            />
          )}
        </>
      )}

      {!isDrawer && tasksToDo && (
        <TaskListInner tasks={tasksToDo} labels={taskList.labels} displayMode={displayMode} />
      )}
    </Box>
  );
};

export default TaskList;
