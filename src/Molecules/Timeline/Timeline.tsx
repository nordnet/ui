import React from 'react';
import styled from 'styled-components';
import { Props, StepProps } from './Timeline.types';
import { Box, Button, DateTime, Flexbox, Icon, ListItem, Typography } from '../..';

const getStatusIcon = (status?: string) => {
  switch (status) {
    case 'NEUTRAL':
      return <Icon.InformationFill24 color={(t) => t.color.emptyState} />;
    case 'PENDING':
      return <Icon.ClockFill24 color={(t) => t.color.emptyState} />;
    case 'ACTIVE':
      return <Icon.InformationFill24 color={(t) => t.color.cta} />;
    case 'WARNING':
      return <Icon.WarningFill24 color={(t) => t.color.timelineWarning} />;
    case 'FAILURE':
      return <Icon.ErrorFill24 color={(t) => t.color.timelineFailure} />;
    case 'SUCCESS':
    default:
      return <Icon.CheckCircleFill24 color={(t) => t.color.timelineSuccess} />;
  }
};

const StyledBox = styled(Box)`
  display: flex;
  z-index: 2;
  width: ${(t) => t.theme.spacing.unit(6)}px;
  justify-content: center;
`;

const StyledUl = styled.ul`
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 0;
`;

const StyledContainer = styled(Flexbox)`
  width: 100%;
`;

const StyledFlexbox = styled(Flexbox)`
  width: 100%;
  padding-top: ${(t) => t.theme.spacing.unit(1)}px;
  padding-bottom: ${(t) => t.theme.spacing.unit(1)}px;
`;

const lineHeight = (iconSize: string) => {
  switch (iconSize) {
    case '16':
      return '5';
    case '32':
      return '12';
    default:
      return '10';
  }
};

const lineStyles = (status: StepProps['status'], props: any) => {
  /** Before and after lines */
  const { theme, colorSuccess, colorNext, $iconSize } = props;
  return `
    content: '';
    position: absolute;
    height: Calc(50% - ${lineHeight(
      $iconSize,
    )}px); /* compensation for different icon sizes and non filled icons */
    left: 11px;
    width: 2px;
    z-index: 1;
    background: ${(() => {
      switch (status) {
        case 'NEUTRAL':
        case 'ACTIVE':
        case 'PENDING':
          return colorNext ? colorNext(theme) : theme.color.timelineNext;
        case 'WARNING':
          return colorNext ? colorNext(theme) : theme.color.timelineWarning;
        case 'FAILURE':
          return colorNext ? colorNext(theme) : theme.color.timelineFailure;
        case 'SUCCESS':
        default:
          return colorSuccess ? colorSuccess(theme) : theme.color.timelineSuccess;
      }
    })()};
  `;
};

const StyledListItem = styled(ListItem).withConfig({
  shouldForwardProp: (prop) =>
    ![
      'previousStatus',
      'currentStatus',
      'colorSuccess',
      'colorNext',
      '$hideSeparators',
      '$iconSize',
    ].includes(prop),
})<{
  previousStatus: StepProps['status'];
  currentStatus: StepProps['status'];
  colorSuccess: Props['colorSuccess'];
  colorNext: Props['colorNext'];
  $hideSeparators: Props['hideSeparators'];
  $iconSize: string;
}>`
  ${(p) =>
    !p.$hideSeparators &&
    `
  /* Divider of each element except last one */
  &:not(:last-of-type) > div > div:nth-child(2) {
    border-bottom: 1px solid ${p.theme.color.divider};
  }
  `}

  position: relative;
  & ::before {
    ${(props) => lineStyles(props.previousStatus, props)};
  }
  /** Remove line from top element */
  & :first-child::before {
    content: none;
  }
  & ::after {
    ${(props) => lineStyles(props.currentStatus, props)};
    bottom: 0;
  }
  /** Remove line from bottom element */
  & :last-child::after {
    content: none;
  }
`;

type FormatDateOptionYear = 'numeric';
type FormatDateOptionMonth = 'short';
type FormatDateOptionDay = 'numeric';
type FormatDateOptionWeekDay = 'short';

const dateTimeOptions = {
  year: 'numeric' as FormatDateOptionYear,
  month: 'short' as FormatDateOptionMonth,
  day: 'numeric' as FormatDateOptionDay,
  weekday: 'short' as FormatDateOptionWeekDay,
};

const Timeline: React.FC<Props> = ({ steps, colorSuccess, colorNext, hideSeparators = false }) => {
  let previousStatus: StepProps['status'];
  return (
    <StyledUl>
      {steps.reverse()?.map((step, index) => {
        const { date, text, status, button, icon } = step;
        const statusIcon = getStatusIcon(status);
        if (index > 0 && steps.length > 0) {
          previousStatus = steps[index - 1].status;
        }

        const iconName: string = icon?.type?.name;
        const iconSize = iconName?.substring(iconName.length, iconName.length - 2); // last two characters (size digits) of icon name

        return (
          <StyledListItem
            // eslint-disable-next-line react/no-array-index-key
            key={`${date}_${index}`}
            previousStatus={previousStatus}
            currentStatus={status}
            colorSuccess={colorSuccess}
            colorNext={colorNext}
            $hideSeparators={hideSeparators}
            $iconSize={iconSize}
          >
            <StyledContainer container direction="row" alignItems="center" gap={2}>
              <StyledBox>{icon || statusIcon}</StyledBox>

              <StyledFlexbox item container direction="row" alignItems="center">
                <Flexbox item container direction="column">
                  {date ? (
                    <Typography type="tertiary" color={(t) => t.color.label}>
                      {date instanceof Date ? (
                        <DateTime options={dateTimeOptions} value={date.toUTCString()} />
                      ) : (
                        date
                      )}
                    </Typography>
                  ) : null}
                  <Typography type="secondary">{text}</Typography>
                </Flexbox>
                {button && (
                  <Box ml="auto">
                    <Button onClick={button.onClick}>{button.label}</Button>
                  </Box>
                )}
              </StyledFlexbox>
            </StyledContainer>
          </StyledListItem>
        );
      })}
    </StyledUl>
  );
};

export default Timeline;
