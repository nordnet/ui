import React, { useState } from 'react';
import { action, actions } from '@storybook/addon-actions';
import { IntlProvider } from 'react-intl';
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
  title: 'Molecules / Input / Number',
  parameters: {
    component: Input.Number,
  },
};

export const DefaultStory = {
  render: () => (
    <IntlProvider locale="en">
      <Input.Number id="insert-unique-id" label="Label" onChange={action('onChange')} />
    </IntlProvider>
  ),

  name: 'Default',
};

export const DefaultStoryWithAutoCompleteOff = {
  render: () => (
    <IntlProvider locale="en">
      <Input.Number
        id="insert-unique-id"
        label="Label"
        onChange={action('onChange')}
        autoComplete="off"
      />
    </IntlProvider>
  ),

  name: 'Default with Auto Complete off',
};

export const WithValueControlledBehaviour = {
  render: () => {
    const Component = () => {
      const [value, setValue] = useState(10);
      const changeHandler = (v: string) => {
        const newValueAsNumber = parseInt(v, 10);
        setValue(newValueAsNumber);
      };

      return (
        <IntlProvider locale="en">
          <Input.Number
            id="insert-unique-id"
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
        </IntlProvider>
      );
    };
    return <Component />;
  },

  name: 'With value (Controlled behaviour)',
};

export const WithDefaultValueUncontrolledBehaviour = {
  render: () => (
    <IntlProvider locale="en">
      <Input.Number id="insert-unique-id" label="Label" defaultValue="15.2" step="0.1" />
    </IntlProvider>
  ),

  name: 'With default value (Uncontrolled behaviour)',
};

export const WithASmallerStep = {
  render: () => (
    <IntlProvider locale="en">
      <Input.Number id="insert-unique-id" label="Label" defaultValue="15.200" step="0.005" />
    </IntlProvider>
  ),

  name: 'With a smaller step',
};

export const WithMaxAndMin = {
  render: () => (
    <IntlProvider locale="en">
      <Input.Number id="insert-unique-id" label="Label" defaultValue="12" min="10" max="20" />
    </IntlProvider>
  ),

  name: 'With max and min',
};

export const RequiredStory = {
  render: () => (
    <IntlProvider locale="en">
      <Display
        title="Required"
        items={[
          {
            component: (
              <Input.Number id="insert-unique-id" label="Label" defaultValue="91" required />
            ),
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
    </IntlProvider>
  ),

  name: 'Required',
};

export const DisabledStory = {
  render: () => (
    <IntlProvider locale="en">
      <Input.Number
        id="insert-unique-id"
        label="Label"
        defaultValue="152.25"
        step="0.25"
        disabled
      />
    </IntlProvider>
  ),

  name: 'Disabled',
};

export const WithAutoFocus = {
  render: () => (
    <IntlProvider locale="en">
      <Input.Number
        id="insert-unique-id"
        label="Label"
        defaultValue="152.25"
        step="0.25"
        autoFocus
      />
    </IntlProvider>
  ),

  name: 'With auto focus',
};

export const WithAllActions = {
  render: () => (
    <IntlProvider locale="en">
      <Input.Number id="insert-unique-id" label="Label" {...handlers} />
    </IntlProvider>
  ),

  name: 'With all actions',
};

export const WithErrorIfValueIsLessThan1 = {
  render: () => {
    const Component = () => {
      const defaultValue = '0';
      const [value, setValue] = useState(defaultValue);
      const showError = parseInt(value, 10) < 1;

      return (
        <IntlProvider locale="en">
          <Input.Number
            id="insert-unique-id"
            label="Label"
            step="1"
            defaultValue={defaultValue}
            onChange={(x) => x && setValue(x)}
            {...(showError ? { error: 'Number needs to be greater than 0' } : {})}
          />
        </IntlProvider>
      );
    };
    return <Component />;
  },

  name: 'With error if value is less than 1',
};

export const WithSuccess = {
  render: () => (
    <IntlProvider locale="en">
      <Input.Number id="insert-unique-id" label="Label" success />
    </IntlProvider>
  ),

  name: 'With success',
};

export const WithExtraInfoBelow = {
  render: () => (
    <IntlProvider locale="en">
      <Input.Number id="insert-unique-id" label="Label" extraInfo="Use this space wisely" />
    </IntlProvider>
  ),

  name: 'With extra info below',
};

export const WithExtraInfoAndError = {
  render: () => {
    const Component = () => {
      const defaultValue = '0';
      const [value, setValue] = useState(defaultValue);
      const showError = parseInt(value, 10) < 1;

      return (
        <IntlProvider locale="en">
          <Input.Number
            id="insert-unique-id"
            label="Label"
            defaultValue={defaultValue}
            onChange={(x) => x && setValue(x)}
            extraInfo="Use this space wisely"
            {...(showError ? { error: 'Number needs to be greater than 0' } : {})}
          />
        </IntlProvider>
      );
    };
    return <Component />;
  },

  name: 'With extra info and error',
};

export const WithNoSteppers = {
  render: () => (
    <IntlProvider locale="en">
      <Input.Number id="insert-unique-id" label="Label" noSteppers />
    </IntlProvider>
  ),

  name: 'With no steppers',
};

export const WithRightAddon = {
  render: () => (
    <IntlProvider locale="en">
      <Input.Number id="insert-unique-id" label="Label" rightAddon="SEK" />
    </IntlProvider>
  ),

  name: 'With right addon',
};

export const WithBothAddons = {
  render: () => (
    <IntlProvider locale="en">
      <Input.Number
        id="insert-unique-id"
        label="Label"
        leftAddon={<OldIcon.Bolt size={4} />}
        rightAddon="SEK"
      />
    </IntlProvider>
  ),

  name: 'With both addons',
};

export const WithHiddenLabel = {
  render: () => (
    <IntlProvider locale="en">
      <Input.Number id="insert-unique-id" label="Label" hideLabel />
    </IntlProvider>
  ),

  name: 'With hidden label',
};

export const WithSizeSmall = {
  render: () => (
    <IntlProvider locale="en">
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
    </IntlProvider>
  ),

  name: 'With size small',
};

export const WithLabelTooltip = {
  render: () => (
    <IntlProvider locale="en">
      <Input.Number
        id="insert-unique-id"
        label="Label"
        labelTooltip="Tooltip content"
        onChange={action('onChange')}
      />
    </IntlProvider>
  ),

  name: 'With label tooltip',
};

export const WithLabelTooltipPositionTop = {
  render: () => (
    <IntlProvider locale="en">
      <br />
      <br />
      <Input.Number
        id="insert-unique-id"
        label="Label"
        labelTooltip="Tooltip content"
        labelTooltipPosition="top"
        onChange={action('onChange')}
      />
    </IntlProvider>
  ),

  name: 'With label tooltip (position top)',
};

export const WithPlaceholder = {
  render: () => (
    <IntlProvider locale="en">
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
                leftAddon={<OldIcon.Bolt size={4} />}
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
    </IntlProvider>
  ),

  name: 'With placeholder',
};

export const QuietNumber = {
  render: () => (
    <IntlProvider locale="en">
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
                placeholder="0"
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
                placeholder="0"
                value="500"
                rightAddon="SEK"
              />
            ),
            title: 'Filled',
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
                placeholder="0"
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
                placeholder="0"
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
                placeholder="0"
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
                placeholder="0"
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
                rightAddon="%"
              />
            ),
            title: 'Right addon',
          },
          {
            component: (
              <Input.Number
                id="insert-unique-id"
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
              <Input.Number
                id="insert-unique-id"
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
    </IntlProvider>
  ),

  name: 'Quiet',
};

export const OnAColouredBackground = {
  render: () => (
    <IntlProvider locale="en">
      <Box p={5} backgroundColor={(t) => t.color.disabledBackground}>
        <Input.Number id="unique-id-for-coloured-background" label="On a coloured background" />
      </Box>
    </IntlProvider>
  ),

  name: 'On a coloured background',
};

export const WithLabelTooltipInsideModal = {
  render: () => {
    const Example = () => {
      const [open, setOpen] = useState(true);

      const onOpen = () => {
        setOpen(true);
      };

      const onClose = () => {
        setOpen(false);
      };

      return (
        <IntlProvider locale="en">
          <button type="button" onClick={onOpen}>
            Open modal
          </button>
          <Modal onClose={onClose} title="Dialog information" open={open}>
            <Box mb={2}>
              <Input.Number
                id="unique-id"
                label="Label"
                placeholder="Placeholder"
                labelTooltip="Tooltip content"
                labelTooltipInModal
              />
            </Box>
          </Modal>
        </IntlProvider>
      );
    };
    return <Example />;
  },

  name: 'With label tooltip inside modal',
};
