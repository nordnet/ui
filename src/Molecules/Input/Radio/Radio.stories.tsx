import React, { useState } from 'react';
import styled from 'styled-components';
import { actions } from '@storybook/addon-actions';
import { Box, Flexbox, FormField, Input } from '../../..';
import { Display } from '../../../common/Display';

const handlers = actions(
  'onBlur',
  'onClick',
  'onFocus',
  'onKeyDown',
  'onKeyUp',
  'onKeyPress',
  'onChange',
);

const StyledRadioLabel = styled.label<{ checked: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 52px;
  height: 52px;
  background-color: ${(p) => p.theme.color.background};

  &:hover {
    cursor: pointer;
    ${(p) => !p.checked && `background-color: ${p.theme.color.cta}; color: white`}
  }
  ${(p) => p.checked && `background-color: ${p.theme.color.cta}; color: white`}
`;

export default {
  title: 'Molecules / Input / Radio',
  parameters: {
    component: Input.Radio,
  },
};

export const defaultStory = {
  render: () => <Input.Radio name="example" value="green" label="Green" />,
  name: 'Default',
};

export const withDefaultChecked = {
  render: () => <Input.Radio name="example" value="green" label="Green" defaultChecked />,

  name: 'With default checked',
};

export const withCheckedControlledBehaviour = {
  render: () => {
    const Component = () => {
      const [checked, setChecked] = useState(false);
      const toggleCheckbox = () => setChecked(!checked);

      return (
        <>
          <Input.Radio
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

export const requiredStory = {
  render: () => (
    <Display
      title="Required"
      items={[
        {
          component: <Input.Radio name="example" value="green" label="Green" required />,
          title: 'Default (without star)',
        },
        {
          component: (
            <Input.Radio
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

export const withAnErrorIfNotChecked = {
  render: () => {
    const Component = () => {
      const [checked, setChecked] = useState(false);
      const toggleCheckbox = () => setChecked(!checked);

      return (
        <Input.Radio
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

export const inAGroup = {
  render: () => (
    <FormField label="Colors" group>
      <Flexbox container gap={5}>
        <Input.Radio name="example" value="green" label="Green" />
        <Input.Radio name="example" value="blue" label="Blue" />
        <Input.Radio name="example" value="yellow" label="Yellow" />
      </Flexbox>
    </FormField>
  ),

  name: 'In a group',
};

export const inAGroupWithTooltip = {
  render: () => (
    <FormField label="Colors" labelTooltip="Checkbox tooltip" group>
      <Flexbox container gap={5}>
        <Input.Radio name="example" value="green" label="Green" />
        <Input.Radio name="example" value="blue" label="Blue" />
        <Input.Radio name="example" value="yellow" label="Yellow" />
      </Flexbox>
    </FormField>
  ),

  name: 'In a group with tooltip',
};

export const inAGroupWithTooltipPositionTop = {
  render: () => (
    <>
      <br />
      <br />
      <FormField label="Colors" labelTooltip="Checkbox tooltip" labelTooltipPosition="top" group>
        <Flexbox container gap={5}>
          <Input.Radio name="example" value="green" label="Green" />
          <Input.Radio name="example" value="blue" label="Blue" />
          <Input.Radio name="example" value="yellow" label="Yellow" />
        </Flexbox>
      </FormField>
    </>
  ),

  name: 'In a group with tooltip (position top)',
};

export const inAGroupWithError = {
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
            <Input.Radio
              name="example"
              value="green"
              label="Green"
              hasError={hasGroupError}
              onChange={() => setOneChecked(!oneChecked)}
              required
            />
            <Input.Radio
              name="example"
              value="blue"
              label="Blue"
              hasError={hasGroupError}
              onChange={() => setTwoChecked(!twoChecked)}
              required
            />
            <Input.Radio
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

export const disabledStory = {
  render: () => (
    <Display
      title="Disabled"
      items={[
        {
          component: (
            <Input.Radio name="example" value="green" label="Green" defaultChecked disabled />
          ),
          title: 'Checked',
        },
        {
          component: <Input.Radio name="example" value="blue" label="Blue" disabled />,
          title: 'Not Checked',
        },
      ]}
    />
  ),

  name: 'Disabled',
};

export const withAutoFocus = {
  render: () => <Input.Radio name="example" value="green" label="Green" autoFocus />,

  name: 'With auto focus',
};

export const withAllActions = {
  render: () => <Input.Radio name="example6" value="green" label="Green" {...handlers} />,

  name: 'With all actions',
};

export const onAColouredBackground = {
  render: () => (
    <Box p={5} backgroundColor={(t) => t.color.disabledBackground}>
      <Input.Radio name="background" value="background" label="On a colored background" />
    </Box>
  ),

  name: 'On a coloured background',
};

export const inAGroupWithCustomLabel = {
  render: () => (
    <FormField label="Colors" labelTooltip="Checkbox tooltip" group>
      <Flexbox container gap={5}>
        <Input.Radio id="Green" name="example" value="green" label="Green" noRadioCircle>
          <StyledRadioLabel htmlFor="Green" checked>
            Green
          </StyledRadioLabel>
        </Input.Radio>
        <Input.Radio id="Blue" name="example" value="blue" label="Blue" noRadioCircle>
          <StyledRadioLabel htmlFor="Blue" checked={false}>
            Blue
          </StyledRadioLabel>
        </Input.Radio>
        <Input.Radio id="Yellow" name="example" value="yellow" label="Yellow" noRadioCircle>
          <StyledRadioLabel htmlFor="Yellow" checked={false}>
            Yellow
          </StyledRadioLabel>
        </Input.Radio>
      </Flexbox>
    </FormField>
  ),

  name: 'In a group with custom label',
};

export const withHideLabel = {
  render: () => <Input.Radio name="example" value="green" hideLabel label="This label is hidden" />,

  name: 'With hide label',
};
