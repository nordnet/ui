import React, { useState } from 'react';
import { actions } from '@storybook/addon-actions';
import { Box, Input, Modal } from '../../..';
import { Display } from '../../../common/Display';

// TODO: A bit laggy for now, let's optimize later
const handlers = actions(
  'onBlur',
  'onClick',
  'onFocus',
  'onKeyDown',
  'onKeyUp',
  'onKeyPress',
  'onChange',
);

export default {
  title: 'Molecules / Input / Textarea',
  parameters: {
    component: Input.Textarea,
  },
};

export const Default = {
  render: () => <Input.Textarea label="Label" placeholder="Placeholder" />,
};

export const WithValueControlledBehaviour = {
  render: () => (
    <Input.Textarea label="Label" placeholder="Placeholder" value="Some predefined text" />
  ),

  name: 'With value (Controlled behaviour)',
};

export const WithDefaultValueUncontrolledBehaviour = {
  render: () => (
    <Input.Textarea label="Label" placeholder="Placeholder" defaultValue="Some predefined text" />
  ),

  name: 'With default value (Uncontrolled behaviour)',
};

export const ErrorIfEmptyText = {
  render: () => {
    const Component = () => {
      const [value, setValue] = useState('');

      return (
        <Input.Textarea
          label="My awesome text field"
          placeholder="This is a placeholder"
          onChange={(e) => setValue(e.target.value)}
          {...(value === '' ? { error: 'Something went wrong' } : {})}
        />
      );
    };
    return <Component />;
  },

  name: 'Error if empty text',
};

export const SuccessStory = {
  render: () => <Input.Textarea label="Label" placeholder="Placeholder" success />,

  name: 'Success',
};

export const DisabledStory = {
  render: () => <Input.Textarea label="Label" placeholder="Placeholder" disabled />,

  name: 'Disabled',
};

export const WithAutoFocus = {
  render: () => <Input.Textarea label="Label" placeholder="Placeholder" autoFocus />,

  name: 'With auto focus',
};

export const RequiredStory = {
  render: () => (
    <Display
      title="Required"
      items={[
        {
          component: <Input.Textarea label="Label" placeholder="Placeholder" required />,
          title: 'Default (without star)',
        },
        {
          component: (
            <Input.Textarea
              label="Label"
              placeholder="Placeholder"
              required
              visuallyEmphasiseRequired
            />
          ),
          title: 'With star',
        },
      ]}
    />
  ),

  name: 'Required',
};

export const ActionsStory = {
  render: () => (
    <>
      <p>
        Actions are a bit laggy because of the @storybook/addon-actions. Prod performance is not
        affected.
      </p>
      <Input.Textarea label="Label" placeholder="Placeholder" {...handlers} />
    </>
  ),

  name: 'Actions',
};

export const ExtraInfoBelow = {
  render: () => (
    <Input.Textarea label="Label" placeholder="Placeholder" extraInfo="Use this space wisely" />
  ),

  name: 'Extra info below',
};

export const ExtraInfoWithError = {
  render: () => {
    const Component = () => {
      const [value, setValue] = useState('');

      return (
        <Input.Textarea
          label="My awesome text field"
          placeholder="This is a placeholder"
          extraInfo="Use this space wisely"
          onChange={(e) => setValue(e.target.value)}
          {...(value === '' ? { error: 'Enter text' } : {})}
        />
      );
    };
    return <Component />;
  },

  name: 'Extra info with error',
};

export const EdgeCases = {
  render: () => (
    <Display
      items={[
        {
          component: (
            <Input.Textarea
              label="Too long label, goes into ellipsis. Consider smaller label or bigger input"
              placeholder="If placeholder goes too long though, it probably should be truncated into ellipsis, right?"
              extraInfo="This is much necessary info wow"
            />
          ),
          title: 'Long values',
        },
        {
          component: (
            <Input.Textarea
              label="Small label"
              placeholder=""
              extraInfo="Big extra fat extraInfo that will wrap over many lines. Be careful with this pattern, use it only with small texts!"
            />
          ),
          title: 'Long extraInfo',
        },
      ]}
    />
  ),

  name: 'Edge cases',
};

export const FullWidth = {
  render: () => <Input.Textarea label="Label" width="100%" placeholder="Placeholder" />,

  name: 'Full width',
};

export const SpecificWidth = {
  render: () => <Input.Textarea label="Label" width="400px" placeholder="Placeholder" />,

  name: 'Specific width',
};

export const HiddenLabel = {
  render: () => <Input.Textarea label="Label" placeholder="Placeholder" hideLabel />,

  name: 'Hidden label',
};

export const WithLabelTooltip = {
  render: () => (
    <Input.Textarea label="Label" labelTooltip="Tooltip content" placeholder="Placeholder" />
  ),

  name: 'With tooltip as label addon',
};

export const WithLabelTooltipPositionTop = {
  render: () => (
    <>
      <br />
      <br />
      <Input.Textarea
        label="Label"
        labelTooltip="Tooltip content"
        labelTooltipPosition="top"
        placeholder="Placeholder"
      />
    </>
  ),

  name: 'With tooltip (position top) as label addon',
};

export const OnAColouredBackground = {
  render: () => (
    <Box p={5} backgroundColor={(t) => t.color.disabledBackground}>
      <Input.Textarea label="On a colored background" placeholder="Placeholder" />
    </Box>
  ),

  name: 'On a coloured background',
};

export const WithMaxLength = {
  render: () => (
    <>
      <Input.Textarea label="Label" maxLength={20} />
    </>
  ),

  name: 'With max length 20 characters',
};

export const WithResizeNone = {
  render: () => (
    <>
      <Input.Textarea label="Label" noResize />
    </>
  ),

  name: 'With resize none',
};

export const WithLabelTooltipInsideModal = {
  render: () => {
    const Example = () => {
      const [open, setOpen] = useState(true);

      const onOpen = () => {
        setOpen(true);
      };

      const onClose = () => {
        setOpen(false);
      };

      return (
        <>
          <button type="button" onClick={onOpen}>
            Open modal
          </button>
          <Modal onClose={onClose} title="Dialog information" open={open}>
            <Box mb={2}>
              <Input.Textarea
                label="Label"
                placeholder="Placeholder"
                labelTooltip="Tooltip content"
                labelTooltipInModal
              />
            </Box>
          </Modal>
        </>
      );
    };
    return <Example />;
  },

  name: 'With label tooltip inside modal',
};
