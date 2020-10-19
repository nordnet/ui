import React from 'react';
import { action, actions } from '@storybook/addon-actions';
import { Icon, Input } from '../../..';
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

export default {
  title: 'Molecules / Input / Number',
  parameters: {
    component: Input.Number,
  },
};

export const defaultStory = () => (
  <Input.Number id="insert-unique-id" label="Label" onChange={action('onChange')} />
);

defaultStory.story = {
  name: 'Default',
};

export const withValueControlledBehaviour = () => {
  const Component = () => {
    const [value, setValue] = React.useState(10);
    const changeHandler = (v: string) => {
      const newValueAsNumber = parseInt(v, 10);
      setValue(newValueAsNumber);
    };

    return (
      <>
        <Input.Number id="insert-unique-id" label="Label" value={value} onChange={changeHandler} />
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
};

withValueControlledBehaviour.story = {
  name: 'With value (Controlled behaviour)',
};

export const withDefaultValueUncontrolledBehaviour = () => (
  <Input.Number id="insert-unique-id" label="Label" defaultValue="15.2" step="0.1" />
);

withDefaultValueUncontrolledBehaviour.story = {
  name: 'With default value (Uncontrolled behaviour)',
};

export const withASmallerStep = () => (
  <Input.Number id="insert-unique-id" label="Label" defaultValue="15.200" step="0.005" />
);

withASmallerStep.story = {
  name: 'With a smaller step',
};

export const withMaxAndMin = () => (
  <Input.Number id="insert-unique-id" label="Label" defaultValue="12" min="10" max="20" />
);

withMaxAndMin.story = {
  name: 'With max and min',
};

export const requiredStory = () => (
  <Display
    title="Required"
    items={[
      {
        component: <Input.Number id="insert-unique-id" label="Label" defaultValue="91" required />,
        title: 'Default (without star)',
      },
      {
        component: (
          <Input.Number
            id="insert-unique-id"
            label="Label"
            defaultValue="91"
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

export const disabledStory = () => (
  <Input.Number id="insert-unique-id" label="Label" defaultValue="152.25" step="0.25" disabled />
);

disabledStory.story = {
  name: 'Disabled',
};

export const withAutoFocus = () => (
  <Input.Number id="insert-unique-id" label="Label" defaultValue="152.25" step="0.25" autoFocus />
);

withAutoFocus.story = {
  name: 'With auto focus',
};

export const withAllActions = () => (
  <Input.Number id="insert-unique-id" label="Label" {...handlers} />
);

withAllActions.story = {
  name: 'With all actions',
};

export const withErrorIfValueIsLessThan1 = () => {
  const Component = () => {
    const defaultValue = '0';
    const [value, setValue] = React.useState(defaultValue);
    const showError = parseInt(value, 10) < 1;

    return (
      <Input.Number
        id="insert-unique-id"
        label="Label"
        step="1"
        defaultValue={defaultValue}
        onChange={(x) => x && setValue(x)}
        {...(showError ? { error: 'Number needs to be greater than 0' } : {})}
      />
    );
  };
  return <Component />;
};

withErrorIfValueIsLessThan1.story = {
  name: 'With error if value is less than 1',
};

export const withSuccess = () => <Input.Number id="insert-unique-id" label="Label" success />;

withSuccess.story = {
  name: 'With success',
};

export const withExtraInfoBelow = () => (
  <Input.Number id="insert-unique-id" label="Label" extraInfo="Use wisely this space" />
);

withExtraInfoBelow.story = {
  name: 'With extra info below',
};

export const withExtraInfoAndError = () => {
  const Component = () => {
    const defaultValue = '0';
    const [value, setValue] = React.useState(defaultValue);
    const showError = parseInt(value, 10) < 1;

    return (
      <Input.Number
        id="insert-unique-id"
        label="Label"
        defaultValue={defaultValue}
        onChange={(x) => x && setValue(x)}
        extraInfo="Use wisely this space"
        {...(showError ? { error: 'Number needs to be greater than 0' } : {})}
      />
    );
  };
  return <Component />;
};

withExtraInfoAndError.story = {
  name: 'With extra info and error',
};

export const withNoSteppers = () => <Input.Number id="insert-unique-id" label="Label" noSteppers />;

withNoSteppers.story = {
  name: 'With no steppers',
};

export const withLeftAddon = () => (
  <Input.Number id="insert-unique-id" label="Label" leftAddon={<Icon.Bolt size={4} />} />
);

withLeftAddon.story = {
  name: 'With left addon',
};

export const withRightAddon = () => (
  <Input.Number id="insert-unique-id" label="Label" rightAddon="SEK" />
);

withRightAddon.story = {
  name: 'With right addon',
};

export const withBothAddons = () => (
  <Input.Number
    id="insert-unique-id"
    label="Label"
    leftAddon={<Icon.Bolt size={4} />}
    rightAddon="SEK"
  />
);

withBothAddons.story = {
  name: 'With both addons',
};

export const withHiddenLabel = () => <Input.Number id="insert-unique-id" label="Label" hideLabel />;

withHiddenLabel.story = {
  name: 'With hidden label',
};

export const withSizeSmall = () => (
  <Display
    title={`Size = "s"`}
    items={[
      {
        component: <Input.Number id="insert-unique-id" label="Label" size="s" />,
        title: 'Default',
      },
      {
        component: <Input.Number id="insert-unique-id" label="Label" size="s" noSteppers />,
        title: 'No steppers',
      },
      {
        component: (
          <Input.Number
            id="insert-unique-id"
            label="Label"
            size="s"
            error="Some error text that will wrap itself over couple of lines"
          />
        ),
        title: 'Error',
      },
    ]}
  />
);

withSizeSmall.story = {
  name: 'With size small',
};

export const withLabelTooltip = () => (
  <Input.Number
    id="insert-unique-id"
    label="Label"
    labelTooltip="Tooltip content"
    onChange={action('onChange')}
  />
);

withLabelTooltip.story = {
  name: 'With label tooltip',
};

export const withLabelTooltipPositionTop = () => (
  <>
    <br />
    <br />
    <Input.Number
      id="insert-unique-id"
      label="Label"
      labelTooltip="Tooltip content"
      labelTooltipPosition="top"
      onChange={action('onChange')}
    />
  </>
);

withLabelTooltipPositionTop.story = {
  name: 'With label tooltip (position top)',
};

export const withPlaceholder = () => (
  <Display
    title="Placeholders"
    items={[
      {
        title: 'Default',
        component: (
          <Input.Number
            id="insert-unique-id"
            label="Label"
            placeholder="A placeholder"
            defaultValue=""
            noSteppers
          />
        ),
      },
      {
        title: 'With right addon',
        component: (
          <Input.Number
            id="insert-unique-id"
            label="Label"
            placeholder="A placeholder"
            defaultValue=""
            rightAddon="EUR"
          />
        ),
      },
      {
        title: 'With left addon',
        component: (
          <Input.Number
            id="insert-unique-id"
            label="Label"
            placeholder="A placeholder"
            defaultValue=""
            leftAddon={<Icon.Bolt size={4} />}
          />
        ),
      },
      {
        title: 'With steppers (placeholder removed)',
        component: (
          <Input.Number
            id="insert-unique-id"
            label="Label"
            placeholder="A placeholder"
            defaultValue=""
          />
        ),
      },
    ]}
  />
);

withPlaceholder.story = {
  name: 'With placeholder',
};

export const quietNumber = () => (
  <Display
    title={`Variant = "quiet"`}
    items={[
      {
        component: (
          <Input.Number
            id="insert-unique-id"
            label="Label"
            onChange={action('onChange')}
            variant="quiet"
          />
        ),
        title: 'Default',
      },
      {
        component: (
          <Input.Number
            id="insert-unique-id"
            label="Label"
            onChange={action('onChange')}
            variant="quiet"
            noSteppers
            width="100%"
          />
        ),
        title: 'Full width',
      },
      {
        component: (
          <Input.Number
            id="insert-unique-id"
            label="Label"
            onChange={action('onChange')}
            variant="quiet"
            noSteppers
            disabled
          />
        ),
        title: 'Disabled',
      },
      {
        component: (
          <Input.Number
            id="insert-unique-id"
            label="Label"
            onChange={action('onChange')}
            variant="quiet"
            noSteppers
            error="Some error text that will wrap itself over couple of lines"
          />
        ),
        title: 'Error',
      },
      {
        component: (
          <Input.Number
            id="insert-unique-id"
            label="Label"
            onChange={action('onChange')}
            variant="quiet"
            noSteppers
            success
          />
        ),
        title: 'Success',
      },
      {
        component: (
          <Input.Number
            id="insert-unique-id"
            label="Label"
            onChange={action('onChange')}
            variant="quiet"
            noSteppers
            leftAddon={<Icon.Bolt size={4} />}
          />
        ),
        title: 'Left addon',
      },
      {
        component: (
          <Input.Number
            id="insert-unique-id"
            label="Label"
            onChange={action('onChange')}
            variant="quiet"
            noSteppers
            rightAddon="%"
          />
        ),
        title: 'Right addon',
      },
    ]}
  />
);
quietNumber.story = {
  name: 'Quiet',
};
