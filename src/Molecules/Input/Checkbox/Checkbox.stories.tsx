import React, { useState } from 'react';
import { actions } from '@storybook/addon-actions';
import { Box, Flexbox, FormField, Input, Modal, Typography } from '../../..';
import { Display } from '../../../common/Display';
import { Shape } from './Checkbox.shape';

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
  title: 'Molecules / Input / Checkbox',
  parameters: {
    component: Input.Checkbox,
  },
};

export const DefaultStory = {
  render: () => <Input.Checkbox name="example" value="green" label="Green" />,
  name: 'Default',
};

export const CircleStory = {
  render: () => <Input.Checkbox name="example" value="green" label="Green" shape={Shape.Circle} />,

  name: 'Circle',
};

export const DefaultStoryWithTooltip = {
  render: () => (
    <Input.Checkbox name="example" value="green" label="Green" labelTooltip="Checkbox tooltip" />
  ),

  name: 'Default with tooltip',
};

export const DefaultStoryWithTooltipPositionTop = () => (
  <>
    <br />
    <br />
    <Input.Checkbox
      name="example"
      value="green"
      label="Green"
      labelTooltip="Checkbox tooltip"
      labelTooltipPosition="top"
    />
  </>
);

export const DefaultStoryWithTooltipParagraph = {
  render: () => (
    <Input.Checkbox
      name="example"
      value="green"
      label="Quisque varius massa ut augue convallis, ac vehicula orci aliquet. Mauris consequat pretium tempus. Morbi sagittis facilisis pellentesque. Maecenas sodales neque nec sapien suscipit tempus. Quisque elementum auctor urna, nec laoreet nibh vehicula et."
      labelTooltip="Checkbox tooltip"
    />
  ),

  name: 'Default with tooltip with a long paragraph',
};

export const DefaultStoryWithTooltipPositionTopParagraph = {
  render: () => (
    <>
      <br />
      <Input.Checkbox
        name="example"
        value="green"
        label="Quisque varius massa ut augue convallis, ac vehicula orci aliquet. Mauris consequat pretium tempus. Morbi sagittis facilisis pellentesque. Maecenas sodales neque nec sapien suscipit tempus. Quisque elementum auctor urna, nec laoreet nibh vehicula et."
        labelTooltip="Checkbox tooltip"
        labelTooltipPosition="top"
      />
    </>
  ),

  name: 'Default with tooltip (position top) with a long paragraph',
};

export const WithDefaultChecked = {
  render: () => <Input.Checkbox name="example" value="green" label="Green" defaultChecked />,

  name: 'With default checked',
};

export const WithCheckedControlledBehaviour = {
  render: () => {
    const Component = () => {
      const [checked, setChecked] = useState(false);
      const toggleCheckbox = () => setChecked(!checked);

      return (
        <>
          <Input.Checkbox
            name="example"
            value="green"
            label="Green"
            checked={checked}
            onChange={toggleCheckbox}
          />
          <button type="button" onClick={toggleCheckbox}>
            Toggle Checkbox
          </button>
        </>
      );
    };
    return <Component />;
  },

  name: 'With checked (Controlled behaviour)',
};

export const RequiredStory = {
  render: () => (
    <Display
      title="Required"
      items={[
        {
          component: <Input.Checkbox name="example" value="green" label="Green" required />,
          title: 'Default (without star)',
        },
        {
          component: (
            <Input.Checkbox
              name="example"
              value="green"
              label="Green"
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

export const WithAnErrorIfNotChecked = {
  render: () => {
    const Component = () => {
      const [checked, setChecked] = useState(false);
      const toggleCheckbox = () => setChecked(!checked);

      return (
        <Input.Checkbox
          name="example"
          value="green"
          label="Green"
          required
          onChange={toggleCheckbox}
          {...(!checked ? { error: 'This field is required' } : {})}
        />
      );
    };
    return <Component />;
  },

  name: 'With an error if not checked',
};

export const InAGroup = {
  render: () => (
    <FormField label="Colors" group>
      <Flexbox container gap={5}>
        <Input.Checkbox name="example" value="green" label="Green" />
        <Input.Checkbox name="example" value="blue" label="Blue" />
        <Input.Checkbox name="example" value="yellow" label="Yellow" />
      </Flexbox>
    </FormField>
  ),

  name: 'In a group',
};

export const InAGroupWithTooltip = {
  render: () => (
    <FormField label="Colors" labelTooltip="Checkboxgroup tooltip" group>
      <Flexbox container gap={5}>
        <Input.Checkbox name="example" value="green" label="Green" />
        <Input.Checkbox name="example" value="blue" label="Blue" />
        <Input.Checkbox name="example" value="yellow" label="Yellow" />
      </Flexbox>
    </FormField>
  ),

  name: 'In a group with a label tooltip',
};

export const InAGroupWithTooltipPositionTop = {
  render: () => (
    <>
      <br />
      <br />
      <FormField
        label="Colors"
        labelTooltip="Checkboxgroup tooltip"
        labelTooltipPosition="top"
        group
      >
        <Flexbox container gap={5}>
          <Input.Checkbox name="example" value="green" label="Green" />
          <Input.Checkbox name="example" value="blue" label="Blue" />
          <Input.Checkbox name="example" value="yellow" label="Yellow" />
        </Flexbox>
      </FormField>
    </>
  ),

  name: 'In a group with a label tooltip (position top)',
};

export const InAGroupWithError = {
  render: () => {
    const Component = () => {
      const [oneChecked, setOneChecked] = useState(false);
      const [twoChecked, setTwoChecked] = useState(false);
      const [threeChecked, setThreeChecked] = useState(false);
      const hasGroupError = !oneChecked && !twoChecked && !threeChecked;

      return (
        <FormField
          label="Colors"
          group
          {...(hasGroupError ? { error: 'This field is required' } : {})}
        >
          <Flexbox container gap={5}>
            <Input.Checkbox
              name="example"
              value="green"
              label="Green"
              hasError={hasGroupError}
              onChange={() => setOneChecked(!oneChecked)}
              required
            />
            <Input.Checkbox
              name="example"
              value="blue"
              label="Blue"
              hasError={hasGroupError}
              onChange={() => setTwoChecked(!twoChecked)}
              required
            />
            <Input.Checkbox
              name="example"
              value="yellow"
              label="Yellow"
              hasError={hasGroupError}
              onChange={() => setThreeChecked(!threeChecked)}
              required
            />
          </Flexbox>
        </FormField>
      );
    };
    return <Component />;
  },

  name: 'In a group with error',
};

export const DisabledStory = {
  render: () => (
    <Display
      title="Disabled"
      items={[
        {
          component: (
            <Input.Checkbox name="example" value="green" label="Green" defaultChecked disabled />
          ),
          title: 'Checked',
        },
        {
          component: <Input.Checkbox name="example" value="blue" label="Blue" disabled />,
          title: 'Not Checked',
        },
        {
          component: <Input.Checkbox name="example" value="red" label="Red" />,
          title: 'Not Disabled',
        },
      ]}
    />
  ),

  name: 'Disabled',
};

export const WithAutoFocus = {
  render: () => <Input.Checkbox name="example" value="green" label="Green" autoFocus />,

  name: 'With auto focus',
};

export const WithAllActions = {
  render: () => <Input.Checkbox name="example6" value="green" label="Green" {...handlers} />,

  name: 'With all actions',
};

export const ElementLabelStory = {
  render: () => {
    const label = (
      <>
        <Typography type="secondary" weight="bold">
          The first part is bold,
        </Typography>{' '}
        <Typography type="secondary" weight="regular">
          the second part is regular
        </Typography>
      </>
    );
    return <Input.Checkbox name="example" value="element" label={label} />;
  },

  name: 'Element as label',
};

export const WithDifferentSizes = {
  render: () => {
    return (
      <Flexbox container direction="column" gap={1}>
        <Input.Checkbox name="small" value="1" size="s" label="small" />
        <Input.Checkbox name="medium" value="2" label="medium" />
        <Input.Checkbox name="default" value="3" label="default" />
      </Flexbox>
    );
  },

  name: 'Checkboxes with different size',
};

export const OnAColouredBackground = {
  render: () => (
    <Box p={5} backgroundColor={(t) => t.color.disabledBackground}>
      <Input.Checkbox name="background" value="background" label="On a colored background" />
    </Box>
  ),

  name: 'On a coloured background',
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
              <Input.Checkbox
                label="Label"
                name="foo"
                value="bar"
                labelTooltipInModal
                labelTooltip="Tooltip content"
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
