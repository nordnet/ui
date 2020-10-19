import React from 'react';
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

export default {
  title: 'Molecules / Input / Text',
  parameters: {
    component: Input.Text,
  },
};

export const defaultStory = () => <Input.Text label="Label" placeholder="Placeholder" />;

defaultStory.story = {
  name: 'Default',
};

export const withValueControlledBehaviour = () => (
  <Input.Text label="Label" placeholder="Placeholder" value="Some predefined text" />
);

withValueControlledBehaviour.story = {
  name: 'With value (Controlled behaviour)',
};

export const withDefaultValueUncontrolledBehaviour = () => (
  <Input.Text label="Label" placeholder="Placeholder" defaultValue="Some predefined text" />
);

withDefaultValueUncontrolledBehaviour.story = {
  name: 'With default value (Uncontrolled behaviour)',
};

export const errorIfEmptyText = () => {
  const Component = () => {
    const [value, setValue] = React.useState('');

    return (
      <Input.Text
        label="My awesome text field"
        placeholder="This is a placeholder"
        onChange={(e) => setValue(e.target.value)}
        {...(value === '' ? { error: 'Something went wrong' } : {})}
      />
    );
  };
  return <Component />;
};

errorIfEmptyText.story = {
  name: 'Error if empty text',
};

export const successStory = () => <Input.Text label="Label" placeholder="Placeholder" success />;

successStory.story = {
  name: 'Success',
};

export const disabledStory = () => <Input.Text label="Label" placeholder="Placeholder" disabled />;

disabledStory.story = {
  name: 'Disabled',
};

export const disabledAddon = () => (
  <Input.Text
    label="Label"
    placeholder="Placeholder"
    disabled
    leftAddon={<Icon.Bolt size={4} />}
    rightAddon="SEK"
  />
);

disabledAddon.story = {
  name: 'Disabled +addon',
};

export const withAutoFocus = () => <Input.Text label="Label" placeholder="Placeholder" autoFocus />;

withAutoFocus.story = {
  name: 'With auto focus',
};

export const withAutoComplete = () => (
  <>
    <Input.Text label="Ordinary Text" placeholder="Placeholder" autoComplete="on" />
    <Input.Text label="E-mail" placeholder="Placeholder" autoComplete="email" type="email" />
    <Input.Text label="Phone number" placeholder="Placeholder" autoComplete="tel" type="tel" />
  </>
);

withAutoComplete.story = {
  name: 'With auto complete',
};

export const requiredStory = () => (
  <Display
    title="Required"
    items={[
      {
        component: <Input.Text label="Label" placeholder="Placeholder" required />,
        title: 'Default (without star)',
      },
      {
        component: (
          <Input.Text label="Label" placeholder="Placeholder" required visuallyEmphasiseRequired />
        ),
        title: 'With star',
      },
    ]}
  />
);

requiredStory.story = {
  name: 'Required',
};

export const actionsStory = () => (
  <>
    <p>
      Actions are a bit laggy because of the @storybook/addon-actions. Prod performance is not
      affected.
    </p>
    <Input.Text label="Label" placeholder="Placeholder" {...handlers} />
  </>
);

actionsStory.story = {
  name: 'Actions',
};

export const extraInfoBelow = () => (
  <Input.Text label="Label" placeholder="Placeholder" extraInfo="Use wisely this space" />
);

extraInfoBelow.story = {
  name: 'Extra info below',
};

export const extraInfoWithError = () => {
  const Component = () => {
    const [value, setValue] = React.useState('');

    return (
      <Input.Text
        label="My awesome text field"
        placeholder="This is a placeholder"
        extraInfo="Use wisely this space"
        onChange={(e) => setValue(e.target.value)}
        {...(value === '' ? { error: 'Enter text' } : {})}
      />
    );
  };
  return <Component />;
};

extraInfoWithError.story = {
  name: 'Extra info with error',
};

export const edgeCases = () => (
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
);

edgeCases.story = {
  name: 'Edge cases',
};

export const fullWidthStory = () => (
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
);

fullWidthStory.story = {
  name: 'Full width',
};

export const leftAddonStory = () => (
  <Input.Text label="Label" placeholder="Placeholder" leftAddon={<Icon.Bolt size={4} />} />
);

leftAddonStory.story = {
  name: 'Left addon',
};

export const rightAddonStory = () => (
  <Input.Text label="Label" placeholder="Placeholder" rightAddon="SEK" />
);

rightAddonStory.story = {
  name: 'Right addon',
};

export const bothAddons = () => (
  <Input.Text
    label="Label"
    placeholder="Placeholder"
    leftAddon={<Icon.Bolt size={4} />}
    rightAddon="SEK"
  />
);

bothAddons.story = {
  name: 'Both addons',
};

export const hiddenLabel = () => <Input.Text label="Label" placeholder="Placeholder" hideLabel />;

hiddenLabel.story = {
  name: 'Hidden label',
};

export const simpleLoginForm = () => (
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
);

simpleLoginForm.story = {
  name: 'Simple login form',
};

export const small = () => (
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
        component: <Input.Text label="Label" size="s" placeholder="Placeholder" rightAddon="SEK" />,
        title: 'Right addon',
      },
    ]}
  />
);

export const quiet = () => (
  <Display
    title={`Variant = "quiet"`}
    items={[
      {
        component: <Input.Text variant="quiet" label="Label" placeholder="Placeholder" />,
        title: 'Default',
      },
      {
        component: (
          <Input.Text variant="quiet" label="Label" width="100%" placeholder="Placeholder" />
        ),
        title: 'Full width',
      },
      {
        component: <Input.Text variant="quiet" label="Label" width="100%" disabled value="0" />,
        title: 'Disabled',
      },
      {
        component: (
          <Input.Text
            variant="quiet"
            label="Label"
            placeholder="Placeholder"
            error="Some error text that will wrap itself over couple of lines"
          />
        ),
        title: 'Error',
      },
      {
        component: <Input.Text variant="quiet" label="Label" placeholder="Placeholder" success />,
        title: 'Success',
      },
      {
        component: (
          <Input.Text
            variant="quiet"
            label="Label"
            placeholder="Placeholder"
            leftAddon={<Icon.Bolt size={4} />}
          />
        ),
        title: 'Left addon',
      },
      {
        component: (
          <Input.Text variant="quiet" label="Label" placeholder="Placeholder" rightAddon="%" />
        ),
        title: 'Right addon',
      },
    ]}
  />
);

export const withLabelTooltip = () => (
  <Input.Text label="Label" labelTooltip="Tooltip content" placeholder="Placeholder" />
);

withLabelTooltip.story = {
  name: 'With tooltip as label addon',
};

export const withLabelTooltipPositionTop = () => (
  <>
    <br />
    <br />
    <Input.Text
      label="Label"
      labelTooltip="Tooltip content"
      labelTooltipPosition="top"
      placeholder="Placeholder"
    />
  </>
);

withLabelTooltipPositionTop.story = {
  name: 'With tooltip (position top) as label addon',
};

export const withMaxLength = () => (
  <Input.Text maxLength={3} label="has max length" placeholder="Placeholder" />
);

withMaxLength.story = {
  name: 'With maxLength',
};

export const alternatingTypes = () => (
  <form
    onSubmit={(e) => {
      e.preventDefault();
    }}
  >
    <div>
      <Input.Text label="email" type="email" />
    </div>
    <div>
      <Input.Text label="password" type="password" />
    </div>
    <div>
      <Input.Text label="search" type="search" />
    </div>
    <div>
      <Input.Text label="search" type="submit" />
    </div>
  </form>
);
