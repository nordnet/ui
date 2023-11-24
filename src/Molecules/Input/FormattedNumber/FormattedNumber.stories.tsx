import React, { useState } from 'react';
import { action, actions } from '@storybook/addon-actions';
import { Box, OldIcon, Input, Modal } from '../../..';
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
  title: 'Molecules / Input / FormattedNumber',
  parameters: {
    component: Input.FormattedNumber,
  },
};

export const DefaultStory = () => (
  <Input.FormattedNumber id="formatted-number-id" label="Label" onChange={action('onChange')} />
);

DefaultStory.story = {
  name: 'Default',
};

export const DefaultStoryWithAutoCompleteOff = () => (
  <Input.FormattedNumber
    id="formatted-number-id"
    label="Label"
    onChange={action('onChange')}
    autoComplete="off"
  />
);

DefaultStoryWithAutoCompleteOff.story = {
  name: 'Default with Auto Complete off',
};

export const WithValueControlledBehaviour = () => {
  const Component = () => {
    const [value, setValue] = useState<number | null>(10);
    const changeHandler = (v: number | null) => {
      setValue(v);
    };

    return (
      <>
        <Input.FormattedNumber
          id="formatted-number-id"
          label="Label"
          value={value}
          onChange={changeHandler}
        />
        <button type="button" onClick={() => setValue((value ?? 0) - 1)}>
          Decrease
        </button>
        <button type="button" onClick={() => setValue((value ?? 0) + 1)}>
          Increase
        </button>
      </>
    );
  };
  return <Component />;
};

WithValueControlledBehaviour.story = {
  name: 'With value (Controlled behaviour)',
};

export const WithDefaultValueUncontrolledBehaviour = () => (
  <Input.FormattedNumber id="formatted-number-id" label="Label" defaultValue={15.2} step={0.1} />
);

WithDefaultValueUncontrolledBehaviour.story = {
  name: 'With default value (Uncontrolled behaviour)',
};

export const WithASmallerStep = () => (
  <Input.FormattedNumber id="formatted-number-id" label="Label" defaultValue={15.2} step={0.005} />
);

WithASmallerStep.story = {
  name: 'With a smaller step',
};

export const WithMaxAndMin = () => (
  <Input.FormattedNumber
    id="formatted-number-id"
    label="Label"
    defaultValue={12}
    min={10}
    max={20}
  />
);

WithMaxAndMin.story = {
  name: 'With max and min',
};

export const RequiredStory = () => (
  <Display
    title="Required"
    items={[
      {
        component: (
          <Input.FormattedNumber
            id="formatted-number-id"
            label="Label"
            defaultValue={91}
            required
          />
        ),
        title: 'Default (without star)',
      },
      {
        component: (
          <Input.FormattedNumber
            id="formatted-number-id"
            label="Label"
            defaultValue={91}
            required
            visuallyEmphasiseRequired
          />
        ),
        title: 'With star',
      },
    ]}
  />
);

RequiredStory.story = {
  name: 'Required',
};

export const DisabledStory = () => (
  <Input.FormattedNumber
    id="formatted-number-id"
    label="Label"
    defaultValue={152.25}
    step={0.25}
    disabled
  />
);

DisabledStory.story = {
  name: 'Disabled',
};

export const WithAutoFocus = () => (
  <Input.FormattedNumber
    id="formatted-number-id"
    label="Label"
    defaultValue={152.25}
    step={0.25}
    autoFocus
  />
);

WithAutoFocus.story = {
  name: 'With auto focus',
};

export const WithAllActions = () => (
  <Input.FormattedNumber id="formatted-number-id" label="Label" {...handlers} />
);

WithAllActions.story = {
  name: 'With all actions',
};

export const WithErrorIfValueIsLessThan1 = () => {
  const Component = () => {
    const defaultValue = 0;
    const [value, setValue] = useState<number | null>(defaultValue);
    const showError = value === null || value < 1;

    return (
      <Input.FormattedNumber
        id="formatted-number-id"
        label="Label"
        step={1}
        defaultValue={defaultValue}
        onChange={setValue}
        {...(showError ? { error: 'Number needs to be greater than 0' } : {})}
      />
    );
  };
  return <Component />;
};

WithErrorIfValueIsLessThan1.story = {
  name: 'With error if value is less than 1',
};

export const WithSuccess = () => (
  <Input.FormattedNumber id="formatted-number-id" label="Label" success />
);

WithSuccess.story = {
  name: 'With success',
};

export const WithExtraInfoBelow = () => (
  <Input.FormattedNumber id="formatted-number-id" label="Label" extraInfo="Use this space wisely" />
);

WithExtraInfoBelow.story = {
  name: 'With extra info below',
};

export const WithExtraInfoAndError = () => {
  const Component = () => {
    const defaultValue = 0;
    const [value, setValue] = useState(defaultValue);
    const showError = value < 1;

    return (
      <Input.FormattedNumber
        id="formatted-number-id"
        label="Label"
        defaultValue={defaultValue}
        onChange={(x) => x && setValue(x)}
        extraInfo="Use this space wisely"
        {...(showError ? { error: 'Number needs to be greater than 0' } : {})}
      />
    );
  };
  return <Component />;
};

WithExtraInfoAndError.story = {
  name: 'With extra info and error',
};

export const WithNoSteppers = () => (
  <Input.FormattedNumber id="formatted-number-id" label="Label" noSteppers />
);

WithNoSteppers.story = {
  name: 'With no steppers',
};

export const WithRightAddon = () => (
  <Input.FormattedNumber id="formatted-number-id" label="Label" rightAddon="SEK" />
);

WithRightAddon.story = {
  name: 'With right addon',
};

export const WithBothAddons = () => (
  <Input.FormattedNumber
    id="formatted-number-id"
    label="Label"
    leftAddon={<OldIcon.Bolt size={4} />}
    rightAddon="SEK"
  />
);

WithBothAddons.story = {
  name: 'With both addons',
};

export const WithHiddenLabel = () => (
  <Input.FormattedNumber id="formatted-number-id" label="Label" hideLabel />
);

WithHiddenLabel.story = {
  name: 'With hidden label',
};

export const WithSizeSmall = () => (
  <Display
    title={`Size = "s"`}
    items={[
      {
        component: <Input.FormattedNumber id="formatted-number-id" label="Label" size="s" />,
        title: 'Default',
      },
      {
        component: (
          <Input.FormattedNumber id="formatted-number-id" label="Label" size="s" noSteppers />
        ),
        title: 'No steppers',
      },
      {
        component: (
          <Input.FormattedNumber
            id="formatted-number-id"
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

WithSizeSmall.story = {
  name: 'With size small',
};

export const WithLabelTooltip = () => (
  <Input.FormattedNumber
    id="formatted-number-id"
    label="Label"
    labelTooltip="Tooltip content"
    onChange={action('onChange')}
  />
);

WithLabelTooltip.story = {
  name: 'With label tooltip',
};

export const WithLabelTooltipPositionTop = () => (
  <>
    <br />
    <br />
    <Input.FormattedNumber
      id="formatted-number-id"
      label="Label"
      labelTooltip="Tooltip content"
      labelTooltipPosition="top"
      onChange={action('onChange')}
    />
  </>
);

WithLabelTooltipPositionTop.story = {
  name: 'With label tooltip (position top)',
};

export const WithPlaceholder = () => (
  <Display
    title="Placeholders"
    items={[
      {
        title: 'Default',
        component: (
          <Input.FormattedNumber
            id="formatted-number-id"
            label="Label"
            placeholder="A placeholder"
            noSteppers
          />
        ),
      },
      {
        title: 'With right addon',
        component: (
          <Input.FormattedNumber
            id="formatted-number-id"
            label="Label"
            placeholder="A placeholder"
            rightAddon="EUR"
          />
        ),
      },
      {
        title: 'With left addon',
        component: (
          <Input.FormattedNumber
            id="formatted-number-id"
            label="Label"
            placeholder="A placeholder"
            leftAddon={<OldIcon.Bolt size={4} />}
          />
        ),
      },
      {
        title: 'With steppers (placeholder removed)',
        component: (
          <Input.FormattedNumber
            id="formatted-number-id"
            label="Label"
            placeholder="A placeholder"
          />
        ),
      },
    ]}
  />
);

WithPlaceholder.story = {
  name: 'With placeholder',
};

export const QuietNumber = () => (
  <Display
    title={`Variant = "quiet"`}
    items={[
      {
        component: (
          <Input.FormattedNumber
            id="formatted-number-id"
            label="Label"
            onChange={action('onChange')}
            variant="quiet"
            placeholder="0"
          />
        ),
        title: 'Default',
      },
      {
        component: (
          <Input.FormattedNumber
            id="formatted-number-id"
            label="Label"
            onChange={action('onChange')}
            variant="quiet"
            placeholder="0"
            value={500}
            rightAddon="SEK"
          />
        ),
        title: 'Filled',
      },
      {
        component: (
          <Input.FormattedNumber
            id="formatted-number-id"
            label="Label"
            onChange={action('onChange')}
            variant="quiet"
            noSteppers
            width="100%"
            placeholder="0"
          />
        ),
        title: 'Full width',
      },
      {
        component: (
          <Input.FormattedNumber
            id="formatted-number-id"
            label="Label"
            onChange={action('onChange')}
            variant="quiet"
            noSteppers
            disabled
            placeholder="0"
          />
        ),
        title: 'Disabled',
      },
      {
        component: (
          <Input.FormattedNumber
            id="formatted-number-id"
            label="Label"
            onChange={action('onChange')}
            variant="quiet"
            noSteppers
            error="Some error text that will wrap itself over couple of lines"
            placeholder="0"
          />
        ),
        title: 'Error',
      },
      {
        component: (
          <Input.FormattedNumber
            id="formatted-number-id"
            label="Label"
            onChange={action('onChange')}
            variant="quiet"
            noSteppers
            placeholder="0"
            success
          />
        ),
        title: 'Success',
      },
      {
        component: (
          <Input.FormattedNumber
            id="formatted-number-id"
            label="Label"
            onChange={action('onChange')}
            variant="quiet"
            noSteppers
            rightAddon="%"
          />
        ),
        title: 'Right addon',
      },
      {
        component: (
          <Input.FormattedNumber
            id="formatted-number-id"
            label="Label"
            onChange={action('onChange')}
            variant="quiet"
            noSteppers
            leftAddon={<OldIcon.Plus color={(t) => t.color.cta} size={4} />}
          />
        ),
        title: 'Left addon',
      },
      {
        component: (
          <Input.FormattedNumber
            id="formatted-number-id"
            label="Label"
            onChange={action('onChange')}
            variant="quiet"
            noSteppers
            rightAddon="%"
            leftAddon={<OldIcon.Plus color={(t) => t.color.cta} size={4} />}
          />
        ),
        title: 'Both addon',
      },
    ]}
  />
);
QuietNumber.story = {
  name: 'Quiet',
};

export const OnAColouredBackground = () => (
  <Box p={5} backgroundColor={(t) => t.color.disabledBackground}>
    <Input.FormattedNumber
      id="unique-id-for-coloured-background"
      label="On a coloured background"
    />
  </Box>
);

OnAColouredBackground.story = {
  name: 'On a coloured background',
};

export const WithLabelTooltipInsideModal = () => {
  const Example = () => {
    const [open, setOpen] = useState(true);

    const onOpen = () => {
      setOpen(true);
    };

    const onClose = () => {
      setOpen(false);
    };

    return (
      <>
        <button type="button" onClick={onOpen}>
          Open modal
        </button>
        <Modal onClose={onClose} title="Dialog information" open={open}>
          <Box mb={2}>
            <Input.FormattedNumber
              id="unique-id"
              label="Label"
              placeholder="Placeholder"
              labelTooltip="Tooltip content"
              labelTooltipInModal
            />
          </Box>
        </Modal>
      </>
    );
  };
  return <Example />;
};

WithLabelTooltipInsideModal.story = {
  name: 'With label tooltip inside modal',
};
