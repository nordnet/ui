import React, { FC, ReactElement } from 'react';
import { Box, Flexbox, List, ListItem, Typography } from '../..';
import { CheckListProps, Task, CheckListLabels, DisplayMode } from './CheckList.types';
import CheckListStep from './CheckListStep';
import Title from './Title';

type CheckListInnerProps = {
  tasks: Task[];
  header?: string;
  displayMode?: DisplayMode;
  labels?: CheckListLabels;
};

const CheckListInner: FC<CheckListInnerProps> = ({
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
      <Flexbox container gap={2} direction="column">
        {tasks?.map((task) => (
          <ListItem key={task.taskId}>
            <CheckListStep task={task} {...labels} displayMode={displayMode} />
          </ListItem>
        ))}
      </Flexbox>
    </List>
  </div>
);

const CheckList: FC<CheckListProps> = ({
  checkList,
  displayMode = 'CARD',
  showProgress,
}): ReactElement | null => {
  const tasksToDo = checkList?.tasks?.filter((t) => t.taskState !== 'COMPLETED');
  const tasksCompleted = checkList?.tasks?.filter((t) => t.taskState === 'COMPLETED');

  if (!checkList || !checkList?.summary) return null;

  const isDrawer = displayMode === 'DRAWER';

  return (
    <>
      <Title {...checkList.summary} displayMode={displayMode} showProgress={showProgress} />
      {isDrawer && (
        <Flexbox container direction="column" gap={4}>
          {!!tasksToDo?.length && (
            <CheckListInner
              tasks={tasksToDo}
              header={checkList.labels?.todoLabel || 'To do'}
              labels={checkList.labels}
              displayMode={displayMode}
            />
          )}
          {!!tasksCompleted?.length && (
            <CheckListInner
              tasks={tasksCompleted}
              header={checkList.labels?.completedLabel || 'Completed'}
              labels={checkList.labels}
              displayMode={displayMode}
            />
          )}
        </Flexbox>
      )}

      {!isDrawer && !!tasksToDo?.length && (
        <Box pt={5}>
          <CheckListInner tasks={tasksToDo} labels={checkList.labels} displayMode={displayMode} />
        </Box>
      )}
    </>
  );
};

export default CheckList;
