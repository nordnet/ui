import React, { FC, ReactElement } from 'react';
import { Box, Flexbox, List, ListItem, Typography } from '../..';
// import { StyledButton, CompletionBar, StyledButtonPill } from './TaskList.styled';
import { Props, Task } from './TaskList.types';
// import { useMedia } from '../../Atoms/Media';
import TaskItem from './TaskItem';
import Title from './Title';
import ProgressDonut from './ProgressDonut';

const TaskListInner: FC<{
  tasks: Task[];
  header?: string;
  inDrawer?: boolean;
}> = ({ tasks, header, inDrawer }): ReactElement => {
  return (
    <Box px={inDrawer ? 0 : 5} pb={5}>
      {header && (
        <Box pb={3}>
          <Typography type="primary" weight="extrabold">
            {header}
          </Typography>
        </Box>
      )}
      <List>
        <Flexbox container gap={3} direction="column">
          {tasks?.map((t) => (
            <ListItem key={t.taskId}>
              <TaskItem
                taskId={t.taskId}
                taskState={t.taskState}
                percentage={t.percentage}
                inDrawer={inDrawer}
                title={t.title}
                description={t.description}
                icon={t.icon}
              />
            </ListItem>
          ))}
        </Flexbox>
      </List>
    </Box>
  );
};

const TaskList: FC<Props> = ({ taskList, inDrawer }): ReactElement => {
  const tasksToDo = taskList?.tasks?.filter((t) => t.taskState !== 'COMPLETED');
  const tasksCompleted = taskList?.tasks?.filter((t) => t.taskState === 'COMPLETED');

  if (!taskList || !taskList?.summary) return <Typography type="primary">Empty</Typography>;

  return (
    <Box backgroundColor={(t) => t.colorTokens.neutral.background_default}>
      {inDrawer && (
        <Flexbox container justifyContent="center" direction="column" alignItems="center">
          <ProgressDonut
            percentageCompleted={taskList.summary.percentageCompleted}
            maxPercentage={taskList.summary.maxPercentage}
            size={215}
          />
          <Box p={2}>Summary for drawer</Box>
        </Flexbox>
      )}

      {inDrawer && (
        <>
          {tasksToDo && <TaskListInner tasks={tasksToDo} header="Todo" inDrawer />}
          {tasksCompleted && <TaskListInner tasks={tasksCompleted} header="Completed" inDrawer />}
        </>
      )}

      {!inDrawer && (
        <Title
          percentageCompleted={taskList.summary.percentageCompleted}
          maxPercentage={taskList.summary.maxPercentage}
          title={taskList.summary.title}
          description={taskList.summary.description}
        />
      )}

      {!inDrawer && tasksToDo && <TaskListInner tasks={tasksToDo} />}
    </Box>
  );
};

export default TaskList;
