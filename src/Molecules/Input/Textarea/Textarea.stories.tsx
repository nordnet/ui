import React from 'react';
import { storiesOf } from '@storybook/react';
import { actions } from '@storybook/addon-actions';
import { Input } from '../../..';
import { Display } from '../../../common/Display';

// A bit laggy for now, let's optimize later
const handlers = actions(
  'onBlur',
  'onClick',
  'onFocus',
  'onKeyDown',
  'onKeyUp',
  'onKeyPress',
  'onChange',
);

storiesOf('Molecules | Input / Textarea', module)
  .add('Default', () => <Input.Textarea label="Label" placeholder="Placeholder" />)
  .add('With value (Controlled behaviour)', () => (
    <Input.Textarea label="Label" placeholder="Placeholder" value="Some predefined text" />
  ))
  .add('With default value (Uncontrolled behaviour)', () => (
    <Input.Textarea label="Label" placeholder="Placeholder" defaultValue="Some predefined text" />
  ))
  .add('Error if empty text', () => {
    const Component = () => {
      const [value, setValue] = React.useState('');

      return (
        <Input.Textarea
          label="My awesome text field"
          placeholder="This is a placeholder"
          onChange={e => setValue(e.target.value)}
          {...(value === '' ? { error: 'Something went wrong' } : {})}
        />
      );
    };
    return <Component />;
  })
  .add('Success', () => <Input.Textarea label="Label" placeholder="Placeholder" success />)
  .add('Disabled', () => <Input.Textarea label="Label" placeholder="Placeholder" disabled />)
  .add('With auto focus', () => (
    <Input.Textarea label="Label" placeholder="Placeholder" autoFocus />
  ))
  .add('Required', () => (
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
  ))
  .add('Actions', () => (
    <>
      <p>
        Actions are a bit laggy because of the @storybook/addon-actions. Prod performance is not
        affected.
      </p>
      <Input.Textarea label="Label" placeholder="Placeholder" {...handlers} />
    </>
  ))
  .add('Extra info below', () => (
    <Input.Textarea label="Label" placeholder="Placeholder" extraInfo="Use wisely this space" />
  ))
  .add('Extra info with error', () => {
    const Component = () => {
      const [value, setValue] = React.useState('');

      return (
        <Input.Textarea
          label="My awesome text field"
          placeholder="This is a placeholder"
          extraInfo="Use wisely this space"
          onChange={e => setValue(e.target.value)}
          {...(value === '' ? { error: 'Enter text' } : {})}
        />
      );
    };
    return <Component />;
  })

  .add('Edge cases', () => (
    <Display
      items={[
        {
          component: (
            <Input.Textarea
              label="Too long label, goes into ellipsis. Consider smaller label or bigger input"
              placeholder="If placeholder goes too long though, it probably should be truncated into ellipsis, right?"
              extraInfo="This is much neccessary info wow"
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
  ))
  .add('Full width', () => <Input.Textarea label="Label" width="100%" placeholder="Placeholder" />)
  .add('Specific width', () => (
    <Input.Textarea label="Label" width="400px" placeholder="Placeholder" />
  ))
  .add('Hidden label', () => <Input.Textarea label="Label" placeholder="Placeholder" hideLabel />);
