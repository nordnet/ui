import React, { useState } from 'react';
import styled from 'styled-components';
import { action } from '@storybook/addon-actions';
import { Box, Button, Card, CoachMarks, Flexbox, Icon, Typography } from '../..';

const MockItem = styled.div`
  padding: ${(p) => p.theme.spacing.unit(5)}px;
  border: 1px solid ${(p) => p.theme.color.positive};
`;

export default {
  title: 'Molecules / CoachMarks',
  parameters: {
    component: CoachMarks,
  },
};

export const defaultStory = () => {
  const Example = () => {
    const [activeGuide, setActiveGuide] = useState(true);
    const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(null);

    return (
      <>
        <Card>
          <Button onClick={() => setActiveGuide(true)}>Start guide</Button>
          <Box py={5}>
            <Flexbox container justifyContent="space-between">
              <Flexbox item>
                <MockItem ref={setReferenceElement}>New feature</MockItem>
              </Flexbox>
            </Flexbox>
          </Box>
        </Card>

        {referenceElement && activeGuide && (
          <CoachMarks
            onClose={() => setActiveGuide(false)}
            onDone={() => setActiveGuide(false)}
            onNext={action('next')}
            onPrev={action('previous')}
            steps={[
              {
                referenceElement,
                icon: <Icon.Bank size={8} />,
                title: 'New feature',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                placement: 'bottom',
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
    const [referenceElement1, setReferenceElement1] = useState<HTMLElement | null>(null);
    const [referenceElement2, setReferenceElement2] = useState<HTMLElement | null>(null);
    const [referenceElement3, setReferenceElement3] = useState<HTMLElement | null>(null);
    const [referenceElement4, setReferenceElement4] = useState<HTMLElement | null>(null);

    return (
      <>
        <Card>
          <Button onClick={() => setActiveGuide(true)}>Start guide</Button>
          <Box py={5}>
            <Flexbox container justifyContent="space-between">
              <Flexbox item>
                <MockItem ref={setReferenceElement1}>New feature</MockItem>
              </Flexbox>
              <Flexbox item>
                <MockItem ref={setReferenceElement2}>Another new feature</MockItem>
              </Flexbox>
            </Flexbox>
          </Box>
          <Box py={5}>
            <Flexbox container justifyContent="space-between">
              <Flexbox item>
                <MockItem ref={setReferenceElement3}>New feature</MockItem>
              </Flexbox>
            </Flexbox>
          </Box>
          <Box py={5}>
            <Flexbox container justifyContent="space-between">
              <Flexbox item>
                <MockItem ref={setReferenceElement4}>Another new feature</MockItem>
              </Flexbox>
            </Flexbox>
          </Box>
        </Card>

        {referenceElement1 &&
          referenceElement2 &&
          referenceElement3 &&
          referenceElement4 &&
          activeGuide && (
            <CoachMarks
              onClose={() => setActiveGuide(false)}
              onDone={() => setActiveGuide(false)}
              onNext={action('next')}
              onPrev={action('previous')}
              steps={[
                {
                  referenceElement: referenceElement1,
                  icon: <Icon.Bank size={8} />,
                  title: 'New feature',
                  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                  placement: 'right',
                },
                {
                  referenceElement: referenceElement2,
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
                  placement: 'left',
                },
                {
                  referenceElement: referenceElement3,
                  title: 'New feature',
                  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                  placement: 'bottom',
                },
                {
                  referenceElement: referenceElement4,
                  title: 'New feature',
                  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                  placement: 'top',
                },
              ]}
            />
          )}
      </>
    );
  };

  return <Example />;
};
