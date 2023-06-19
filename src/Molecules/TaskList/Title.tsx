import React, { FC, ReactElement } from 'react';
import { Box, Button, Flexbox, Icon, Typography } from '../..';
import { TaskListCompletion, TaskListSummary } from './TaskList.types';
import ProgressDonut from './ProgressDonut';

const Title: FC<TaskListCompletion & TaskListSummary> = ({
  percentageCompleted,
  maxPercentage = 100,
  title = 'Title',
  description = '',
}): ReactElement => (
  <Box p={5}>
    <Flexbox container gap={4} alignItems="center">
      <ProgressDonut percentageCompleted={percentageCompleted} maxPercentage={maxPercentage} />
      <Flexbox container item direction="column" grow={1} gap={1}>
        <Typography type="title3">{title}</Typography>
        <Typography type="secondary">
          {description || `${Math.round(100 * (percentageCompleted / maxPercentage))}% complete`}
        </Typography>
      </Flexbox>
      <Button.Pill variant="tertiary" size="m">
        View all
      </Button.Pill>
      {percentageCompleted === maxPercentage && (
        <Button variant="neutral">
          <Icon.Cross16 />
        </Button>
      )}
    </Flexbox>
  </Box>
);

export default Title;
