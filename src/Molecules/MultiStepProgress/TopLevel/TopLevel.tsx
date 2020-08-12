import React from 'react';
import styled from 'styled-components';

import Box from '../../../Atoms/Box';
import Button from '../../Button';
import Typography from '../../../Atoms/Typography';
import {
  InternalProps,
  TopLevelComponent,
  InternalOLProps,
  ProgressLevelsComponent,
} from './TopLevel.types';
import { SubLevel } from '../SubLevel';
import Status from '../Status';
import {
  listReset,
  HORIZONTAL_PADDING,
  HORIZONTAL_PADDING_DESKTOP,
  SPACE_TO_STEP_NUMBER,
  STEP_NUMBER_SIZE,
  VERTICAL_PADDING,
} from '../constants';
import { Icon, Flexbox, Media } from '../../..';

const contentLeftPadding = HORIZONTAL_PADDING + STEP_NUMBER_SIZE + SPACE_TO_STEP_NUMBER;
const contentLeftPaddingDesktop =
  HORIZONTAL_PADDING_DESKTOP + STEP_NUMBER_SIZE + SPACE_TO_STEP_NUMBER;

const StyledOrderedList = styled.ol<InternalOLProps>`
  ${listReset}
`;

const MobileProgressLevels = styled.ol`
  ${listReset}
`;

const ListItem = styled.li<InternalProps>`
  display: block;
  position: relative;

  &::before {
    content: '';
    display: block;
    background: ${p => p.theme.color.cta};
    width: 2px;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition: opacity 0.16s ease-out;
    opacity: ${p => (p.$current ? 1 : 0)};
  }

  & + & {
    border-top: 1px solid ${p => p.theme.color.divider};

    ${p => p.theme.media.greaterThan(p.theme.breakpoints.md)} {
      border-top-width: ${p => p.theme.spacing.unit(2)}px;
    }
  }
`;

const Content = styled(Box)`
  position: relative;
`;

const StyledButton = styled(Button)`
  justify-content: flex-start;
`;

const StyledMobileButton = styled(StyledButton)`
  & > span {
    width: 100%;
  }
`;
const ProgressLevels: ProgressLevelsComponent = ({
  steps,
  onStepClick,
  onSubStepClick,
  titleDone,
  titleNotDone,
  isInDrawer,
}) => {
  return (
    <StyledOrderedList>
      {steps &&
        steps.map((step, i) => {
          const { current, done, label, name, steps: substeps = [] } = step;
          const number = i + 1;

          return (
            <ListItem key={label} $current={current} $isInDrawer={isInDrawer}>
              {current || done ? (
                <StyledButton
                  onClick={() => onStepClick && onStepClick(name)}
                  variant="neutral"
                  fullWidth
                >
                  <Typography type="primary" weight={current ? 'bold' : 'regular'}>
                    <Content
                      py={VERTICAL_PADDING}
                      pr={HORIZONTAL_PADDING}
                      pl={contentLeftPadding}
                      sm={{ pl: contentLeftPaddingDesktop, pr: HORIZONTAL_PADDING_DESKTOP }}
                    >
                      <Status
                        current={current}
                        done={done}
                        number={number}
                        titleDone={titleDone}
                        titleNotDone={titleNotDone}
                      />
                      {label}
                    </Content>
                  </Typography>
                </StyledButton>
              ) : (
                <Typography color={t => t.color.disabledText} type="primary">
                  <Content
                    py={VERTICAL_PADDING}
                    pr={HORIZONTAL_PADDING}
                    pl={contentLeftPadding}
                    sm={{ pl: contentLeftPaddingDesktop }}
                  >
                    <Status
                      current={current}
                      done={done}
                      number={number}
                      titleDone={titleDone}
                      titleNotDone={titleNotDone}
                    />
                    {label}
                  </Content>
                </Typography>
              )}
              {substeps.length > 0 && current && (
                <SubLevel
                  onStepClick={onSubStepClick}
                  steps={substeps}
                  titleDone={titleDone}
                  titleNotDone={titleNotDone}
                />
              )}
            </ListItem>
          );
        })}
    </StyledOrderedList>
  );
};

export const TopLevel: TopLevelComponent = ({
  drawerOpen,
  onStepClick,
  onSubStepClick,
  onMobileStepClick,
  steps = [],
  titleDone,
  titleNotDone,
  isInDrawer = false,
}) => {
  if (isInDrawer) {
    return (
      <ProgressLevels
        steps={steps}
        onStepClick={onStepClick}
        onSubStepClick={onSubStepClick}
        titleDone={titleDone}
        titleNotDone={titleNotDone}
        isInDrawer
      />
    );
  }

  return (
    <>
      <Media query={t => t.media.greaterThan(t.breakpoints.md.size)}>
        <ProgressLevels
          steps={steps}
          onStepClick={onStepClick}
          onSubStepClick={onSubStepClick}
          titleDone={titleDone}
          titleNotDone={titleNotDone}
        />
      </Media>

      <Media query={t => t.media.lessThan(t.breakpoints.md)}>
        <MobileProgressLevels>
          {steps &&
            steps.map((step, i) => {
              const { current, done, label } = step;
              const number = i + 1;

              if (!current) {
                return null;
              }

              return (
                <ListItem key={label} $current={current}>
                  <StyledMobileButton
                    onClick={() => onMobileStepClick && onMobileStepClick()}
                    variant="neutral"
                    aria-expanded={drawerOpen}
                    fullWidth
                  >
                    <Typography type="primary" weight={current ? 'bold' : 'regular'}>
                      <Content
                        py={VERTICAL_PADDING}
                        pr={HORIZONTAL_PADDING}
                        pl={contentLeftPadding}
                        sm={{ pl: contentLeftPaddingDesktop, pr: HORIZONTAL_PADDING_DESKTOP }}
                      >
                        <Flexbox container justifyContent="space-between" alignItems="center">
                          <Flexbox item>
                            <Status
                              current={current}
                              done={done}
                              number={number}
                              titleDone={titleDone}
                              titleNotDone={titleNotDone}
                            />
                            {label}
                          </Flexbox>
                          <Flexbox item>
                            <Icon.ThinChevron direction="down" />
                          </Flexbox>
                        </Flexbox>
                      </Content>
                    </Typography>
                  </StyledMobileButton>
                </ListItem>
              );
            })}
        </MobileProgressLevels>
      </Media>
    </>
  );
};
