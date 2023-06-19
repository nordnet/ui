import React, { FC, ReactElement } from 'react';
import { Box, Flexbox, Icon, Typography } from '../..';

import { TaskListSummary } from './TaskList.types';

const DrawerTitle: FC<TaskListSummary> = ({ title = 'Title' }): ReactElement => {
  return (
    <Flexbox container gutter={2} alignItems="center">
      <Flexbox item grow={1}>
        <Typography type="title3" as="h3">
          {title}
        </Typography>
      </Flexbox>
      <Flexbox item>
        <Box pr={8} pb={3}>
          <Icon.Help16 />
        </Box>
      </Flexbox>
    </Flexbox>
  );
};

export default DrawerTitle;
