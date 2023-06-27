import React, { FC, ReactElement } from 'react';
import { Box, Button, Flexbox, Icon, Typography } from '../..';

import { TaskListSummary } from './TaskList.types';

type DrawerTitleProps = TaskListSummary & {
  helpTitle?: string;
  showHelpTitle?: boolean;
  onHelpClick?: React.MouseEventHandler;
};

const DrawerTitle: FC<DrawerTitleProps> = ({
  title = 'Title',
  helpTitle,
  showHelpTitle,
  onHelpClick = () => {},
}): ReactElement => {
  return (
    <Flexbox container gutter={2} alignItems="center">
      {showHelpTitle && (
        <Flexbox item>
          <Button variant="neutral" onClick={onHelpClick}>
            <Icon.ChevronLeft16 />
          </Button>
        </Flexbox>
      )}
      <Flexbox item grow={1}>
        <Typography type="title3" as="h3">
          {showHelpTitle ? helpTitle : title}
        </Typography>
      </Flexbox>
      {!showHelpTitle && (
        <Flexbox item>
          <Box pr={8} pb={3}>
            <Button variant="neutral" onClick={onHelpClick}>
              <Icon.Help16 />
            </Button>
          </Box>
        </Flexbox>
      )}
    </Flexbox>
  );
};

export default DrawerTitle;
