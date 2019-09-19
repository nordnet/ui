import React from 'react';
import { storiesOf } from '@storybook/react';
import { actions, action } from '@storybook/addon-actions';
import { Input, FormField } from '../../..';
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
    <FormField forId="insert-matching-unique-id" label="Label">
      <Input.Number id="insert-matching-unique-id" onChange={action('onChange')} />
    </FormField>
  ))
  .add('With value (Controlled behaviour)', () => {
    const Component = () => {
      const [value, setValue] = React.useState(10);
      const changeHandler = (v: string) => {
        const newValueAsNumber = parseInt(v, 10);
        setValue(newValueAsNumber);
      };

      return (
        <FormField forId="insert-matching-unique-id" label="Label">
          <Input.Number id="insert-matching-unique-id" value={value} onChange={changeHandler} />
          <button type="button" onClick={() => setValue(value - 1)}>
            Decrease
          </button>
          <button type="button" onClick={() => setValue(value + 1)}>
            Increase
          </button>
        </FormField>
      );
    };
    return <Component />;
  })
  .add('With default value (Uncontrolled behaviour)', () => (
    <FormField forId="insert-matching-unique-id" label="Label">
      <Input.Number id="insert-matching-unique-id" defaultValue="15.2" step="0.1" />
    </FormField>
  ))
  .add('With a smaller step', () => (
    <FormField forId="insert-matching-unique-id" label="Label">
      <Input.Number id="insert-matching-unique-id" defaultValue="15.200" step="0.005" />
    </FormField>
  ))
  .add('With max and min', () => (
    <FormField forId="insert-matching-unique-id" label="Label">
      <Input.Number id="insert-matching-unique-id" defaultValue="12" min="10" max="20" />
    </FormField>
  ))
  .add('Required', () => (
    <FormField forId="insert-matching-unique-id" label="Label" required>
      <Input.Number id="insert-matching-unique-id" defaultValue="91" required />
    </FormField>
  ))
  .add('Disabled', () => (
    <FormField forId="insert-matching-unique-id" label="Label">
      <Input.Number id="insert-matching-unique-id" defaultValue="152.25" step="0.25" disabled />
    </FormField>
  ))
  .add('With auto focus', () => (
    <FormField forId="insert-matching-unique-id" label="Label">
      <Input.Number id="insert-matching-unique-id" defaultValue="152.25" step="0.25" autoFocus />
    </FormField>
  ))
  .add('With all actions', () => (
    <FormField forId="insert-matching-unique-id" label="Label">
      <Input.Number id="insert-matching-unique-id" {...handlers} />
    </FormField>
  ))
  .add('With error if value is less than 1', () => {
    const Component = () => {
      const defaultValue = '0';
      const [value, setValue] = React.useState(defaultValue);
      const showError = parseInt(value, 10) < 1;

      return (
        <FormField
          forId="insert-matching-unique-id"
          label="Label"
          {...(showError ? { error: 'Number needs to be greater than 0' } : {})}
        >
          <Input.Number
            id="insert-matching-unique-id"
            step="1"
            defaultValue={defaultValue}
            onChange={x => x && setValue(x)}
            hasError={showError}
          />
        </FormField>
      );
    };
    return <Component />;
  })
  .add('With success', () => (
    <FormField forId="insert-matching-unique-id" label="Label">
      <Input.Number id="insert-matching-unique-id" success />
    </FormField>
  ))
  .add('With extra info below', () => (
    <FormField forId="insert-matching-unique-id" label="Label" extraInfo="Use wisely this space">
      <Input.Number id="insert-matching-unique-id" />
    </FormField>
  ))
  .add('With extra info and error', () => {
    const Component = () => {
      const defaultValue = '0';
      const [value, setValue] = React.useState(defaultValue);
      const showError = parseInt(value, 10) < 1;

      return (
        <FormField
          forId="insert-matching-unique-id"
          label="Label"
          extraInfo="Use wisely this space"
          {...(showError ? { error: 'Number needs to be greater than 0' } : {})}
        >
          <Input.Number
            id="insert-matching-unique-id"
            defaultValue={defaultValue}
            onChange={x => x && setValue(x)}
            hasError={showError}
          />
        </FormField>
      );
    };
    return <Component />;
  })
  .add('With no steppers', () => (
    <FormField forId="insert-matching-unique-id" label="Label">
      <Input.Number id="insert-matching-unique-id" noSteppers />
    </FormField>
  ))
  .add('With hidden label', () => (
    <FormField forId="insert-matching-unique-id" label="Label" hideLabel>
      <Input.Number id="insert-matching-unique-id" />
    </FormField>
  ))
  .add('With size small', () => (
    <Display
      title={`Size = "s"`}
      items={[
        {
          component: (
            <FormField forId="insert-matching-unique-id" label="Label">
              <Input.Number id="insert-matching-unique-id" size="s" />
            </FormField>
          ),
          title: 'Default',
        },
        {
          component: (
            <FormField forId="insert-matching-unique-id" label="Label">
              <Input.Number id="insert-matching-unique-id" size="s" noSteppers />
            </FormField>
          ),
          title: 'No steppers',
        },
        {
          component: (
            <FormField
              forId="insert-matching-unique-id"
              label="Label"
              error="Some error text that will wrap itself over couple of lines"
            >
              <Input.Number id="insert-matching-unique-id" size="s" hasError />
            </FormField>
          ),
          title: 'Error',
        },
      ]}
    />
  ))
  .add('Deprecated usage', () => {
    const Component = () => {
      const defaultValue = '0';
      const [value, setValue] = React.useState(defaultValue);
      const showError = parseInt(value, 10) < 1;

      return (
        <Input.Number
          fieldId="insert-unique-id"
          label="Label"
          hideLabel
          defaultValue={defaultValue}
          fullWidth
          width="300px;"
          onChange={x => x && setValue(x)}
          extraInfo="Use wisely this space"
          {...(showError ? { error: 'Number needs to be greater than 0' } : {})}
        />
      );
    };
    return <Component />;
  });
