import React, { useState, useRef } from 'react';
import { action } from '@storybook/addon-actions';

import ToastMessage from './ToastMessage';
import { Display } from '../../common/Display';
import { Icon, Button, PageWrapper, Flexbox, Box, Badge } from '../..';

export default {
  title: 'Molecules / ToastMessage ',
  parameters: {
    component: ToastMessage,
  },
};

export const DifferentVariantToastMessages = {
  render: () => (
    <>
      <Display
        items={[
          {
            title: 'primary',
            component: (
              <ToastMessage
                label="Link copied to clipboard"
                icon={<Icon.CheckCircleFill24 color={(t) => t.colorTokens.positive.icon_default} />}
                isVisible
                linkButton={
                  <Button
                    onClick={action('clicked')}
                    variant="neutral"
                    color={(t) => t.colorTokens.action.text_focus}
                  >
                    View
                  </Button>
                }
              />
            ),
          },
        ]}
      />
    </>
  ),

  name: 'Different variants',
};
export const HoverUsage = {
  render: () => {
    const Example = () => {
      const [visible, setVisible] = useState<boolean>(false);

      return (
        <PageWrapper background={(t) => t.colorTokens.neutral.background_brand_white}>
          <Flexbox>
            <Box onMouseEnter={() => setVisible(true)} p={4}>
              <Badge.Status variant="create" badgeSize="xl" label="Hover me" />
            </Box>
          </Flexbox>
          <Flexbox container gap={10}>
            <ToastMessage
              label="Link copied to clipboard"
              icon={<Icon.CheckCircleFill24 color={(t) => t.colorTokens.positive.icon_default} />}
              isVisible={visible}
              linkButton={
                <Button
                  onClick={action('clicked')}
                  variant="neutral"
                  color={(t) => t.colorTokens.action.text_focus}
                >
                  View
                </Button>
              }
            />
          </Flexbox>
        </PageWrapper>
      );
    };
    return <Example />;
  },
  name: 'With Hover',
};
export const WithLabelUsage = {
  render: () => {
    const Example = () => {
      const [visible, setVisible] = useState<boolean>(false);

      return (
        <PageWrapper background={(t) => t.colorTokens.neutral.background_brand_white}>
          <Flexbox>
            <Button variant="primary" onMouseEnter={() => setVisible(true)}>
              Hover me
            </Button>
          </Flexbox>
          <Flexbox container gap={10}>
            <ToastMessage label="Saved to watchlist" isVisible={visible} />
          </Flexbox>
        </PageWrapper>
      );
    };
    return <Example />;
  },
  name: 'With label',
};
export const WithLabelUsageLink = {
  render: () => {
    const Example = () => {
      const [visible, setVisible] = useState<boolean>(false);

      return (
        <PageWrapper background={(t) => t.colorTokens.neutral.background_brand_white}>
          <Flexbox>
            <Button variant="primary" onMouseEnter={() => setVisible(true)}>
              Hover me
            </Button>
          </Flexbox>
          <Flexbox container gap={10}>
            <ToastMessage
              label="Saved to watchlist"
              isVisible={visible}
              linkButton={
                <Button
                  onClick={action('clicked')}
                  variant="neutral"
                  color={(t) => t.colorTokens.action.text_focus}
                >
                  View
                </Button>
              }
            />
          </Flexbox>
        </PageWrapper>
      );
    };
    return <Example />;
  },
  name: 'With label and link View',
};
export const OnClickToastMessages = {
  render: () => {
    const Example = () => {
      const childRef = useRef<any>();

      // This function is used to call the setVisible method of the child component that uses the ref and useImperativeHandle
      const handleClick = () => {
        childRef.current.setVisible();
      };

      return (
        <PageWrapper background={(t) => t.colorTokens.neutral.background_brand_white}>
          <Flexbox>
            <Button variant="primary" onClick={() => handleClick()}>
              use setVisible ref method
            </Button>
          </Flexbox>
          <ToastMessage
            ref={childRef}
            label="Link copied to clipboard"
            icon={<Icon.CheckCircleFill24 color={(t) => t.colorTokens.positive.icon_default} />}
            linkButton={
              <Button
                onClick={action('clicked')}
                variant="neutral"
                color={(t) => t.colorTokens.action.text_focus}
              >
                View
              </Button>
            }
          />
        </PageWrapper>
      );
    };
    return <Example />;
  },
  name: 'OnClick set ToastMessage',
};
export const ControlledTimeOut = {
  render: () => {
    const Example = () => {
      const [visible, setVisible] = useState<boolean>(false);

      return (
        <PageWrapper background={(t) => t.colorTokens.neutral.background_brand_white}>
          <Flexbox>
            <Button variant="primary" onClick={() => setVisible(!visible)}>
              Click me
            </Button>
          </Flexbox>
          <ToastMessage
            label="Link copied to clipboard"
            icon={<Icon.CheckCircleFill24 color={(t) => t.colorTokens.positive.icon_default} />}
            isVisible={visible}
            timeout={10000}
            linkButton={
              <Button
                onClick={action('clicked')}
                variant="neutral"
                color={(t) => t.colorTokens.action.text_focus}
              >
                View
              </Button>
            }
          />
        </PageWrapper>
      );
    };
    return <Example />;
  },
  name: 'Controlled timeout ToastMessage',
};
