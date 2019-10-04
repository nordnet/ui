import React from 'react';
import { storiesOf } from '@storybook/react';
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

storiesOf('Molecules | Input / Checkbox', module)
  .add('Default', () => <Input.Checkbox name="example" value="green" label="Green" />)
  .add('With default checked', () => (
    <Input.Checkbox name="example" value="green" label="Green" defaultChecked />
  ))
  .add('With checked (Controlled behaviour)', () => {
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
  })
  .add('Required', () => (
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
  ))
  .add('With an error if not checked', () => {
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
  })
  .add('In a group', () => (
    <FormField label="Colors" group>
      <Flexbox container gutter={5}>
        <Input.Checkbox name="example" value="green" label="Green" />
        <Input.Checkbox name="example" value="blue" label="Blue" />
        <Input.Checkbox name="example" value="yellow" label="Yellow" />
      </Flexbox>
    </FormField>
  ))
  .add('In a group with error', () => {
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
  })
  .add('Disabled', () => (
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
  ))
  .add('With auto focus', () => (
    <Input.Checkbox name="example" value="green" label="Green" autoFocus />
  ))
  .add('With all actions', () => (
    <Input.Checkbox name="example6" value="green" label="Green" {...handlers} />
  ));
