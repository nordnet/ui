import React, { FC, ReactElement } from 'react';
import { Box, Flexbox, List, ListItem, Typography } from '../..';
import { Props, Task, TaskListLabels, DisplayMode } from './TaskList.types';
import TaskItem from './TaskItem';
import Title from './Title';

type TaskListInnerProps = {
  tasks: Task[];
  header?: string;
  displayMode?: DisplayMode;
  labels?: TaskListLabels;
};

const TaskListInner: FC<TaskListInnerProps> = ({
  tasks,
  header,
  displayMode,
  labels,
}): ReactElement => (
  <div>
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
  </div>
);

const TaskList: FC<Props> = ({
  taskList,
  displayMode = 'CARD_NARROW',
  showProgress,
}): ReactElement => {
  const tasksToDo = taskList?.tasks?.filter((t) => t.taskState !== 'COMPLETED');
  const tasksCompleted = taskList?.tasks?.filter((t) => t.taskState === 'COMPLETED');

  if (!taskList || !taskList?.summary) return <Typography type="primary">Empty</Typography>;

  const isDrawer = displayMode === 'DRAWER_NARROW' || displayMode === 'DRAWER_WIDE';

  return (
    <Box>
      <Title {...taskList.summary} displayMode={displayMode} showProgress={showProgress} />
      {isDrawer && (
        <Flexbox container direction="column" gap={4}>
          {!!tasksToDo?.length && (
            <TaskListInner
              tasks={tasksToDo}
              header={taskList.labels?.todoLabel || 'To do'}
              labels={taskList.labels}
              displayMode={displayMode}
            />
          )}
          {!!tasksCompleted?.length && (
            <TaskListInner
              tasks={tasksCompleted}
              header={taskList.labels?.completedLabel || 'Completed'}
              labels={taskList.labels}
              displayMode={displayMode}
            />
          )}
        </Flexbox>
      )}

      {!isDrawer && !!tasksToDo?.length && (
        <Box pt={4}>
          <TaskListInner tasks={tasksToDo} labels={taskList.labels} displayMode={displayMode} />
        </Box>
      )}
    </Box>
  );
};

export default TaskList;
