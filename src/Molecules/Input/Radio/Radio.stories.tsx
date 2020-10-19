import React from 'react';
import { actions } from '@storybook/addon-actions';
import { Input, Flexbox, FormField } from '../../..';
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

export default {
  title: 'Molecules / Input / Radio',
  parameters: {
    component: Input.Radio,
  },
};

export const defaultStory = () => <Input.Radio name="example" value="green" label="Green" />;

defaultStory.story = {
  name: 'Default',
};

export const withDefaultChecked = () => (
  <Input.Radio name="example" value="green" label="Green" defaultChecked />
);

withDefaultChecked.story = {
  name: 'With default checked',
};

export const withCheckedControlledBehaviour = () => {
  const Component = () => {
    const [checked, setChecked] = React.useState(false);
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
};

withCheckedControlledBehaviour.story = {
  name: 'With checked (Controlled behaviour)',
};

export const requiredStory = () => (
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
);

requiredStory.story = {
  name: 'Required',
};

export const withAnErrorIfNotChecked = () => {
  const Component = () => {
    const [checked, setChecked] = React.useState(false);
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
};

withAnErrorIfNotChecked.story = {
  name: 'With an error if not checked',
};

export const inAGroup = () => (
  <FormField label="Colors" group>
    <Flexbox container gutter={5}>
      <Input.Radio name="example" value="green" label="Green" />
      <Input.Radio name="example" value="blue" label="Blue" />
      <Input.Radio name="example" value="yellow" label="Yellow" />
    </Flexbox>
  </FormField>
);

inAGroup.story = {
  name: 'In a group',
};

export const inAGroupWithTooltip = () => (
  <FormField label="Colors" labelTooltip="Checkbox tooltip" group>
    <Flexbox container gutter={5}>
      <Input.Radio name="example" value="green" label="Green" />
      <Input.Radio name="example" value="blue" label="Blue" />
      <Input.Radio name="example" value="yellow" label="Yellow" />
    </Flexbox>
  </FormField>
);

inAGroupWithTooltip.story = {
  name: 'In a group with tooltip',
};

export const inAGroupWithTooltipPositionTop = () => (
  <>
    <br />
    <br />
    <FormField label="Colors" labelTooltip="Checkbox tooltip" labelTooltipPosition="top" group>
      <Flexbox container gutter={5}>
        <Input.Radio name="example" value="green" label="Green" />
        <Input.Radio name="example" value="blue" label="Blue" />
        <Input.Radio name="example" value="yellow" label="Yellow" />
      </Flexbox>
    </FormField>
  </>
);

inAGroupWithTooltipPositionTop.story = {
  name: 'In a group with tooltip (position top)',
};

export const inAGroupWithError = () => {
  const Component = () => {
    const [oneChecked, setOneChecked] = React.useState(false);
    const [twoChecked, setTwoChecked] = React.useState(false);
    const [threeChecked, setThreeChecked] = React.useState(false);
    const hasGroupError = !oneChecked && !twoChecked && !threeChecked;

    return (
      <FormField
        label="Colors"
        group
        {...(hasGroupError ? { error: 'This field is required' } : {})}
      >
        <Flexbox container gutter={5}>
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
};

inAGroupWithError.story = {
  name: 'In a group with error',
};

export const disabledStory = () => (
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
);

disabledStory.story = {
  name: 'Disabled',
};

export const withAutoFocus = () => (
  <Input.Radio name="example" value="green" label="Green" autoFocus />
);

withAutoFocus.story = {
  name: 'With auto focus',
};

export const withAllActions = () => (
  <Input.Radio name="example6" value="green" label="Green" {...handlers} />
);

withAllActions.story = {
  name: 'With all actions',
};
