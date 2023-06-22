import React, { FC, ReactElement } from 'react';
import { Box, Button, Flexbox, Icon, Typography } from '../..';
import { TaskListCompletion, TaskListLabels, TaskListSummary, DisplayMode } from './TaskList.types';
import ProgressDonut from './ProgressDonut';

const Title: FC<
  TaskListCompletion & TaskListSummary & TaskListLabels & { displayMode?: DisplayMode }
> = ({
  percentageCompleted,
  maxPercentage = 100,
  title = 'Title',
  description = '',
  viewAllLabel,
  displayMode,
  onViewAll = () => {},
}): ReactElement => {
  const defaultDescription = `${Math.round(100 * (percentageCompleted / maxPercentage))}% complete`;

  return displayMode === 'DRAWER_NARROW' || displayMode === 'DRAWER_WIDE' ? (
    <Box py={4}>
      <Flexbox container gap={3} justifyContent="center" direction="column" alignItems="center">
        <ProgressDonut
          percentageCompleted={percentageCompleted}
          maxPercentage={maxPercentage}
          size={230}
        />

        <Flexbox container item direction="column" alignItems="center">
          {description || (
            <Typography
              type="title3"
              weight="bold"
              color={(t) => t.colorTokens.action.text_default}
            >
              {defaultDescription}
            </Typography>
          )}
        </Flexbox>
      </Flexbox>
    </Box>
  ) : (
    <Box p={5}>
      <Flexbox container gap={4} alignItems="center">
        <ProgressDonut percentageCompleted={percentageCompleted} maxPercentage={maxPercentage} />
        <Flexbox
          container
          item
          direction="column"
          grow={1}
          gap={displayMode === 'CARD_NARROW' ? 0 : 1}
        >
          <Typography type={displayMode === 'CARD_NARROW' ? 'primary' : 'title3'} weight="bold">
            {title}
          </Typography>
          {description || (
            <Typography type="secondary" color={(t) => t.colorTokens.action.text_default}>
              {defaultDescription}
            </Typography>
          )}
        </Flexbox>
        {viewAllLabel && (
          <Flexbox item shrink={0}>
            <Button.Pill variant="tertiary" size="m" onClick={onViewAll}>
              {viewAllLabel}
            </Button.Pill>
          </Flexbox>
        )}
        {percentageCompleted === maxPercentage && (
          <Button variant="neutral">
            <Icon.Cross16 />
          </Button>
        )}
      </Flexbox>
    </Box>
  );
};

export default Title;
