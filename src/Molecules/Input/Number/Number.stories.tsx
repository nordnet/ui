import React from 'react';
import { storiesOf } from '@storybook/react';
import { actions, action } from '@storybook/addon-actions';
import { Input } from '../../..';
import { Display } from '../../../common/Display';

const handlers = actions(
  'onBlur',
  'onClick',
  'onFocus',
  'onKeyDown',
  'onKeyUp',
  'onKeyPress',
  'onChange',
  'onStepUp',
  'onStepDown',
);

storiesOf('Molecules | Input / Number', module)
  .add('Default', () => (
    <Input.Number fieldId="insert-unique-id" label="Label" onChange={action('onChange')} />
  ))
  .add('With value (Controlled behaviour)', () => {
    const Component = () => {
      const [value, setValue] = React.useState(10);
      const changeHandler = (v: string) => {
        const newValueAsNumber = parseInt(v, 10);
        setValue(newValueAsNumber);
      };

      return (
        <>
          <Input.Number
            fieldId="insert-unique-id"
            label="Label"
            value={value}
            onChange={changeHandler}
          />
          <button type="button" onClick={() => setValue(value - 1)}>
            Decrease
          </button>
          <button type="button" onClick={() => setValue(value + 1)}>
            Increase
          </button>
        </>
      );
    };
    return <Component />;
  })
  .add('With default value (Uncontrolled behaviour)', () => (
    <Input.Number fieldId="insert-unique-id" label="Label" defaultValue="15.2" step="0.1" />
  ))
  .add('With a smaller step', () => (
    <Input.Number fieldId="insert-unique-id" label="Label" defaultValue="15.200" step="0.005" />
  ))
  .add('With max and min', () => (
    <Input.Number fieldId="insert-unique-id" label="Label" defaultValue="12" min="10" max="20" />
  ))
  .add('Required', () => (
    <Input.Number fieldId="insert-unique-id" label="Label" defaultValue="91" required />
  ))
  .add('Disabled', () => (
    <Input.Number
      fieldId="insert-unique-id"
      label="Label"
      defaultValue="152.25"
      step="0.25"
      disabled
    />
  ))
  .add('With auto focus', () => (
    <Input.Number
      fieldId="insert-unique-id"
      label="Label"
      defaultValue="152.25"
      step="0.25"
      autoFocus
    />
  ))
  .add('With all actions', () => (
    <Input.Number fieldId="insert-unique-id" label="Label" {...handlers} />
  ))
  .add('With error if value is less than 1', () => {
    const Component = () => {
      const defaultValue = '0';
      const [value, setValue] = React.useState(defaultValue);
      const showError = parseInt(value, 10) < 1;

      return (
        <Input.Number
          fieldId="insert-unique-id"
          label="Label"
          step="1"
          defaultValue={defaultValue}
          onChange={x => x && setValue(x)}
          {...(showError ? { error: 'Number needs to be greater than 0' } : {})}
        />
      );
    };
    return <Component />;
  })
  .add('With success', () => <Input.Number fieldId="insert-unique-id" label="Label" success />)
  .add('With extra info below', () => (
    <Input.Number fieldId="insert-unique-id" label="Label" extraInfo="Use wisely this space" />
  ))
  .add('With extra info and error', () => {
    const Component = () => {
      const defaultValue = '0';
      const [value, setValue] = React.useState(defaultValue);
      const showError = parseInt(value, 10) < 1;

      return (
        <Input.Number
          fieldId="insert-unique-id"
          label="Label"
          extraInfo="Use wisely this space"
          defaultValue={defaultValue}
          onChange={x => x && setValue(x)}
          {...(showError ? { error: 'Number needs to be greater than 0' } : {})}
        />
      );
    };
    return <Component />;
  })
  .add('With no steppers', () => (
    <Input.Number fieldId="insert-unique-id" label="Label" noSteppers />
  ))
  .add('With hidden label', () => (
    <Input.Number fieldId="insert-unique-id" label="Label" hideLabel />
  ))
  .add('With size small', () => (
    <Display
      title={`Size = "s"`}
      items={[
        {
          component: <Input.Number fieldId="insert-unique-id" label="Label" size="s" />,
          title: 'Default',
        },
        {
          component: <Input.Number fieldId="insert-unique-id" label="Label" size="s" noSteppers />,
          title: 'No steppers',
        },
        {
          component: (
            <Input.Number
              fieldId="insert-unique-id"
              label="Label"
              size="s"
              error="Some error text that will wrap itself over couple of lines"
            />
          ),
          title: 'Error',
        },
      ]}
    />
  ));
