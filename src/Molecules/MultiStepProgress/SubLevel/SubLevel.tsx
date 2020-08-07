import React from 'react';
import styled from 'styled-components';
import Typography from '../../../Atoms/Typography';
import Box from '../../../Atoms/Box';
import Button from '../../Button';
import Status from '../Status';
import { SubLevelComponent } from './SubLevel.types';
import {
  listReset,
  HORIZONTAL_PADDING,
  HORIZONTAL_PADDING_DESKTOP,
  SPACE_TO_STEP_NUMBER,
  STEP_NUMBER_SIZE,
  VERTICAL_PADDING,
} from '../constants';

const OrderedList = styled.ol`
  ${listReset}
  padding-bottom: ${p => p.theme.spacing.unit(VERTICAL_PADDING)}px;
`;

const ListItem = styled.li`
  display: block;

  & + & {
    padding-top: ${p => p.theme.spacing.unit(2)}px;
  }
`;

export const SubLevel: SubLevelComponent = ({
  onStepClick,
  steps = [],
  titleDone,
  titleNotDone,
}) => {
  const contentPadding = HORIZONTAL_PADDING + STEP_NUMBER_SIZE + SPACE_TO_STEP_NUMBER;
  const contentPaddingDesktop =
    HORIZONTAL_PADDING_DESKTOP + STEP_NUMBER_SIZE + SPACE_TO_STEP_NUMBER;

  return (
    <OrderedList>
      {steps.map(step => {
        const { current, done, name, label } = step;

        return (
          <ListItem key={step.label}>
            <Box
              pl={contentPadding}
              pr={HORIZONTAL_PADDING}
              sm={{ pl: contentPaddingDesktop, pr: HORIZONTAL_PADDING_DESKTOP }}
            >
              {current || done ? (
                <Button onClick={() => onStepClick && onStepClick(name)} variant="neutral">
                  <Typography
                    color={t => (current ? t.color.text : t.color.disabledText)}
                    type="secondary"
                    weight={current ? 'bold' : 'regular'}
                  >
                    <Status done={done} noIcons titleDone={titleDone} titleNotDone={titleNotDone} />
                    {label}
                  </Typography>
                </Button>
              ) : (
                <Typography color={t => t.color.disabledText} type="secondary">
                  <Status done={done} noIcons titleDone={titleDone} titleNotDone={titleNotDone} />
                  {label}
                </Typography>
              )}
            </Box>
          </ListItem>
        );
      })}
    </OrderedList>
  );
};
