import React, { FC, ReactElement } from 'react';
import { Box, Button, Flexbox, Icon, Typography } from '../..';
import { isElement } from '../../common/utils';
import { TitleProps } from './CheckList.types';
import ProgressDonutChart from './ProgressDonutChart';

const Title: FC<TitleProps> = ({
  percentageCompleted,
  maxPercentage = 100,
  title = 'Default list title',
  description,
  viewAllLabel,
  displayMode,
  showProgress = true,
  onViewAll = () => {},
  onClose,
}): ReactElement => {
  return displayMode === 'DRAWER' ? (
    <Box py={4}>
      <Flexbox container gap={5} justifyContent="center" direction="column" alignItems="center">
        {showProgress && percentageCompleted && (
          <ProgressDonutChart completed={percentageCompleted} total={maxPercentage} size="l" />
        )}

        <Flexbox container item direction="column" alignItems="center">
          {(isElement(description) && description) || (
            <Typography
              type="title3"
              weight="bold"
              color={(t) => t.colorTokens.action.text_default}
            >
              {description}
            </Typography>
          )}
        </Flexbox>
      </Flexbox>
    </Box>
  ) : (
    <Flexbox container gap={5} alignItems="center">
      {showProgress && percentageCompleted && (
        <Flexbox item shrink={0}>
          <ProgressDonutChart completed={percentageCompleted} total={maxPercentage} size="s" />
        </Flexbox>
      )}
      <Flexbox container item direction="column" grow={1} gap={0} sm={{ gap: 1 }}>
        <Typography type="title3">{title}</Typography>
        {(isElement(description) && description) || (
          <Typography type="secondary">{description}</Typography>
        )}
      </Flexbox>
      {viewAllLabel && (
        <Flexbox item shrink={0}>
          <Button.Pill
            variant="tertiary"
            size="m"
            onClick={onViewAll}
            data-custom-prevent-click-outside
          >
            {viewAllLabel}
          </Button.Pill>
        </Flexbox>
      )}
      {percentageCompleted === maxPercentage && onClose && (
        <Button variant="neutral" onClick={onClose}>
          <Icon.Cross16 />
        </Button>
      )}
    </Flexbox>
  );
};

export default Title;
