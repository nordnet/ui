import React from 'react';
import { actions } from '@storybook/addon-actions';
import { Input, Flexbox, FormField, Typography } from '../../..';
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
  title: 'Molecules | Input / Checkbox',
  parameters: {
    component: Input.Checkbox,
  },
};

export const defaultStory = () => <Input.Checkbox name="example" value="green" label="Green" />;

defaultStory.story = {
  name: 'Default',
};

export const defaultStoryWithTooltip = () => (
  <Input.Checkbox name="example" value="green" label="Green" labelTooltip="Checkbox tooltip" />
);

defaultStoryWithTooltip.story = {
  name: 'Default with tooltip',
};

export const defaultStoryWithTooltipPositionTop = () => (
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

export const defaultStoryWithTooltipParagraph = () => (
  <Input.Checkbox
    name="example"
    value="green"
    label="Quisque varius massa ut augue convallis, ac vehicula orci aliquet. Mauris consequat pretium tempus. Morbi sagittis facilisis pellentesque. Maecenas sodales neque nec sapien suscipit tempus. Quisque elementum auctor urna, nec laoreet nibh vehicula et."
    labelTooltip="Checkbox tooltip"
  />
);

defaultStoryWithTooltipParagraph.story = {
  name: 'Default with tooltip with a long paragraph',
};

export const defaultStoryWithTooltipPositionTopParagraph = () => (
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
);

defaultStoryWithTooltipPositionTopParagraph.story = {
  name: 'Default with tooltip (position top) with a long paragraph',
};

export const withDefaultChecked = () => (
  <Input.Checkbox name="example" value="green" label="Green" defaultChecked />
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
};

withCheckedControlledBehaviour.story = {
  name: 'With checked (Controlled behaviour)',
};

export const requiredStory = () => (
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
);

requiredStory.story = {
  name: 'Required',
};

export const withAnErrorIfNotChecked = () => {
  const Component = () => {
    const [checked, setChecked] = React.useState(false);
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
};

withAnErrorIfNotChecked.story = {
  name: 'With an error if not checked',
};

export const inAGroup = () => (
  <FormField label="Colors" group>
    <Flexbox container gutter={5}>
      <Input.Checkbox name="example" value="green" label="Green" />
      <Input.Checkbox name="example" value="blue" label="Blue" />
      <Input.Checkbox name="example" value="yellow" label="Yellow" />
    </Flexbox>
  </FormField>
);

inAGroup.story = {
  name: 'In a group',
};

export const inAGroupWithTooltip = () => (
  <FormField label="Colors" labelTooltip="Checkboxgroup tooltip" group>
    <Flexbox container gutter={5}>
      <Input.Checkbox name="example" value="green" label="Green" />
      <Input.Checkbox name="example" value="blue" label="Blue" />
      <Input.Checkbox name="example" value="yellow" label="Yellow" />
    </Flexbox>
  </FormField>
);

inAGroupWithTooltip.story = {
  name: 'In a group with a label tooltip',
};

export const inAGroupWithTooltipPositionTop = () => (
  <>
    <br />
    <br />
    <FormField label="Colors" labelTooltip="Checkboxgroup tooltip" labelTooltipPosition="top" group>
      <Flexbox container gutter={5}>
        <Input.Checkbox name="example" value="green" label="Green" />
        <Input.Checkbox name="example" value="blue" label="Blue" />
        <Input.Checkbox name="example" value="yellow" label="Yellow" />
      </Flexbox>
    </FormField>
  </>
);

inAGroupWithTooltipPositionTop.story = {
  name: 'In a group with a label tooltip (position top)',
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
          <Input.Checkbox name="example" value="green" label="Green" defaultChecked disabled />
        ),
        title: 'Checked',
      },
      {
        component: <Input.Checkbox name="example" value="blue" label="Blue" disabled />,
        title: 'Not Checked',
      },
    ]}
  />
);

disabledStory.story = {
  name: 'Disabled',
};

export const withAutoFocus = () => (
  <Input.Checkbox name="example" value="green" label="Green" autoFocus />
);

withAutoFocus.story = {
  name: 'With auto focus',
};

export const withAllActions = () => (
  <Input.Checkbox name="example6" value="green" label="Green" {...handlers} />
);

withAllActions.story = {
  name: 'With all actions',
};

export const elementLabelStory = () => {
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
};

elementLabelStory.story = {
  name: 'Element as label',
};

export const withDifferentSizes = () => {
  return (
    <Flexbox container direction="column" gutter={1}>
      <Input.Checkbox name="small" value="1" size="s" label="small" />
      <Input.Checkbox name="medium" value="2" label="medium" />
      <Input.Checkbox name="default" value="3" label="default" />
    </Flexbox>
  );
};

withDifferentSizes.story = {
  name: 'Checkboxes with different size',
};
