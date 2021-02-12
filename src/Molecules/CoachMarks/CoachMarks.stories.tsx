import React, { useState } from 'react';
import styled from 'styled-components';
import { action } from '@storybook/addon-actions';
import { Box, Button, Card, CoachMarks, Flexbox, Icon, Typography } from '../..';

const MockItem = styled.div`
  padding: ${(p) => p.theme.spacing.unit(5)}px;
  border: 1px solid ${(p) => p.theme.color.positive};
`;

const MockedContent = ({ onStartClick = () => {}, multipleSteps = false }) => (
  <Card>
    <Button onClick={onStartClick}>Start guide</Button>
    <Box py={5}>
      <Flexbox container justifyContent="space-between">
        <Flexbox item>
          <MockItem data-coach-marks-id="first">New feature</MockItem>
        </Flexbox>
        {multipleSteps && (
          <Flexbox item>
            <MockItem data-coach-marks-id="second">Another new feature</MockItem>
          </Flexbox>
        )}
      </Flexbox>
    </Box>
    <Box py={5}>
      {multipleSteps && (
        <Flexbox container justifyContent="space-between">
          <Flexbox item>
            <MockItem data-coach-marks-id="third">New feature</MockItem>
          </Flexbox>
        </Flexbox>
      )}
    </Box>
    <Box py={5}>
      {multipleSteps && (
        <Flexbox container justifyContent="space-between">
          <Flexbox item>
            <MockItem data-coach-marks-id="fourth">Another new feature</MockItem>
          </Flexbox>
        </Flexbox>
      )}
    </Box>
  </Card>
);

export default {
  title: 'Molecules / CoachMarks',
  parameters: {
    component: CoachMarks,
  },
};

export const defaultStory = () => {
  const Example = () => {
    const [activeGuide, setActiveGuide] = useState(true);

    return (
      <>
        <MockedContent onStartClick={() => setActiveGuide(true)} />
        {activeGuide && (
          <CoachMarks
            onClose={() => setActiveGuide(false)}
            onDone={() => setActiveGuide(false)}
            onNext={action('next')}
            onPrev={action('previous')}
            steps={[
              {
                target: '[data-coach-marks-id="first"]',
                icon: <Icon.Bank size={8} />,
                title: 'New feature',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                position: 'bottom',
              },
            ]}
          />
        )}
      </>
    );
  };

  return <Example />;
};

defaultStory.story = {
  name: 'Default',
};

export const MultpipleSteps = () => {
  const Example = () => {
    const [activeGuide, setActiveGuide] = useState(true);

    return (
      <>
        <MockedContent onStartClick={() => setActiveGuide(true)} multipleSteps />
        {activeGuide && (
          <CoachMarks
            onClose={() => setActiveGuide(false)}
            onDone={() => setActiveGuide(false)}
            onNext={action('next')}
            onPrev={action('previous')}
            steps={[
              {
                target: '[data-coach-marks-id="first"]',
                icon: <Icon.Bank size={8} />,
                title: 'New feature',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                position: 'right',
              },
              {
                target: '[data-coach-marks-id="second"]',
                title: 'Another new feature',
                content: (
                  <>
                    <Typography as="p" type="secondary" color="inherit">
                      Lorem ipsum dolor sit amet
                    </Typography>
                    <Typography as="p" type="secondary" color="inherit">
                      Consectetur adipiscing elit
                    </Typography>
                  </>
                ),
                position: 'left',
              },
              {
                target: '[data-coach-marks-id="third"]',
                title: 'New feature',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                position: 'bottom',
              },
              {
                target: '[data-coach-marks-id="fourth"]',
                title: 'New feature',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                position: 'top',
              },
            ]}
          />
        )}
      </>
    );
  };

  return <Example />;
};
