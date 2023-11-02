import React, { useState } from 'react';
import { actions } from '@storybook/addon-actions';
import { Box, Button, Flexbox, OldIcon, Input, Modal } from '../../..';
import { Display } from '../../../common/Display';

// TODO: A bit laggy for now, let's optimize later
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

export const DefaultStory = {
  render: () => <Input.Text label="Label" placeholder="Placeholder" />,
  name: 'Default',
};

export const WithValueControlledBehaviour = {
  render: () => <Input.Text label="Label" placeholder="Placeholder" value="Some predefined text" />,

  name: 'With value (Controlled behaviour)',
};

export const WithDefaultValueUncontrolledBehaviour = {
  render: () => (
    <Input.Text label="Label" placeholder="Placeholder" defaultValue="Some predefined text" />
  ),

  name: 'With default value (Uncontrolled behaviour)',
};

export const ErrorIfEmptyText = {
  render: () => {
    const Component = () => {
      const [value, setValue] = useState('');

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
  },

  name: 'Error if empty text',
};

export const SuccessStory = {
  render: () => <Input.Text label="Label" placeholder="Placeholder" success />,
  name: 'Success',
};

export const DisabledStory = {
  render: () => <Input.Text label="Label" placeholder="Placeholder" disabled />,
  name: 'Disabled',
};

export const DisabledAddon = {
  render: () => (
    <Input.Text
      label="Label"
      placeholder="Placeholder"
      disabled
      leftAddon={<OldIcon.Bolt size={4} />}
      rightAddon="SEK"
    />
  ),

  name: 'Disabled +addon',
};

export const WithAutoFocus = {
  render: () => <Input.Text label="Label" placeholder="Placeholder" autoFocus />,
  name: 'With auto focus',
};

export const WithAutoComplete = {
  render: () => (
    <>
      <Input.Text label="Ordinary Text" placeholder="Placeholder" autoComplete="on" />
      <Input.Text label="E-mail" placeholder="Placeholder" autoComplete="email" type="email" />
      <Input.Text label="Phone number" placeholder="Placeholder" autoComplete="tel" type="tel" />
    </>
  ),

  name: 'With auto complete',
};

export const RequiredStory = {
  render: () => (
    <Display
      title="Required"
      items={[
        {
          component: <Input.Text label="Label" placeholder="Placeholder" required />,
          title: 'Default (without star)',
        },
        {
          component: (
            <Input.Text
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
  ),

  name: 'Required',
};

export const ActionsStory = {
  render: () => (
    <>
      <p>
        Actions are a bit laggy because of the @storybook/addon-actions. Prod performance is not
        affected.
      </p>
      <Input.Text label="Label" placeholder="Placeholder" {...handlers} />
    </>
  ),

  name: 'Actions',
};

export const ExtraInfoBelow = {
  render: () => (
    <Input.Text label="Label" placeholder="Placeholder" extraInfo="Use this space wisely" />
  ),

  name: 'Extra info below',
};

export const ExtraInfoWithError = {
  render: () => {
    const Component = () => {
      const [value, setValue] = useState('');

      return (
        <Input.Text
          label="My awesome text field"
          placeholder="This is a placeholder"
          extraInfo="Use this space wisely"
          onChange={(e) => setValue(e.target.value)}
          {...(value === '' ? { error: 'Enter text' } : {})}
        />
      );
    };
    return <Component />;
  },

  name: 'Extra info with error',
};

export const EdgeCases = {
  render: () => (
    <Display
      items={[
        {
          component: (
            <Input.Text
              label="Too long label, goes into ellipsis. Consider smaller label or bigger input"
              placeholder="If placeholder goes too long though, it probably should be truncated into ellipsis, right?"
              extraInfo="This is much necessary info wow"
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
  ),

  name: 'Edge cases',
};

export const FullWidthStory = {
  render: () => (
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
              leftAddon={<OldIcon.Bolt size={4} />}
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
  ),

  name: 'Full width',
};

export const RightAddonStory = {
  render: () => <Input.Text label="Label" placeholder="Placeholder" rightAddon="SEK" />,

  name: 'Right addon',
};

export const BothAddons = {
  render: () => (
    <Input.Text
      label="Label"
      placeholder="Placeholder"
      leftAddon={<OldIcon.Bolt size={4} />}
      rightAddon="SEK"
    />
  ),

  name: 'Both addons',
};

export const HiddenLabel = {
  render: () => <Input.Text label="Label" placeholder="Placeholder" hideLabel />,
  name: 'Hidden label',
};

export const SimpleLoginForm = {
  render: () => (
    <Flexbox container direction="column" gap={4}>
      <Flexbox item container gap={4}>
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
  ),

  name: 'Simple login form',
};

export const Small = () => (
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
            leftAddon={<OldIcon.Bolt size={4} />}
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

export const Quiet = () => (
  <Display
    title={`Variant = "quiet"`}
    items={[
      {
        component: <Input.Text variant="quiet" label="Label" placeholder="Placeholder" />,
        title: 'Default',
      },
      {
        component: (
          <Input.Text variant="quiet" label="Label" placeholder="Placeholder" value="Fill State" />
        ),
        title: 'Filled',
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
          <Input.Text variant="quiet" label="Label" placeholder="Placeholder" rightAddon="%" />
        ),
        title: 'Right addon',
      },
      {
        component: (
          <Input.Text variant="quiet" label="Label" placeholder="Placeholder" leftAddon="$" />
        ),
        title: 'Left addon',
      },
      {
        component: (
          <Input.Text
            variant="quiet"
            label="Label"
            placeholder="Placeholder"
            leftAddon="$"
            rightAddon="%"
          />
        ),
        title: 'Both addon',
      },
    ]}
  />
);

export const WithLabelTooltip = {
  render: () => (
    <Input.Text label="Label" labelTooltip="Tooltip content" placeholder="Placeholder" />
  ),

  name: 'With tooltip as label addon',
};

export const WithLabelTooltipPositionTop = {
  render: () => (
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
  ),

  name: 'With tooltip (position top) as label addon',
};

export const WithMaxLength = {
  render: () => <Input.Text maxLength={3} label="has max length" placeholder="Placeholder" />,

  name: 'With maxLength',
};

export const AlternatingTypes = () => (
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

export const OnAColouredBackground = {
  render: () => (
    <Box p={5} backgroundColor={(t) => t.color.disabledBackground}>
      <Input.Text label="On a colored background" placeholder="Placeholder" />
    </Box>
  ),

  name: 'On a coloured background',
};

export const MouseEvents = {
  render: () => {
    const Component = () => {
      const [isHovered, setIsHovered] = useState(false);
      const label = isHovered ? 'Is hovered' : 'Not hovered';

      return (
        <Input.Text
          label={label}
          placeholder="Placeholder"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      );
    };
    return <Component />;
  },

  name: 'MouseEvents',
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
        <>
          <button type="button" onClick={onOpen}>
            Open modal
          </button>
          <Modal onClose={onClose} title="Dialog information" open={open}>
            <Box mb={2}>
              <Input.Text
                label="Label"
                placeholder="Placeholder"
                labelTooltipInModal
                labelTooltip="Tooltip content"
              />
            </Box>
          </Modal>
        </>
      );
    };
    return <Example />;
  },

  name: 'With label tooltip inside modal',
};
