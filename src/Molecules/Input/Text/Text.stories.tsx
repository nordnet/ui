import React from 'react';
import { storiesOf } from '@storybook/react';
import { actions } from '@storybook/addon-actions';
import { Input, Icon, Flexbox, Button } from '../../..';
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

storiesOf('Molecules | Input / Text', module)
  .add('Default', () => <Input.Text label="Label" placeholder="Placeholder" />)
  .add('With value (Controlled behaviour)', () => (
    <Input.Text label="Label" placeholder="Placeholder" value="Some predefined text" />
  ))
  .add('With default value (Uncontrolled behaviour)', () => (
    <Input.Text label="Label" placeholder="Placeholder" defaultValue="Some predefined text" />
  ))
  .add('Error if empty text', () => {
    const Component = () => {
      const [value, setValue] = React.useState('');

      return (
        <Input.Text
          label="My awesome text field"
          placeholder="This is a placeholder"
          onChange={e => setValue(e.target.value)}
          {...(value === '' ? { error: 'Something went wrong' } : {})}
        />
      );
    };
    return <Component />;
  })
  .add('Success', () => <Input.Text label="Label" placeholder="Placeholder" success />)
  .add('Disabled', () => <Input.Text label="Label" placeholder="Placeholder" disabled />)
  .add('Disabled +addon', () => (
    <Input.Text
      label="Label"
      placeholder="Placeholder"
      disabled
      leftAddon={<Icon.Bolt size={4} />}
      rightAddon="SEK"
    />
  ))
  .add('With auto focus', () => <Input.Text label="Label" placeholder="Placeholder" autoFocus />)
  .add('Required', () => <Input.Text label="Label" placeholder="Placeholder" required />)
  .add('Required with star', () => (
    <Input.Text label="Label" placeholder="Placeholder" required visuallyEmphasiseRequired />
  ))
  .add('Actions', () => (
    <>
      <p>
        Actions are a bit laggy because of the @storybook/addon-actions. Prod performance is not
        affected.
      </p>
      <Input.Text label="Label" placeholder="Placeholder" {...handlers} />
    </>
  ))
  .add('Extra info below', () => (
    <Input.Text label="Label" placeholder="Placeholder" extraInfo="Use wisely this space" />
  ))
  .add('Extra info with error', () => {
    const Component = () => {
      const [value, setValue] = React.useState('');

      return (
        <Input.Text
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
            <Input.Text
              label="Too long label, goes into ellipsis. Consider smaller label or bigger input"
              placeholder="If placeholder goes too long though, it probably should be truncated into ellipsis, right?"
              extraInfo="This is much neccessary info wow"
            />
          ),
          title: 'Long values',
        },
        {
          component: (
            <Input.Text
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
  .add('Full width', () => (
    <Display
      title="Full width inputs"
      items={[
        {
          component: <Input.Text label="Label" width="100%" placeholder="Placeholder" />,
          title: 'Default',
        },
        {
          component: (
            <Input.Text
              label="Label"
              width="100%"
              placeholder="Placeholder"
              leftAddon={<Icon.Bolt size={4} />}
            />
          ),
          title: 'Left addon',
        },
        {
          component: (
            <Input.Text label="Label" width="100%" placeholder="Placeholder" rightAddon="SEK" />
          ),
          title: 'Right addon',
        },
      ]}
    />
  ))
  .add('Left addon', () => (
    <Input.Text label="Label" placeholder="Placeholder" leftAddon={<Icon.Bolt size={4} />} />
  ))
  .add('Right addon', () => <Input.Text label="Label" placeholder="Placeholder" rightAddon="SEK" />)
  .add('Both addons', () => (
    <Input.Text
      label="Label"
      placeholder="Placeholder"
      leftAddon={<Icon.Bolt size={4} />}
      rightAddon="SEK"
    />
  ))
  .add('Hidden label', () => <Input.Text label="Label" placeholder="Placeholder" hideLabel />)

  .add('Simple login form', () => (
    <Flexbox container direction="column" gutter={4}>
      <Flexbox item container gutter={4}>
        <Flexbox item basis="50%">
          <Input.Text
            width="100%"
            label="Username"
            placeholder="Username"
            extraInfo="Please provide your username (worst UX right here)"
          />
        </Flexbox>
        <Flexbox item basis="50%">
          <Input.Text width="100%" label="Password" placeholder="Password" error="Simple error" />
        </Flexbox>
      </Flexbox>
      <Flexbox item container justifyContent="flex-end" grow={1}>
        <Button fullWidth>Login</Button>
      </Flexbox>
    </Flexbox>
  ))

  .add('Small', () => (
    <Display
      title={`Size = "s"`}
      items={[
        {
          component: <Input.Text label="Label" size="s" placeholder="Placeholder" />,
          title: 'Default',
        },
        {
          component: <Input.Text label="Label" size="s" width="100%" placeholder="Placeholder" />,
          title: 'Full width',
        },
        {
          component: (
            <Input.Text
              label="Label"
              size="s"
              placeholder="Placeholder"
              error="Some error text that will wrap itself over couple of lines"
            />
          ),
          title: 'Error',
        },
        {
          component: (
            <Input.Text
              label="Label"
              size="s"
              placeholder="Placeholder"
              leftAddon={<Icon.Bolt size={4} />}
            />
          ),
          title: 'Left addon',
        },
        {
          component: (
            <Input.Text label="Label" size="s" placeholder="Placeholder" rightAddon="SEK" />
          ),
          title: 'Right addon',
        },
      ]}
    />
  ));
