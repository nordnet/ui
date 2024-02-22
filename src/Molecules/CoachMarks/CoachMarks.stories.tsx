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

export const DefaultStory = {
  render: () => {
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
                  icon: <Icon.Bank32 />,
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
  },

  name: 'Default',
};

export const WithCustomBackdropPadding = {
  render: () => {
    const Example = () => {
      const [activeGuide, setActiveGuide] = useState(true);
      const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(null);

      return (
        <>
          <Card>
            <Button onClick={() => setActiveGuide(true)}>Start guide</Button>
            <Box py={5} pl={5}>
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
                  icon: <Icon.Bank32 />,
                  title: 'New feature',
                  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                  placement: 'bottom',
                  backdropPadding: '20',
                },
              ]}
            />
          )}
        </>
      );
    };

    return <Example />;
  },

  name: 'With custom backdrop padding',
};

export const WithCustomBackdropPxpy = {
  render: () => {
    const Example = () => {
      const [activeGuide, setActiveGuide] = useState(true);
      const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(null);

      return (
        <>
          <Card>
            <Button onClick={() => setActiveGuide(true)}>Start guide</Button>
            <Box py={5} pl={5}>
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
                  icon: <Icon.Bank32 />,
                  title: 'New feature',
                  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                  placement: 'bottom',
                  px: '10',
                  py: '50',
                },
              ]}
            />
          )}
        </>
      );
    };

    return <Example />;
  },

  name: 'With custom horizontal and vertical backdrop padding',
};

export const WithCircularBackdrop = {
  render: () => {
    const Example = () => {
      const [activeGuide, setActiveGuide] = useState(true);
      const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(null);

      return (
        <>
          <Card>
            <Button onClick={() => setActiveGuide(true)}>Start guide</Button>
            <Box py={10} pl={25}>
              <Flexbox container justifyContent="space-between">
                <Flexbox item>
                  <div ref={setReferenceElement}>
                    <Icon.More24 />
                  </div>
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
                  icon: <Icon.Bank32 />,
                  title: 'New feature',
                  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                  placement: 'bottom',
                  isCircular: true,
                  backdropPadding: '30',
                },
              ]}
            />
          )}
        </>
      );
    };

    return <Example />;
  },

  name: 'With circular backdrop',
};

export const WithCircularHighlightSurroundingLongElement = {
  render: () => {
    const Example = () => {
      const [activeGuide, setActiveGuide] = useState(true);
      const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(null);

      return (
        <>
          <Card>
            <Button onClick={() => setActiveGuide(true)}>Start guide</Button>
            <Box py={10} pl={55}>
              <Flexbox container justifyContent="space-between">
                <Flexbox item>
                  <div ref={setReferenceElement}>
                    <Box style={{ width: 100, height: 350 }} backgroundColor={(t) => t.color.cta} />
                  </div>
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
                  icon: <Icon.Bank32 />,
                  title: 'New feature',
                  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                  placement: 'bottom',
                  isCircular: true,
                  backdropPadding: '30',
                },
              ]}
            />
          )}
        </>
      );
    };

    return <Example />;
  },

  name: 'With long element and circular highlight',
};

const MultpipleStepsExample = () => {
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
            bottomSheet
            onClose={() => setActiveGuide(false)}
            onDone={() => setActiveGuide(false)}
            onNext={action('next')}
            onPrev={action('previous')}
            steps={[
              {
                referenceElement: referenceElement1,
                icon: <Icon.Bank32 />,
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
                isCircular: true,
                backdropPadding: '30',
              },
              {
                referenceElement: referenceElement4,
                title: 'New feature',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                placement: 'top',
                backdropPadding: '30',
              },
            ]}
          />
        )}
    </>
  );
};

export const MultpipleSteps = {
  render: () => <MultpipleStepsExample />,
};

export const WithBarColor = {
  render: () => {
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
              barColor={(t) => t.color.buy}
              onClose={() => setActiveGuide(false)}
              onDone={() => setActiveGuide(false)}
              onNext={action('next')}
              onPrev={action('previous')}
              steps={[
                {
                  referenceElement,
                  icon: <Icon.Bank32 />,
                  title: 'New feature',
                  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                  placement: 'right',
                },
              ]}
            />
          )}
        </>
      );
    };

    return <Example />;
  },

  name: 'With bar color',
};

export const WithFeedbackWidgetMode = {
  render: () => {
    const Example = () => {
      const [activeGuide, setActiveGuide] = useState(true);

      return (
        <>
          <Button onClick={() => setActiveGuide(!activeGuide)}>Start guide</Button>
          {activeGuide && (
            <CoachMarks
              barColor={(t) => t.color.buy}
              onClose={() => setActiveGuide(false)}
              onDone={() => setActiveGuide(false)}
              onNext={action('next')}
              onPrev={action('previous')}
              feedbackWidgetMode
              steps={[
                {
                  icon: <Icon.Bank32 />,
                  title: 'New feature',
                  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                  placement: 'right',
                },
              ]}
            />
          )}
        </>
      );
    };

    return <Example />;
  },

  name: 'With feedback Widget mode',
};

const MobileBottomSheetExample = () => {
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
          bottomSheet
          onClose={() => setActiveGuide(false)}
          onDone={() => setActiveGuide(false)}
          onNext={action('next')}
          onPrev={action('previous')}
          steps={[
            {
              referenceElement,
              icon: <Icon.Bank32 />,
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

export const MobileBottomSheet = {
  render: () => <MobileBottomSheetExample />,
  parameters: {
    viewport: {
      defaultViewport: 'iphone12',
    },
  },
};

const OverrideStepExample = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [activeGuide, setActiveGuide] = useState(true);
  const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(null);

  const handleNext = (step: number) => {
    setCurrentStep(step + 1);
  };

  const handlePrev = (step: number) => {
    setCurrentStep(step - 1);
  };

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
          bottomSheet
          overrideStep={currentStep}
          onNext={handleNext}
          onPrev={handlePrev}
          steps={[
            {
              referenceElement,
              icon: <Icon.Bank32 />,
              title: 'Step 1',
              content: (
                <div>
                  Click the button if youre too smart for steps 1-3.
                  <Button onClick={() => setCurrentStep(3)}>Skip</Button>
                </div>
              ),
              placement: 'bottom',
            },
            {
              referenceElement,
              icon: <Icon.Bank32 />,
              title: 'Step 2',
              content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              placement: 'bottom',
            },
            {
              referenceElement,
              icon: <Icon.Bank32 />,
              title: 'Step 3',
              content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              placement: 'bottom',
            },
            {
              referenceElement,
              icon: <Icon.Bank32 />,
              title: 'Step 4',
              content: (
                <div>
                  Click the button to go to step 2
                  <Button onClick={() => setCurrentStep(1)}>Go back</Button>
                </div>
              ),
              placement: 'bottom',
            },
          ]}
        />
      )}
    </>
  );
};

export const OverrideStep = {
  render: () => <OverrideStepExample />,
};
