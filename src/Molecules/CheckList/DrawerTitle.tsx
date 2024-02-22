import React, { FC, ReactElement } from 'react';
import { Box, Button, Flexbox, Icon, Typography } from '../..';

type DrawerTitleProps = {
  title: string;
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
    <Flexbox container gap={2} alignItems="center">
      {showHelpTitle && (
        <Flexbox item>
          <Button.Icon onClick={onHelpClick}>
            <Icon.ChevronLeft16 />
          </Button.Icon>
        </Flexbox>
      )}
      <Flexbox item grow={1}>
        <Typography type="title3" as="h3">
          {showHelpTitle ? helpTitle : title}
        </Typography>
      </Flexbox>
      {!showHelpTitle && (
        <Flexbox item>
          <Box pr={10}>
            <Button.Icon onClick={onHelpClick}>
              <Icon.Settings16 />
            </Button.Icon>
          </Box>
        </Flexbox>
      )}
    </Flexbox>
  );
};

export default DrawerTitle;
