import React, { FC, ReactElement } from 'react';
import { Box, Flexbox, List, ListItem, Typography } from '../..';
import { CheckListProps, Task, TaskInfoMap, CheckListLabels, DisplayMode } from './CheckList.types';
import CheckListStep from './CheckListStep';
import Title from './Title';

type CheckListInnerProps = {
  tasks: Task[];
  taskInfoMap?: TaskInfoMap;
  subHeader?: string;
  labels?: CheckListLabels;
  displayMode?: DisplayMode;
};

const CheckListInner: FC<CheckListInnerProps> = ({
  tasks,
  taskInfoMap,
  subHeader,
  labels,
  displayMode,
}): ReactElement => (
  <div>
    {subHeader && (
      <Box py={3}>
        <Typography type="primary" weight="extrabold">
          {subHeader}
        </Typography>
      </Box>
    )}
    <List>
      <Flexbox container gap={2} direction="column">
        {tasks?.map((task) => (
          <ListItem key={task.taskId}>
            <CheckListStep
              task={task}
              taskInfo={taskInfoMap?.[task.taskId]}
              {...labels}
              displayMode={displayMode}
            />
          </ListItem>
        ))}
      </Flexbox>
    </List>
  </div>
);

const CheckList: FC<CheckListProps> = ({
  checkList,
  header,
  taskInfoMap,
  labels,
  displayMode = 'CARD',
  showProgress,
}): ReactElement | null => {
  const tasksToDo = checkList?.tasks?.filter((t) => t.taskState !== 'COMPLETED');
  const tasksCompleted = checkList?.tasks?.filter((t) => t.taskState === 'COMPLETED');

  if (!checkList || !checkList?.summary) return null;

  const isDrawer = displayMode === 'DRAWER';

  return (
    <>
      <Title
        {...checkList.summary}
        {...header}
        displayMode={displayMode}
        showProgress={showProgress}
      />
      {isDrawer && (
        <Flexbox container direction="column" gap={4}>
          {!!tasksToDo?.length && (
            <CheckListInner
              tasks={tasksToDo}
              taskInfoMap={taskInfoMap}
              subHeader={labels?.todoLabel || 'To do'}
              labels={labels}
              displayMode={displayMode}
            />
          )}
          {!!tasksCompleted?.length && (
            <CheckListInner
              tasks={tasksCompleted}
              taskInfoMap={taskInfoMap}
              subHeader={labels?.completedLabel || 'Completed'}
              labels={labels}
              displayMode={displayMode}
            />
          )}
        </Flexbox>
      )}

      {!isDrawer && !!tasksToDo?.length && (
        <Box pt={5}>
          <CheckListInner
            tasks={tasksToDo}
            taskInfoMap={taskInfoMap}
            labels={labels}
            displayMode={displayMode}
          />
        </Box>
      )}
    </>
  );
};

export default CheckList;
