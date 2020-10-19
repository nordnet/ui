import React from 'react';
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

export default {
  title: 'Molecules / Input / Textarea',
  parameters: {
    component: Input.Textarea,
  },
};

export const defaultStory = () => <Input.Textarea label="Label" placeholder="Placeholder" />;

defaultStory.story = {
  name: 'Default',
};

export const withValueControlledBehaviour = () => (
  <Input.Textarea label="Label" placeholder="Placeholder" value="Some predefined text" />
);

withValueControlledBehaviour.story = {
  name: 'With value (Controlled behaviour)',
};

export const withDefaultValueUncontrolledBehaviour = () => (
  <Input.Textarea label="Label" placeholder="Placeholder" defaultValue="Some predefined text" />
);

withDefaultValueUncontrolledBehaviour.story = {
  name: 'With default value (Uncontrolled behaviour)',
};

export const errorIfEmptyText = () => {
  const Component = () => {
    const [value, setValue] = React.useState('');

    return (
      <Input.Textarea
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

export const successStory = () => (
  <Input.Textarea label="Label" placeholder="Placeholder" success />
);

successStory.story = {
  name: 'Success',
};

export const disabledStory = () => (
  <Input.Textarea label="Label" placeholder="Placeholder" disabled />
);

disabledStory.story = {
  name: 'Disabled',
};

export const withAutoFocus = () => (
  <Input.Textarea label="Label" placeholder="Placeholder" autoFocus />
);

withAutoFocus.story = {
  name: 'With auto focus',
};

export const requiredStory = () => (
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
    <Input.Textarea label="Label" placeholder="Placeholder" {...handlers} />
  </>
);

actionsStory.story = {
  name: 'Actions',
};

export const extraInfoBelow = () => (
  <Input.Textarea label="Label" placeholder="Placeholder" extraInfo="Use wisely this space" />
);

extraInfoBelow.story = {
  name: 'Extra info below',
};

export const extraInfoWithError = () => {
  const Component = () => {
    const [value, setValue] = React.useState('');

    return (
      <Input.Textarea
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
);

edgeCases.story = {
  name: 'Edge cases',
};

export const fullWidth = () => (
  <Input.Textarea label="Label" width="100%" placeholder="Placeholder" />
);

fullWidth.story = {
  name: 'Full width',
};

export const specificWidth = () => (
  <Input.Textarea label="Label" width="400px" placeholder="Placeholder" />
);

specificWidth.story = {
  name: 'Specific width',
};

export const hiddenLabel = () => (
  <Input.Textarea label="Label" placeholder="Placeholder" hideLabel />
);

hiddenLabel.story = {
  name: 'Hidden label',
};

export const withLabelTooltip = () => (
  <Input.Textarea label="Label" labelTooltip="Tooltip content" placeholder="Placeholder" />
);

withLabelTooltip.story = {
  name: 'With tooltip as label addon',
};

export const withLabelTooltipPositionTop = () => (
  <>
    <br />
    <br />
    <Input.Textarea
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
