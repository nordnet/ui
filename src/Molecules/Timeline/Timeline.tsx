import React from 'react';
import styled from 'styled-components';
import { Props, StepProps } from './Timeline.types';
import { Box, Icon, Flexbox, Button, Typography, ListItem, DateTime } from '../..';

const getStatusIcon = (status?: string) => {
  switch (status) {
    case 'ACTIVE':
      return <Icon.InfoCircle size={5} fill={t => t.color.cta} />;
    case 'FAILURE':
      return <Icon.CrossCircle size={5} fill={t => t.color.negative} />;
    case 'SUCCESS':
    default:
      return <Icon.CheckMarkCircle size={5} fill={t => t.color.positive} />;
  }
};

const StyledBox = styled(Box)`
  z-index: 2;
`;

const StyledUl = styled.ul`
  padding-left: 0;
`;

const StyledContainer = styled(Flexbox)`
  width: 100%;
`;

const StyledFlexbox = styled(Flexbox)`
  width: 100%;
  padding-top: ${t => t.theme.spacing.unit(1)}px;
  padding-bottom: ${t => t.theme.spacing.unit(1)}px;
`;

const lineStyles = (status: StepProps['status'], props: any) => {
  /** Before and after lines */
  const { theme, colorSuccess, colorNext } = props;
  return `
    content: '';
    position: absolute;
    height: 50%;
    left: 9px;
    width: 2px;
    z-index: 1;
    background: ${(() => {
      switch (status) {
        case 'ACTIVE':
        case 'FAILURE':
          return colorNext ? colorNext(theme) : theme.color.timelineNext;
        case 'SUCCESS':
        default:
          return colorSuccess ? colorSuccess(theme) : theme.color.timelineSuccess;
      }
    })()};
  `;
};

const StyledListItem = styled(ListItem).withConfig({
  shouldForwardProp: prop =>
    !['previousStatus', 'currentStatus', 'colorSuccess', 'colorNext'].includes(prop),
})<{
  previousStatus: StepProps['status'];
  currentStatus: StepProps['status'];
  colorSuccess: Props['colorSuccess'];
  colorNext: Props['colorNext'];
}>`
  /* Divider of each element except last one */
  &:not(:last-of-type) > div > div:nth-child(2) {
    border-bottom: 1px solid ${t => t.theme.color.divider};
  }

  position: relative;
  & ::before {
    ${props => lineStyles(props.previousStatus, props)};
  }
  /** Remove line from top element */
  & :first-child::before {
    content: none;
  }
  & ::after {
    ${props => lineStyles(props.currentStatus, props)};
    bottom: 0;
  }
  /** Remove line from bottom element */
  & :last-child::after {
    content: none;
  }
`;

const Timeline: React.FC<Props> = ({ steps, colorSuccess, colorNext }) => {
  let previousStatus: StepProps['status'];
  return (
    <StyledUl>
      {steps.reverse().map((step, index) => {
        const { date, text, status, button } = step;
        const statusIcon = getStatusIcon(status);
        if (index > 0 && steps.length > 0) {
          previousStatus = steps[index - 1].status;
        }
        return (
          <StyledListItem
            /* eslint-disable-next-line react/no-array-index-key */
            key={`${date}_${index}`}
            previousStatus={previousStatus}
            currentStatus={status}
            colorSuccess={colorSuccess}
            colorNext={colorNext}
          >
            <StyledContainer container direction="row" alignItems="center">
              <StyledBox mr={2}>{statusIcon}</StyledBox>

              <StyledFlexbox item container direction="row" alignItems="center">
                <Flexbox item container direction="column">
                  <Typography type="tertiary" color={t => t.color.label}>
                    <DateTime onlyDate value={date.toUTCString()} />
                  </Typography>
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
